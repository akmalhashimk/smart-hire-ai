# backend/app/services/resume_parser.py
import io
from pdfminer.high_level import extract_text as extract_pdf
import docx

def extract_text_from_file(file_bytes: bytes, filename: str) -> str:
    if filename.endswith(".pdf"):
        with io.BytesIO(file_bytes) as pdf_file:
            return extract_pdf(pdf_file)
    elif filename.endswith(".docx"):
        doc = docx.Document(io.BytesIO(file_bytes))
        return "\n".join(p.text for p in doc.paragraphs)
    else:
        return file_bytes.decode("utf-8", errors="ignore")
      
