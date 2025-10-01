import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [input, setInput] = useState("");

  return (
    <div id="searchBar">
      <input
        id="placeInput"
        placeholder="Enter place"
        value={input}
        onChange={(event) => setInput(event.target.value)}
      ></input>
      <button id="subBtn" onClick={() => onSearch(input)}>
        Submit
      </button>
    </div>
  );
};

export default SearchBar;
