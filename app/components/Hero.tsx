'use client';

import Image from "next/image"
import { Icons } from "../utils/images"
import Stats from "./Stats"
import { motion } from "motion/react"

function HeroSection() {
  return (
    <div className="w-full h-full md:h-[calc(100vh-250px)] my-10 sm:my-16 md:my-24 flex flex-col-reverse md:flex-row justify-center items-center">
        <div className="px-5 w-sm sm:w-lg md:w-xl lg:w-4xl mx-10 text-white">
            <h1 className="text-5xl md:text-7xl lg:text-[140px] font-black tracking-tighter leading-[0.8]">Arsh Ahmad</h1>
            <p className="mt-5 text-sm md:text-xl text-white/70 max-w-7xl">
                I turn complex problems into scalable software.
                <br></br>
                Full-stack developer focused on <span className="px-2 rounded-md text-black font-bold bg-[#dcfd00]">developer tools</span>, <span className="px-2 rounded-md text-black font-bold bg-purple-400">AI & automation</span>, and <span className="px-2 rounded-md text-black font-bold bg-amber-400">modern web platforms</span>.
            </p>
            <div className="mt-5 w-2xl flex flex-col justify-start text-sm md:text-xl">
                <div>
                    <a href="#">
                        <button className="px-3 md:px-10 py-3 rounded-lg bg-[#dcfd00] text-black cursor-pointer hover:shadow-[0px_0px_20px_#dcfd00]">
                            <span className="font-bold ">Get in Touch</span>
                        </button>
                    </a>
                    <a href="#">
                        <button className="mx-5 px-3 md:px-10 py-3 outline-3 rounded-lg shadow-[4px_6px_0px_#000] cursor-pointer text-[#dcfd00] hover:border-none hover:bg-[#dcfd00] hover:text-black">
                            <span className="font-bold">Download Resume</span>
                        </button>
                    </a>
                </div>
                <div className="mt-5 flex justify-start gap-5">
                    <a href="https://github.com/ARSH-AHMAD195" target="_blank">
                        <button className="w-12 sm:w-15 h-12 sm:h-15 flex justify-center items-center outline-3 rounded-full bg-black  cursor-pointer text-white hover:shadow-[0px_0px_20px_#ffffff]">
                            <Image className="invert" src={Icons.GitHubLogo} width={30} alt="GithubLogo"></Image>
                        </button>
                    </a>
                    <a href="https://www.linkedin.com/in/arsh-ahmad-771baa290" target="_blank">
                        <button className="w-12 sm:w-15 h-12 sm:h-15 flex justify-center items-center outline-3 rounded-full bg-black  cursor-pointer text-white hover:shadow-[0px_0px_20px_#ffffff]">
                            <Image className="invert" src={Icons.LinkedInLogo} width={30} alt="GithubLogo"></Image>
                        </button>
                    </a>
                </div>
            </div>
            <Stats />
        </div>
        <motion.div 
        className="rounded-full w-70 lg:w-100 h-70 lg:h-100 mb-10 md:mb-0 flex justify-center items-center bg-black border-4 border-[#dcfd00]"
        initial={{boxShadow: "0px 0px 30px #dcfd00"}}
        animate={{
            boxShadow: [
                "0px 0px 10px #dcfd00",
                "0px 0px 30px #dcfd00",
                "0px 0px 10px #dcfd00"
            ]
        }}
    
        transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
        }}
        >
            <Image
                src={Icons.DisplayPicture}
                alt="Display Picture"
                priority
                quality={75}
                className="rounded-full mix-blend-lighten object-contain"
            />
        </motion.div>
    </div>
  )
}

export default HeroSection
