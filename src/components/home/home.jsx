import React from "react";
import Introduction from "./introduction";
import AboutMe from "./about";
import Skill from "./skill";
import Contact from "./contact";
// import EmailForm from "./email";

function Home() {
  return (
    <div className="h-full">
      <Introduction id="Home"/>
      <AboutMe id="About" />
      <Skill id="Projects"/>
      <Contact id="Contact"/>
      {/* <EmailForm /> */}
    </div>
  );
}

export default Home;
