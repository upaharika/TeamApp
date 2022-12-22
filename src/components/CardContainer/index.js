import CardComponent from "../Card";

export const CardContainer = ({ teamMembers, setNoResult }) =>
  teamMembers.map((member) => (
    <CardComponent member={member} key={member.id} />
  ));
