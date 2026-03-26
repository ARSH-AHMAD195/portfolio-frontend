"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import ProjectCard from "./ProjectCard";

// 🔹 Status type
type Status = "completed" | "inProgress" | "planned";

// 🔹 Frontend Model
interface ProjectDetails {
  pid: number;
  title: string;
  status: Status;
  image: string;
  tech_stack: string[];
  github_link?: string;
  detail?: string;
}

// 🔹 API Response Type (important!)
type ApiProject = {
  id: number;
  title: string;
  description: string;
  tech_stack: string;
  github: string;
  live_url: string;
  image_url: string;
  featured: boolean;
};

// 🔹 Mapper (outside component = better performance)
function mapProject(apiProject: ApiProject): ProjectDetails {
  return {
    pid: apiProject.id,
    title: apiProject.title,
    status: apiProject.featured ? "completed" : "inProgress",
    image: apiProject.image_url,
    tech_stack: apiProject.tech_stack
      ? apiProject.tech_stack.split(",").map((t) => t.trim())
      : [],
    github_link: apiProject.github || "",
    detail: apiProject.description || "",
  };
}

function ProjectHolder() {
  const [projects, setProjects] = useState<ProjectDetails[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("https://portfolio-backend-oyk9.onrender.com/projects");

        if (!res.ok) {
          throw new Error("Failed to fetch projects");
        }

        const data: ApiProject[] = await res.json();

        const formatted = data.map(mapProject);
        setProjects(formatted);
      } catch (err: any) {
        console.error(err);
        setError("Something went wrong while loading projects.");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section className="w-full h-fit bg-[#dcfd00] flex justify-center items-center">
      <div className="px-5 w-7xl">
        {/* 🔹 Header */}
        <div className="my-10 flex flex-col justify-between items-center text-sm md:text-lg">
          <h1 className="text-4xl md:text-6xl font-black">- PROJECTS -</h1>
          <p className="mt-2">
            “Built to{" "}
            <span className="px-2 rounded-md text-black font-bold bg-purple-400">
              solve
            </span>
            , designed to{" "}
            <span className="px-2 rounded-md text-black font-bold bg-amber-400">
              scale
            </span>
            .”
          </p>
        </div>

        {/* 🔹 Content */}
        <div className="flex flex-col justify-center items-center gap-10">
          {loading && <p className="text-lg font-semibold">Loading...</p>}

          {error && (
            <p className="text-red-600 font-semibold">{error}</p>
          )}

          {!loading && !error && projects.length === 0 && (
            <p>No projects found.</p>
          )}

          {!loading &&
            !error &&
            projects.map((project) => (
              <ProjectCard
                key={project.pid}
                project={project}
              />
            ))}
        </div>

        {/* 🔹 Button */}
        <div className="md:mx-20 my-10 flex justify-end items-center">
          <Link href={"/projects"}>
            <button className="mx-5 px-10 py-3 border-3 rounded-lg bg-purple-400 shadow-[4px_6px_0px_#000] cursor-pointer transition-all hover:shadow-[0px_0px_0px_#000] hover:translate-1">
              <span className="font-bold hover:font-black">
                View More
              </span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ProjectHolder;
