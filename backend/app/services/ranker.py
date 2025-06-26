# backend/app/services/ranker.py
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

def rank_resumes(resume_data, job_description):
    texts = [r["text"] for r in resume_data]
    filenames = [r["filename"] for r in resume_data]

    corpus = [job_description] + texts
    vectorizer = TfidfVectorizer(stop_words="english")
    tfidf_matrix = vectorizer.fit_transform(corpus)

    jd_vec = tfidf_matrix[0:1]
    resume_vecs = tfidf_matrix[1:]

    scores = cosine_similarity(jd_vec, resume_vecs).flatten()
    results = sorted(
        [{"filename": filenames[i], "score": float(round(scores[i] * 100, 2))} for i in range(len(scores))],
        key=lambda x: x["score"],
        reverse=True
    )
    return results
  
