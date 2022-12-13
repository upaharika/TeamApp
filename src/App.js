import { useState, useEffect } from "react";

import Header from "./components/Header";
import userData from "./assets/userData.json";
import "./App.css";
import NoResultsComponent from "./components/NoResults/NoResultsComponent";
import { CardContainer } from "./components/CardContainer";

const App = () => {
  const [teamDetails, setTeamDetails] = useState([]);
  const [searchedTeamDetails, setSearchedTeamDetails] = useState([]);
  const [noResult, setNoResult] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    let teamArr = [];
    userData.map(async (userData) => {
      let jsonTeamData;
      if (localStorage.getItem(userData.username)) {
        jsonTeamData = JSON.parse(localStorage.getItem(userData.username));
      } else {
        const teamData = await fetch(
          `https://api.github.com/users/${userData.username}`
        );
        jsonTeamData = await teamData.json();
        if (jsonTeamData !== null) {
          localStorage.setItem(userData.username, JSON.stringify(jsonTeamData));
        }
      }

      teamArr.push(jsonTeamData);
      setTeamDetails([...teamDetails, ...teamArr]);
    });
  }

  return (
    <div className="App">
      <Header
        setSearchedTeamDetails={setSearchedTeamDetails}
        teamDetails={teamDetails}
        setNoResult={setNoResult}
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
    </div>
  );
};

export default App;
