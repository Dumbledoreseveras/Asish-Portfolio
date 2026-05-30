import { RevealOnScroll } from "../RevealOnScroll";
import projectBg from "../../assets/project-samurai.png";

export const Projects = () => {
  return (
    <section 
      id="projects" 
      className="relative min-h-screen py-24 overflow-hidden"
    >
      {/* Background Image - Add your image here */}
      <div
  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: `url(${projectBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    opacity: 0.6,
  }}
/>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <RevealOnScroll>
          {/* Header Section */}
          <div className="text-center mb-16">
            <p className="text-red-500 uppercase tracking-[8px] text-sm mb-4 font-semibold">
              PORTFOLIO
            </p>
            
            <h2 className="text-5xl md:text-7xl font-black uppercase text-white mb-4">
              FEATURED
              <span className="text-red-500 ml-4">PROJECTS</span>
            </h2>
            
            {/* Japanese text */}
            <p className="text-2xl md:text-3xl text-gray-300 font-light tracking-wider">
              武士の道は終わらない
            </p>
            <p className="text-gray-400 text-sm mt-2">The Way of the Samurai Never Ends</p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project 1 - Agriculture */}
            <div className="group p-6 rounded-xl bg-black/30 backdrop-blur-sm border border-white/10 hover:border-red-500/50 hover:shadow-[0_4px_20px_rgba(239,68,68,0.15)] transition-all duration-300 hover:-translate-y-2">
              <h3 className="text-2xl font-bold text-white mb-2">Agriculture Production Optimization System</h3>
              <p className="text-red-400 text-sm mb-4 font-semibold tracking-wide">Euphoria GenX</p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Machine learning based system to optimize crop production using agricultural data like soil, rainfall, and temperature.
                Applied data preprocessing and predictive algorithms in Python to improve crop yield accuracy. Engineered ML-based predictive
                system analyzing agricultural variables to forecast optimal crop yields with improved model accuracy to 87%.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Python", "Pandas", "Scikit-learn", "SQL", "ML"].map((tech, key) => (
                  <span key={key}
                    className="text-gray-300 text-sm border border-white/20 px-3 py-1 rounded-full hover:bg-red-500/20 hover:border-red-500/50 transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Project 2 - Heart Disease */}
            <div className="group p-6 rounded-xl bg-black/30 backdrop-blur-sm border border-white/10 hover:border-red-500/50 hover:shadow-[0_4px_20px_rgba(239,68,68,0.15)] transition-all duration-300 hover:-translate-y-2">
              <h3 className="text-2xl font-bold text-white mb-2">Heart Disease Prediction</h3>
              <p className="text-red-400 text-sm mb-4 font-semibold tracking-wide">Ardent CompuTech Pvt Ltd</p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Developed machine learning model analyzing 13 clinical parameters (age, cholesterol, blood pressure, ECG, etc.)
                to identify heart disease risk factors. Achieved 92% model accuracy through feature selection optimization and
                hyperparameter tuning. Performed comprehensive EDA and cross-validation ensuring prediction reliability.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Python", "Scikit-learn", "Classification", "EDA", "ML"].map((tech, key) => (
                  <span key={key}
                    className="text-gray-300 text-sm border border-white/20 px-3 py-1 rounded-full hover:bg-red-500/20 hover:border-red-500/50 transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Project 3 - Emotion Music Player */}
            <div className="group p-6 rounded-xl bg-black/30 backdrop-blur-sm border border-white/10 hover:border-red-500/50 hover:shadow-[0_4px_20px_rgba(239,68,68,0.15)] transition-all duration-300 hover:-translate-y-2">
              <h3 className="text-2xl font-bold text-white mb-2">Emotion Based Music Player</h3>
              <p className="text-red-400 text-sm mb-4 font-semibold tracking-wide">Final Year Project</p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Developed emotion detection system using facial recognition to analyze real-time user emotional state with 85%+ accuracy.
                Implemented intelligent music recommendation engine that suggests songs based on detected emotions (happy, sad, angry, neutral).
                Built user-friendly GUI interface with real-time emotion display and dynamic playlist generation.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Python", "OpenCV", "CNN", "Computer Vision", "GUI"].map((tech, key) => (
                  <span key={key}
                    className="text-gray-300 text-sm border border-white/20 px-3 py-1 rounded-full hover:bg-red-500/20 hover:border-red-500/50 transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-4">
                <a
                  href="https://github.com/Dumbledoreseveras/Final_Year_Project"
                  className="text-red-400 hover:text-red-300 transition-colors inline-flex items-center gap-2 font-semibold group/link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on GitHub 
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 group-hover/link:translate-x-1 transition-transform"
                  >
                    <path
                      d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.867 8.166 6.839 9.489.5.092.682-.217.682-.482
                      0-.237-.009-.868-.014-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.461-1.11-1.461-.908-.62.069-.608.069-.608
                      1.004.07 1.532 1.032 1.532 1.032.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.221-.253-4.555-1.112-4.555-4.951
                      0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004
                      1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688
                      0 3.848-2.337 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.744 0 .267.18.577.688.48A10.013
                      10.013 0 0 0 22 12c0-5.523-4.477-10-10-10z"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Project 4 - JARVIS-AI */}
            <div className="group p-6 rounded-xl bg-black/30 backdrop-blur-sm border border-white/10 hover:border-red-500/50 hover:shadow-[0_4px_20px_rgba(239,68,68,0.15)] transition-all duration-300 hover:-translate-y-2">
              <h3 className="text-2xl font-bold text-white mb-2">JARVIS-AI</h3>
              <p className="text-red-400 text-sm mb-4 font-semibold tracking-wide">AI Voice Assistant (Ongoing)</p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Engineered intelligent voice assistant with bidirectional speech-to-text and text-to-speech capabilities
                enabling hands-free user interaction. Implemented system command execution module to launch local applications
                and services dynamically. Integrated web search fallback functionality to retrieve cloud resources when local
                            applications unavailable. Utilized Python with machine learning libraries for voice processing.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Python", "NLP", "Speech Recognition", "Automation", "ML"].map((tech, key) => (
                  <span key={key}
                    className="text-gray-300 text-sm border border-white/20 px-3 py-1 rounded-full hover:bg-red-500/20 hover:border-red-500/50 transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-4">
                <a
                  href="https://github.com/Dumbledoreseveras/JARVIS-AI"
                  className="text-red-400 hover:text-red-300 transition-colors inline-flex items-center gap-2 font-semibold group/link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on GitHub 
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 group-hover/link:translate-x-1 transition-transform"
                  >
                    <path
                      d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.867 8.166 6.839 9.489.5.092.682-.217.682-.482
                      0-.237-.009-.868-.014-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.461-1.11-1.461-.908-.62.069-.608.069-.608
                      1.004.07 1.532 1.032 1.532 1.032.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.221-.253-4.555-1.112-4.555-4.951
                      0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004
                      1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688
                      0 3.848-2.337 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.744 0 .267.18.577.688.48A10.013
                      10.013 0 0 0 22 12c0-5.523-4.477-10-10-10z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};