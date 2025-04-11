import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white px-4 py-8 flex flex-col justify-center items-center font-[Poppins]">
      {/* Name & Position */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-500 drop-shadow-lg">Shivam Mishra</h1>
      <p className="text-lg sm:text-xl md:text-2xl mb-6 text-pink-300 font-medium tracking-wide">MERN Stack Developer</p>

      {/* Skills Section */}
      <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl p-6 mb-8 w-full max-w-xl shadow-2xl border border-white/20">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-center text-cyan-300">Skills</h2>
        <ul className="list-disc list-inside text-lg space-y-2 text-white">
          <li><span className="text-yellow-300">Languages:</span> C, C++, JavaScript, MySQL</li>
          <li><span className="text-yellow-300">Frontend:</span> ReactJS, HTML, CSS, Tailwind</li>
          <li><span className="text-yellow-300">Backend:</span> Node.js, Express.js</li>
          <li><span className="text-yellow-300">Database:</span> MongoDB</li>
          <li><span className="text-yellow-300">Tools:</span> Git, GitHub, VS Code, Linux</li>
        </ul>
      </div>

      <div className="bg-gradient-to-r from-[#ff9a9e] via-[#fad0c4] to-[#fad0c4] text-black rounded-2xl px-6 py-4 mb-8 shadow-xl text-center animate-pulse">
        <h3 className="text-2xl font-bold tracking-wide">🔥 300+ LeetCode Problems Solved 🔥</h3>
        <p className="text-md font-medium mt-2">Problem Solving Enthusiast 💪</p>
        <div className="mt-4">
          <h3 className="text-xl font-semibold text-black">LeetCode Profile</h3>
          <p className="text-black text-sm mt-1 mb-3">Check out my problem-solving journey on LeetCode.</p>
          <a
            href="https://leetcode.com/u/Shivammishra_12/"
            target="_blank"
            className="inline-block bg-black text-yellow-300 font-semibold px-4 py-2 rounded-full hover:bg-gray-800 transition duration-300"
          >
            Visit My LeetCode →
          </a>
        </div>
      </div>

      

      {/* Contact/Service Form */}
      <div className="bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-2xl w-full max-w-xl shadow-xl mt-8">
        <h2 className="text-2xl font-semibold text-center text-pink-300 mb-4">Schedule a Meeting / Request a Service</h2>
        <form action="https://formspree.io/f/xjkyjqjp" method="POST" className="flex flex-col gap-4">
          <input type="text" name="name" placeholder="Your Name" required className="p-2 rounded-md bg-white bg-opacity-20 text-white placeholder-white/70" />
          <input type="email" name="email" placeholder="Your Email" required className="p-2 rounded-md bg-white bg-opacity-20 text-white placeholder-white/70" />
          <textarea name="message" rows="4" placeholder="Tell me about your request or schedule..." required className="p-2 rounded-md bg-white bg-opacity-20 text-white placeholder-white/70"></textarea>
          <button type="submit" className="bg-yellow-400 text-black font-bold py-2 px-6 rounded-md hover:bg-yellow-300 transition">Send</button>
        </form>
      </div>

      {/* Social Links */}
      <div className="flex flex-wrap justify-center gap-6 sm:gap-8 text-3xl sm:text-4xl text-white mt-10">
        <a href="https://github.com/Sm6718858" target="_blank" className="hover:text-yellow-400 transition duration-300"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/shivam134" target="_blank" className="hover:text-blue-400 transition duration-300"><FaLinkedin /></a>
        <a href="mailto:sm6718858@gmail.com" className="hover:text-red-400 transition duration-300"><FaEnvelope /></a>
        <a href="tel:+917307334885" className="hover:text-green-400 transition duration-300"><FaPhone /></a>
      </div>

      {/* Footer */}
      <footer className="mt-10 text-sm text-white/50">© {new Date().getFullYear()} Shivam Mishra. All rights reserved.</footer>
    </div>
  );
}
