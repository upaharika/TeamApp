import { useState } from "react";
import { teamDetails } from "../../assests/teamDetails.js";
import "./style.css";

const onSearchTeamDetails = (searchText, teamDetails) => {
  return teamDetails.filter(
    (member) =>
      member.name.toLowerCase().includes(searchText) ||
      member.designation.toLowerCase().includes(searchText)
  );
};

const SearchBar = ({ setSearchedTeamDetails }) => {
  const [searchText, setSearchText] = useState("");

  const onChange = (e) => {
    setSearchText(e.target.value);
  };

  const onInputSubmit = (e) => {
    e.preventDefault();
    const searchedTeamDetails = onSearchTeamDetails(searchText, teamDetails);
    setSearchedTeamDetails(searchedTeamDetails);
  };
  return (
    <div className="search-bar">
      <form onSubmit={onInputSubmit}>
        <input
          id="restaurant"
          placeholder="search restaurant"
          value={searchText}
          type="text"
          onChange={onChange}
          autoFocus
        />
      </form>
    </div>
  );
};

export default SearchBar;
