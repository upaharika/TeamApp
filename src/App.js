import { useState } from "react";
import { teamDetails } from "../src/assests/teamDetails";
import CardComponent from "./components/Card";
import Header from "./components/Header";
import "./App.css";

const CardContainer = ({ searchedTeamDetails }) => {
  return searchedTeamDetails.map((member) => {
    return <CardComponent member={member} key={member.id} />;
  });
};

const App = () => {
  const [searchedTeamDetails, setSearchedTeamDetails] = useState(teamDetails);
  return (
    <div className="App">
      <Header setSearchedTeamDetails={setSearchedTeamDetails} />
      <div className="card-container">
        <CardContainer searchedTeamDetails={searchedTeamDetails} />
      </div>
    </div>
  );
};

export default App;
