import { useState } from "react";

import { CardContainer } from "../CardContainer";
import SearchBar from "../SearchBar";
import useApi from "../../api/useApi";
import NoResultsComponent from "../NoResults/NoResultsComponent";

const SearchPage = () => {
  const { teamDetails } = useApi();
  const [searchedTeamDetails, setSearchedTeamDetails] = useState([]);
  const [noResult, setNoResult] = useState(false);
  return (
    <>
      <SearchBar
        setNoResult={setNoResult}
        setSearchedTeamDetails={setSearchedTeamDetails}
        teamDetails={teamDetails}
      />
      <div className="card-container">
        {!noResult ? (
          <CardContainer
            teamMembers={
              searchedTeamDetails.length ? searchedTeamDetails : teamDetails
            }
          />
        ) : (
          <NoResultsComponent />
        )}
      </div>
    </>
  );
};

export default SearchPage;
