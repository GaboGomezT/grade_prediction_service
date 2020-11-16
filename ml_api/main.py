import pickle

import pandas as pd
from typing import Optional

from fastapi import FastAPI
from fastapi.encoders import jsonable_encoder
from pydantic import BaseModel

app = FastAPI()
model = pickle.load(open("model.p", "rb"))


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
    answer_dict = jsonable_encoder(answer)
    for key, value in answer_dict.items():
        answer_dict[key] = [value]
    # answer_dict = {k:[v] for (k,v) in jsonable_encoder(answer).items()} # Pythonic One liner version (using dict comprehensions)
    single_instance = pd.DataFrame.from_dict(answer_dict)
    prediction = model.predict(single_instance)
    return prediction[0]