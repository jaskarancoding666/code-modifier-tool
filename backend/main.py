# backend/main.py
from fastapi import FastAPI
from pydantic import BaseModel
from typing import Optional

app = FastAPI()
from fastapi.middleware.cors import CORSMiddleware

# Allow frontend (React) to talk to backend (FastAPI)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3001"],  # React dev server
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Input format
class CodeChangeRequest(BaseModel):
    code: str
    prompt: str

# Output format
class CodeChangeResponse(BaseModel):
    updated_code: str
    explanation: str

@app.post("/modify-code", response_model=CodeChangeResponse)
def modify_code(request: CodeChangeRequest):
    # Dummy example (replace with OpenAI call later)
    updated_code = request.code.replace("print", "logging.info")
    explanation = "Replaced print statements with logging.info for better logging practice."
    return {"updated_code": updated_code, "explanation": explanation}

@app.get("/")
def root():
    return {"message": "Backend is running. Use /modify-code with POST."}
