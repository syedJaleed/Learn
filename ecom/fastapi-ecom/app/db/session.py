from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base

DATABASE_URL = "mysql+mysqlconnector://root:password@localhost:3306/ecomdb"

engine = create_engine(DATABASE_URL, echo=True)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)




# Dependency

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()    
    
Base = declarative_base()    