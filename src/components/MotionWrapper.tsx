// src/components/MotionWrapper.tsx
"use client";

import { motion } from "framer-motion";
import { Box } from "@chakra-ui/react";

export const MotionBox = motion(Box);

export default function MotionWrapper({ children }) {
  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      whileHover={{ scale: 1.02 }}
    >
      {children}
    </MotionBox>
  );
}
