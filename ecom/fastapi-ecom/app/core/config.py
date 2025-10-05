from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    PROJECT_NAME: str = "FastAPI E-Commerce"
    SQLALCHEMY_DATABASE_URI: str = "mysql+mysqlconnector://root:password@localhost:3306/ecomdb"

    class Config:
        case_sensitive = True

settings = Settings()        