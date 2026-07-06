from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class TestPayload(BaseModel):
    message: str

@app.get('/test')
def test_get():
    return {"message": "Backend is running"}

@app.post('/test')
def test_post(payload: TestPayload):
    return payload
