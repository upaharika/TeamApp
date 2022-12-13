import { useState } from "react";
import "./style.css";

const onSearchTeamDetails = (searchText, teamDetails) => {
  const arr = teamDetails;
  return arr.filter(
    (member) =>
      member?.login?.toLowerCase().includes(searchText.toLowerCase()) ||
      member?.company?.toLowerCase().includes(searchText.toLowerCase())
  );
};

const SearchBar = ({ setSearchedTeamDetails, teamDetails, setNoResult }) => {
  const [searchText, setSearchText] = useState("");

  const handleOnChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchedMember = onSearchTeamDetails(searchText, teamDetails);
    if (!searchedMember.length) {
      setNoResult(true);
    } else {
      setNoResult(false);
      setSearchedTeamDetails(searchedMember);
    }
  };
  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit}>
        <input
          id="restaurant"
          placeholder="search member..."
          value={searchText}
          type="text"
          onChange={handleOnChange}
          autoFocus
        />
      </form>
    </div>
  );
};

export default SearchBar;
