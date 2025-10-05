from fastapi import FastAPI
from app.core.config import settings
from app.api.routers import auth
from app.db.session import Base, engine
from app import models

app = FastAPI(title=settings.PROJECT_NAME)

app.include_router(auth.router)

Base.metadata.create_all(bind=engine)

@app.get("/")
def root():
    return {"message": "E-commerce API is running 🚀"}

