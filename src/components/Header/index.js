import { useContext } from "react";
import { Link } from "react-router-dom";

import TeamLogo from "../../assets/logo-web-pirates.png";
import dark from "../../assets/dark.svg";
import light from "../../assets/sun.png";
import ThemeContext from "../../context/ThemeContext";
import "./style.css";

const Header = () => {

  const {theme, updateTheme} = useContext(ThemeContext);
  
  return (
    <div
      className="header-container"
      theme-change={theme === "light" ? "light" : "dark"}
    >
      <div className="header-logo">
        <div className="team-logo">
          <img alt="logo" src={TeamLogo} />
        </div>
        <Link
          to={"/"}
          className={theme === "dark" ? "dark-team-name" : "team-name"}
        >
          Web Pirates
        </Link>
      </div>
      <div className="header-links">
        <Link
          className={theme === "dark" ? "dark-theme-links" : "search"}
          to={`/search-page`}
        >
          Search
        </Link>
        <Link
          className={theme === "dark" ? "dark-theme-links" : "about-us"}
          to={`/about-us`}
        >
          AboutUs
        </Link>
        <button
          className="theme-button"
          onClick={() => updateTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? (
            <img className="theme-image" alt="light" src={light} />
          ) : (
            <img className="theme-image" alt="dark" src={dark} />
          )}
        </button>
      </div>
    </div>
  );
};

export default Header;
