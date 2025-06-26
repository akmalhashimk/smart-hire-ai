
import React from 'react';

export const FileUpload = ({ resumes, setResumes, jobDescription, setJobDescription }) => {
  return (
    <div className="space-y-4">
      <div>
        <label className="font-semibold">Upload Resumes (PDF/DOCX)</label>
        <input
          type="file"
          multiple
          accept=".pdf,.doc,.docx"
          onChange={(e) => setResumes(Array.from(e.target.files))}
          className="w-full border rounded p-2 mt-1"
        />
      </div>
      <div>
        <label className="font-semibold">Upload Job Description (TXT)</label>
        <input
          type="file"
          accept=".txt"
          onChange={(e) => setJobDescription(e.target.files[0])}
          className="w-full border rounded p-2 mt-1"
        />
      </div>
    </div>
  );
};
