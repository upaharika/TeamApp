import { useEffect, useState, useRef } from "react";

import Dropdown from "../Dropdown";
import stateObj from "../../assets/state-city.json";
import { useCities } from "../../hooks/useCities";
import "./style.css";

const onSearchTeamDetails = (searchText, teamDetails, stateName, cityName) => {
  if (cityName || stateName) {
    return (teamDetails || []).filter(
      (member) =>
        member.state?.toLowerCase().includes(stateName.toLowerCase()) &&
        member.city?.toLowerCase().includes(cityName.toLowerCase())
    );
  }
  return (teamDetails || []).filter(
    (member) =>
      member.name?.toLowerCase().includes(searchText.toLowerCase()) ||
      member.login?.toLowerCase().includes(searchText.toLowerCase()) ||
      member.company?.toLowerCase().includes(searchText.toLowerCase())
  );
};

const SearchBar = ({ setSearchedTeamDetails, teamDetails, setNoResult }) => {
  const [searchText, setSearchText] = useState("");
  const [stateName, setStateName] = useState("");
  const [cityName, setCityName] = useState("");

  const cityList = useCities(stateName);

  const isFirstRender = useRef(true);
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    handleSearchedDetails();
  }, [stateName, cityName]);

  const handleOnChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearchedDetails = () => {
    const searchedMember = onSearchTeamDetails(
      searchText,
      teamDetails,
      stateName,
      cityName
    );
    if (!searchedMember.length) {
      setNoResult(true);
    } else {
      setNoResult(false);
      setSearchedTeamDetails(searchedMember);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearchedDetails();
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
        <select
          value={stateName}
          onChange={(e) => {
            setStateName(e.target.value);
            setCityName("");
          }}
        >
          <option key={"State"} value={""}>
            select state
          </option>
          {Object.keys(stateObj).map((state) => (
            <Dropdown value={state} key={state} />
          ))}
        </select>
        <select value={cityName} onChange={(e) => setCityName(e.target.value)}>
          <option key={"City"} value={""}>
            select city
          </option>
          {cityList?.map((city) => (
            <Dropdown key={city} value={city} />
          ))}
        </select>
      </form>
    </div>
  );
};

export default SearchBar;
