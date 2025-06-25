import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaRobot, FaChalkboardTeacher, FaBookOpen, FaTools } from "react-icons/fa";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black  text-white flex flex-col items-center justify-center p-8 space-y-8">
      {/* Heading */}
      <motion.h1 
        initial={{ opacity: 0, y: -30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }} 
        className="text-4xl sm:text-6xl font-bold text-center text-pink-400">
        About <span className="text-white">EduAI</span>
      </motion.h1>

      {/* Intro Card */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 1 }} 
        className="max-w-3xl bg-white/10 backdrop-blur-lg border border-pink-500/20 rounded-xl p-6 shadow-xl space-y-4 text-center">
        <h2 className="text-2xl font-bold">Hi, I'm Adarsh Jha 👋</h2>
        <p className="text-gray-300">
          I'm the creator of <span className="text-pink-400 font-semibold">EduAI</span>, your AI-powered educational companion. My goal is to make learning interactive, personalized, and accessible for every student using cutting-edge technology.
        </p>
      </motion.div>

      {/* Features Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ delay: 0.5, duration: 1 }} 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mt-6">
        
        <div className="bg-black/30 backdrop-blur-lg p-4 rounded-xl border border-pink-500/30 shadow-lg text-center space-y-2">
          <FaRobot className="text-pink-400 text-4xl mx-auto" />
          <h3 className="text-xl font-bold">AI-Powered Tutor</h3>
          <p className="text-gray-300">Get simplified answers with real-life examples from our AI designed for Class 11 learning.</p>
        </div>

        <div className="bg-black/30 backdrop-blur-lg p-4 rounded-xl border border-pink-500/30 shadow-lg text-center space-y-2">
          <FaChalkboardTeacher className="text-pink-400 text-4xl mx-auto" />
          <h3 className="text-xl font-bold">Interactive Video Lessons</h3>
          <p className="text-gray-300">Watch topic-wise video explanations with floating AI avatars for better engagement.</p>
        </div>

        <div className="bg-black/30 backdrop-blur-lg p-4 rounded-xl border border-pink-500/30 shadow-lg text-center space-y-2">
          <FaBookOpen className="text-pink-400 text-4xl mx-auto" />
          <h3 className="text-xl font-bold">Past Year Questions & Assignments</h3>
          <p className="text-gray-300">Practice PYQs, solve assignments, and strengthen concepts right from the platform.</p>
        </div>
      </motion.div>

      {/* Tech Stack Section */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ delay: 0.7, duration: 1 }} 
        className="mt-8 max-w-4xl bg-white/10 backdrop-blur-lg border border-pink-500/20 rounded-xl p-6 shadow-xl space-y-4 text-center">
        <h2 className="text-2xl font-bold">Tech Stack</h2>
        <p className="text-gray-300">EduAI is built with modern web technologies to deliver the best learning experience:</p>
        <ul className="list-disc list-inside text-gray-200 text-left mt-4 space-y-1">
          <li><span className="text-pink-400">React.js</span> with Tailwind CSS for sleek UI</li>
          <li><span className="text-pink-400">Framer Motion</span> for smooth animations</li>
          <li><span className="text-pink-400">Node.js</span> & Express for backend services</li>
          <li><span className="text-pink-400">Gemini AI API</span> for conversational tutoring</li>
          <li><span className="text-pink-400">SpeechSynthesis API</span> for voice-based learning</li>
        </ul>
      </motion.div>

      {/* Contact Section */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ delay: 0.9, duration: 1 }} 
        className="flex space-x-6 mt-10">
        <a href="https://www.linkedin.com/in/adarsh-kumar-13a17b2a7/" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:text-pink-300 text-3xl">
          <FaLinkedin />
        </a>
        <a href="https://github.com/jhadarsh" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:text-pink-300 text-3xl">
          <FaGithub />
        </a>
        <a href="mailto:adarsh25nov@gmail.com" className="text-pink-400 hover:text-pink-300 text-3xl">
          <FaEnvelope />
        </a>
      </motion.div>
    </div>
  );
}
