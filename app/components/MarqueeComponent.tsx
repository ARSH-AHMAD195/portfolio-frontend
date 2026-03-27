'use client';

import { motion } from "motion/react"


type Props = {
    children: React.ReactNode;
}

function MarqueeComponent({ children }: Props) {
  const MarqueeAnimation = {
    x: ['0%', '-50%'],
    transition: {
      duration: 30,
      ease: "linear" as const,
      repeat: Infinity
    }
  }

  return (
    <div className="bg-[#dcfd00] mt-3 md:mt-10 flex overflow-hidden whitespace-nowrap w-full">
      <motion.div
        className="flex text-2xl font-extrabold"
        animate={MarqueeAnimation}
      >
        {children}
        {children}
      </motion.div>
    </div>
  )
}

export default MarqueeComponent