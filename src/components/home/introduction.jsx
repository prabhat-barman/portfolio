import React from "react";
import dp from "../../assets/76841998.png";
import download from "../../assets/download.svg";
import mail from "../../assets/mail.svg";
function Introduction() {
  function downloadFile() {
    const link = document.createElement("a");
    link.href =
      "https://drive.google.com/uc?export=download&id=19QVg8NMPUxjT1FgIzCQXndrfWIX_SxKZ";
    link.setAttribute("download", "PrabhatBarmanFrontEndDeveloper.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <div className="flex flex-col  justify-around m-5 p-5">
      <div className="tp flex flex-col items-center">
        <div className="Developer text-[#97f9eb] text-[117px] font-normal font-['Ubuntu'] capitalize leading-[134px]">
          Developer
        </div>
      </div>
      <div className="btm flex items-center  w-full">
        <div className="small-div  w-2/6 h-3/5 flex justify-center">
          <div className="Left flex items-center w-80 h-[520px] p-6 bg-[#292f36] rounded-xl shadow border-4 border-white flex-col justify-center  gap-8">
            <div className="Content flex-col justify-start items-center gap-8 flex">
              <div className="PhotoName flex-col justify-start items-center gap-4 flex">
                <img
                  className="ProfilePhoto rounded-full border-2 border-[#12f7d6] w-28"
                  src={dp}
                  alt="Profile picture of Prabhat"
                />
                <div className="Name flex-col justify-start items-center flex">
                  <div className="Prabhat text-white text-[32px] font-medium font-['IBM Plex Mono'] capitalize leading-[42px]">
                    Prabhat
                  </div>
                  <div className="FullStackDeveloper text-white text-sm font-normal font-['IBM Plex Mono'] leading-[18px]">
                    Full-stack developer
                  </div>
                </div>
              </div>
              <div className="Info flex-col justify-start items-start gap-4 flex">
                <div className="Text flex-col justify-start items-start gap-4 flex">
                  <div className="Email justify-center items-center gap-4 inline-flex">
                    <div className="IconMail w-3.5 h-3.5 justify-center items-center flex">
                      <div className="IconMail w-3.5 h-3.5 px-[0.58px] py-[1.75px] justify-center items-center inline-flex" />
                    </div>
                    <div className=" text-white text-sm font-normal font-['IBM Plex Mono'] leading-[18px]">
                      Prabhatbarman98@gmail.com
                    </div>
                  </div>
                  <div className="Location justify-center items-center gap-4 inline-flex">
                    <div className="IconMapPin w-3.5 h-3.5 justify-center items-center flex">
                      <div className="IconMapPin w-3.5 h-3.5 px-[1.17px] justify-center items-center inline-flex" />
                    </div>
                    <div className="Bhopal text-white text-sm font-normal font-['IBM Plex Mono'] leading-[18px]">
                      Bhopal M.P
                    </div>
                  </div>
                  <div className="Freelancer justify-center items-center gap-4 inline-flex">
                    <div className="IconBriefcase w-3.5 h-3.5 justify-center items-center flex">
                      <div className="IconBriefcase w-3.5 h-3.5 px-[0.58px] py-[1.17px] justify-center items-center inline-flex" />
                    </div>
                    <div className="FullTimeFreelancer text-white text-sm font-normal font-['IBM Plex Mono'] leading-[18px]">
                      Full-time / Freelancer
                    </div>
                  </div>
                  <div className="Website justify-center items-center gap-4 inline-flex">
                    <div className="IconLink w-3.5 h-3.5 justify-center items-center flex">
                      <div className="IconLink w-3.5 h-3.5 p-[0.62px] justify-center items-center inline-flex" />
                    </div>
                    <div className="WwwPrabhattokmakCom text-white text-sm font-normal font-['IBM Plex Mono'] leading-[18px]">
                      www.Prabhattokmak.com
                    </div>
                  </div>
                </div>
                <div className="Label justify-start items-start gap-4 inline-flex">
                  <div className="Html px-2 bg-[#12f7d6] rounded-lg justify-center items-center gap-4 flex">
                    <div className="Html text-[#292f36] text-sm font-normal font-['IBM Plex Mono'] leading-[18px]">
                      HTML
                    </div>
                  </div>
                  <div className="Css px-2 bg-[#12f7d6] rounded-lg justify-center items-center gap-4 flex">
                    <div className="Css text-[#292f36] text-sm font-normal font-['IBM Plex Mono'] leading-[18px]">
                      CSS
                    </div>
                  </div>
                  <div className="Js px-2 bg-[#12f7d6] rounded-lg justify-center items-center gap-4 flex">
                    <div className="Js text-[#292f36] text-sm font-normal font-['IBM Plex Mono'] leading-[18px]">
                      JS
                    </div>
                  </div>
                  <div className="React px-2 bg-[#12f7d6] rounded-lg justify-center items-center gap-4 flex">
                    <div className="React text-[#292f36] text-sm font-normal font-['IBM Plex Mono'] leading-[18px]">
                      REACT
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="Button  flex-col justify-start items-center flex">
              <div className="Button px-8 py-4 bg-gradient-to-tr from-pink-500 to-yellow-500 text-white rounded-[32px] justify-center items-center gap-4 inline-flex">
                <div className="ButtonText text-[#fffff] text-xl font-normal font-['Ubuntu'] capitalize leading-normal">
                  Download CV
                </div>
                <div className="IconDownload w-6 h-6 justify-center items-center flex">
                  <button onClick={() => downloadFile()} type="">
                    <img src={download} alt="download" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="large-div  w-2/6  h-3/5">
          <div className="Info h-[432px] flex-col justify-start items-start gap-8 inline-flex">
            <div className="Title self-stretch h-[234px] flex-col justify-start items-start flex">
              <div className="H1 text-[#97f9eb] text-sm font-normal font-['IBM Plex Mono'] leading-[18px]">
                <h1></h1>
              </div>
              <div className="Text self-stretch h-[216px] px-4 flex-col justify-start items-start flex">
                <div className="Hey text-white text-[64px] font-normal font-['Ubuntu'] capitalize leading-[72px]">
                  Hey
                </div>
                <div className="IMPrabhat">
                  <span className="text-white text-[64px] font-normal font-['Ubuntu'] capitalize leading-[72px]">
                    I’m
                  </span>
                  <span className=" ml-2 text-[#12f7d6] text-[64px] font-normal font-['Ubuntu'] capitalize leading-[72px]">
                    Prabhat
                  </span>
                  <span className="text-white text-[64px] font-normal font-['Ubuntu'] capitalize leading-[72px]">
                    ,
                  </span>
                </div>
                <div className="Identity justify-start items-baseline gap-4 inline-flex">
                  <div className="FullStackDeveloper text-white text-[64px] font-normal font-['Ubuntu'] capitalize leading-[72px]">
                    Full-stack developer
                  </div>
                  <div className="H1 text-[#97f9eb] text-sm font-normal font-['IBM Plex Mono'] leading-[18px]">
                    <h1></h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="Para self-stretch h-[166px] flex-col justify-start items-start gap-4 flex">
              <div className="P text-[#97f9eb] text-sm font-normal font-['IBM Plex Mono'] leading-[18px]">
                <p></p>
              </div>
              <div className="Text px-6 justify-start items-start inline-flex">
                <div className="IHelpBusinessGrowByCraftingAmazingWebExperiencesIfYouReLookingForADeveloperThatLikesToGetStuffDone w-[697px] text-white text-base font-normal font-['IBM Plex Mono'] leading-tight">
                  I help businesses grow by crafting amazing web experiences. If
                  you’re looking for a developer that likes to get stuff done,
                </div>
              </div>
              <div className="P text-[#97f9eb] text-sm font-normal font-['IBM Plex Mono'] leading-[18px]">
                <p></p>
              </div>
              <div className="Cta pl-6 justify-start items-center gap-4 inline-flex">
                <div className="LetSTalk text-[#12f7d6] text-[32px] font-medium font-['IBM Plex Mono'] capitalize leading-[42px]">
                  let’s talk
                </div>
                <div className="Button p-2 bg-[#43454d] rounded-[40px] justify-start items-start flex">
                  <div className="IconMail w-6 h-6 justify-center items-center flex">
                    <img src={mail} alt="mail" srcset="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="small-div w-2/6 h-3/5 flex justify-center">
          <div className="Highlights h-[378px] px-8 py-12 bg-[#1a1e23] rounded-[80px] shadow  flex-col justify-center items-center gap-3 inline-flex">
            <div className="Language justify-start items-center gap-4 inline-flex">
              <div className=" text-[#12f7d6] text-5xl font-medium font-['IBM Plex Mono'] capitalize leading-[62px]">
                4
              </div>
              <div className="Text flex-col justify-center items-start inline-flex">
                <div className="Programming text-white text-base font-normal font-['IBM Plex Mono'] leading-tight">
                  Programming
                </div>
                <div className="Language text-white text-base font-normal font-['IBM Plex Mono'] leading-tight">
                  Language
                </div>
              </div>
            </div>
            <div className="Tools justify-start items-center gap-4 inline-flex">
              <div className=" text-[#12f7d6] text-5xl font-medium font-['IBM Plex Mono'] capitalize leading-[62px]">
                6
              </div>
              <div className="Text flex-col justify-center items-start inline-flex">
                <div className="Development text-white text-base font-normal font-['IBM Plex Mono'] leading-tight">
                  Development
                </div>
                <div className="Tools text-white text-base font-normal font-['IBM Plex Mono'] leading-tight">
                  Tools
                </div>
              </div>
            </div>
            <div className="Experience justify-start items-center gap-4 inline-flex">
              <div className=" text-[#12f7d6] text-5xl font-medium font-['IBM Plex Mono'] capitalize leading-[62px]">
                3
              </div>
              <div className="Text flex-col justify-center items-start inline-flex">
                <div className="YearsOf text-white text-base font-normal font-['IBM Plex Mono'] leading-tight">
                  Years of
                </div>
                <div className="Experience text-white text-base font-normal font-['IBM Plex Mono'] leading-tight">
                  Experience
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
