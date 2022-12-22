import { Link } from "react-router-dom";
import TeamLogo from "../../assets/logo-web-pirates.png";
import SearchBar from "../SearchBar";
import "./style.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-logo">
        <div className="team-logo">
          <img src={TeamLogo} />
        </div>
        <span className="team-name">Web Pirates</span>
      </div>
      <div className="header-links">
        <Link className="search" to={`/search-page`}>
          Search
        </Link>
        <Link className="about-us" to={`/about-us`}>
          AboutUs
        </Link>
      </div>
    </div>
  );
};

export default Header;
