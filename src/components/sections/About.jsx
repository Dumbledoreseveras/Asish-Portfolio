import { RevealOnScroll } from "../RevealOnScroll";
import aboutImg from "../../assets/about-samurai.png";

export const About = () => {
  const ItsmSkills = [
    "ServiceNow",
    "Jira",
    "Zendesk",
    "Incident Management",
    "SLA Adherence",
  ];

  const technicalSkills = [
    "Active Directory",
    "ITIL",
    "Email Security",
    "Windows Troubleshooting",
    "TCP/IP",
    "DNS/DHCP",
    "VPN",
    "Remote Support",
  ];

  const programmingSkills = [
    "Python",
    "Java",
    "SQL",
    "Linux",
    "Data Analysis",
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen overflow-hidden py-24 scroll-mt-24 md:scroll-mt-28"
    >
      
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{
        backgroundImage: `url(${aboutImg})`,
        }}
    />

      
      <div className="absolute inset-0 bg-black/75" />

      <RevealOnScroll>
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16">

          
          <div className="mb-16">
            <p className="text-gray-500 uppercase tracking-[8px] text-sm mb-4">
              Who Am I
            </p>

            <h2 className="text-5xl md:text-7xl font-black uppercase text-white leading-none">
              About
              <span className="text-red-500 ml-4">Me</span>
            </h2>
          </div>

          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

            
            <div>

              
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                B.Tech graduate in Electronics & Communication Engineering
                with strong interest in IT support, Linux, networking
                and DevOps technologies.
              </p>

              <p className="text-gray-500 leading-relaxed mb-10">
                Passionate about solving technical problems, learning
                modern infrastructure tools and continuously improving
                technical skills through hands-on projects and labs.
              </p>

              
              <div className="space-y-8">

                
                <div className="border border-white/10 bg-white/5 rounded-2xl p-6 hover:border-red-500/40 transition-all duration-500">
                  <h3 className="text-white text-xl font-bold mb-5 uppercase tracking-[3px]">
                    ITSM & Ticketing
                  </h3>

                  <div className="flex flex-wrap gap-3">
                    {ItsmSkills.map((tech, key) => (
                      <span
                        key={key}
                        className="px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm tracking-[1px]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                
                <div className="border border-white/10 bg-white/5 rounded-2xl p-6 hover:border-white/30 transition-all duration-500">
                  <h3 className="text-white text-xl font-bold mb-5 uppercase tracking-[3px]">
                    Technical Skills
                  </h3>

                  <div className="flex flex-wrap gap-3">
                    {technicalSkills.map((tech, key) => (
                      <span
                        key={key}
                        className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm tracking-[1px]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                
                <div className="border border-white/10 bg-white/5 rounded-2xl p-6 hover:border-red-500/40 transition-all duration-500">
                  <h3 className="text-white text-xl font-bold mb-5 uppercase tracking-[3px]">
                    Programming
                  </h3>

                  <div className="flex flex-wrap gap-3">
                    {programmingSkills.map((tech, key) => (
                      <span
                        key={key}
                        className="px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm tracking-[1px]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            
            <div className="flex flex-col items-center lg:items-end gap-8">


              <div className="w-full max-w-md bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">

                <h3 className="text-white text-2xl font-bold mb-6 uppercase tracking-[3px]">
                  Education
                </h3>

                <div className="space-y-6">

                  <div>
                    <p className="text-red-500 font-semibold text-lg">
                      B.Tech - ECE
                    </p>

                    <p className="text-gray-400 text-sm mt-1">
                      MAKAUT University
                    </p>

                    <p className="text-gray-500 text-sm">
                      Swami Vivekananda Institute of Science & Technology
                    </p>

                    <p className="text-gray-500 text-sm mt-1">
                      CGPA: 8.67
                    </p>
                  </div>

                  <div>
                    <p className="text-red-500 font-semibold text-lg">
                      Higher Secondary
                    </p>

                    <p className="text-gray-500 text-sm mt-1">
                      Science Stream — 80%
                    </p>
                  </div>

                  <div>
                    <p className="text-red-500 font-semibold text-lg">
                      Secondary
                    </p>

                    <p className="text-gray-500 text-sm mt-1">
                      70%
                    </p>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};