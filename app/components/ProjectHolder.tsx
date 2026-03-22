import ProjectCard from "./ProjectCard"


function ProjectHolder() {
  return (
    <section className="w-full h-fit bg-[#dcfd00] flex justify-center items-center">
       <div className="w-7xl">
            <div className="mx-20 mt-10 md:my-10 flex flex-col justify-between items-center text-sm md:text-lg">
                <h1 className="text-4xl md:text-6xl font-black">- PROJECTS -</h1>
                <p className="mt-2">“Built to <span className="px-2 rounded-md text-black font-bold bg-purple-400">solve</span>, designed to <span className="px-2 rounded-md text-black font-bold bg-amber-400">scale</span>.”</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-20 px-20">
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </div>
            <div className="mx-20 my-10 flex justify-end items-center">
                <a href="#">
                    <button className="mx-5 px-10 py-3 border-3 rounded-lg bg-purple-400 shadow-[4px_6px_0px_#000] cursor-pointer transition-all hover:shadow-[0px_0px_0px_#000] hover:translate-1">
                        <span className="font-bold hover:font-black">View More</span>
                    </button>
                </a>
            </div>
       </div>
    </section>
  )
}

export default ProjectHolder