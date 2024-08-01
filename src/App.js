import React from "react";
import "./index.css";
import'./App.css';
import Nav from "./components/nav/nav";
import Home from "./components/home/home";
import Portfolio from "./components/portfolio/portfolio";

function App() {
  const handlescrollToSection=(sectionId)=>{
   document.getElementById(sectionId).scrollIntoView({behavior:'smooth'})
  }
  return (
    <div className="bg-[#292F36] h-full">
      <Nav onLinkClick={handlescrollToSection}/>
       <Home />
      {/* <Portfolio /> */}
    </div>
  );
}

export default App;
