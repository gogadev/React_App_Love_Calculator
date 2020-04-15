import React from "react";

import Navbar from "./components/navbar/Navbar";
import LoveCalculator from "./components/love-calculator/LoveCalculator";

import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <LoveCalculator />
    </React.Fragment>
  );
}

export default App;
