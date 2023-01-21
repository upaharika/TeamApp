import React from "react";

import GreetingMessage from "./GreetingMessage";

class AboutUsContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mentor: "",
    };
    console.log("Child Construtor : AboutUsContent");
  }

  async componentDidMount() {
    console.log("Child componentDidMount : AboutUsContent");
    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();
    this.setState({ mentor: json.name });
  }

  // Nested child componentDidUpdate will also be called as it is in render mentod of it's parent component
  componentDidUpdate() {
    console.log("Child componentDidUpdate : AboutUsContent");
  }

  render() {
    console.log("Child render : AboutUsContent");
    return (
      <div
        className="aboutus">
        <p>
          <b>Hello Visitor! 👋</b>
        </p>
        <p>We're 13 {this.props.teamName} from Namaste React Bootcamp.</p>
        <p>
          We're here to make us a better react developer by learning from the
          best mentor <br />
          <b>{this.state.mentor}.</b> 🥷
        </p>
        <GreetingMessage />
      </div>
    );
  }
}

export default AboutUsContent;
