import React from "react";
import mouse from "../../assets/mouse.svg";
import photo from "../../assets/photo.svg";
function AboutMe() {
  return (
    <div className="">
      <div className="tp w-full flex items-center justify-around">
        <img src={mouse} alt="mouse" />
      </div>
      <div className="btm m-10 ml-12 p-8 flex justify-between">
        <div className="left w-3/5 flex flex-col items-center">
          <div className="atm border-4  border-[#97f9eb] rounded-tl-3xl rounded-br-3xl w-52 h-20 font-semibold text-3xl flex items-center justify-center text-center text-white p-2">
            About Me
          </div>
          <div className="box font-[IBM Plex Mono] text-white  text-lg mt-10">
            <span className="text-[#12f7d6] text-[32px] font-medium font-['IBM Plex Mono'] capitalize leading-[42px]">
              Hello! <br />
            </span>
            Hello! My name is Prabhat and I specialize in web development that
            utilizes HTML, CSS, JS, and REACT etc. I am a highly motivated
            individual and eternal optimist dedicated to writing clear, concise,
            robust code that works. Striving to never stop learning and
            improving. When I'm not coding, I am writing blogs, reading, or
            picking up some new hands-on art project like photography. I like to
            have my perspective and belief systems challenged so that I see the
            world through new eyes.
          </div>
        </div>
        <div className="rgt ">
          <img src={photo} alt="" srcset="" />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
