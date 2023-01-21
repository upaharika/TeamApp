import { useContext } from "react";
import teamObj from "../../assets/userData.json";
import ThemeContext from "../../context/ThemeContext";
import "./style.css";

const CardComponent = ({
  member: { login, avatar_url, company, followers, name, location, city },
}) => {
  const {theme} = useContext(ThemeContext);
  return (
    <div className="card">
      <img className="member-img" src={avatar_url} alt=""></img>
      <div className={theme === "dark" ? "dark-card-content" : "card-content"}>
        <h2>
          <b>{name ? name : login}</b>
        </h2>
        <p>Organisation: {company}</p>
        <p>Location: {location ? location : city}</p>
        <p>Followers: {followers}</p>
      </div>
    </div>
  );
};

export default CardComponent;
