import { jsx } from "react/jsx-runtime";

jsx
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FlipUnit({ value }) {
  return (
    <div className="relative w-12 h-14 md:w-16 md:h-20 bg-green-100 rounded-lg flex items-center justify-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={value}
          initial={{ rotateX: -90, opacity: 0 }}
          animate={{ rotateX: 0, opacity: 1 }}
          exit={{ rotateX: 90, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 flex items-center justify-center text-2xl md:text-4xl font-serif"
        >
          {value}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}