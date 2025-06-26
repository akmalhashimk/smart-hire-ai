
import React, { useState } from 'react';
import axios from 'axios';
import { FileUpload } from './components/FileUpload';
import { Results } from './components/Results';

function App() {
  const [resumes, setResumes] = useState([]);
  const [jobDescription, setJobDescription] = useState(null);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!jobDescription || resumes.length === 0) return;
    const formData = new FormData();
    formData.append("job_description", jobDescription);
    resumes.forEach((resume) => formData.append("resumes", resume));

    setLoading(true);
    try {
      const response = await axios.post("http://localhost:8000/rank/", formData);
      setResults(response.data.results);
    } catch (error) {
      console.error("Error ranking resumes:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <h1 className="text-3xl font-bold text-center mb-6">SmartHire AI</h1>
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-2xl shadow">
        <FileUpload
          resumes={resumes}
          setResumes={setResumes}
          jobDescription={jobDescription}
          setJobDescription={setJobDescription}
        />
        <button
          onClick={handleSubmit}
          className="mt-4 w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700"
        >
          {loading ? "Ranking..." : "Rank Resumes"}
        </button>
        {results.length > 0 && <Results results={results} />}
      </div>
    </div>
  );
}

export default App;
