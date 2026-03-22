function ProjectCard() {
  return (
    <div className="w-85 h-100 p-5 border-2 bg-white shadow-[4px_4px_0px]">
        <div className="w-full mb-2 border">
          project name & status
        </div>
        <div className="w-full h-40 mb-2 border">
          Image
        </div>
        <div className="w-full mb-2 border">
          tech stack
        </div>
        <div className="w-full mb-2 border">
          description
        </div>
        <div className="w-full mb-2 border">
          github CTA & details
        </div>
    </div>
  )
}

export default ProjectCard