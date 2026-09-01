"use client";
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

export default function ScrollReveal({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 150 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px" }}
      transition={{
        y: { duration: 1.2, ease: "easeOut" },
        opacity: { duration: 1.5, ease: "linear" }
      }}
    >
      {children}
    </motion.div>
  );
}