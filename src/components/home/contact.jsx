import React, { useState } from "react";
import emailjs from "emailjs-com";
function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleMessageChange = (e) => setMessage(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_lwjblw4", // Replace with your EmailJS service ID
        "template_qsnljdo", // Replace with your EmailJS template ID
        { from_name: name, to_name: "Prabhat", message, email },
        "7i7pFJeEBZlDTEmVv" // Replace with your EmailJS user ID
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Email sent successfully!");
      })
      .catch((err) => {
        console.error("FAILED...", err);
        alert("Failed to send email. Please try again later.");
      });
  };
  return (
    <div className="Contact h-[1080px] pt-16 pb-4  flex-col justify-start items-center gap-16 flex">
      <div className="Container self-stretch h-[888px] flex-col justify-start items-center gap-[102px] flex">
        <div className="ModuleTitle self-stretch h-[328px] flex-col justify-start items-center gap-16 flex">
          <div className="Scroll flex-col justify-center items-center gap-4 flex">
            <div className="Mouse justify-center items-center inline-flex" />
            <div className="Line justify-center items-center inline-flex" />
          </div>
          <div className="Content self-stretch h-[124px] flex-col justify-start items-center gap-4 flex">
            <div className="Title flex-col justify-start items-center gap-4 flex">
              <div className="Title text-[#12f7d6] text-[64px] font-normal font-['Ubuntu'] capitalize leading-[72px]">
                Contact
              </div>
            </div>
            <div className="Para self-stretch justify-start items-center inline-flex">
              <div className="IHadThePleasureOfWorkingWithTheseAwesomeProjects grow shrink basis-0 text-center text-white text-base font-normal font-['IBM Plex Mono'] leading-tight">
                I’m currently available for freelance work
              </div>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="Sheet h-[458px] w-full flex-col justify-start items-center gap-16 flex">
            <div className="Content self-stretch h-[338px] flex-col justify-start items-center gap-16 flex">
              <div className="Title px-10 py-4 rounded-tl-[32px] rounded-br-[32px] border-2 border-[#12f7d6] flex-col justify-start items-center flex">
                <div className="SendMeAMessage text-center text-[#12f7d6] text-[32px] font-medium font-['IBM Plex Mono'] capitalize leading-[42px]">
                  Send me a message
                </div>
              </div>
              <div className="Info self-stretch h-[200px] px-[400px] flex-col justify-start items-center gap-16 flex">
                <div className="Colunmn self-stretch justify-center items-start gap-32 inline-flex">
                  <div className="Name grow shrink basis-0 flex-col justify-start items-start gap-6 inline-flex">
                    <div className="Title self-stretch justify-start items-start gap-2.5 inline-flex">
                      <label className="YourName grow shrink basis-0 text-[#12f7d6] text-base font-light font-['Ubuntu'] leading-[18px]">
                        Your name *
                      </label>
                    </div>
                    <div className="Input self-stretch h-[26px] flex-col justify-start items-start gap-2 flex">
                      <input
                        name="from_name"
                        onChange={handleNameChange}
                        className="EnterYourName bg-transparent border-none outline-none self-stretch text-white text-base font-light font-['Ubuntu'] leading-[18px]"
                        type="text"
                        placeholder="Enter your name"
                      />
                      <div className="Line26 self-stretch h-[0px] border border-[#97f9eb]"></div>
                    </div>
                  </div>
                  <div className="Email grow shrink basis-0 flex-col justify-start items-start gap-6 inline-flex">
                    <div className="Title self-stretch justify-start items-start gap-2.5 inline-flex">
                      <label className="YourEmail grow shrink basis-0 text-[#12f7d6] text-base font-light font-['Ubuntu'] leading-[18px]">
                        Your email *
                      </label>
                    </div>
                    <div className="Input self-stretch h-[26px] flex-col justify-start items-start gap-2 flex">
                      <input
                        onChange={handleEmailChange}
                        className="EnterYourName bg-transparent border-none outline-none self-stretch text-white text-base font-light font-['Ubuntu'] leading-[18px]"
                        type="text"
                        placeholder="Enter your email"
                      />
                      <div className="Line26 self-stretch h-[0px] border border-[#97f9eb]"></div>
                    </div>
                  </div>
                </div>
                <div className="Colunmn self-stretch justify-start items-start gap-16 inline-flex">
                  <div className="Message grow shrink basis-0 flex-col justify-start items-start gap-6 inline-flex">
                    <div className="Title self-stretch justify-start items-start inline-flex">
                      <label className="YourMessage grow shrink basis-0 text-[#12f7d6] text-base font-light font-['Ubuntu'] leading-[18px]">
                        Your message *
                      </label>
                    </div>
                    <div className="Input self-stretch h-[26px] flex-col justify-start items-start gap-2 flex">
                      <input
                        name="message"
                        onChange={handleMessageChange}
                        className="EnterYourName bg-transparent border-none outline-none self-stretch text-white text-base font-light font-['Ubuntu'] leading-[18px]"
                        type="text"
                        placeholder="Enter your message"
                      />
                      <div className="Line26 self-stretch h-[0px] border border-[#97f9eb]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="Button flex-col justify-start items-start flex">
              <div className="Button px-8 py-4 bg-[#12f7d6] rounded-[32px] justify-center items-center gap-4 inline-flex">
                <div className="ButtonText text-[#292f36] text-xl font-normal font-['Ubuntu'] capitalize leading-normal">
                  Send Message
                </div>
                <div className="IconSend w-6 h-6 justify-center items-center flex">
                  <div className="IconSend w-6 h-6 p-px justify-center items-center inline-flex">
                    <button type="submit">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M22.7071 1.29292C22.9306 1.5164 23.0262 1.81935 22.9939 2.11081C22.9848 2.19252 22.9657 2.27332 22.9366 2.35121L15.9439 22.3304C15.8084 22.7174 15.4504 22.9825 15.0408 22.9992C14.6311 23.0159 14.2527 22.7808 14.0862 22.4062L10.2424 13.7576L1.59387 9.91384C1.21919 9.74731 0.984122 9.36894 1.00084 8.95926C1.01755 8.54959 1.28265 8.19162 1.66965 8.05617L21.6488 1.06348C21.7272 1.03414 21.8085 1.01497 21.8907 1.00598C21.9511 0.999338 22.0117 0.998262 22.0717 1.00259C22.3032 1.01913 22.5301 1.11591 22.7071 1.29292ZM18.1943 4.3915L4.71108 9.11063L10.7785 11.8073L18.1943 4.3915ZM12.1928 13.2215L19.6085 5.80571L14.8894 19.289L12.1928 13.2215Z"
                          fill="#292F36"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="Footer self-stretch h-12 flex-col justify-start items-start gap-4 flex">
        <div className="Line1 self-stretch h-[0px] border border-[#43454d]"></div>
        <div className="Container self-stretch px-32 justify-between items-center inline-flex">
          <div className="Copyright justify-start items-center flex">
            <div className=" text-white text-base font-light font-['Ubuntu'] leading-[18px]">
              © 2023 Prabhat. All rights reserved.
            </div>
          </div>
          <div className="Policy justify-center items-center gap-8 flex">
            <div className="PrivacyPolicy text-center text-white text-base font-light font-['Ubuntu'] leading-[18px]">
              Privacy Policy
            </div>
            <div className="TermsConditions text-center text-white text-base font-light font-['Ubuntu'] leading-[18px]">
              Terms & Conditions
            </div>
          </div>
          <div className="Media justify-center items-start gap-8 flex">
            <div className="Instagram p-2 bg-[#97f9eb] rounded-[48px] justify-center items-start flex">
              <a href="https://www.instagram.com/__prabhat_2598_/">
                {" "}
                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.16028 5.01225C7.78262 4.68933 8.49092 4.57087 9.18446 4.67371C9.8919 4.77862 10.5468 5.10826 11.0525 5.61397C11.5582 6.11967 11.8879 6.77461 11.9928 7.48205C12.0956 8.17558 11.9772 8.88389 11.6543 9.50622C11.3313 10.1286 10.8204 10.6332 10.1942 10.9484C9.56789 11.2637 8.85817 11.3734 8.16595 11.262C7.47373 11.1506 6.83426 10.8238 6.3385 10.328C5.84273 9.83224 5.51591 9.19277 5.40452 8.50056C5.29313 7.80834 5.40285 7.09862 5.71807 6.47236C6.03329 5.84609 6.53795 5.33516 7.16028 5.01225ZM8.98889 5.99262C8.57276 5.93092 8.14778 6.00199 7.77438 6.19574C7.40098 6.38949 7.09818 6.69605 6.90905 7.07181C6.71992 7.44757 6.65409 7.8734 6.72092 8.28873C6.78775 8.70406 6.98384 9.08774 7.2813 9.3852C7.57877 9.68266 7.96245 9.87876 8.37778 9.94559C8.79311 10.0124 9.21894 9.94659 9.5947 9.75746C9.97046 9.56833 10.277 9.26553 10.4708 8.89213C10.6645 8.51873 10.7356 8.09375 10.6739 7.67762C10.6109 7.25316 10.4132 6.8602 10.1097 6.55678C9.80631 6.25336 9.41335 6.05557 8.98889 5.99262Z"
                    fill="#292F36"
                  />
                  <path
                    d="M12.3334 3.6665C11.9652 3.6665 11.6667 3.96498 11.6667 4.33317C11.6667 4.70136 11.9652 4.99984 12.3334 4.99984H12.34C12.7082 4.99984 13.0067 4.70136 13.0067 4.33317C13.0067 3.96498 12.7082 3.6665 12.34 3.6665H12.3334Z"
                    fill="#292F36"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1.33337 4.6665C1.33337 2.45736 3.12423 0.666504 5.33337 0.666504H12C14.2092 0.666504 16 2.45736 16 4.6665V11.3332C16 13.5423 14.2092 15.3332 12 15.3332H5.33337C3.12423 15.3332 1.33337 13.5423 1.33337 11.3332V4.6665ZM5.33337 1.99984C3.86061 1.99984 2.66671 3.19374 2.66671 4.6665V11.3332C2.66671 12.8059 3.86061 13.9998 5.33337 13.9998H12C13.4728 13.9998 14.6667 12.8059 14.6667 11.3332V4.6665C14.6667 3.19374 13.4728 1.99984 12 1.99984H5.33337Z"
                    fill="#292F36"
                  />
                </svg>
              </a>
            </div>
            <div className="Discord p-2 bg-[#97f9eb] rounded-[48px] justify-center items-start flex">
              <a href="">
                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.99487 2.45312L6.60425 2.5C6.60425 2.5 4.85229 2.69141 3.573 3.71875H3.55737L3.54175 3.73438C3.25464 3.99805 3.12964 4.32227 2.93237 4.79688C2.73511 5.27148 2.52417 5.87695 2.33862 6.54688C1.96753 7.88867 1.66675 9.51367 1.66675 11V11.125L1.72925 11.25C2.19214 12.0625 3.0144 12.5801 3.77612 12.9375C4.53784 13.2949 5.19604 13.4844 5.65112 13.5L5.948 13.5156L6.10425 13.25L6.65112 12.2812C7.2312 12.4121 7.89917 12.5 8.66675 12.5C9.43433 12.5 10.1023 12.4121 10.6824 12.2812L11.2292 13.25L11.3855 13.5156L11.6824 13.5C12.1375 13.4844 12.7957 13.2949 13.5574 12.9375C14.3191 12.5801 15.1414 12.0625 15.6042 11.25L15.6667 11.125V11C15.6667 9.51367 15.366 7.88867 14.9949 6.54688C14.8093 5.87695 14.5984 5.27148 14.4011 4.79688C14.2039 4.32227 14.0789 3.99805 13.7917 3.73438L13.7761 3.71875H13.7605C12.4812 2.69141 10.7292 2.5 10.7292 2.5L10.3386 2.45312L10.198 2.8125C10.198 2.8125 10.0535 3.17773 9.96362 3.59375C9.39722 3.51758 8.93433 3.5 8.66675 3.5C8.39917 3.5 7.93628 3.51758 7.36987 3.59375C7.28003 3.17773 7.1355 2.8125 7.1355 2.8125L6.99487 2.45312ZM6.30737 3.59375C6.32886 3.66406 6.35034 3.72461 6.36987 3.78125C5.72339 3.94141 5.03394 4.18555 4.40112 4.57812L4.93237 5.42188C6.22925 4.61719 8.09253 4.5 8.66675 4.5C9.24097 4.5 11.1042 4.61719 12.4011 5.42188L12.9324 4.57812C12.2996 4.18555 11.6101 3.94141 10.9636 3.78125C10.9832 3.72461 11.0046 3.66406 11.0261 3.59375C11.4929 3.6875 12.3835 3.90234 13.1199 4.48438C13.116 4.48633 13.3074 4.77539 13.4792 5.1875C13.655 5.61133 13.8503 6.17578 14.0261 6.8125C14.364 8.0332 14.6296 9.51953 14.6511 10.8281C14.3367 11.3086 13.7527 11.7422 13.1355 12.0312C12.5964 12.2832 12.1707 12.375 11.9167 12.4219L11.6667 12C11.8152 11.9453 11.9617 11.8848 12.0886 11.8281C12.8582 11.4902 13.2761 11.125 13.2761 11.125L12.6199 10.375C12.6199 10.375 12.3386 10.6328 11.6824 10.9219C11.0261 11.2109 10.0242 11.5 8.66675 11.5C7.30933 11.5 6.30737 11.2109 5.65112 10.9219C4.99487 10.6328 4.71362 10.375 4.71362 10.375L4.05737 11.125C4.05737 11.125 4.47534 11.4902 5.24487 11.8281C5.37183 11.8848 5.51831 11.9453 5.66675 12L5.41675 12.4219C5.16284 12.375 4.73706 12.2832 4.198 12.0312C3.58081 11.7422 2.99683 11.3086 2.68237 10.8281C2.70386 9.51953 2.96948 8.0332 3.30737 6.8125C3.48315 6.17578 3.67847 5.61133 3.85425 5.1875C4.02612 4.77539 4.21753 4.48633 4.21362 4.48438C4.94995 3.90234 5.84058 3.6875 6.30737 3.59375ZM6.91675 7C6.53003 7 6.18823 7.2207 5.97925 7.5C5.77026 7.7793 5.66675 8.12305 5.66675 8.5C5.66675 8.87695 5.77026 9.2207 5.97925 9.5C6.18823 9.7793 6.53003 10 6.91675 10C7.30347 10 7.64526 9.7793 7.85425 9.5C8.06323 9.2207 8.16675 8.87695 8.16675 8.5C8.16675 8.12305 8.06323 7.7793 7.85425 7.5C7.64526 7.2207 7.30347 7 6.91675 7ZM10.4167 7C10.03 7 9.68823 7.2207 9.47925 7.5C9.27026 7.7793 9.16675 8.12305 9.16675 8.5C9.16675 8.87695 9.27026 9.2207 9.47925 9.5C9.68823 9.7793 10.03 10 10.4167 10C10.8035 10 11.1453 9.7793 11.3542 9.5C11.5632 9.2207 11.6667 8.87695 11.6667 8.5C11.6667 8.12305 11.5632 7.7793 11.3542 7.5C11.1453 7.2207 10.8035 7 10.4167 7ZM6.91675 8C6.94409 8 6.97925 8.00977 7.04175 8.09375C7.10425 8.17773 7.16675 8.32422 7.16675 8.5C7.16675 8.67578 7.10425 8.82227 7.04175 8.90625C6.97925 8.99023 6.94409 9 6.91675 9C6.8894 9 6.85425 8.99023 6.79175 8.90625C6.72925 8.82227 6.66675 8.67578 6.66675 8.5C6.66675 8.32422 6.72925 8.17773 6.79175 8.09375C6.85425 8.00977 6.8894 8 6.91675 8ZM10.4167 8C10.4441 8 10.4792 8.00977 10.5417 8.09375C10.6042 8.17773 10.6667 8.32422 10.6667 8.5C10.6667 8.67578 10.6042 8.82227 10.5417 8.90625C10.4792 8.99023 10.4441 9 10.4167 9C10.3894 9 10.3542 8.99023 10.2917 8.90625C10.2292 8.82227 10.1667 8.67578 10.1667 8.5C10.1667 8.32422 10.2292 8.17773 10.2917 8.09375C10.3542 8.00977 10.3894 8 10.4167 8Z"
                    fill="#292F36"
                  />
                </svg>
              </a>
            </div>
            <div className="Github p-2 bg-[#97f9eb] rounded-[48px] justify-center items-start flex">
              <a href="https://github.com/prabhat-barman">
                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.66681 1.49756C7.08379 1.49762 5.55245 2.06097 4.34678 3.08679C3.14112 4.11261 2.33981 5.53397 2.08623 7.09655C1.83265 8.65912 2.14335 10.2609 2.96274 11.6154C3.78213 12.9698 5.05673 13.9885 6.55849 14.4892C6.89182 14.5476 7.01682 14.3476 7.01682 14.1726C7.01682 14.0142 7.00848 13.4892 7.00848 12.9309C5.33347 13.2392 4.90014 12.5226 4.76681 12.1476C4.61886 11.7829 4.38432 11.4597 4.08347 11.2059C3.85014 11.0809 3.51681 10.7726 4.07513 10.7642C4.28833 10.7874 4.4928 10.8616 4.67123 10.9805C4.84966 11.0995 4.99678 11.2597 5.10014 11.4476C5.19132 11.6114 5.31393 11.7555 5.46093 11.8719C5.60794 11.9882 5.77646 12.0744 5.95683 12.1255C6.1372 12.1766 6.32588 12.1916 6.51206 12.1696C6.69824 12.1477 6.87825 12.0892 7.04179 11.9976C7.07065 11.6586 7.2217 11.3418 7.46681 11.1059C5.98347 10.9392 4.43347 10.3642 4.43347 7.81424C4.42411 7.15168 4.6686 6.51063 5.11681 6.02258C4.91299 5.44672 4.93684 4.81477 5.18347 4.25591C5.18347 4.25591 5.74179 4.0809 7.01681 4.93924C8.10767 4.63923 9.25928 4.63923 10.3501 4.93924C11.6251 4.07258 12.1835 4.25591 12.1835 4.25591C12.4301 4.81476 12.454 5.44673 12.2501 6.02258C12.6997 6.50979 12.9444 7.1514 12.9335 7.81424C12.9335 10.3726 11.3751 10.9392 9.89181 11.1059C10.0509 11.2672 10.1734 11.4608 10.2511 11.6736C10.3287 11.8864 10.3597 12.1134 10.3418 12.3392C10.3418 13.2309 10.3335 13.9476 10.3335 14.1726C10.3335 14.3476 10.4585 14.5559 10.7918 14.4892C12.2909 13.9845 13.5619 12.9634 14.3777 11.6083C15.1936 10.2531 15.5014 8.65211 15.2461 7.09105C14.9907 5.52999 14.1889 4.11047 12.9838 3.0859C11.7786 2.06133 10.2486 1.49838 8.66681 1.49756Z"
                    fill="#292F36"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="Designer justify-end  gap-1 flex  items-center">
            <div className="DesignBy text-center text-white text-base font-light font-['Ubuntu'] leading-[18px]">
              Design By
            </div>
            <div className="Name flex-col justify-center items-end gap-1 inline-flex">
              <div className=" text-center text-[#12f7d6] text-base font-light font-['Ubuntu'] underline capitalize">
                Prabhat
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
