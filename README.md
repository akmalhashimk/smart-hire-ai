# 🧠 SmartHire AI – Resume Ranking Engine

> An AI-powered resume screening tool that ranks candidate resumes based on their relevance to a job description using NLP and semantic similarity.

---

## 🚀 Project Overview

SmartHire AI is a scalable, modular application that:

* Accepts **multiple resumes** and a **job description**
* Uses **TF-IDF + cosine similarity** to rank resumes
* Returns a **score out of 100** for each resume’s match
* Built with **FastAPI**, Python, and NLP libraries
* Frontend with **React + Tailwind CSS**

This project simulates a **real-world hiring engine**, ideal for HR tools, job boards, and automated applicant tracking systems.

---

## 💠 Tech Stack

| Layer               | Technology                          |
| ------------------- | ----------------------------------- |
| Backend             | Python, FastAPI                     |
| NLP Model           | TF-IDF, Scikit-learn                |
| Resume Parsing      | `pdfminer.six`, `python-docx`       |
| Frontend (optional) | React.js, Tailwind CSS              |
| Deployment          | Render / Google Cloud Run (planned) |

---

## 📂 Project Structure

```
smart-hire-ai/
├── backend/
│   ├── app/
│   │   ├── main.py              # FastAPI API endpoints
│   │   ├── services/
│   │   │   ├── resume_parser.py # Parse PDF/DOCX
│   │   │   └── ranker.py        # NLP similarity scoring
│   │   └── core/config.py       # Settings
│   ├── requirements.txt
│   └── data/
├── frontend/ (planned)
└── README.md
```

---

## 📈 Features

* ✅ Upload PDF/DOCX resumes
* ✅ Upload or paste job description
* ✅ Ranks resumes based on similarity
* ✅ Outputs score + filename
* ✅ Frontend with drag-and-drop UI
* 🖜️ LLM-based explanation of fit (future)

---

## 🧪 Sample API Usage

```bash
curl -X POST http://localhost:8000/rank/ \
  -F "resumes=@data/sample_resume1.pdf" \
  -F "job_description=@data/sample_job_description.txt"
```

Response:

```json
{
  "results": [
    {
      "filename": "sample_resume1.pdf",
      "score": 89.45
    },
    ...
  ]
}
```

---

## 🧠 NLP Approach

* Vectorizes job description and resume text using `TfidfVectorizer`
* Computes **cosine similarity** between JD and each resume
* Returns a ranked list of resumes with **match scores**

---

## 🛠 Setup Instructions

```bash
git clone https://github.com/your-username/smart-hire-ai.git
cd smart-hire-ai/backend
pip install -r requirements.txt
uvicorn app.main:app --reload
```

Visit [http://localhost:8000/docs](http://localhost:8000/docs) to try the API via Swagger UI.

---

## 📜 License

MIT License – feel free to use and contribute!
