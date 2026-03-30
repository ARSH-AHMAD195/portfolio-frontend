'use client';

import MarqueeComponent from './MarqueeComponent'
import Image from 'next/image'
import { Icons } from "../utils/images"
import {motion} from "motion/react"

function AboutSection() {
    const Texts = [
        "Web Apps",
        "Full-Stack",
        "Frontend Dev",
        "Backend Dev",
        "API Design",
        "System Design",
        "UI Engineering",
        "Performance",
        "Scalable Systems",
        "Clean Code",
        "Debugging",
        "Optimization",
        "Dev Tools",
        "Problem Solving",
    ]
    
    const Experience = [
        {   
            role : "Backend & API Developer Intern",
            company : "IBOTIX",
            job_type : "INTERNSHIP",
            duration : "JUNE 2025 – AUGUST 2025",
            desc: ["Spearheaded and managed the backend & API development team for the project, reducing AI module response latency by 20%."],
            tags: ["FastAPI", "Python", "REST APIs", "Backend", "AI Optimization"]
        },
        {   
            role : " Frontend Developer Intern",
            company : "RHYNO EV",
            job_type : "INTERNSHIP",
            duration : "JULY 2024 – AUGUST 2024",
            desc: ["Ideated and developed a responsive website for Rhyno EV using HTML, CSS, and JavaScript.","Analyzed project requirements and created wireframes for websites."],
            tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "UI/UX"]
        }
    ]
    
    return (
        <section className="w-full h-fit md:h-auto my-5 md:my-20 flex flex-col items-center">
            <div className='w-[90vw] md:w-3xl lg:w-6xl h-fit text-white flex flex-col justify-start'>
                <h1 className='text-[8px] md:text-sm text-white/40'>ABOUT</h1>
                <div className='flex justify-start items-center'>
                    <div className="text-2xl md:text-[4vw] font-extrabold leading-none tracking-tight md:tracking-normal">
                        ABOUT
                    </div>
                    <div className="text-2xl md:text-[4vw] ml-5 lg:ml-15 font-extrabold leading-none md:text-transparent stroke-text">
                        ME
                    </div>
                </div>
                <div className='text-[10px] md:text-[12px] lg:text-lg text-white/40'>
                    Software Engineer focused on Web Applications, System Architecture, and Developer Tools. Building systems that behave nicely, simplifying complex concepts, and sharing knowledge with the developer community.
                </div>
            </div>

            <MarqueeComponent>
                {Texts.map((value, idx) => (
                    <span key={idx} className="h-10 p-3 flex items-center">
                        {value.toUpperCase()}
                        <Image src={Icons.Burst} 
                        height={20} 
                        width={20} 
                        alt="separator"
                        className="inline-block mx-6">
                        </Image>
                    </span>
                ))}
            </MarqueeComponent>

            <motion.div 
            initial={{
            opacity:0,
            y: 100
            }}
            whileInView={{
            opacity:1,
            y: 0,
            transition:{
                duration:0.8,
                delay:0.5,
                ease: "easeIn"
            }
            }}
            viewport={{
            once:true
            }}
            className='w-[90vw] md:w-3xl lg:w-6xl m-5 md:my-10 p-10 text-white bg-[#0a0a0a] border border-white/30 rounded-2xl flex flex-col-reverse lg:flex-row justify-center lg:justify-start items-center'>
                <div className='mt-5'>
                    <h1 className='text-4xl md:text-[5vw] font-extrabold'>Arsh <span className='md:text-transparent stroke-text'>Ahmad</span></h1>
                    <div className='h-fit mt-3 text-[10px] md:text-sm text-white/40 flex flex-col justify-evenly'>
                        <p className='my-2'>Hi, I’m Arsh Ahmad, a software engineer focused on building fast, scalable, and reliable digital products.</p>
                        <p className='my-2'>I specialize in full-stack development, with a strong emphasis on performance, clean architecture, and writing maintainable code. I enjoy working across the stack — from designing intuitive user interfaces to building efficient backend systems — ensuring that applications don’t just work locally, but perform seamlessly in real-world environments.</p>
                        <p className='my-2 hidden lg:block'>With a solid foundation in Data Structures and Algorithms (DSA) and problem-solving, I approach development with a focus on efficiency, scalability, and clarity. I’m particularly interested in simplifying complex technical concepts and building solutions that are both practical and impactful.</p>
                        <p className='my-2 hidden lg:block'>Beyond developing, you'll find me creating designs, exploring new tech stacks, or mentoring developers as they journey from "Why is this breaking?!" to "Oh wow, it works!"</p>
                        <p className='my-2 hidden lg:block'>I’m always looking for opportunities to work on meaningful projects, collaborate with talented teams, and build products that make a real difference.</p>
                    </div>
                </div>
                <div className='h-fit lg:ml-10 outline-5 outline-[#dcfd00] rounded-2xl'>
                    <Image src={Icons.DisplayPicture} className="w-600 rounded-2xl" alt=''></Image>
                </div>
            </motion.div>


            <div className='w-[90vw] md:w-3xl lg:w-6xl h-fit text-white flex flex-col justify-start'>
                <div className='mt-5'>
                    <motion.h1 
                    initial={{
                        opacity:0
                    }}
                    whileInView={{
                    opacity:1,
                    y: 0,
                    transition:{
                        duration:0.8,
                        ease: "easeIn"
                    }
                    }}
                    viewport={{
                    once:true,
                    margin: "0px 0px -100px 0px"
                    }}
                    className='text-[8px] md:text-sm text-white/40'>EXPERINCE</motion.h1>
                    <motion.h1 
                    initial={{
                        opacity:0
                    }}
                    whileInView={{
                    opacity:1,
                    y: 0,
                    transition:{
                        duration:0.8,
                        delay:0.2,
                        ease: "easeIn"
                    }
                    }}
                    viewport={{
                    once:true,
                    margin: "0px 0px -100px 0px"
                    }}
                    className='text-2xl md:text-[4vw] font-extrabold'>PROFESSIONAL <span className='md:text-transparent stroke-text'>EXPERINCE</span></motion.h1>
                    <motion.div 
                    initial={{
                        opacity:0
                    }}
                    whileInView={{
                    opacity:1,
                    y: 0,
                    transition:{
                        duration:0.8,
                        delay:0.4,
                        ease: "easeIn"
                    }
                    }}
                    viewport={{
                    once:true,
                    margin: "0px 0px -100px 0px"
                    }}
                    className='h-fit mt-3 text-[10px] md:text-sm text-white/40 flex flex-col justify-evenly'>
                        A journey of my development career, building products and solving problems.
                    </motion.div>
                </div>
            </div>

            { Experience.map((exp, idx) => (
                <div key={idx} className='w-[90vw] md:w-3xl lg:w-6xl h-auto mt-5 p-5 text-white bg-[#0a0a0a] border border-white/30 rounded-2xl'>
                    <div className='flex flex-col md:flex-row justify-between'>
                        <div>
                            <h1 className='text-xl font-extrabold'>{exp.role}</h1>
                            <p className='text-md text-[#dcfd00]'>{exp.company}</p>
                        </div>
                        <div className='flex flex-col justify-evenly items-start md:items-end'>
                            <h1 className='mt-3 md:mt-0 px-3 rounded-md text-sm bg-[#dcfd00]/20 text-[#dcfd00]'>{exp.job_type}</h1>
                            <p className='text-sm text-white/40'>{exp.duration}</p>
                        </div>
                    </div>
                    <div className='py-5 text-white/50 text-[14px] lg:text-[18px]'>
                        {exp.desc.map((line) => (
                            <p key={line}>{line}</p>
                        ))}
                    </div>
                    <div className='flex flex-wrap gap-2 text-[12px] lg:text-[16px]'>
                        {exp.tags.map((tag) => (
                            <div key={tag} className='w-fit px-3 rounded-2xl bg-white/40 text-white'>{tag}</div>
                        ))}
                    </div>
                </div>
            ))}
            
        </section>
    )
}

export default AboutSection