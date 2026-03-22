'use client';

import { motion } from "motion/react"
import Image from "next/image"
import { Icons } from "../utils/images"

const frontend = [
    {key:1, src:Icons.HTMLLogo, title:"HTML"},
    {key:2, src:Icons.CSSLogo, title:"CSS"},
    {key:3, src:Icons.JSLogo, title:"JavaScript"},
    {key:4, src:Icons.ReactLogo, title:"React"},
    {key:5, src:Icons.NextJSLogo, title:"Next.js"}
]

const progLanguage = [
    {key:1, src:Icons.CLogo, title:"C"},
    {key:2, src:Icons.CppLogo, title:"C++"},
    {key:3, src:Icons.CSharpLogo, title:"C#"},
    {key:4, src:Icons.PythonLogo, title:"Python"}
]

const backend = [
    {key:1, src:Icons.FastAPILogo, title:"FastAPI"},
    {key:2, src:Icons.FlaskLogo, title:"Flask"}
]

const database = [
    {key:1, src:Icons.MySQLLogo, title:"MySQL"},
    {key:2, src:Icons.MongoLogo, title:"MongoDB"},
    {key:3, src:Icons.SQLiteLogo, title:"SQLite"}
]

const othertools = [
    {key:1, src:Icons.GitLogo, title:"Git"},
    {key:2, src:Icons.GitHubLogo, title:"GitHub"},
    {key:3, src:Icons.DockerLogo, title:"Docker"}
]

const sections = [
  { title: "Programming Languages", data: progLanguage, color: "hover:bg-[#dcfd00]" },
  { title: "Frontend", data: frontend, color: "hover:bg-amber-400" },
  { title: "Backend", data: backend, color: "hover:bg-[#dcfd00]" },
  { title: "Databases", data: database, color: "hover:bg-amber-400" },
  { title: "Other Tools", data: othertools, color: "hover:bg-[#dcfd00]" },
];

function SkillsHolder() {
  return (
    <section className="w-full h-fit my-10 md:my-20 flex justify-center items-center">
            <div className="w-sm md:w-7xl relative inline-block overflow-hidden">
                {/* TOP */}
                <motion.div
                    className="absolute top-0 left-0 w-full h-1"
                    style={{
                    background: `repeating-linear-gradient(
                        90deg,
                        #dcfd00 0px,
                        #dcfd00 10px,
                        transparent 10px,
                        transparent 20px
                    )`
                    }}
                    animate={{ backgroundPosition: ["0px 0px", "40px 0px"] }}
                    transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                />

                {/* RIGHT */}
                <motion.div
                    className="absolute top-0 right-0 h-full w-1"
                    style={{
                    background: `repeating-linear-gradient(
                        180deg,
                        #dcfd00 0px,
                        #dcfd00 10px,
                        transparent 10px,
                        transparent 20px
                    )`
                    }}
                    animate={{ backgroundPosition: ["0px 0px", "0px 40px"] }}
                    transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                />

                {/* BOTTOM */}
                <motion.div
                    className="absolute bottom-0 left-0 w-full h-1"
                    style={{
                    background: `repeating-linear-gradient(
                        90deg,
                        #dcfd00 0px,
                        #dcfd00 10px,
                        transparent 10px,
                        transparent 20px
                    )`
                    }}
                    animate={{ backgroundPosition: ["40px 0px", "0px 0px"] }} // reverse
                    transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                />

                {/* LEFT */}
                <motion.div
                    className="absolute top-0 left-0 h-full w-1"
                    style={{
                    background: `repeating-linear-gradient(
                        180deg,
                        #dcfd00 0px,
                        #dcfd00 10px,
                        transparent 10px,
                        transparent 20px
                    )`
                    }}
                    animate={{ backgroundPosition: ["0px 40px", "0px 0px"] }} // reverse
                    transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                />

                {/* CONTENT */}
                <div className="relative py-6 text-white flex flex-col items-center justify-center">
                    <h1 className="text-5xl md:text-6xl font-black">- SKILLS -</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-10 lg:mx-0 lg:px-6 mt-4">
                        {sections.map((section, idx) => (
                            <div
                            key={idx}
                            className="p-5 bg-white/30 rounded-2xl border flex flex-col"
                            >
                            <h1 className="text-md md:text-xl font-black mb-3">
                                - {section.title} -
                            </h1>

                            <div className="flex flex-wrap gap-1 md:gap-4">
                                {section.data.map((item) => (
                                <div
                                    key={item.key}
                                    className={`w-15 md:w-20 h-15 md:h-20 m-3 rounded-2xl border-2 shadow-[6px_6px_0px_#000] bg-white flex justify-center items-center transition-all hover:shadow-none hover:translate-y-1 group relative ${section.color}`}
                                >
                                    <Image
                                    title={item.title}
                                    src={item.src}
                                    width={40}
                                    height={40}
                                    alt={item.title}
                                    />

                                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 hidden group-hover:block px-3 py-1 text-sm text-white bg-gray-800 rounded-md">
                                    {item.title}
                                    </div>
                                </div>
                                ))}
                            </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
    </section>
  )
}

export default SkillsHolder
