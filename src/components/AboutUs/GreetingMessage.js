import { Component } from "react";

class GreetingMessage extends Component {
  constructor() {
    super();
    console.log("Nested Child Constructor: GreetingMessage");
  }

  componentDidMount() {
    console.log("Nested Child componentDidMount : GreetingMessage");
  }

  componentDidUpdate() {
    console.log("Nested Child componentDidUpdate : GreetingMessage");
  }

  render() {
    console.log("Nested Child render: GreetingMessage");
    return <p>Happy Coding and obviously with a Cup of Coffee. ☕</p>;
  }
}

export default GreetingMessage;
