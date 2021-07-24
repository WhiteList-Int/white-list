import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";

function FilterBar({
  placeholder, 
  onchange,
  rawData, 
  data, 
  address 
}) {

  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = rawData.filter((value) => {
      return value.value.toLowerCase().includes(searchWord.toLowerCase())||value.name.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
      data.current=rawData;
      onchange();
    } else {
      setFilteredData(newFilter);
      data.current = newFilter;
      onchange();
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    data.current = rawData;
    onchange();
    setWordEntered("");
  };

  function handleEnter(event) {
    if (event.key === 'Enter') {
        beginSearch();
        onchange();
    }
  }

  const beginSearch = () => {
    var element = document.getElementById("mainPage");
    address.current = "mainPage";
    element.scrollIntoView({
      behavior: "smooth"
    });
  };

  return (
    <div className="search">
      <div className="search-inputs">
        <input
          type="text"
          className="search-input"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
          onKeyDown = {handleEnter}
        />
        <div className="search-icon">
          {filteredData.length === 0 ? (
            <SearchIcon id="searchBtn" onClick={beginSearch} />
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}
        </div>
      </div>
      {filteredData.length === 0 && wordEntered!=="" && (
        <div className="search-data-result">
          <div className="search-data-item">
            <p>No results Found.</p>
          </div>
        </div>
      )}
      {filteredData.length !== 0 && (
        <div className="search-data-result">
          {filteredData.map((value, key) => {
            return (
              <div className="search-data-item" href={value.link} key={key}>
                <div><p>{value.name} </p></div>
                <div><h6>@{value.value}</h6></div>
                <div><h6>{value.categoryName}</h6></div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default FilterBar;
