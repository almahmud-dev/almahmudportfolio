import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import ecommerce from "../../src/assets/Profiles/profile1.png";
import profile2 from "../../src/assets/Profiles/profile2.jpg";
import profile3 from "../../src/assets/Profiles/profile3.png";
import profile4 from "../../src/assets/Profiles/profile4.png";
import profile5 from "../../src/assets/Profiles/profile5.png";
import profile6 from "../../src/assets/Profiles/profile6.png";

const Projects = ({ darkMode }) => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      desc: "Shop premium electronics, fashion, and lifestyle essentials at Exclusive with unbeatable deals and a seamless experience.",
      image: ecommerce,
      tages: ["React", "Redux", "Firebase"],
      github: "https://github.com/alma-mahmud/First-ecommerce-website",
      live: "https://first-ecommerce-websites.vercel.app/",
    },
    {
      id: 2,
      title: "EBT Eduact",
      desc: "EBT Eduact is a modern, responsive team-built educational web app with a clean UI, intuitive navigation, and structured front-end architecture",
      image: profile5,
      tages: ["React", "Vite", "JavaScript", "Lenis", "Responsive Design"],
      github: "https://github.com/Mohammad-Nadil/ebt-eduact/",
      live: "https://ebt-eduact.vercel.app/",
    },
    {
      id: 3,
      title: "EBT E-Commerce",
      desc: "EBT E-Commerce is a modern, responsive team-built educational web app with a clean UI, intuitive navigation, and structured front-end architecture",
      image: profile6,
      tages: ["React", "JabaScript", "Responsive"],
      github: "https://github.com/Mohammad-Nadil/ebt-ecommerce/",
      live: "https://ebt-ecommerce.vercel.app/",
    },
    {
      id: 4,
      title: "Elevate Your Lifestyle",
      desc: "Discover premium products at exclusive prices. Your one-stop shop for electronics and fashion.",
      image: profile2,
      tages: ["React", "React-Slider", "React-Icons"],
      github: "https://github.com/alma-mahmud/First-React-Project",
      live: "https://first-react-project-liard.vercel.app/",
    },
    {
      id: 5,
      title: "High-Quality Digital Solutions",
      desc: "Learn from industry experts with our featured courses and take the next step in your professional journey.",
      image: profile3,
      tages: ["React", "Smooth-Animations", "React-Icons"],
      github: "https://github.com/alma-mahmud/Edujarr-Education",
      live: "https://edujarr-education.vercel.app/",
    },
    {
      id: 6,
      title: "Building Stellar Websites for Startups",
      desc: "We design and develop high-quality digital products to help early-stage startups grow and succeed.",
      image: profile4,
      tages: ["React", "Framer Motion", "React Icons"],
      github: "https://github.com/almahmud9/agency-landing-react",
      live: "https://agency-landing-react.vercel.app/",
    },
  ];
  return (
    <section
      id="projects"
      style={{
        backgroundColor: darkMode ? "#111827" : "#f9fafb",
      }}
      className="relative"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-10" data-aos="fade-up">
          <h2
            className="text-3xl sm:text-4xl font-bold mb-3"
            style={{
              color: darkMode ? "white" : "#1f2937",
            }}
          >
            My{" "}
            <span
              style={{
                background: "linear-gradient(to right, #f97316, #f59e0b)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Projects
            </span>
          </h2>
          <p
            className="max-w-xl mx-auto"
            style={{
              color: darkMode ? "#d1d5db" : "#6b7280",
            }}
          >
            A Showcase of recent work
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              style={{
                background: darkMode
                  ? "linear-gradient(to right, #1f2937, #111827)"
                  : "linear-gradient(to right, #ffffff, #f9fafb)",
                borderColor: darkMode ? "#374151" : "#e5e7eb",
              }}
              className="group rounded-xl border duration-300 hover:border-orange-500/50 transition-all flex flex-col h-full"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="h-36 overflow-hidden rounded-t-xl shrink-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-4 flex flex-col flex-1">
                <h3
                  className="text-lg font-bold mb-2"
                  style={{ color: darkMode ? "white" : "#1f2937" }}
                >
                  {project.title}
                </h3>

                <p
                  className="text-sm mb-3 flex-1"
                  style={{ color: darkMode ? "#d1d5db" : "#6b7280" }}
                >
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tages.map((tag, idx) => (
                    <span
                      key={idx}
                      style={{
                        backgroundColor: darkMode ? "#374151" : "#f3f4f6",
                        color: darkMode ? "#d1d5db" : "#4b5563",
                      }}
                      className="px-2 py-1 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2 mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      backgroundColor: darkMode ? "#374151" : "#f3f4f6",
                      color: darkMode ? "white" : "#374151",
                    }}
                    className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-sm rounded-lg hover:opacity-90 transition-colors"
                    data-aos="zoom-in"
                    data-aos-delay="300"
                  >
                    <FaGithub className="text-sm" />
                    <span>Code</span>
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      background: "linear-gradient(to right, #f97316, #f59e0b)",
                    }}
                    className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-white text-sm rounded-lg hover:shadow-lg hover:shadow-orange-500/25 transition-all"
                    data-aos="zoom-in"
                    data-aos-delay="400"
                  >
                    <FaExternalLinkAlt className="text-sm" />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <a
            href="https://github.com/alma-mahmud"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "linear-gradient(to right, #f97316, #f59e0b)",
            }}
            className="inline-flex items-center font-semibold gap-2 px-7 py-4 text-white text-sm rounded-full hover:shadow-lg hover:shadow-orange-500/25 
                transition-all"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <FaGithub />
            <span>View All Projects</span>
            <FaExternalLinkAlt className="text-sm" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
