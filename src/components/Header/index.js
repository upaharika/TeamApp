import TeamLogo from "../../assets/logo-web-pirates.png";
import SearchBar from "../SearchBar";
import "./style.css";

const Header = ({ setSearchedTeamDetails, teamDetails, setNoResult }) => {
  return (
    <div className="header-container">
      <div className="header-logo">
        <div className="team-logo">
          <img src={TeamLogo} />
        </div>
        <span className="team-name">Web Pirates</span>
      </div>
      <SearchBar
        setNoResult={setNoResult}
        setSearchedTeamDetails={setSearchedTeamDetails}
        teamDetails={teamDetails}
      />
    </div>
  );
};

export default Header;
