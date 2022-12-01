import "./App.css";
import CardComponent from "./components/Card";
import Header from "./components/Header";
import { teamDetails } from "../src/assests/teamDetails";

const CardContainer = () => {
  return teamDetails.map((member) => {
    return <CardComponent member={member} key={member.id} />;
  });
};

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="card-container">
        <CardContainer />
      </div>
    </div>
  );
};

export default App;
