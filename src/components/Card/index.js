import "./style.css";

const CardComponent = ({
  member: { login, avatar_url, company, followers, name },
}) => {
  return (
    <div className="card">
      <img className="member-img" src={avatar_url} alt=""></img>
      <div className="card-content">
        <h2>
          <b>{name ? name : login}</b>
        </h2>
        <p>Organisation: {company}</p>
        <p>Followers: {followers}</p>
      </div>
    </div>
  );
};

export default CardComponent;
