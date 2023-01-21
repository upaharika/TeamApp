import { useEffect, useState } from "react";

import stateObj from "../assets/state-city.json";

export const useCities = (state) => {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    function fetchData() {
      const json = stateObj[state];
      setCities(json);
    }
    fetchData();
  }, [state]);

  return cities;
};
