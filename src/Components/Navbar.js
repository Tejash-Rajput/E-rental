import React, { useState } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ setResults }) => {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((user) => {
          return value && user && user.name && user.name.toLowerCase().includes(value.toLowerCase());
        });
        console.log("Fetched Results: ", results); // Debugging log
        setResults(results);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <>
      <link
        href="https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.css"
        rel="stylesheet"
      />

      <div className="fixed top-0 right-0 z-[5] p-8 h-[15%] bg-white border-b-2 border-black w-[80%] overflow-hidden flex gap-4">
        <div className="input-wrapper">
          <FontAwesomeIcon icon={faSearch} id="search-icon" />
          <input
            placeholder="Type to search..."
            value={input}
            onChange={(e) => handleChange(e.target.value)}
          />
        </div>
        <div className="rgt w-[15%] bg-en-500 rounded-full text-4xl flex gap-3">
          <button>
            <i className="ri-settings-5-line"></i>
          </button>
          <button>
            <i className="ri-notification-4-line"></i>
          </button>
          <button>
            <img
              className="w-9 h-9 rounded-full object-cover bg-black"
              src="https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
              alt="Profile"
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
