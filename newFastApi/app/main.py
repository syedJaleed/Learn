from fastapi import FastAPI
import psycopg2
from psycopg2.extras import RealDictCursor
import time
from . import models
from .database import engine
from .routers import post, user, auth
from fastapi.middleware.cors import CORSMiddleware


models.Base.metadata.create_all(bind=engine)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:4200"],
    allow_methods=["*"],
    allow_headers=["*"],
)

while True:

    try:
        conn = psycopg2.connect(host='localhost', port=5000, database='fastapi', user='postgres',
                                password='password', cursor_factory=RealDictCursor)
        cursor = conn.cursor()
        print('Database connection was successful')
        break
    except Exception as error:
        print("Connection falied")
        print(error)
        time.sleep(3)

app.include_router(post.router)
app.include_router(user.router)
app.include_router(auth.router)
        
@app.get("/")
def root():
    return {"message": "welcome to my api"}


# @app.get("/sqlalchemy")
# def test_posts(db: Session = Depends(get_db)):
#     posts = db.query(models.Post).all()
#     return {"data": posts}


# usersssssssssssssssssss


