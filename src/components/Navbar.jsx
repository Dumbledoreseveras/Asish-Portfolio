import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      
      
      <div className="absolute inset-0 bg-black/40 backdrop-blur-md border-b border-white/10" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-20">

          
          <a
            href="#home"
            className="text-white font-black text-2xl tracking-[4px] uppercase"
          >
            ASISH
            <span className="text-red-500 ml-2">JANA</span>
          </a>

          
          <div className="hidden md:flex items-center gap-10">

            <a
              href="#home"
              className="text-gray-300 uppercase tracking-[3px] text-sm hover:text-red-500 transition-all duration-300"
            >
              Home
            </a>

            <a
              href="#about"
              className="text-gray-300 uppercase tracking-[3px] text-sm hover:text-red-500 transition-all duration-300"
            >
              About
            </a>

            <a
              href="#projects"
              className="text-gray-300 uppercase tracking-[3px] text-sm hover:text-red-500 transition-all duration-300"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="text-gray-300 uppercase tracking-[3px] text-sm hover:text-red-500 transition-all duration-300"
            >
              Contact
            </a>
          </div>

          
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 group"
          >
            <span
              className={`w-6 h-[2px] bg-white transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-[5px]" : ""
              }`}
            />

            <span
              className={`w-6 h-[2px] bg-white my-1 transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />

            <span
              className={`w-6 h-[2px] bg-white transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-[5px]" : ""
              }`}
            />
          </button>
        </div>
      </div>

      
      <div
        className={`fixed inset-0 bg-black/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-10 transform transition-transform duration-500 md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <a
          href="#home"
          onClick={() => setMenuOpen(false)}
          className="text-white text-2xl uppercase tracking-[6px] hover:text-red-500 transition-all duration-300"
        >
          Home
        </a>

        <a
          href="#about"
          onClick={() => setMenuOpen(false)}
          className="text-white text-2xl uppercase tracking-[6px] hover:text-red-500 transition-all duration-300"
        >
          About
        </a>

        <a
          href="#projects"
          onClick={() => setMenuOpen(false)}
          className="text-white text-2xl uppercase tracking-[6px] hover:text-red-500 transition-all duration-300"
        >
          Projects
        </a>

        <a
          href="#contact"
          onClick={() => setMenuOpen(false)}
          className="text-white text-2xl uppercase tracking-[6px] hover:text-red-500 transition-all duration-300"
        >
          Contact
        </a>
      </div>
    </nav>
  );
};