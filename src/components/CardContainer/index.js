import { Link } from "react-router-dom";
import CardComponent from "../Card";

export const CardContainer = ({ teamMembers }) => {
  return teamMembers.map((member) => (
    <Link to={`/member/${member.login}`} key={member.id}>
      <CardComponent member={member} key={member.id} />
    </Link>
  ));
};
