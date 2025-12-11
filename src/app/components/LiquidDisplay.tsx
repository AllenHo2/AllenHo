"use client"
import { motion } from "framer-motion";

export default function LiquidDisplay({ children }: { children: React.ReactNode }) {
  return (
    <motion.div>
    <svg>
        <filter id="grainy">
          <feTurbulence id="turbulence" baseFrequency="0.65" numOctaves="3" result="turbulence" />
          <feDisplacementMap in2="turbulence" in="SourceGraphic" scale="30" xChannelSelector="R" yChannelSelector="G" />
          <animate xlinkHref="#turbulence" attributeName="baseFrequency" dur="10s" values="0.02 0.05;0.05 0.02;0.02 0.05" repeatCount="indefinite" />
        </filter>
      <rect width="100%" height="100%" filter="url(#grainy)" />
    </svg>
      {children}
    </motion.div>
  );
}
