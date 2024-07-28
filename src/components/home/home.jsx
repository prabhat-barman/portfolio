import React from "react";
import Introduction from "./introduction";
import AboutMe from "./about";
import Skill from "./skill";
import Contact from "./contact";
// import EmailForm from "./email";

function Home() {
  return (
    <div className="h-full">
      <Introduction />
      <AboutMe />
      <Skill />
      <Contact />
      {/* <EmailForm /> */}
    </div>
  );
}

export default Home;
