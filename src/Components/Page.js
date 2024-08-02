import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import HomePage from "./HomePage";
import SearchResults from "./SearchResults";
import searchResultsData from "./SearchResults.json"; // Example data

const Page = () => {
  const [page, setPage] = useState("");
  const [results, setResults] = useState(searchResultsData);

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <div className="flex gap-3">
      <div className="h-full w-[20%]">
        <Sidebar onChangePage={handlePageChange} />
      </div>
      <div className="flex flex-col w-[80%] gap-0">
        <div className="h-[3%]">
          <Navbar setResults={setResults} />
        </div>
        <div className="h-[93%] border-slate-950">
          <HomePage page={page} />
          <SearchResults results={results} />
        </div>
      </div>
    </div>
  );
};

export default Page;
