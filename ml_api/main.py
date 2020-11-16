from typing import Optional

from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class Answer(BaseModel):
    age: int
    Medu: int
    studytime: int
    failures: int
    famrel: int
    freetime: int
    goout: int
    Walc: int
    health: int
    absences: int

@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.post("/grade_predict")
async def create_item(answer: Answer):
    return answer