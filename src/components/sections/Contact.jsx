import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import contactBg from "../../assets/contact-samurai.png";
import emailjs from "emailjs-com";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then((result) => {
        alert("Message Sent!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => alert("Oops! Something went wrong. Please try again."));
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden"
    >
      
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${contactBg})`,
        }}
      />

      
      <div className="absolute inset-0 bg-black/80" />

      
      <div className="absolute bottom-0 left-0 w-full h-40 bg-red-900/20 blur-3xl" />

      
      <RevealOnScroll>
        <div className="relative z-10 px-4 w-full max-w-xl">
          <h2 className="text-4xl font-bold mb-2 text-center text-white">
            Get In Touch
          </h2>

          <p className="text-center text-red-400 mb-8 tracking-widest uppercase">
            武士道 • Contact
          </p>

          <form
            className="space-y-6 bg-black/40 backdrop-blur-md border border-white/10 p-8 rounded-2xl"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              placeholder="Your Name"
              className="w-full bg-black/40 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500"
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />

            <input
              type="email"
              name="email"
              required
              value={formData.email}
              placeholder="example@gmail.com"
              className="w-full bg-black/40 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />

            <textarea
              name="message"
              required
              rows={5}
              value={formData.message}
              placeholder="Your Message..."
              className="w-full bg-black/40 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500"
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            />

            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold tracking-wider transition-all hover:shadow-[0_0_20px_rgba(220,38,38,0.5)]"
            >
              Send Message
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};