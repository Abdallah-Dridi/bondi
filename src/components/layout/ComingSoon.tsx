"use client";

import { useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";

const BondiLogo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 200 200"
    className="w-48 h-48 md:w-64 md:h-64"
  >
    <defs>
      {/* This is the circular path the ball will follow. */}
      <path
        id="orbit"
        d="M 100, 20 a 80,80 0 1,1 0,160 a 80,80 0 1,1 0,-160"
        fill="none"
      />
    </defs>

    {/* Large circle */}
    <motion.circle
      cx="100"
      cy="100"
      r="80"
      stroke="#E5E7EB" // CORRECTED: Updated to light gray/white from your logo
      strokeWidth="4"
      fill="none"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    />

    {/* Small ball that will follow the path */}
    <motion.circle
      r="12"
      fill="#4AF6A4" // CORRECTED: Updated to mint green from your logo
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
    >
      {/* This special motion tag animates the element along the path defined in <defs> */}
      <animateMotion
        dur="3s"
        repeatCount="indefinite"
        path="M 100, 20 a 80,80 0 1,1 0,160 a 80,80 0 1,1 0,-160"
        keyPoints="0; 0.5; 1; 0.5; 0" // Swings from top to bottom, back to top, etc.
        keyTimes="0; 0.25; 0.5; 0.75; 1"
        calcMode="spline"
        keySplines="0.42 0 0.58 1; 0.42 0 0.58 1; 0.42 0 0.58 1; 0.42 0 0.58 1"
      />
    </motion.circle>
  </svg>
);

export const ComingSoon = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background space-y-8"
    >
      <BondiLogo />
      
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.7, ease: "easeOut" }}
        className="font-display text-3xl md:text-5xl font-semibold text-center px-4"
      >
        The Future of Group Investment
        <br />
        <motion.span
          className="text-gradient block mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          Is Coming Soon.
        </motion.span>
      </motion.h1>
    </motion.div>
  );
};
