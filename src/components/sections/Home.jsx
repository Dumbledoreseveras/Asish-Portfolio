import { RevealOnScroll } from "../RevealOnScroll";
import CV from "../../assets/Asish-Jana-CV.pdf";
import coverImg from "../../assets/samurai.png";

export const Home = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden"
    >

      <div
        className="absolute inset-0 bg-cover bg-center scale-105 animate-float"
        style={{
          backgroundImage: `url(${coverImg})`,
        }}
      />

      
      <div className="absolute inset-0 bg-black/65" />

      <RevealOnScroll>
        <div className="relative z-10 min-h-screen flex items-center px-6 md:px-20">
          

          <div className="max-w-2xl">

            
            <p className="text-gray-300 tracking-[8px] uppercase text-sm mb-6">
              Hello, I'm
            </p>

            
            <h1 className="text-6xl md:text-8xl font-black leading-none text-white uppercase">
              Asish
              <br />
              Jana
            </h1>

            
            <div className="mt-6 flex items-center gap-3 flex-wrap">
              <span className="text-gray-300 text-lg tracking-[5px] uppercase">
                Aspiring
              </span>

              <span className="text-red-500 font-bold text-xl tracking-[6px] uppercase">
                DevOps
              </span>

              <span className="text-gray-300 text-lg tracking-[5px] uppercase">
                Engineer
              </span>
            </div>

            
            <div className="absolute right-6 md:right-14 top-1/2 -translate-y-1/2 hidden md:flex flex-col items-center z-10">
              
              <p
                className="text-gray-200 text-xl tracking-[6px] leading-[2.5rem]"
                style={{
                  writingMode: "vertical-rl",
                  textOrientation: "mixed",
                }}
              >
                改善は終わりのない旅である
              </p>

              <div className="mt-6 border border-red-500 px-2 py-4">
                <span
                  className="text-red-500 text-lg tracking-[4px]"
                  style={{
                    writingMode: "vertical-rl",
                    textOrientation: "mixed",
                  }}
                >
                  武士道
                </span>
              </div>
            </div>

            
            <p className="mt-8 text-gray-400 text-lg leading-relaxed max-w-xl">
              Aspiring DevOps Engineer with a passion for Linux, cloud,
              automation and problem solving. Continuously learning and
              building skills to grow in the tech industry.
            </p>

            
            <div className="flex flex-wrap gap-5 mt-10">
              
              <a
                href="#projects"
                className="px-8 py-4 border border-red-500 text-white uppercase tracking-[3px]
                hover:bg-red-500 transition-all duration-300"
              >
                View My Work
              </a>

              <a
                href={CV}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border border-gray-600 text-white uppercase tracking-[3px]
                hover:bg-white hover:text-black transition-all duration-300"
              >
                Download CV
              </a>
            </div>

            
            <div className="flex items-center gap-6 mt-12">

              
              <a
                href="https://www.linkedin.com/in/asish-jana-91b8423a6"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition-all duration-300 hover:scale-125"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-7 h-7"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>

              
              <a
                href="https://github.com/dumbledoreseveras"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-125"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-7 h-7"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>

              
              <a
                href="#contact"
                className="text-gray-400 hover:text-red-500 transition-all duration-300 hover:scale-125"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-7 h-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};