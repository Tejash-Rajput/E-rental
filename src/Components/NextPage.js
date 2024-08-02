import React from "react";
import { useLocation } from "react-router-dom";

const NextPage = () => {
  const location = useLocation();
  const { searchResults } = location.state;

  return (
    <div>
      <h1>This is the Next Page</h1>
      <h2>Search Results:</h2>
      <ul>
        {searchResults.map((result) => (
          <li key={result.id}>
            <h3>{result.name}</h3>
            <p>{result.description}</p>
            <p>{result.price}</p>
            {/* Add more fields as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NextPage;
