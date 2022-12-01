import "./style.css";

const CardComponent = ({ member }) => {
  return (
    <div className="card">
      <img className="member-img" src={member.img}></img>
      <div className="card-content">
        <h1>
          <b>{member.name}</b>
        </h1>
        <p className="title">
          <b>{member.designation}</b>
        </p>
        <p>{member.organization}</p>
        <p>{member.location}</p>
      </div>
    </div>
  );
};

export default CardComponent;
