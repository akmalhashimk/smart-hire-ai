# backend/app/main.py
from fastapi import FastAPI, UploadFile, File, Form
from app.services.resume_parser import extract_text_from_file
from app.services.ranker import rank_resumes
from typing import List

app = FastAPI(title="SmartHire AI - Resume Ranker")

@app.post("/rank/")
async def rank_resumes_api(
    resumes: List[UploadFile] = File(...),
    job_description: UploadFile = File(...)
):
    jd_text = await job_description.read()
    jd_text = jd_text.decode("utf-8")

    resume_texts = []
    for resume in resumes:
        text = await resume.read()
        extracted = extract_text_from_file(text, resume.filename)
        resume_texts.append({"filename": resume.filename, "text": extracted})

    results = rank_resumes(resume_texts, jd_text)
    return {"results": results}
  
