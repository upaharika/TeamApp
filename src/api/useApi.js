import { useEffect, useState } from "react";
import userData from "../assets/userData.json";

function useApi() {
  const [teamDetails, setTeamDetails] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const teamArr = [];
    userData.map(async (userData) => {
      let jsonTeamData;
      if (localStorage.getItem(userData.username)) {
        jsonTeamData = JSON.parse(localStorage.getItem(userData.username));
      } else {
        const teamData = await fetch(
          `https://api.github.com/users/${userData.username}`
        );
        jsonTeamData = await teamData.json();
        if (jsonTeamData !== null) {
          localStorage.setItem(userData.username, JSON.stringify(jsonTeamData));
        }
      }
      jsonTeamData["state"] = userData.state;
      jsonTeamData["city"] = userData.city;
      teamArr.push(jsonTeamData);
    });
    setTeamDetails([...teamDetails, ...teamArr]);
  };
  return { teamDetails };
}

export default useApi;
