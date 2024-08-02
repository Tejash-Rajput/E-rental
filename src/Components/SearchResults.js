import React from "react";

const SearchResults = ({ results }) => {
  console.log("Rendering SearchResults with: ", results); // Debugging log
  return (
    <div className="search-results">
      {results.map((result) => (
        <div key={result.id} className="result-item">
          <h3>{result.name}</h3>
          <p>{result.email}</p>
          {result.address && result.address.city && <p>{result.address.city}</p>}
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
