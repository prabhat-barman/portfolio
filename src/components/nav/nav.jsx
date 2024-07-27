import React from "react";

function Nav() {
  const menuData = {
    menuItems: [{ name: "Home" }, { name: "Projects" }, { name: "Contact" }],
  };
  const mediaData = {
    mediaLinks: [
      {
        name: "Instagram",
        url: "https://www.instagram.com/__prabhat_2598_/",
        iconClass: "IconInstagram",
      },
      {
        name: "Discord",
        url: "https://discord.com/",
        iconClass: "IconDiscord",
      },
      {
        name: "Github",
        url: "https://github.com/prabhat-barman",
        iconClass: "IconGithub",
      },
    ],
  };
  return (
    <div className="navbar  flex items-center justify-around p-5">
      <div className="left">
        <div className="Logo h-[42px] justify-start items-center gap-2 inline-flex">
          <div className="C text-[#12f7d6] text-[32px] font-medium font-['IBM Plex Mono'] capitalize leading-[42px]">{`<P />`}</div>
          <div className=" text-white text-[32px] font-medium font-['IBM Plex Mono'] capitalize leading-[42px]">
            Prabhat Barman
          </div>
        </div>
      </div>
      <div className="right">
        <div className="NavBar h-8 justify-start items-center gap-16 inline-flex">
          <div className="menu justify-start items-start gap-8 flex">
            {menuData.menuItems.map((item, index) => (
              <div
                key={item?.id}
                className="menu-item text-white text-2xl font-normal font-['IBM Plex Mono'] capitalize leading-loose"
              >
                {item.name}
              </div>
            ))}
          </div>
          <div className="Right justify-start items-center gap-16 flex">
            <div className="media justify-start items-start gap-8 flex">
              {mediaData.mediaLinks.map((link) => (
                <div
                  key={link.name}
                  className={`${link.name.toLowerCase()} justify-start items-center gap-2 flex`}
                >
                  <div
                    className={`${link.iconClass} w-5 h-5 justify-center items-center flex`}
                  >
                    <div
                      className={`${link.iconClass} w-5 h-5 p-[0.83px] justify-center items-center inline-flex`}
                    />
                  </div>
                  <div
                    className={`${link.name.toLowerCase()} text-white text-base font-normal font-['IBM Plex Mono'] capitalize leading-tight`}
                  >
                    <a href={link.url}>{link.name}</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
