import React from "react";
import mouse from "../../assets/mouse.svg";
import desktop from "../../assets/desktop.svg";
function Skill() {
  return (
    <div>
      <div className="tp w-full flex items-center justify-around">
        <img src={mouse} alt="mouse" />
      </div>
      <div className="Skills  flex items-center justify-around h-[1080px] p-32 flex-col ">
        <div className="Icon self-stretch pl-[720px] justify-center items-start inline-flex">
          <div className=" text-[#12f7d6] text-[168px] font-normal font-['Ubuntu'] capitalize"></div>
        </div>
        <div className="Container self-stretch h-[824px] flex-col justify-start items-center gap-16 flex">
          <div className="ModuleTitle self-stretch h-[328px] flex-col justify-start items-center gap-16 flex">
            <div className="Scroll flex-col justify-center items-center gap-4 flex">
              <div className="Mouse justify-center items-center inline-flex" />
              <div className="Line justify-center items-center inline-flex" />
            </div>
            <div className="Content self-stretch h-[124px] flex-col justify-start items-center gap-4 flex">
              <div className="Title flex-col justify-start items-center gap-4 flex">
                <div className="Title text-[#12f7d6] text-[64px] font-normal font-['Ubuntu'] capitalize leading-[72px]">
                  Skills
                </div>
              </div>
              <div className="Para self-stretch justify-start items-center inline-flex">
                <div className="IAmStrivingToNeverStopLearningAndImproving grow shrink basis-0 text-center text-white text-base font-normal font-['IBM Plex Mono'] leading-tight">
                  I am striving to never stop learning and improving
                </div>
              </div>
            </div>
          </div>
          <div className="Content flex-col justify-start items-center gap-[90px] flex">
            <div className="Services justify-center items-start gap-32 inline-flex">
              <div className="WebDevelopement justify-center items-start flex">
                <div className="Color bg-[#0c73b8] rounded-tl-lg rounded-bl-lg" />
                <div className="Content px-6 py-4 bg-[#97f9eb] rounded-tr-lg rounded-br-lg flex-col justify-center items-center gap-2 inline-flex">
                  <div className="Icon justify-center items-center inline-flex">
                    <div className="IconMonitor w-8 h-8 justify-center items-center flex">
                      <img src={desktop} alt="desktop" />
                    </div>
                  </div>
                  <div className="Text flex-col justify-start items-center gap-2 flex">
                    <div className="WebDevelopement w-60 text-center text-[#292f36] text-2xl font-normal font-['IBM Plex Mono'] capitalize leading-loose">
                      web developement
                    </div>
                    <div className="HtmlCssJsReact text-center text-[#43454d] text-base font-normal font-['IBM Plex Mono'] leading-tight">
                      HTML·CSS·JS·REACT
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="AppDevelopement rounded-tl-lg rounded-bl-lg justify-center items-start flex">
                <div className="Color bg-[#28a9e0] rounded-tl-lg rounded-bl-lg" />
                <div className="Content px-6 py-4 bg-[#97f9eb] rounded-tr-lg rounded-br-lg flex-col justify-center items-center gap-2 inline-flex">
                  <div className="Icon justify-center items-center inline-flex">
                    <div className="IconSmartphone w-8 h-8 justify-center items-center flex">
                      <div className="IconSmartphone w-8 h-8 px-[5.33px] py-[1.33px] justify-center items-center inline-flex" />
                    </div>
                  </div>
                  <div className="Text flex-col justify-start items-center gap-2 flex">
                    <div className="AppDevelopement w-60 text-center text-[#292f36] text-2xl font-normal font-['IBM Plex Mono'] capitalize leading-loose">
                      App developement
                    </div>
                    <div className="IosAndroid text-center text-[#43454d] text-base font-normal font-['IBM Plex Mono'] leading-tight">
                      iOS·Android
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
            <div className="Skills justify-start items-start gap-32 inline-flex">
              <div className="Html flex-col justify-center items-center gap-6 inline-flex">
                <div className="Icon p-10 bg-[#e54f26] rounded-[80px] justify-center items-center inline-flex">
                  <svg
                    width="64"
                    height="64"
                    viewBox="0 0 64 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.4375 8L10.625 10.1875L14.125 49.75L14.25 51.125L15.5625 51.5L31.4375 55.9375L31.9375 56.0625L32.5 55.9375L48.375 51.5625L49.6875 51.1875L49.8125 49.8125L53.375 10.1875L53.5625 8.0625H51.375L12.625 8H10.4375ZM14.8125 12L49.1875 12.0625L45.9375 48.0625L32 51.9375L18 48.0625L14.8125 12ZM19.625 18L20.9375 32.9375H38.0625L37.5 39.375L32 40.875H31.9375L26.4375 39.375L26.125 35.25H21.125L21.8125 43.1875L31.9375 46H32L42.125 43.1875L43.5 28H25.4375L25 22.9375H43.9375L44.375 18H19.625Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="Text justify-start items-start gap-2.5 inline-flex">
                  <div className="Html text-[#e54f26] text-[32px] font-medium font-['IBM Plex Mono'] capitalize leading-[42px]">
                    HTML
                  </div>
                </div>
              </div>
              <div className="Css flex-col justify-center items-center gap-6 inline-flex">
                <div className="Icon p-10 bg-[#0c73b8] rounded-[80px] justify-center items-center inline-flex">
                  <svg
                    width="64"
                    height="64"
                    viewBox="0 0 64 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 8L16 50L32 56L48 50L52 8H12ZM18.6641 14H45.3047L44.7812 20L33.3906 26H38.2422H44H44.2461L43.2227 38.0156L43.2617 38L42.7109 44L32 48L21.2695 44L20.6094 36H26.6523L26.9648 40.0664L32 41.8086L37.043 40.1016L37.7344 32H20.2617L19.7461 26L31.5664 20H19.2188L18.6641 14Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="Text justify-start items-start gap-2.5 inline-flex">
                  <div className="Css text-[#0c73b8] text-[32px] font-medium font-['IBM Plex Mono'] capitalize leading-[42px]">
                    CSS
                  </div>
                </div>
              </div>
              <div className="Js flex-col justify-center items-center gap-6 inline-flex">
                <div className="Icon p-10 bg-[#e7a020] rounded-[80px] justify-center items-center inline-flex">
                  <svg
                    width="64"
                    height="64"
                    viewBox="0 0 64 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M31.9883 6C31.2583 6 30.5284 6.17906 29.8984 6.53906L10.0781 17.9805C8.79813 18.7205 8 20.1216 8 21.6016V42.3594C8 43.8594 8.79813 45.2405 10.0781 45.9805L15.2812 48.9805C17.8013 50.2205 18.6998 50.2188 19.8398 50.2188C23.5798 50.2188 25.7188 47.9591 25.7188 44.0391V22.6211C25.7188 22.3011 25.4606 22.0391 25.1406 22.0391H22.6406C22.3006 22.0391 22.0586 22.3011 22.0586 22.6211V44.0195C22.0586 45.7795 20.2408 47.4991 17.3008 46.0391L11.8594 42.8984C11.6594 42.7984 11.5391 42.5794 11.5391 42.3594V21.6211C11.5391 21.3811 11.6594 21.1786 11.8594 21.0586L31.6797 9.62109C31.8597 9.50109 32.1008 9.50109 32.3008 9.62109L52.1211 21.0586C52.3211 21.1786 52.4414 21.3816 52.4414 21.6016V42.3594C52.4414 42.5794 52.3206 42.7984 52.1406 42.8984L32.3008 54.3594C32.1208 54.4594 31.8597 54.4594 31.6797 54.3594L26.5781 51.3398C26.4381 51.2398 26.2416 51.2208 26.1016 51.3008C24.6816 52.1008 24.4216 52.2002 23.1016 52.6602C22.7816 52.7602 22.2812 52.9595 23.2812 53.5195L29.8984 57.4414C30.5384 57.8014 31.2605 58 31.9805 58C32.7205 58 33.4381 57.8014 34.0781 57.4414L53.9219 45.9805C55.2019 45.2405 56 43.8594 56 42.3594V21.6211C56 20.1211 55.2019 18.74 53.9219 18L34.0781 6.53906C33.4481 6.17906 32.7183 6 31.9883 6ZM37.3203 22.0117C31.6603 22.0117 28.2812 24.4102 28.2812 28.4102C28.2812 32.7502 31.6381 33.9483 37.0781 34.4883C43.5781 35.1283 44.0781 36.0911 44.0781 37.3711C44.0781 39.5711 42.3011 40.5117 38.1211 40.5117C32.8611 40.5117 31.7003 39.1898 31.3203 36.5898C31.2803 36.3098 31.0417 36.1094 30.7617 36.1094H28.1797C27.8597 36.1094 27.6211 36.3719 27.6211 36.6719C27.6211 40.0119 29.4411 43.9883 38.1211 43.9883C44.4011 43.9883 48 41.5114 48 37.1914C48 32.9114 45.0995 31.7692 39.0195 30.9492C32.8395 30.1492 32.2188 29.7291 32.2188 28.2891C32.2188 27.0891 32.7603 25.5117 37.3203 25.5117C41.3803 25.5117 42.8995 26.3889 43.5195 29.1289C43.5795 29.3889 43.7981 29.5898 44.0781 29.5898H46.6602C46.8202 29.5898 46.9581 29.5106 47.0781 29.3906C47.1781 29.2906 47.2388 29.1292 47.2188 28.9492C46.8187 24.2292 43.6803 22.0117 37.3203 22.0117Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="Text justify-start items-start gap-2.5 inline-flex">
                  <div className="Js text-[#e7a020] text-[32px] font-medium font-['IBM Plex Mono'] capitalize leading-[42px]">
                    JS
                  </div>
                </div>
              </div>
              <div className="React flex-col justify-center items-center gap-6 inline-flex">
                <div className="Icon p-10 bg-[#28a9e0] rounded-[80px] justify-center items-center inline-flex">
                  <svg
                    width="64"
                    height="64"
                    viewBox="0 0 64 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.8086 6.71873C21.118 6.60662 19.4564 6.9091 18 7.74998C16.0581 8.87114 14.7649 10.7849 14.0703 12.9883C13.3757 15.1916 13.2152 17.7309 13.4688 20.5039C13.4944 20.7848 13.5438 21.0775 13.5781 21.3633C13.313 21.4766 13.0339 21.5808 12.7773 21.6992C10.2491 22.8661 8.13119 24.2733 6.57031 25.9765C5.00944 27.6798 4 29.7576 4 32C4 34.2423 5.00944 36.3202 6.57031 38.0234C8.13119 39.7266 10.2491 41.1339 12.7773 42.3008C13.0339 42.4192 13.313 42.5233 13.5781 42.6367C13.5438 42.9224 13.4944 43.2152 13.4688 43.4961C13.2152 46.2691 13.3757 48.8083 14.0703 51.0117C14.7649 53.2151 16.0581 55.1288 18 56.25C19.9419 57.3711 22.2445 57.5353 24.5 57.0351C26.7555 56.535 29.0339 55.4029 31.3086 53.7969C31.5389 53.6343 31.7698 53.4459 32 53.2734C32.2302 53.4459 32.4611 53.6343 32.6914 53.7969C34.9661 55.4029 37.2445 56.535 39.5 57.0351C41.7555 57.5353 44.0581 57.3711 46 56.25C47.9419 55.1288 49.2351 53.2151 49.9297 51.0117C50.6243 48.8083 50.7848 46.2691 50.5312 43.4961C50.5056 43.2152 50.4562 42.9224 50.4219 42.6367C50.687 42.5233 50.9661 42.4192 51.2227 42.3008C53.7509 41.1339 55.8688 39.7266 57.4297 38.0234C58.9906 36.3202 60 34.2423 60 32C60 29.7576 58.9906 27.6798 57.4297 25.9765C55.8688 24.2733 53.7509 22.8661 51.2227 21.6992C50.9661 21.5808 50.687 21.4766 50.4219 21.3633C50.4562 21.0775 50.5056 20.7848 50.5312 20.5039C50.7848 17.7309 50.6243 15.1916 49.9297 12.9883C49.2351 10.7849 47.9419 8.87114 46 7.74998C44.0581 6.62881 41.7555 6.46468 39.5 6.96482C37.2445 7.46497 34.9661 8.59701 32.6914 10.2031C32.4611 10.3657 32.2302 10.5541 32 10.7265C31.7698 10.5541 31.5389 10.3657 31.3086 10.2031C29.0339 8.59701 26.7555 7.46497 24.5 6.96482C23.9361 6.83979 23.3721 6.7561 22.8086 6.71873ZM22.5469 10.7031C22.8877 10.7288 23.25 10.7853 23.6367 10.8711C25.1481 11.2062 26.9581 12.0545 28.8672 13.3828C27.2772 14.8911 25.7124 16.6071 24.2188 18.5273C21.8117 18.8607 19.5444 19.3544 17.4453 19.9765C17.2498 17.66 17.4175 15.6674 17.8828 14.1914C18.3592 12.6803 19.0722 11.7505 20 11.2148C20.6959 10.8131 21.5244 10.6261 22.5469 10.7031ZM41.4531 10.7031C42.4756 10.6261 43.3041 10.8131 44 11.2148C44.9278 11.7505 45.6408 12.6803 46.1172 14.1914C46.5825 15.6674 46.7502 17.66 46.5547 19.9765C44.4556 19.3544 42.1883 18.8607 39.7812 18.5273C38.2876 16.6071 36.7228 14.8911 35.1328 13.3828C37.0419 12.0545 38.8519 11.2062 40.3633 10.8711C40.75 10.7853 41.1123 10.7288 41.4531 10.7031ZM32 15.9179C32.703 16.5679 33.4047 17.2907 34.1055 18.0469C33.408 18.0222 32.711 18 32 18C31.289 18 30.592 18.0222 29.8945 18.0469C30.5953 17.2907 31.297 16.5679 32 15.9179ZM32 22C33.9291 22 35.7988 22.1134 37.5977 22.3047C38.6627 23.7669 39.6956 25.3294 40.6602 27C41.6248 28.6707 42.4615 30.3464 43.1953 32C42.4615 33.6536 41.6248 35.3292 40.6602 37C39.6956 38.6706 38.6627 40.233 37.5977 41.6953C35.7988 41.8865 33.9291 42 32 42C30.0709 42 28.2012 41.8865 26.4023 41.6953C25.3373 40.233 24.3044 38.6706 23.3398 37C22.3752 35.3292 21.5385 33.6536 20.8047 32C21.5385 30.3464 22.3752 28.6707 23.3398 27C24.3044 25.3294 25.3373 23.7669 26.4023 22.3047C28.2012 22.1134 30.0709 22 32 22ZM20.9688 23.1992C20.5987 23.7908 20.2305 24.3843 19.875 25C19.5195 25.6157 19.1906 26.2313 18.8633 26.8476C18.5592 25.8641 18.2854 24.8934 18.0742 23.9609C18.9882 23.6772 19.9639 23.4279 20.9688 23.1992ZM43.0312 23.1992C44.0361 23.4279 45.0118 23.6772 45.9258 23.9609C45.7146 24.8934 45.4408 25.8641 45.1367 26.8476C44.8094 26.2313 44.4805 25.6157 44.125 25C43.7695 24.3843 43.4013 23.7908 43.0312 23.1992ZM14.3086 25.4062C14.8197 27.537 15.5255 29.7468 16.4414 32C15.5255 34.2532 14.8197 36.463 14.3086 38.5937C12.2056 37.605 10.5648 36.4609 9.51953 35.3203C8.44906 34.1522 8 33.0714 8 32C8 30.9286 8.44906 29.8478 9.51953 28.6797C10.5648 27.5391 12.2056 26.395 14.3086 25.4062ZM49.6914 25.4062C51.7944 26.395 53.4352 27.5391 54.4805 28.6797C55.5509 29.8478 56 30.9286 56 32C56 33.0714 55.5509 34.1522 54.4805 35.3203C53.4352 36.4609 51.7944 37.605 49.6914 38.5937C49.1803 36.463 48.4745 34.2532 47.5586 32C48.4745 29.7468 49.1803 27.537 49.6914 25.4062ZM32 26C28.71 26 26 28.71 26 32C26 35.29 28.71 38 32 38C35.29 38 38 35.29 38 32C38 28.71 35.29 26 32 26ZM32 30C33.1283 30 34 30.8717 34 32C34 33.1282 33.1283 34 32 34C30.8717 34 30 33.1282 30 32C30 30.8717 30.8717 30 32 30ZM18.8633 37.1523C19.1906 37.7686 19.5195 38.3843 19.875 39C20.2305 39.6157 20.5987 40.2091 20.9688 40.8008C19.9639 40.572 18.9882 40.3228 18.0742 40.039C18.2854 39.1066 18.5592 38.1358 18.8633 37.1523ZM45.1367 37.1523C45.4408 38.1358 45.7146 39.1066 45.9258 40.039C45.0118 40.3228 44.0361 40.572 43.0312 40.8008C43.4013 40.2091 43.7695 39.6157 44.125 39C44.4805 38.3843 44.8094 37.7686 45.1367 37.1523ZM17.4453 44.0234C19.5444 44.6456 21.8117 45.1392 24.2188 45.4726C25.7124 47.3929 27.2772 49.1088 28.8672 50.6172C26.9581 51.9454 25.1481 52.7937 23.6367 53.1289C22.0899 53.4719 20.9278 53.3208 20 52.7851C19.0722 52.2494 18.3592 51.3197 17.8828 49.8086C17.4175 48.3326 17.2498 46.3399 17.4453 44.0234ZM46.5547 44.0234C46.7502 46.3399 46.5825 48.3326 46.1172 49.8086C45.6408 51.3197 44.9278 52.2494 44 52.7851C43.0722 53.3208 41.9101 53.4719 40.3633 53.1289C38.8519 52.7937 37.0419 51.9454 35.1328 50.6172C36.7228 49.1088 38.2876 47.3929 39.7812 45.4726C42.1883 45.1392 44.4556 44.6456 46.5547 44.0234ZM29.8945 45.9531C30.592 45.9778 31.289 46 32 46C32.711 46 33.408 45.9778 34.1055 45.9531C33.4047 46.7093 32.703 47.4321 32 48.082C31.297 47.4321 30.5953 46.7093 29.8945 45.9531Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="Text justify-start items-start gap-2.5 inline-flex">
                  <div className="React text-[#28a9e0] text-[32px] font-medium font-['IBM Plex Mono'] capitalize leading-[42px]">
                    REACT
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skill;
