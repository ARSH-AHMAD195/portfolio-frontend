'use client';

import Image from "next/image"
import {motion} from "motion/react"
import { Icons } from "../utils/images";

type Status = "completed" | "inProgress" | "planned";

interface ProjectDetails {
  pid: number;
  title: string;
  status: Status;
  image: string;
  tech_stack: string[];
  github_link?: string;
  detail?: string;
}

function ProjectCard( { project } : {project : ProjectDetails} ) {
  
  const statusStyles = {
    completed: {
      bg: "bg-green-300/40",
      text: "text-green-400",
      dot: "bg-green-400",
    },
    inProgress: {
      bg: "bg-yellow-300/40",
      text: "text-yellow-400",
      dot: "bg-yellow-400",
    },
    planned: {
      bg: "bg-blue-300/40",
      text: "text-blue-400",
      dot: "bg-blue-400",
    },
  }

  const status = project.status.toLowerCase();
  const styles = statusStyles[project.status];
  

  return (
    <div className="w-85 md:w-3xl lg:w-7xl h-fit p-3 md:p-10 rounded-2xl text-white bg-[#0a0a0a]">
        <div className="w-full mb-2 flex flex-col md:flex-row md:justify-between md:items-center">
          <div className="flex flex-col md:flex-row justify-between items-baseline">
            <h1 className="text-4xl md:text-6xl font-extrabold">{project.pid > 0 && project.pid < 10? "0" + project.pid.toString() : project.pid.toString()}</h1>
            <p className="text-md md:text-3xl ml-3">{project.title}</p>
          </div>
          <div className={`w-max-50 px-3 ml-3 flex justify-start items-center ring-2 text-md rounded-full font-extrabold ${styles.bg} ${styles.text}`}
          >
            <motion.div
              className={`w-2.5 h-2.5 mr-2 rounded-full ${styles.dot}`}
              animate={{ opacity: [0, 0.5, 1, 0.5, 0] }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            {project.status.toUpperCase()}
          </div>
        </div>
        <div className="md:flex ">
          <div className="w-full mb-2 rounded-2xl border-2">
            <Image className="w-full h-auto object-contain rounded-2xl border-white" src={project.image} priority width={400} height={250} alt={project.title}/>
          </div>
          <div className="md:w-120 md:ml-3 flex flex-col justify-between">
            <div className="mt-3 ">
              <div className="w-full mb-2 flex flex-wrap gap-2">
                {project.tech_stack?.map((item, index) => (
                  <div key={index}
                  className="w-max-30 px-3 bg-white/80 text-black rounded-full flex justify-center items-center">
                    {item}
                  </div>
                ))}
              </div>
              <div className="w-full mb-2">
                {project.detail}
              </div>
            </div>
            <div className="w-full mb-2">
              <a href={project.github_link} className="w-25 p-2 rounded-full outline-2 text-white flex justify-between items-center cursor-pointer hover:bg-white hover:text-black transition-all duration-300">
                <Image className="w-5 bg-white rounded-full" src={Icons.GitHubLogo} alt=""></Image>
                <p>Github</p>
              </a>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ProjectCard
