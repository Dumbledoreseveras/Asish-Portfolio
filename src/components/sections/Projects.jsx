import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20">
      <style>{`
        @keyframes slideFromNW {
          from {
            opacity: 0;
            transform: translate(-100px, -100px);
          }
          to {
            opacity: 1;
            transform: translate(0, 0);
          }
        }
        @keyframes slideFromSW {
          from {
            opacity: 0;
            transform: translate(-100px, 100px);
          }
          to {
            opacity: 1;
            transform: translate(0, 0);
          }
        }
        @keyframes slideFromNE {
          from {
            opacity: 0;
            transform: translate(100px, -100px);
          }
          to {
            opacity: 1;
            transform: translate(0, 0);
          }
        }
        @keyframes slideFromSE {
          from {
            opacity: 0;
            transform: translate(100px, 100px);
          }
          to {
            opacity: 1;
            transform: translate(0, 0);
          }
        }
        .slide-nw {
          animation: slideFromNW 0.8s ease-out forwards;
        }
        .slide-sw {
          animation: slideFromSW 0.8s ease-out forwards;
        }
        .slide-ne {
          animation: slideFromNE 0.8s ease-out forwards;
        }
        .slide-se {
          animation: slideFromSE 0.8s ease-out forwards;
        }
        .delay-1 { animation-delay: 0.1s; }
        .delay-2 { animation-delay: 0.3s; }
        .delay-3 { animation-delay: 0.5s; }
        .delay-4 { animation-delay: 0.7s; }
      `}</style>

      <RevealOnScroll>
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                    Featured Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition slide-nw delay-1">
                        <h3 className="text-xl font-bold mb-2">Agriculture Production Optimization System</h3>
                        <p className="text-sm text-gray-400 mb-2 font-semibold">Euphoria GenX</p>
                        <p className="text-gray-400 mb-4">
                            Machine learning based system to optimize crop production using agricultural data like soil, rainfall, and temperature.
                            Applied data preprocessing and predictive algorithms in Python to improve crop yield accuracy. Engineered ML-based predictive
                            system analyzing agricultural variables to forecast optimal crop yields with improved model accuracy to 87%.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["Python", "Pandas", "NumPy", "Scikit-learn", "SQL", "Data Analysis"].map((tech, key) =>(
                                <span key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                                    >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>


                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition slide-ne delay-2">
                        <h3 className="text-xl font-bold mb-2">Heart Disease Prediction</h3>
                        <p className="text-sm text-gray-400 mb-2 font-semibold">Ardent Computech Pvt. Ltd</p>
                        <p className="text-gray-400 mb-4">
                            Developed machine learning model analyzing 13 clinical parameters (age, cholesterol, blood pressure, ECG, etc.)
                            to identify heart disease risk factors. Achieved 92% model accuracy through feature selection optimization and
                            hyperparameter tuning. Performed comprehensive EDA and cross-validation ensuring prediction reliability.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["Python", "Scikit-learn", "Classification", "Feature Selection", "Data Analysis", "Healthcare ML"].map((tech, key) =>(
                                <span key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                                    >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition slide-sw delay-3">
                        <h3 className="text-xl font-bold mb-2">Emotion Based Music Player</h3>
                        <p className="text-sm text-gray-400 mb-2 font-semibold">Final Year Project</p>
                        <p className="text-gray-400 mb-4">
                            Developed emotion detection system using facial recognition to analyze real-time user emotional state with 85%+ accuracy.
                            Implemented intelligent music recommendation engine that suggests songs based on detected emotions (happy, sad, angry, neutral).
                            Built user-friendly GUI interface with real-time emotion display and dynamic playlist generation.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["Python", "OpenCV", "CNN", "Computer Vision", "Machine Learning", "GUI"].map((tech, key) =>(
                                <span key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                                    >
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a
                                href="https://github.com/Dumbledoreseveras/Final_Year_Project"
                                className="text-blue-400 hover:text-blue-300 transition-colors my-4 flex items-center gap-2"
                                target="_blank"
                                rel="noopener noreferrer"
                                >
                                {" "}
                                View on GitHub &#8594;
                                <svg
                                    xmlns= "http://www.w3.org/2000/svg"
                                    viewBox= "0 0 24 24"
                                    fill= "currentColor"
                                    className= "w-5 h-5"
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


                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition slide-se delay-4">
                        <h3 className="text-xl font-bold mb-2">JARVIS-AI</h3>
                        <p className="text-sm text-gray-400 mb-2 font-semibold">AI Voice Assistant (Ongoing)</p>
                        <p className="text-gray-400 mb-4">
                            Engineered intelligent voice assistant with bidirectional speech-to-text and text-to-speech capabilities
                            enabling hands-free user interaction. Implemented system command execution module to launch local applications
                            and services dynamically. Integrated web search fallback functionality to retrieve cloud resources when local
                            applications unavailable. Utilized Python with machine learning libraries for voice processing.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["Python", "NLP", "Speech Recognition", "Web Automation", "GUI", "Machine Learning"].map((tech, key) =>(
                                <span key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                                    >
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a
                                href="https://github.com/Dumbledoreseveras/JARVIS-AI"
                                className="text-blue-400 hover:text-blue-300 transition-colors my-4 flex items-center gap-2"
                                target="_blank"
                                rel="noopener noreferrer"
                                >
                                {" "}
                                View on GitHub &#8594;
                                <svg
                                    xmlns= "http://www.w3.org/2000/svg"
                                    viewBox= "0 0 24 24"
                                    fill= "currentColor"
                                    className= "w-5 h-5"
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
            </div>
        </RevealOnScroll>
    </section>
  );
};