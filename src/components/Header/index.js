import TeamLogo from "../../assests/logo-web-pirates.png";
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
    </div>
  );
};

export default Header;
