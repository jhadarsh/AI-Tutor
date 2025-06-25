import { motion } from "framer-motion";

export default function BlurPopup({ show, onClose, children }) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 backdrop-blur-sm bg-black bg-opacity-40">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="p-4 sm:p-6 md:p-8 rounded-xl bg-white/10 backdrop-blur-lg border border-gray-500 shadow-2xl w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg text-center text-white"
      >
        {children}
      </motion.div>
    </div>
  );
}
