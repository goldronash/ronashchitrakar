import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import cover from "./assets/covermain.avif";
import profile from "./assets/profile.png";
import icon from "./assets/icon.png";
function App() {
  const phoneNumber = "9779863167897";
  const message = "Hello! I have a question.";

  return (
    <div className="w-full md:max-w-7xl md:mx-auto  min-h-dvh flex justify-center items-center text-[#67536C] font-inter ">
      <div className="relative flex flex-col w-full max-w-[480px] md:mx-auto border-[#67536C]/50 rounded-4xl border-2 mx-4 p-1.5 overflow-hidden shadow-2xl">
        <div className="relative w-full">
          <div className="group w-full h-33.75 sm:h-40">
            <img
              src={cover}
              alt=""
              className="h-full w-full object-cover rounded-4xl"
            />
          </div>
          <div className="absolute left-4 -bottom-[40%]">
            <div className="relative group w-29 rounded-full overflow-hidden border-6 border-white bg-[#353535]">
              <img
                src={icon}
                alt=""
                className="h-full  w-full object-cover rounded-full group-hover:scale-[1.05] opacity-0 group-hover:opacity-100 transition-all duration-300"
              />
              <img
                src={profile}
                alt=""
                className="absolute top-0  h-full w-full object-cover rounded-full group-hover:scale-[1.05]  group-hover:opacity-0 transition-all duration-300"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col text-left mt-16 sm:mt-18 gap-4 sm:gap-5 px-6">
          {/* intro */}
          <div className="flex justify-between gap-2 items-center font-poppins">
            <div className="space-y-0">
              <h1 className="hidden sm:block font-bold text-[22px] sm:text-[24px] text-[#1F242F] leading-6.5">
                Ronash Chitrakar
              </h1>
              <h1 className="block sm:hidden font-bold text-[22px] sm:text-[24px] text-[#1F242F] leading-6.5">
                Ronash C.
              </h1>
              <div className="relative group opacity-90 text-[14px] sm:text-[16px] cursor-pointer overflow-hidden ">
                <a
                  href="https://www.instagram.com/tentacles.v?igsh=ZTNuZWYydWc3eXM1"
                  className="relative text-[#6B7387] z-50 group-hover:text-white transition-all group-hover:px-2 duration-300"
                >
                  @tentacles.v
                </a>
                <div className="absolute h-6 w-full top-0 -translate-x-full group-hover:translate-x-0 transition-all duration-400 border bg-[#67536C] z-10"></div>
              </div>
            </div>
            <div className="group">
              <a
                href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className=" relative w-[110px] h-[40px] bg-[#67536C]  text-white rounded-full cursor-pointer group-hover:bg-[#353535]  transition-all overflow-hidden">
                  <span className="absolute top-1/2 left-1/2 -translate-1/2 group-hover:-top-full transition-all duration-300">
                    {" "}
                    Contact
                  </span>
                  <span className="absolute top-full left-1/2 -translate-x-1/2 translate-y-full group-hover:top-1/2 group-hover:-translate-y-1/2  transition-all duration-300">
                    Whatsapp
                  </span>
                </button>
              </a>
            </div>
          </div>
          {/* profile */}
          <div className="">
            <h2>
              <span className="pr-2 font-bold text-[18px] sm:text-[20px]">
                PROFILE
              </span>
              <span className="border-l-2 border-[#67536C]  pl-2 text-[16px] sm:text-[18px] opacity-80">
                STRATEGY SPECIALIST
              </span>
            </h2>

            <p className="text-[15px] sm:text-[16px] opacity-90 py-2 leading-6 sm:leading-7.5">
              I lead design and craft social media strategies while managing and
              scaling eCommerce brands. From user-focused eCommerce design to
              content shoots, I help brands grow visibility, engagement, and
              sales.
            </p>
          </div>
          {/* studies */}
          <div className="">
            <h2 className="font-bold text-[18px] sm:text-[20px]">STUDIES</h2>
            <ul>
              <li className="text-[15px] sm:text-[17px]">
                Bachelor in Information Technology (BIT)
              </li>
            </ul>
          </div>
        </div>

        {/* social media links */}
        <div className="flex justify-center gap-8 text-2xl my-4 sm:my-7">
          <a
            href="https://www.facebook.com/share/1HFWKv2ga4/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition transform hover:scale-115 hover:text-blue-600"
          >
            <FaFacebook />
          </a>

          <a
            href="https://www.instagram.com/tentacles.v?igsh=ZTNuZWYydWc3eXM1"
            target="_blank"
            rel="noopener noreferrer"
            className="transition transform hover:scale-115 hover:text-pink-500"
          >
            <FaInstagram />
          </a>

          <a
            href="https://www.linkedin.com/in/ronash-chitrakar-33500b274?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="transition transform hover:scale-115 hover:text-blue-800"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://www.tiktok.com/@trentttfr?_r=1&_t=ZS-93NzLruZL0u"
            target="_blank"
            rel="noopener noreferrer"
            className="transition transform hover:scale-115 hover:text-black "
          >
            <FaTiktok />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
