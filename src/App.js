import React from "react";

import "./App.css";

import Screen from "./components/Screen"
import Creator from "./components/Creator";
import HandleKeyPress from "./components/HandleKeyPress";

function App() {
  return (
    <div className="App">
      <HandleKeyPress />
     

      <Creator></Creator>
      <Screen></Screen>
      
    </div>
  );
}

export default App;
