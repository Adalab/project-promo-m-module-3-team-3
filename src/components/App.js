import React from "react";
import "../styles/App.scss";
import Card from "./Card/Card";
import Landing from "./Landing/Landing";
import Link from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Landing>
        {/* <Card exact path="/" component={App} />
      </Landing>
      <Link to="./Card/Card"></Link> */}
    </div>
  );
}

export default App;
