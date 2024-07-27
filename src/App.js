import React from "react";
import "./index.css";
import Nav from "./components/nav/nav";
import Home from "./components/home/home";
import Portfolio from "./components/portfolio/portfolio";

function App() {
  return (
    <div className="bg-[#292F36] h-full">
      <Nav />
      <Home />
      <Portfolio />
    </div>
  );
}

export default App;
