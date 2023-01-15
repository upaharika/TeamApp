import { useState } from "react";

import { CardContainer } from "./components/CardContainer";
import Header from "./components/Header";
import NoResultsComponent from "./components/NoResults/NoResultsComponent";
import "./App.css";
import { Outlet } from "react-router-dom";

const App = () => {

  return (
    <div className="App">
      <Header/>
      <Outlet/>
    </div>
  );
};

export default App;
