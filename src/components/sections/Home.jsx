import { RevealOnScroll } from "../RevealOnScroll";
import profileImg from "../../assets/IMG-20231217-WA0037.jpg";
import CV from "../../assets/CV_Resume.pdf";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
          <div className="flex flex-col md:flex-row items-center justify-center z-10 px-4 w-full max-w-5xl">
            <div className="text-center z-10 px-4">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-400 bg-clip-text text-transparent leading-right">
                Hi👋, I'm Asish Jana
              </h1>
              <p className="text-gray-400 text-lg mb-8 max-w-lg">
                As a full-stack developer and data analyst, I am passionate about designing clean, 
                scalable web applications that seamlessly integrate data-driven insights. 
                My goal is to build solutions that not only deliver exceptional performance but also 
                enhance user experience through intelligent, well-structured data utilization.
              </p>
              <div className="flex justify-center md:justify-start space-x-4">
                <a
                  href="#projects"
                  className="bg-cyan-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                >
                  View Projects
                </a>
                <a
                  href="#contact"
                  className="border border-blue-500/50 text-cyan-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10"
                >
                  Contact Me
                </a>

                <a
                  href={CV}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-lilac-500 to-blue-400 text-white py-3 px-6 rounded font-medium transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(139,92,246,0.3)] flex items-center gap-2"
                    >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 13l-5 5m0 0l-5-5m5 5V6" />
                  </svg>
                  Download CV
                </a>
              </div>
            </div>
            <img
              src={profileImg}
              alt="Asish Jana"
              className="w-80 h-120 rounded-full  shadow-lg object-cover mt-8 md:mt-0 md:ml-12"
            />
          </div>
      </RevealOnScroll>
    </section>
  );
};