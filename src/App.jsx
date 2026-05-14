import { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
} from "react-icons/fa";
import { SiHtml5, SiCss3, SiJavascript, SiTailwindcss } from "react-icons/si";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "@emailjs/browser";

function App() {
  const form = useRef();
  const [formStatus, setFormStatus] = useState(""); // "success" | "error" | ""

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(() => {
        setFormStatus("success");
        form.current.reset();
      })
      .catch(() => setFormStatus("error"));
  };

  return (
    <div className="min-h-screen bg-[#09090f] text-white overflow-x-hidden">
      {/* Ambient glow orbs */}
      <div className="pointer-events-none fixed top-[-15%] left-[-10%] w-[700px] h-[700px] rounded-full bg-violet-700/20 blur-[140px] z-0" />
      <div className="pointer-events-none fixed bottom-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-indigo-600/15 blur-[120px] z-0" />

      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-[#09090f]/80 backdrop-blur-xl border-b border-white/[0.06] z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-black tracking-tight text-white"
          >
            Immanuel<span className="text-violet-400">.</span>
          </motion.span>
          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {["About", "Skills", "Projects", "Contact"].map((item, i) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="text-sm text-white/50 hover:text-white transition-colors font-medium"
              >
                {item}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-sm bg-violet-600 hover:bg-violet-500 text-white px-5 py-2 rounded-full font-semibold transition-colors"
            >
              Hire Me
            </motion.a>
          </div>
          {/* Mobile nav */}
          <div className="flex md:hidden items-center gap-3">
            {["About", "Skills", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-xs font-semibold text-white/60 hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section
        id="about"
        className="relative z-10 pt-24 sm:pt-36 md:pt-44 pb-16 sm:pb-24 md:pb-32 px-4 sm:px-6 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <motion.img
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            src="https://avatars.githubusercontent.com/u/172178177?v=4"
            alt="Immanuel Oheneba Debe"
            className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full mx-auto mb-6 sm:mb-8 border-2 border-violet-500/40 shadow-xl shadow-violet-900/30 object-cover"
          />

          <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs px-4 py-2 rounded-full mb-6 font-medium tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
            Open to opportunities
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-7xl font-black mb-4 leading-tight tracking-tight">
            Immanuel{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-indigo-400">
              Oheneba Debe
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl font-semibold text-white/60 mb-6">
            Aspiring Frontend Developer
          </p>

          <p className="text-sm sm:text-base md:text-lg text-white/40 max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-10 px-2 sm:px-0">
            I design and build responsive web experiences that are fast, clean,
            and purposeful. Proficient in JavaScript, React, Node.js, HTML, CSS,
            Python, and Java. I love turning ideas into real products people can
            actually use.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 px-4 sm:px-0">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-10 py-4 rounded-full font-bold text-base shadow-lg shadow-violet-900/40 transition-all"
            >
              Get in Touch
            </motion.a>
            <motion.a
              href="https://github.com/Khojoe"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="border border-white/10 hover:border-white/25 text-white/70 hover:text-white px-10 py-4 rounded-full font-semibold transition-all flex items-center justify-center gap-2"
            >
              <FaGithub /> View GitHub
            </motion.a>
          </div>
        </motion.div>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="relative z-10 py-16 sm:py-28 px-4 sm:px-6"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-10 sm:mb-14"
          >
            <p className="text-violet-400 text-xs uppercase tracking-[0.2em] font-semibold mb-3">
              What I work with
            </p>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight">
              My Skills
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
            {[
              { icon: SiHtml5, name: "HTML5", color: "text-orange-500" },
              { icon: SiCss3, name: "CSS3", color: "text-blue-500" },
              {
                icon: SiJavascript,
                name: "JavaScript",
                color: "text-yellow-400",
              },
              { icon: FaReact, name: "React.js", color: "text-cyan-400" },
              {
                icon: SiTailwindcss,
                name: "Tailwind CSS",
                color: "text-teal-400",
              },
              { icon: FaNodeJs, name: "Node.js", color: "text-green-500" },
              { icon: FaPython, name: "Python", color: "text-blue-400" },
              { icon: FaJava, name: "Java", color: "text-red-500" },
              { name: "Responsive Design", color: "text-violet-400" },
              { name: "Git & GitHub", color: "text-violet-400" },
            ].map((skill, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
                whileHover={{ scale: 1.06, y: -4 }}
                className="bg-white/[0.04] border border-white/[0.07] hover:border-violet-500/30 p-4 sm:p-6 rounded-2xl flex flex-col items-center gap-2 sm:gap-3 group cursor-pointer transition-all"
              >
                {skill.icon && (
                  <skill.icon
                    className={`text-4xl sm:text-5xl ${skill.color} group-hover:scale-110 transition-transform duration-300`}
                  />
                )}
                <p className="text-xs sm:text-sm font-semibold text-white/70 group-hover:text-white text-center transition-colors">
                  {skill.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="relative z-10 py-16 sm:py-28 px-4 sm:px-6"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-10 sm:mb-14"
          >
            <p className="text-violet-400 text-xs uppercase tracking-[0.2em] font-semibold mb-3">
              What I've built
            </p>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight">
              Projects
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                title: "This Portfolio",
                desc: "Modern React + Tailwind single-page portfolio built for Interncred FD internship.",
                link: "#",
                tag: "Live",
              },
              {
                title: "To-Do List App",
                desc: "Task manager with CRUD, filtering, and local storage — honing core frontend skills.",
                link: "https://to-do-list-kryi.onrender.com/",
                tag: "Live",
              },
              {
                title: "Responsive Landing Page",
                desc: "Visually striking hero, testimonials, and contact form — Task 2 for Interncred Internship.",
                link: "https://landing-page-project1-rho.vercel.app/",
                tag: "Live",
              },
              {
                title: "Age Calculator",
                desc: "A precise age calculator utility built to determine exact age in years, months, and days.",
                link: "https://age-calculator-r40c.onrender.com/",
                tag: "Live",
              },
            ].map((proj, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                whileHover={{ y: -6 }}
                className="bg-white/[0.04] border border-white/[0.07] hover:border-violet-500/30 p-6 sm:p-8 rounded-2xl transition-all group"
              >
                <div className="mb-4">
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full ${
                      proj.tag === "Live"
                        ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                        : "bg-yellow-500/10 text-yellow-400 border border-yellow-500/20"
                    }`}
                  >
                    {proj.tag}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold mb-3 text-white group-hover:text-violet-300 transition-colors">
                  {proj.title}
                </h3>
                <p className="text-white/50 leading-relaxed text-xs sm:text-sm mb-6">
                  {proj.desc}
                </p>
                <a
                  href={proj.link}
                  target={proj.link !== "#" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="text-violet-400 hover:text-violet-300 font-semibold text-sm transition-colors inline-flex items-center gap-1"
                >
                  View Project →
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="relative z-10 py-16 sm:py-28 px-4 sm:px-6"
      >
        <div className="max-w-lg mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 sm:mb-12"
          >
            <p className="text-violet-400 text-xs uppercase tracking-[0.2em] font-semibold mb-3">
              Let's connect
            </p>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight mb-4">
              Contact Me
            </h2>
            <p className="text-white/40 leading-relaxed text-sm sm:text-base">
              Have a project in mind or just want to say hi? My inbox is always
              open.
            </p>
          </motion.div>

          <motion.form
            ref={form}
            onSubmit={sendEmail}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-4"
          >
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full bg-white/[0.05] border border-white/10 text-white placeholder:text-white/30 px-5 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition-all"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full bg-white/[0.05] border border-white/10 text-white placeholder:text-white/30 px-5 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition-all"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
              className="w-full bg-white/[0.05] border border-white/10 text-white placeholder:text-white/30 px-5 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition-all resize-none"
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white py-4 rounded-xl font-bold text-base shadow-lg shadow-violet-900/30 transition-all"
            >
              Send Message
            </motion.button>

            {formStatus && (
              <motion.p
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                className={`text-center text-sm font-semibold ${
                  formStatus === "success" ? "text-emerald-400" : "text-red-400"
                }`}
              >
                {formStatus === "success"
                  ? "Message sent successfully! 🎉"
                  : "Failed to send. Please try again."}
              </motion.p>
            )}
          </motion.form>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/[0.06] py-10 sm:py-12 text-center px-4">
        <p className="text-white/30 text-xs sm:text-sm mb-6 sm:mb-8">
          © {new Date().getFullYear()} Immanuel Oheneba Debe · Built during
          Interncred Frontend Internship (FD track)
        </p>
        <div className="flex justify-center gap-3 sm:gap-4">
          {[
            {
              icon: FaGithub,
              href: "https://github.com/Khojoe",
              label: "GitHub",
            },
            {
              icon: FaLinkedin,
              href: "https://www.linkedin.com/in/immanuel-oheneba-debe-352ab0367",
              label: "LinkedIn",
            },
            {
              icon: FaEnvelope,
              href: "mailto:immanueldebe@gmail.com",
              label: "Email",
            },
            {
              icon: BsWhatsapp,
              href: "https://wa.me/233554539994",
              label: "WhatsApp",
            },
          ].map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -2 }}
              aria-label={label}
              className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-violet-400 hover:border-violet-500/40 transition-all"
            >
              <Icon className="text-lg" />
            </motion.a>
          ))}
        </div>
      </footer>
    </div>
  );
}

export default App;
