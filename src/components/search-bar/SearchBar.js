import React, { useState } from "react";
import "./SearchBar.css";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";

function SearchBar({ placeholder, data, address }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.current.filter((value) => {
      return value.value.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  const beginSearch = () => {
    var element = document.getElementById("mainPage");
    address.current = "mainPage";
    element.scrollIntoView({
      behavior: "smooth"
    });
  };

  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
        <div className="searchIcon">
          {filteredData.length === 0 ? (
            <SearchIcon onClick={beginSearch} />
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}
        </div>
      </div>
      {filteredData.length === 0 && wordEntered!=="" && (
        <div className="dataResult">
          <div className="dataItem">
            <p>No results Found.</p>
          </div>
        </div>
      )}
      {filteredData.length !== 0 && (
        <div className="dataResult">
          {filteredData.map((value, key) => {
            return (
              <div className="dataItem" href={value.link} key={key}>
                <p>{value.value}</p><h6>{value.category}</h6>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
