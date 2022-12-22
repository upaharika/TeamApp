import { useParams } from "react-router-dom";

import useApi from "../../api/useApi";
import "./style.css";

const MemberPage = () => {
  let username = useParams();
  const { teamDetails } = useApi();
  if (!username) return;
  const member = teamDetails.filter((teamMember) => {
    return teamMember?.login === username?.username;
  });
  if (!member) return;
  return (
    <div>
      <div>
        <img
          className="member-icon"
          src={member[0]?.avatar_url}
          alt={member[0]?.name}
        />
        <div className="member-info">
          <h2>{member[0]?.name ? member[0]?.name : member[0]?.login}</h2>
          <h4>{member[0]?.bio}</h4>
          <h4>{member[0]?.company}</h4>
          <h4>
            followers: {member[0]?.followers} | following:
            {member[0]?.following}
          </h4>
        </div>
      </div>
      <div className="stats-container">
        <img
          src={`https://github-readme-stats.vercel.app/api?username=${member[0]?.login}&show_icons=true&theme=dark&locale=en&count_private=true&border_radius=15&include_all_commits=true`}
          alt={`GitHub Stats: ${member[0]?.login}`}
        />
        <img
          src={`https://github-readme-streak-stats.herokuapp.com/?user=${member[0]?.login}&theme=dark&border_radius=15`}
          alt={`GitHub Streak: ${member[0]?.login}`}
        />
      </div>
    </div>
  );
};

export default MemberPage;
