import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import cover from "./assets/covermain.avif";
import profile from "./assets/profile.png";
function App() {
  const phoneNumber = "9779863167897";
  const message = "Hello! I have a question.";

  return (
    <div className="w-full md:max-w-7xl md:mx-auto min-h-screen flex justify-center items-center text-[#67536C] font-inter ">
      <div className="relative flex flex-col w-full max-w-[480px] md:mx-auto border-[#67536C]/50 rounded-4xl border-2 mx-4 p-1.5">
        <div className="relative w-full">
          <div className="w-full h-[135px] sm:h-[160px]">
            <img
              src={cover}
              alt=""
              className="h-full w-full object-cover rounded-4xl"
            />
          </div>
          <div className="absolute w-[120px] sm:w-[125px] border-0 border-black left-4 -bottom-[40%]">
            <img
              src={profile}
              alt=""
              className="h-full w-full border-white border-6 object-cover rounded-full"
            />
          </div>
        </div>

        <div className="flex flex-col text-left mt-16 sm:mt-18 gap-4 sm:gap-5 px-6">
          {/* intro */}
          <div className="flex justify-between items-center font-poppins">
            <div className="-space-y-1">
              <h1 className="font-bold text-[22px] sm:text-[24px] text-[#1F242F]">
                Ronash Chitrakar
              </h1>
              <h3 className="opacity-90 text-[6B7387] text-[14px] sm:text-[16px]">
                @tentacles.v
              </h3>
            </div>
            <div>
              <a
                href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="px-5 py-2 bg-[#67536C]  text-white rounded-full">
                  Contact
                </button>
              </a>
            </div>
          </div>
          {/* profile */}
          <div className="">
            <h2>
              <span className="pr-2 font-bold text-[18px] sm:text-[20px]">
                {" "}
                PROFILE{" "}
              </span>
              <span className="border-l-2 border-[#67536C]  pl-2 text-[16px] sm:text-[18px] opacity-80">
                STRATEGY SPECIALIST
              </span>
            </h2>

            <p className="text-[15px] sm:text-[16px] opacity-90 py-2 leading-6 sm:leading-7.5">
              I design user-focused digital experiences and scalable growth
              strategies for eCommerce brands, combining UI/UX, marketing,
              social media, and content shoots to drive engagement and
              conversions.
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
          {/* contact icon */}
        </div>
        {}

        <div className="flex justify-center gap-8 text-2xl my-4 sm:my-7">
          <FaFacebook></FaFacebook>
          <FaInstagram></FaInstagram>
          <FaLinkedin></FaLinkedin>
          <FaYoutube></FaYoutube>
          <FaTiktok></FaTiktok>
        </div>
      </div>
    </div>
  );
}

export default App;
