import React from "react";
import Timeline from "../src/components/Timeline";
import AppHeader from "../src/components/AppHeader"
import tweets from "./data/tweets.json";
import userData from "./data/user.json";





const App = () => {


  return (

    <div className="container">
      <AppHeader user={userData}></AppHeader>

      <Timeline tweets={tweets}></Timeline>
    </div>
  );
};


export default App;
