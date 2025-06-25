import { useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaBookOpen,
  FaClipboardList,
  FaQuestionCircle,
  FaGraduationCap,
  FaChalkboardTeacher,
  FaClock,
  FaStar,
  FaTimes,
} from "react-icons/fa";
import AnimatedList from "../Bits/AnimatedList";
import TiltedCard from "../Bits/TiltedCard";
import ChatbotPopup from "../components/ChatbotPopup"; 

const items = [
  "Introduction",
  "System and Surroundings",
  "Heat, Work, and Internal Energy",
  "And More Comming Soon...",
];

const videoMap = {
  Introduction: "/videos/one.mp4",
  "System and Surroundings": "/videos/two.mp4",
  "Heat, Work, and Internal Energy": "/videos/three.mp4",
};

const avtarMap = {
  Introduction: "/videos/Avtar one.mp4",
  "System and Surroundings": "/videos/Avtar two.mp4",
  "Heat, Work, and Internal Energy": "/videos/avtar three.mp4",
};

export default function ChapterPage() {
  const { subject, chapter } = useParams();
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [popupType, setPopupType] = useState("");
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [showChat, setShowChat] = useState(false);

  const pyqList = [
    "PYQ 1 - Thermodynamics Basics",
    "PYQ 2 - System & Surroundings",
    "PYQ 3 - Laws of Thermodynamics",
    "PYQ 4 - Heat and Work",
    "PYQ 5 - Real-life Applications",
  ];
  const assignmentList = [
    "Assignment 1 - Energy Flow",
    "Assignment 2 - First Law Examples",
    "Assignment 3 - Closed vs Open Systems",
    "Assignment 4 - Practical Thermodynamics",
    "Assignment 5 - Internal Energy Calculation",
  ];

  const mainVideoRef = useRef(null);
  const floatingVideoRef = useRef(null);

  const chapterDuration = "45 mins";
  const importanceLevel = "High";
  const teacher = {
    name: "Dr.Nisha Sharma",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    bio: "Experienced Physics Educator with passion for simplifying concepts.",
    education: "Ph.D. in Physics, XYZ University",
    experience: "10+ years teaching competitive exams",
  };

  const videoSrc = selectedTopic ? videoMap[selectedTopic] : null;
  const avtarSrc = selectedTopic ? avtarMap[selectedTopic] : null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-black flex flex-col sm:flex-row p-6 gap-6 -mt-10">
      <div className="w-full sm:w-[30%] bg-white/10 backdrop-blur-md border border-gray-300/20 rounded-xl shadow-xl p-4 space-y-4">
        <h1 className="text-3xl font-bold text-white">Subject: {subject}</h1>
        <h2 className="text-xl font-semibold text-white">
          Chapter: {chapter.replace(/-/g, " ")}
        </h2>
        <div>
          <h3 className="font-semibold mb-2 text-white">Topics Covered:</h3>
          <AnimatedList
            items={items}
            onItemSelect={(item) => setSelectedTopic(item)}
            showGradients
            enableArrowNavigation
            displayScrollbar={false}
          />
        </div>
      </div>

      {!selectedTopic ? (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full bg-white/10 backdrop-blur-md border border-gray-300/20 rounded-xl shadow-xl p-4 sm:p-6 flex flex-col lg:flex-row items-center gap-6 relative overflow-hidden"
        >
          <div className="w-full lg:w-2/3 text-white space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">
              {teacher.name}
            </h2>
            <p className="text-gray-300 mb-4 text-sm sm:text-base">
              {teacher.bio}
            </p>
            <div className="space-y-2">
              <p className="flex items-center gap-2 text-gray-300 text-sm sm:text-base">
                <FaGraduationCap className="text-blue-400" />
                <span className="font-medium text-white">Education:</span>{" "}
                {teacher.education}
              </p>
              <p className="flex items-center gap-2 text-gray-300 text-sm sm:text-base">
                <FaChalkboardTeacher className="text-green-400" />
                <span className="font-medium text-white">Experience:</span>{" "}
                {teacher.experience}
              </p>
            </div>
            <div className="flex flex-wrap gap-4 mt-4">
              <div className="bg-[#111] p-4 rounded-lg shadow border border-gray-700 flex items-center gap-2 flex-1 min-w-[140px]">
                <FaClock className="text-yellow-400" />
                <p className="text-gray-300 text-sm sm:text-base">
                  Duration:{" "}
                  <span className="font-medium text-white">
                    {chapterDuration}
                  </span>
                </p>
              </div>
              <div className="bg-[#111] p-4 rounded-lg shadow border border-gray-700 flex items-center gap-2 flex-1 min-w-[140px]">
                <FaStar className="text-pink-400" />
                <p className="text-gray-300 text-sm sm:text-base">
                  Importance:{" "}
                  <span className="font-medium text-white">
                    {importanceLevel}
                  </span>
                </p>
              </div>
            </div>
           <p className="text-white-700 text-lg font-medium p-4   rounded-xl shadow-md">
  To start your learning, click on topics on the left side!
</p>

          </div>
          <div className="w-full lg:w-1/3 flex justify-center">
            <div className="w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] lg:w-[300px] lg:h-[300px] relative">
              <TiltedCard
                imageSrc="https://plus.unsplash.com/premium_photo-1682089789852-e3023ff6df24?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8A%3D%3D"
                altText="Dr.Nisha Sharma"
                captionText="Dr.Nisha Sharma"
                containerHeight="100%"
                containerWidth="100%"
                imageHeight="100%"
                imageWidth="100%"
                rotateAmplitude={12}
                scaleOnHover={1.2}
                showMobileWarning={false}
                showTooltip
                displayOverlayContent={false}
                overlayContent={
                  <p className="tilted-card-demo-text">Dr.Nisha Sharma</p>
                }
              />
            </div>
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full bg-white/10 backdrop-blur-md border border-gray-300/20 rounded-xl shadow-xl p-4 sm:p-6 flex flex-col justify-between relative overflow-hidden text-white h-[450px] sm:h-[500px] lg:h-[550px]"
        >
          <div className="w-full h-[90%] rounded-lg overflow-hidden relative">
            <video
              src={videoSrc}
              ref={mainVideoRef}
              autoPlay
              muted
              className="w-full h-full object-cover"
            ></video>
          </div>
          <div className="absolute bottom-8 right-6 w-20 h-20 sm:w-24 sm:h-24 lg:w-48 lg:h-48 rounded-full overflow-hidden border-4 border-white/20 shadow-lg">
            <video
              src={avtarSrc}
              ref={floatingVideoRef}
              autoPlay
              loop
              className="w-full h-full object-cover"
            ></video>
          </div>
          <div className="flex gap-3 mt-4 flex-wrap">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded shadow text-sm"
              onClick={() => {
                setPopupType("pyq");
                setShowPopup(true);
              }}
            >
              <FaBookOpen /> PYQ
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded shadow text-sm"
              onClick={() => {
                setPopupType("assignment");
                setShowPopup(true);
              }}
            >
              <FaClipboardList /> Assignment
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded shadow text-sm"
              onClick={() => setShowChat(true)}
            >
              <FaQuestionCircle /> Ask Doubt
            </motion.button>
            <ChatbotPopup isOpen={showChat} onClose={() => setShowChat(false)} />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                if (isPlaying) {
                  mainVideoRef.current.pause();
                  floatingVideoRef.current.pause();
                } else {
                  mainVideoRef.current.play();
                  floatingVideoRef.current.play();
                }
                setIsPlaying(!isPlaying);
              }}
              className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded shadow text-sm"
            >
              {isPlaying ? "Pause" : "Play"}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const newMuteStatus = !isMuted;
                mainVideoRef.current.muted = newMuteStatus;
                floatingVideoRef.current.muted = newMuteStatus;
                setIsMuted(newMuteStatus);
              }}
              className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded shadow text-sm"
            >
              {isMuted ? "Unmute" : "Mute"}
            </motion.button>
          </div>
        </motion.div>
      )}

      <AnimatePresence>
        {showPopup && (
          <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-md bg-black/30">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white bg-opacity-20 backdrop-blur-lg border border-white/30 shadow-xl rounded-xl p-6 w-80 text-white"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold">
                  {popupType === "pyq"
                    ? "Previous Year Questions"
                    : "Assignments"}
                </h2>
                <button
                  onClick={() => setShowPopup(false)}
                  className="text-xl hover:text-red-500"
                >
                  <FaTimes />
                </button>
              </div>
              <ul className="space-y-2">
                {(popupType === "pyq" ? pyqList : assignmentList).map(
                  (item, idx) => (
                    <li
                      key={idx}
                      className="bg-white bg-opacity-20 backdrop-blur-sm rounded px-3 py-2 shadow"
                    >
                      {item}
                    </li>
                  )
                )}
              </ul>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
