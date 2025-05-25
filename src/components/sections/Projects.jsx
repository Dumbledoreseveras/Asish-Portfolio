import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20"> 
    
        <RevealOnScroll>
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center"> 
                    {" "}
                    Featured Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div  className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                        <h3 className="text-xl font-bold mb-2"> Meeting Scheduler</h3>
                        <p className="text-gray-400 mb-4">
                            The Meeting Scheduler is a full-stack web application that helps users organize meetings
                            efficiently by detecting scheduling conflicts, suggesting optimal time slots, and displaying 
                            calendars in real-time 
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["React", "Tailwind CSS", "Node.js", "Postgres"].map((tech, key) =>(
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
                                href="https://github.com/Dumbledoreseveras/meeting-scheduler-new" 
                                className="text-blue-400 hover:text-blue-300 transition-colors my-4 flex items-center gap-2"
                                target="_blank"
                                rel="noopener noreferrer"
                                > 
                                {" "}
                                View Project &#8594;
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


                    <div  className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                        <h3 className="text-xl font-bold mb-2"> AI-Powered NLP & Speech Interaction System: JARVIS</h3>
                        <p className="text-gray-400 mb-4">
                            This project is a desktop AI assistant named Jarvis, featuring a 
                            custom Python GUI, real-time speech recognition, natural language 
                            processing, web automation, chatbot capabilities, and voice output, 
                            designed to interact with users, answer questions, perform tasks, 
                            and provide a seamless conversational experience. 
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["Python", "Web Automation", "NLP", "GUI", "Multithreading", "HTML & JS"].map((tech, key) =>(
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
                                href="https://github.com/Dumbledoreseveras/Jarvis-AI" 
                                className="text-blue-400 hover:text-blue-300 transition-colors my-4 flex items-center gap-2"
                                target="_blank"
                                rel="noopener noreferrer"
                                > 
                                {" "}
                                View Project &#8594;
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

                    <div  className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                        <h3 className="text-xl font-bold mb-2"> Google Play Store Insights Dashboard</h3>
                        <p className="text-gray-400 mb-4">
                            This project analyzes Google Play Store app and user review data to 
                            generate interactive visualizations and insights, including app 
                            ratings, installs, revenue, sentiment analysis, and trends over time. 
                            The results are presented in a visually appealing HTML dashboard, 
                            enabling users to explore key metrics and patterns in the app ecosystem 
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["Panda", "Numpy", "NLTK VADER", "Plotly", "HTML"].map((tech, key) =>(
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
                                href="https://github.com/Dumbledoreseveras/Google_project" 
                                className="text-blue-400 hover:text-blue-300 transition-colors my-4 flex items-center gap-2"
                                target="_blank"
                                rel="noopener noreferrer"
                                > 
                                {" "}
                                View Project &#8594;
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