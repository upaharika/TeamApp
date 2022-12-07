import TeamLogo from "../../assests/logo-web-pirates.png";
import SearchBar from "../SearchBar";
import "./style.css";

const Header = ({ setSearchedTeamDetails }) => {
  return (
    <div className="header-container">
      <div className="header-logo">
        <div className="team-logo">
          <img src={TeamLogo} />
        </div>
        <span className="team-name">Web Pirates</span>
      </div>
      <SearchBar setSearchedTeamDetails={setSearchedTeamDetails} />
    </div>
  );
};

export default Header;
