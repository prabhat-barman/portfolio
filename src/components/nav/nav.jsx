import React from "react";
import { IoMdMenu } from "react-icons/io";
import { CgInstagram } from "react-icons/cg";
import { AiOutlineDiscord } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";

function Nav({onLinkClick}) {
  const[menuOpen,setmenuOpen]=React.useState(false);
  const menuData = {
    menuItems: [{ name: "Home" }, { name: "Projects" },{name:"About"} ,{ name: "Contact" }],
  };
  const mediaData = {
    mediaLinks: [
      {
        name: "Instagram",
        url: "https://www.instagram.com/__prabhat_2598_/",
        iconClass: "IconInstagram",
        icon:<CgInstagram className="text-base text-[#12F7D6]" />
      },
      {
        name: "Discord",
        url: "https://discord.com/",
        iconClass: "IconDiscord",
        icon:<AiOutlineDiscord className="text-base text-[#12F7D6]" />
      },
      {
        name: "Github",
        url: "https://github.com/prabhat-barman",
        iconClass: "IconGithub",
        icon:<FaGithub className="text-base text-[#12F7D6]" />
      },
    ],
  };
 
  const toggleMenu=()=>{
    setmenuOpen(!menuOpen);
  }

  return (
    <div className="navbar  flex items-center justify-around lg:p-5 md:p-5 pl-3 pr-3 pt-5 pb-5">
      <div className="left">
        <div className="Logo h-[42px] justify-start items-center gap-2 inline-flex">
          <div className="C text-[#12f7d6] lg:text-[32px] md:text-[28px] sm:text-[22px] text-[18px] font-medium font-['IBM Plex Mono'] capitalize">{`<P />`}</div>
          <div className=" text-white lg:text-[32px] md:text-[28px] sm:text-[22px] text-[18px] font-medium font-['IBM Plex Mono'] capitalize leading-[42px]">
            Prabhat Barman
          </div>
        </div>
      </div>
      <div className="right lg:block md:block sm:block xsm:block hidden">
        <div className="NavBar h-8 justify-start items-center lg:gap-16 md:gap-5 inline-flex">
          <div className="menu justify-start items-start lg:gap-7 md:gap-4 gap-2  flex">
            {menuData.menuItems.map((item, index) => (
              <div
                key={item?.id}
                onClick={()=>onLinkClick(item.name)}
                className="menu-item text-white lg:text-2xl md:text-xl sm:text-lg text-base font-normal font-['IBM Plex Mono'] capitalize leading-loose hover:cursor-pointer hover:text-[#12F7D6] hover:transition duration-300"
              >
                {item.name}
              </div>
            ))}
          </div>
          <div className="Right justify-start items-center lg:gap-16 md:gap-5 flex-row lg:block md:block sm:block xsm:hidden hidden">
            <div className="media justify-start items-start lg:gap-7 md:gap-3 flex">
              {mediaData.mediaLinks.map((link) => (
                <div
                  key={link.name}
                  className={`${link.name.toLowerCase()} justify-start items-center gap-2 flex`}
                >
                  <div
                    className={`${link.iconClass} lg:w-5 md:w-5 w-3 h-5 justify-center items-center flex`}
                  >
                    <div
                      className={`${link.iconClass} lg:w-5 md:w-5 w-3 p-[0.83px] justify-center items-center inline-flex`}
                    />
                  </div>
                  <div
                    className={`${link.name.toLowerCase()} text-white text-base font-normal font-['IBM Plex Mono'] capitalize leading-tight`}
                  >
                    <a className="text-lg " href={link.url}>{link.icon}</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="text-white text-xl lg:hidden md:hidden sm:hidden xsm:hidden block">
      <IoMdMenu className=" cursor-pointer" onClick={toggleMenu} />
      <div
        className={`absolute top-[60px] right-4 mt-2 w-auto bg-[#292F36] border-solid border-2 border-white flex-col items-center px-4 py-2 rounded-lg ${
          menuOpen ? "flex" : "hidden"
        } md:hidden`}
      >
        <a onClick={()=>onLinkClick("Home")} className="no-underline text-[1.1rem] tracking-[0.8px] hover:cursor-pointer hover:text-[#12F7D6] hover:transition duration-300">
          Home
        </a>
        <a onClick={()=>onLinkClick("Projects")} className="no-underline text-[1.1rem] tracking-[0.8px] hover:cursor-pointer hover:text-[#12F7D6] hover:transition duration-300">
         Projects
        </a>
        <a onClick={()=>onLinkClick("About")} className="no-underline text-[1.1rem] tracking-[0.8px] hover:cursor-pointer hover:text-[#12F7D6] hover:transition duration-300">
         About
        </a>
        <a onClick={()=>onLinkClick("Contact")} className="no-underline text-[1.1rem] tracking-[0.8px] hover:cursor-pointer hover:text-[#12F7D6] hover:transition duration-300">
         Contact
        </a>
        <div className="flex w-full mt-2">
            {mediaData.mediaLinks.map((link) => (
              <div
                key={link.name}
                className={`${link.name.toLowerCase()} w-full justify-center items-center gap-2 flex`}
              >
                <div
                  className={`${link.iconClass}  h-5 w-full justify-center items-center flex`}
                >
                  <div
                    className={`${link.iconClass} w-full p-[0.83px] justify-center items-center inline-flex`}
                  />
                </div>
                <div
                  className={`${link.name.toLowerCase()} text-white text-base font-normal font-['IBM Plex Mono'] capitalize leading-tight`}
                >
                  <a href={link.url}>{link.icon}</a>
                </div>
              </div>
            ))}
        </div>
      </div>
      </div>
    </div>
  );
}

export default Nav;
