// 

import React from 'react';
import { motion } from 'motion/react';
import { Soup, Flame } from 'lucide-react';

function MisalLoader({ message = "Finding the best Misal Point..." }) {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center gap-6 bg-slate-50 p-4 select-none">
      {/* Animated Icon Container */}
      <div className="relative flex items-center justify-center">
        {/* Ambient Pulsing Glow */}
        <motion.div
          animate={{
            scale: [1, 1.35, 1],
            opacity: [0.25, 0.5, 0.25],
          }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute w-24 h-24 bg-orange-500/30 rounded-full blur-xl"
        />

        {/* Subtle Rotating Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute w-20 h-20 rounded-full border border-dashed border-orange-300/80"
        />

        {/* Rising Steam Lines */}
        <div className="absolute -top-5 flex gap-1.5 z-20">
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 4 }}
              animate={{
                opacity: [0, 0.8, 0],
                y: [4, -10],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.35,
                ease: "easeOut",
              }}
              className="w-1 h-3 rounded-full bg-orange-400/80"
            />
          ))}
        </div>

        {/* Main Bowl Icon Card */}
        <motion.div
          animate={{
            y: [0, -6, 0],
            rotate: [0, -3, 3, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative z-10 flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 text-white shadow-lg shadow-orange-500/25"
        >
          <Soup className="w-8 h-8 stroke-[2.2]" />
          
          {/* Small Spice/Flame Badge */}
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.2, repeat: Infinity }}
            className="absolute -bottom-1.5 -right-1.5 bg-white text-orange-600 p-1 rounded-full shadow-sm border border-orange-100"
          >
            <Flame className="w-3.5 h-3.5 fill-orange-500" />
          </motion.div>
        </motion.div>
      </div>

      {/* Loading Message */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col items-center gap-2 text-center"
      >
        <p className="text-slate-800 text-sm md:text-base font-bold tracking-tight">
          {message}
        </p>

        {/* Animated Loading Dots */}
        <div className="flex items-center gap-1.5">
          <span className="text-xs text-slate-400 font-medium">
            Preparing your queue
          </span>
          <div className="flex gap-1">
            {[0, 1, 2].map((dot) => (
              <motion.span
                key={dot}
                animate={{ opacity: [0.2, 1, 0.2] }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  delay: dot * 0.2,
                }}
                className="w-1 h-1 rounded-full bg-orange-500"
              />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default MisalLoader;