from pydantic import BaseModel, EmailStr, constr

class RoleOut(BaseModel):
    id: int
    name: str

    class Config:
        from_attributes = True

class UserCreate(BaseModel):
    name: str
    email: EmailStr
    password: constr(min_length=8, max_length=72)
    role_id: int | None = None   # optional, defaults to customer if not provided

class UserOut(BaseModel):
    id: int
    name: str
    email: EmailStr
    is_active: bool
    role: RoleOut

    class Config:
        from_attributes = True