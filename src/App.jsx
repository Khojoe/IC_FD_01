import { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
} from "react-icons/fa";
import { SiHtml5, SiCss3, SiJavascript, SiTailwindcss } from "react-icons/si";
import emailjs from "@emailjs/browser";

function App() {
  const form = useRef();
  // eslint-disable-next-line no-unused-vars
  const [formStatus, setFormStatus] = useState("");

  // eslint-disable-next-line no-unused-vars
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
        setFormStatus("Message sent successfully! 🎉");
        form.current.reset();
      })
      .catch(() => setFormStatus("Failed to send. Please try again."));
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-purple-50 via-indigo-50 to-pink-50 text-gray-900 overflow-hidden">
      {/* Navbar - Glassmorphism */}
      <nav className="fixed top-0 w-full bg-white/70 backdrop-blur-xl border-b border-purple-200/50 shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-3xl md:text-4xl font-extrabold bg-linear-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent"
          >
            Immanuel Oheneba Debe
          </motion.h1>
          <div className="hidden md:flex space-x-12">
            {["About", "Skills", "Projects", "Contact"].map((item, i) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="relative text-lg font-semibold text-gray-800 hover:text-purple-700 transition-colors group"
              >
                {item}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-600 rounded transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero - Bigger, illustrated feel */}
      <section id="about" className="pt-48 pb-32 px-6 text-center relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,#c084fc_0%,transparent_50%)]"></div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="max-w-5xl mx-auto relative z-10"
        >
          <motion.img
            initial={{ opacity: 0, y: 60, rotate: -8 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ delay: 0.3, duration: 1.2 }}
            src="https://avatars.githubusercontent.com/u/172178177?v=4" // Replace with your real photo
            alt="Immanuel Oheneba Debe"
            className="w-64 h-64 rounded-full mx-auto mb-12 border-8 border-white shadow-2xl ring-4 ring-purple-400/30 object-cover"
          />
          <h2 className="text-5xl md:text-7xl font-extrabold mb-6 bg-linear-to-r from-purple-700 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Immanuel Oheneba Debe
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-indigo-700 mb-10"
          >
            Aspiring Frontend Developer
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-12"
          >
            Passionate about building beautiful, responsive web experiences.
            Currently studying JavaScript, HTML, CSS, React, Node.js, Python,
            and Java. Interning in Frontend Development at Interncred (FD track)
            — turning theory into real-world projects every day.
          </motion.p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <motion.a
              href="#contact"
              whileHover={{
                scale: 1.08,
                boxShadow: "0 20px 40px -10px rgba(139, 92, 246, 0.4)",
              }}
              className="bg-linear-to-r from-purple-600 to-indigo-600 text-white px-12 py-5 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300"
            >
              Get in Touch
            </motion.a>
            <motion.a
              href="https://github.com/Khojoe"
              target="_blank"
              whileHover={{ scale: 1.08 }}
              className="border-2 border-purple-600 text-purple-700 px-12 py-5 rounded-full font-bold hover:bg-purple-50 transition-all duration-300 shadow-xl"
            >
              View GitHub
            </motion.a>
          </div>
        </motion.div>
      </section>

      {/* Skills - Animated & hover-interactive cards */}
      <section id="skills" className="py-24 px-6 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-5xl font-bold text-center mb-16 bg-linear-to-r from-purple-700 to-indigo-700 bg-clip-text text-transparent">
            My Skills
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10">
            {[
              { icon: SiHtml5, name: "HTML5", color: "text-orange-600" },
              { icon: SiCss3, name: "CSS3", color: "text-blue-600" },
              {
                icon: SiJavascript,
                name: "JavaScript",
                color: "text-yellow-500",
              },
              { icon: FaReact, name: "React.js", color: "text-cyan-600" },
              {
                icon: SiTailwindcss,
                name: "Tailwind CSS",
                color: "text-teal-500",
              },
              { icon: FaNodeJs, name: "Node.js", color: "text-green-600" },
              { icon: FaPython, name: "Python", color: "text-blue-500" },
              { icon: FaJava, name: "Java", color: "text-red-600" },
              { name: "Responsive Design", color: "text-purple-700 font-bold" },
              { name: "Git & GitHub", color: "text-purple-700 font-bold" },
            ].map((skill, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.7 }}
                whileHover={{
                  scale: 1.12,
                  rotate: 3,
                  boxShadow: "0 25px 50px -12px rgba(139, 92, 246, 0.3)",
                }}
                className="bg-linear-to-br from-white to-purple-50/30 p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-400 border border-purple-100 flex flex-col items-center group cursor-pointer"
              >
                {skill.icon && (
                  <skill.icon
                    className={`text-7xl mb-6 ${skill.color} group-hover:scale-110 transition-transform duration-300`}
                  />
                )}
                <p className="text-xl font-semibold text-center group-hover:text-purple-700 transition-colors">
                  {skill.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects - Add your project cards here with similar card style */}
      {/* Contact - Add your form here with glass effect */}

      {/* Footer */}
      <footer className="bg-linear-to-r from-purple-900 to-indigo-900 text-white py-16 text-center">
        <p className="text-xl">
          © {new Date().getFullYear()} Immanuel Oheneba Debe. Built during
          Interncred Frontend Internship (FD track).
        </p>
        <div className="flex justify-center space-x-12 mt-8 text-5xl">
          <motion.a
            whileHover={{ scale: 1.3 }}
            href="https://github.com/Khojoe"
            target="_blank"
          >
            <FaGithub className="hover:text-purple-300 transition" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.3 }}
            href="https://www.linkedin.com/in/immanuel-oheneba-debe-352ab0367"
            target="_blank"
          >
            <FaLinkedin className="hover:text-purple-300 transition" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.3 }}
            href="mailto:immanueldebe@gmail.com"
          >
            <FaEnvelope className="hover:text-purple-300 transition" />
          </motion.a>
        </div>
      </footer>
    </div>
  );
}

export default App;
