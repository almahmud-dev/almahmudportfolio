import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { useState, useEffect } from "react";
import jihadMiya from "../../src/assets/Testimonials/jihad.jpg";
import Nadil from "../../src/assets/Testimonials/Nadil.jpg";
import fima from "../../src/assets/Testimonials/fima.jpg";
import srabon from "../../src/assets/Testimonials/srabon.jpg";

const Testimonials = ({ darkMode }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const testimonials = [
    { id: 1, name: "Jihad Miya", image: jihadMiya, designation: "Senior Frontend Developer", company: "Creative IT Institute", feedback: "Mahmud consistently delivered clean and responsive interfaces. His attention to detail and problem-solving skills significantly improved our project workflow.", rating: 5 },
    { id: 2, name: "Mahammad Nadil", image: Nadil, designation: "Team Lead", company: "Creative IT Institute", feedback: "Working with Mahmud was a great experience. He writes maintainable code and adapts quickly to new technologies. A valuable team member.", rating: 5 },
    { id: 3, name: "Fima Akter", image: fima, designation: "UI/UX Designer", company: "Creative IT Institute", feedback: "Al Mahmud transformed our designs into pixel-perfect implementations. His collaboration skills and commitment to quality made the project successful.", rating: 5 },
    { id: 4, name: "NR Srabon", image: srabon, designation: "Full Stack Developer", company: "Creative IT Institute", feedback: "Great team player with excellent React skills. Mahmud always delivers high-quality work on time and helps others grow.", rating: 5 },
  ];

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isHovered]);

  const onDragEnd = (event, info) => {
    if (info.offset.x < -30) setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    else if (info.offset.x > 30) setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section
      id="testimonials"
      style={{ backgroundColor: darkMode ? "#0f172a" : "#f8fafc" }}
      className="relative py-10 lg:py-20 overflow-hidden transition-colors duration-500"
    >
      {/* Background Glows - Reduced Complexity for Mobile */}
      <div className="absolute inset-0 pointer-events-none opacity-50">
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-orange-500/10 rounded-full blur-[100px]" />
        <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-amber-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className={`text-4xl md:text-5xl font-black mb-4 ${darkMode ? "text-white" : "text-slate-900"}`}
          >
            What <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">People Say</span>
          </motion.h2>
        </div>

        <div 
          className="relative h-112.5 md:h-100 flex items-center justify-center touch-none"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {testimonials.map((testimonial, index) => {
            let position = index - currentIndex;
            if (index === 0 && currentIndex === testimonials.length - 1) position = 1;
            if (index === testimonials.length - 1 && currentIndex === 0) position = -1;

            const isActive = index === currentIndex;

            return (
              <motion.div
                key={testimonial.id}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={onDragEnd}
                animate={{
                  x: position * (window.innerWidth < 768 ? 300 : 420),
                  scale: isActive ? 1 : 0.85,
                  opacity: isActive ? 1 : 0.3,
                  zIndex: isActive ? 30 : 10,
                }}
                transition={{ type: "spring", stiffness: 200, damping: 25 }}
                className="absolute w-full max-w-[320px] md:max-w-112.5 cursor-grab active:cursor-grabbing"
              >
                <div
                  style={{
                    background: darkMode ? "#1e293b" : "#ffffff",
                    borderColor: isActive ? "#f97316" : (darkMode ? "#334155" : "#e2e8f0")
                  }}
                  className={`p-8 rounded-4xl border-2 shadow-xl transition-all duration-300 ${isActive ? 'shadow-orange-500/10' : 'grayscale-[0.5]'}`}
                >
                  <FaQuoteLeft className={`text-3xl mb-4 ${darkMode ? "text-slate-600" : "text-slate-200"}`} />
                  
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-amber-400 text-sm" />
                    ))}
                  </div>

                  <p className={`text-lg italic leading-relaxed mb-8 min-h-25 ${darkMode ? "text-slate-300" : "text-slate-600"}`}>
                    "{testimonial.feedback}"
                  </p>

                  <div className="flex items-center gap-4 border-t pt-6 border-slate-700/10">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-orange-500/50"
                    />
                    <div>
                      <h4 className={`font-bold text-base ${darkMode ? "text-white" : "text-slate-900"}`}>
                        {testimonial.name}
                      </h4>
                      <p className="text-xs text-orange-500 font-bold uppercase tracking-wider">
                        {testimonial.designation}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? "w-10 bg-orange-500" : "w-2 bg-slate-400/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;