import React from "react";
import { Outlet } from "react-router-dom";

import ThemeContext from "../../context/ThemeContext";
import "./style.css";

class AboutUs extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent Construtor : AboutUs");
  }

  componentDidMount() {
    console.log("Parent componentDidMount : AboutUs");
  }

  // Parent componentDidUpdate won't be called as react knows where the update has made i.e. in child component
  // so only child's componentDidUpdate will be called it is due to virtual DOM
  componentDidUpdate() {
    console.log("Parent componentDidUpdate : AboutUsContent");
  }

  render() {
    const { theme } = this.context;
    console.log("Parent render : AboutUs");
    return (
      <div
        className="aboutus-container"
        theme-change={theme === "light" ? "light" : "dark"}
      >
        <Outlet />
      </div>
    );
  }
}

AboutUs.contextType = ThemeContext;
export default AboutUs;
