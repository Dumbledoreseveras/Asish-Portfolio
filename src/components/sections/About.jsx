import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
    const ItsmSkills = ["ServiceNow", "Jira", "Zendesk", "Incident Management", "SLA Adherence"];

    const technicalSkills = ["Active Directory","ITIL","EMAIL Security", "Windows Troubleshooting", "TCP/IP", "DNS/DHCP","VPN", "Remote Support"];

    const programmingSkills = ["Python", "Java", "SQL", "Linux", "Data Analysis"];

    return (
      <section id="about" className="min-h-screen flex items-center justify-center py-20" >
        <RevealOnScroll>
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                    About Me
                </h2>

                <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                    <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                        B.Tech graduate in Electronics & Communication Engineering (CGPA 8.67) with hands-on technical foundation
                        in IT support and end-user troubleshooting. Proficient in ticketing systems (ServiceNow, Jira, Zendesk),
                        Active Directory administration, and networking fundamentals. Strong problem-solving abilities with expertise in
                        diagnosing and resolving technical issues. Seeking L1 Service Desk role to contribute to seamless IT operations
                        and deliver exceptional end-user support while developing professional expertise in IT service management.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">🛠️ ITSM & Ticketing</h3>
                            <div className="flex flex-wrap gap-2">
                                {ItsmSkills.map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-cyan-500/10 text-cyan-500 py-1 px-3 rounded-full text-sm hover:bg-cyan-500/20
                                            hover:shadow-[0_2px_8px_rgba(34,211,238,0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">🖥️ Technical Skills</h3>
                            <div className="flex flex-wrap gap-2">
                                {technicalSkills.map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">💻 Programming</h3>
                            <div className="flex flex-wrap gap-2">
                                {programmingSkills.map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-purple-500/10 text-purple-500 py-1 px-3 rounded-full text-sm hover:bg-purple-500/20
                                            hover:shadow-[0_2px_8px_rgba(168,85,247,0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all mt-8">
                    <h3 className="text-xl font-bold mb-4">🎓 Education</h3>
                    <ul className="space-y-3 text-gray-300">
                        <li>
                            <strong className="text-cyan-400">B.Tech – Electronics & Communication Engineering</strong>
                            <p className="text-sm text-gray-400">MAKAUT University, Kolkata (2020–2024)</p>
                            <p className="text-sm text-gray-400">Swami Vivekananda Institute of Science and Technology, Kolkata (2020–2024)</p>
                            <p className="text-sm text-gray-400">CGPA: 8.67/10.0 | First Class with Distinction</p>
                        </li>
                        <li>
                            <strong className="text-cyan-400">Higher Secondary (Science Stream)</strong>
                            <p className="text-sm text-gray-400">2018–2020 | 80%</p>
                        </li>
                        <li>
                            <strong className="text-cyan-400">Secondary </strong>
                            <p className="text-sm text-gray-400">2017–2028 | 70%</p>
                        </li>
                    </ul>
                </div>

                {/* <div className="mt-8 p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4">📋 Comprehensive Skill Set</h3>
                    <div className="space-y-4 text-gray-300 text-sm">
                        <div>
                            <p className="font-semibold text-cyan-400 mb-2">TSM & Ticketing:</p>
                            <p>ServiceNow, Jira, Zendesk - incident logging, ticket management, SLA adherence</p>
                        </div>
                        <div>
                            <p className="font-semibold text-cyan-400 mb-2">Operating Systems:</p>
                            <p>Windows OS (troubleshooting, configuration), Linux Basics</p>
                        </div>
                        <div>
                            <p className="font-semibold text-cyan-400 mb-2">Networking:</p>
                            <p>TCP/IP, DNS, DHCP, Remote Support, VPN basics</p>
                        </div>
                        <div>
                            <p className="font-semibold text-cyan-400 mb-2">Directory Services:</p>
                            <p>Active Directory — user provisioning, password resets, group policy</p>
                        </div>
                        <div>
                            <p className="font-semibold text-cyan-400 mb-2">Email Systems:</p>
                            <p>SMTP, POP3, IMAP; Email Security: SPF, DKIM, DMARC</p>
                        </div>
                        <div>
                            <p className="font-semibold text-cyan-400 mb-2">Hardware & Software:</p>
                            <p>Hardware troubleshooting, driver issues, software installation & support</p>
                        </div>
                        <div>
                            <p className="font-semibold text-cyan-400 mb-2">Programming & DB:</p>
                            <p>Python, Java, MySQL/SQL — scripting & data queries for IT operations</p>
                        </div>
                        <div>
                            <p className="font-semibold text-cyan-400 mb-2">Cloud & DevOps:</p>
                            <p>Cloud infrastructure basics (AWS/Azure exposure), DevOps (Beginner)</p>
                        </div>
                        <div>
                            <p className="font-semibold text-cyan-400 mb-2">Data Analysis:</p>
                            <p>Python, SQL — anomaly detection, reporting</p>
                        </div>
                    </div>
                </div> */}
            </div>
        </RevealOnScroll>
    </section>
  );
};