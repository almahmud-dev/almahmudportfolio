import { VscGithub } from "react-icons/vsc";
import Linkedin from "../assets/Hero/Linkedin.png";
import whatsapp from "../assets/Hero/whatsapp.png";
import facebook from "../assets/Hero/facebook.png";
import hero from "../assets/Hero/Hero.png";
import hi from "../assets/Hero/hi.png";
import CV from "../assets/Hero/CV.pdf";
import { DownloadIcon, Mail } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";

const Hero = ({ darkMode }) => {
  const socialIcons = [
    // isIcon flag Diya hoyeche karon jokhn react icon hobe tokhn ture ar onno time e false:
    {
      icon: VscGithub,
      alt: "GitHub",
      link: "https://github.com/almahmud-dev",
      isIcon: true,
    },
    {
      icon: Linkedin,
      alt: "Linkedin",
      link: "https://www.linkedin.com/in/al-mahmud-dev/",
      isIcon: false,
    },
    {
      icon: whatsapp,
      alt: "whatsapp",
      link: "https://wa.me/8801566068310",
      isIcon: false,
    },
    {
      icon: facebook,
      alt: "facebook",
      link: "https://www.facebook.com/almahmud088",
      isIcon: false,
    },
  ];

  const theme = {
    textPrimary: darkMode ? "text-white" : "text-gray-900",
    textSecondary: darkMode ? "text-gray-300" : "text-gray-700",
    buttonSecondary: darkMode
      ? "text-white border-0 border-orange-500 hover:bg-orange-600"
      : "text-gray-800 border-0 border-orange-500 hover:bg-orange-500 hover:text-white",
    decorativeCircle: darkMode
      ? "bg-orange-500 opacity-10"
      : "bg-orange-400 opacity-20",
  };

  return (
    <div className="relative overflow-hidden flex flex-col">
      <section
        id="home"
        data-aos="fade-up"
        data-aos-delay="250"
        className="body-font z-10"
      >
        <div
          className="container mx-auto flex px-4 sm:px-8
          lg:px-14 py-8 lg:py-12 flex-col
        lg:flex-row items-center justify-between lg:mt-20 mt-20"
        >
          <div
            className="lg:h-1/2 w-full flex flex-col items-center
          lg:items-start mb-12 lg:mb-0"
          >
            {/* Social Icons*/}
            <div
              className="flex justify-center lg:justify-start
            gap-4 sm:gap-6 sm:mb-7 w-full"
            >
              {socialIcons.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transform hover:scale-110 transition-transform
                  duration-300 flex items-center justify-center"
                >
                  {social.isIcon ? (
                    /* ========Icon hole aikahe render hobe ======*/
                    <social.icon
                      className={`text-[32px] sm:text-[40px]
                        ${darkMode ? "text-white" : "text-gray-800"}`}
                    />
                  ) : (
                    /* ===========Ar Image hoile aikahne hobe======= */
                    <img
                      src={social.icon}
                      alt={social.alt}
                      className={`w-8 h-8 sm:w-10 sm:h-10 object-contain
                        ${darkMode ? "" : "filter brightness-75"}`}
                    />
                  )}
                </a>
              ))}
            </div>

            {/* Name */}
            <h1
              className={`title-font text-3xl sm:text-4xl lg:text-5xl mb-4 font-bold
                pt-7 md:pt-0 text-center lg:text-left ${theme.textPrimary}`}
              data-aos="fade-up"
              data-aos-delay="500"
            >
              Hi, I'm Al Mahmud
            </h1>

            {/* Typewriter Effect Section */}
            <div
              className={`mb-3 sm:mb-5 text-xl sm:text-4xl font-semibold min-h-10
                text-center lg:text-left ${theme.textPrimary}`}
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <span style={{ color: "#f97316" }}>
                <Typewriter
                  words={[
                    "Frontend Developer",
                    "React Specialist",
                    "UI/UX Enthusiast",
                    "Problem Solver",
                  ]}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </span>
            </div>
            <p
              className={`mb-6 sm:mb-8 leading-relaxed max-w-md
                sm:max-w-lg text-center lg:text-left
                ${theme.textSecondary}`}
              data-aos="fade-up"
              data-aos-delay="650"
            >
              Building functional websites and digital solutions that solve real
              problems.
            </p>

            {/* Buttons Area */}
            <div className="w-full pt-4 sm:pt-6">
              <div
                className="flex flex-col sm:flex-row justify-center
                lg:justify-start gap-3 sm:gap-4"
                data-aos="fade-up"
                data-aos-delay="700"
              >
                <a href={CV} download className="w-full sm:w-auto">
                  <button
                    className="w-full sm:w-auto inline-flex items-center
                  justify-center text-white bg-linear-to-r from-orange-500
                  to-amber-500 border-0 py-3 px-6 sm:px-8
                  hover:shadow-[0_0_40px_rgba(249,115,22,0.4)]
                  rounded-full text-base sm:text-lg font-semibold
                  transition-all duration-300 transform cursor-pointer
                  active:scale-95"
                  >
                    <DownloadIcon className="w-4 h-4 sm:h-5 sm:w-5 mr-2" />
                    Download CV
                  </button>
                </a>
                <a href="#contact" className="w-full sm:w-auto">
                  <button
                    className={`w-full sm:w-auto inline-flex items-center
                        ${theme.buttonSecondary} justify-center
                        border-2 border-orange-500/50 py-3 px-6
                        sm:px-8 rounded-full text-base sm:text-lg
                        font-semibold transition-all duration-300
                        transform cursor-pointer active:scale-95`}
                  >
                    <Mail className="w-4 h-4 sm:h-5 mr-2" />
                    Contact Me
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Hero Images */}
          <div
            className="lg:w-1/2 w-full max-w-md lg:max-w-lg mt-8
            lg:mt-0 flex justify-center"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <div className="relative w-4/5 sm:w-3/4 lg:w-full">
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={hero}
                  alt="Hero"
                  className="w-full h-auto object-cover transform
                  hover:scale-105 transition-transform duration-500"
                />
              </div>
              <img
                src={hi}
                alt="Hi"
                className="absolute top-2 lg:top-8 xl:top-12
                left-6 w-14 h-14 sm:w-20 sm:h-20 object-contain
                animate-bounce opacity-90 z-10"
              />
            </div>
          </div>
        </div>

        <div
          className={`absolute -top-20 -left-20 w-40 h-40 sm:w-64
            sm:h-64 ${theme.decorativeCircle} rounded-full blur-3xl
            animate-pulse hidden sm:block`}
        ></div>
      </section>
    </div>
  );
};

export default Hero;
