import React from 'react';

export const Results = ({ results }) => {
  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-2">Ranking Results</h2>
      <ul className="space-y-2">
        {results.map((r, idx) => (
          <li
            key={idx}
            className="p-3 rounded bg-green-100 border-l-4 border-green-500"
          >
            <strong>{r.filename}</strong>: {r.score} / 100
          </li>
        ))}
      </ul>
    </div>
  );
};

// smart-hire-ai/frontend/tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
