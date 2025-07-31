import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { StarCanvas } from "./Starfield"; // 3D star background
import { useNavigate } from "react-router-dom";
const LoadingScreen = () => {
  const [visible, setVisible] = useState(true);
  const title = "LitCart";
   const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  const letterVariants = {
    initial: {
      y: 0,
      opacity: 0,
      scale: 1,
    },
    animate: (i) => ({
      y: [-50, 0],
      opacity: [0, 1],
      scale: [1.5, 1],
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  const logoVariants = {
    animate: {
      rotate: [0, 360],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  if (!visible) return null;

   useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 4000); // ⏱️ Change 4000ms to match animation duration

    return () => clearTimeout(timer);
  }, [navigate]);
  return (
    <div className="fixed inset-0 bg-black z-50 overflow-hidden">
      {/* Starfield Background */}
      <StarCanvas />

      {/* Foreground Content Centered */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="flex flex-col items-center text-white">
          {/* Rotating Logo */}
          <motion.div
            className="text-[64px] md:text-[84px] mb-4"
            variants={logoVariants}
            animate="animate"
          >
            📘
          </motion.div>

          {/* LitCart Title */}
          <div className="flex space-x-2 text-6xl md:text-8xl font-extrabold tracking-wider">
            {title.split("").map((char, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={letterVariants}
                initial="initial"
                animate="animate"
              >
                {char}
              </motion.span>
            ))}
            {/* Tagline */}
            
          </div>
          <div>
        <motion.p
          className="text-gray-400 mt-6 text-base tracking-widest uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
        >
          Entering your book universe...
        </motion.p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
