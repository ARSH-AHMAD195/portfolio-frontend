import React from 'react'
import BlogCard from './BlogCard';
    
export interface Blog {
    date: string;
    title: string;
    desc: string;
    tags: string[];
}

export const BlogData: Blog[] = [
    {
        date: "March 27, 2026",
        title: "The Rise of Agentic Workflows: Beyond the Prompt",
        desc: "In 2026, we're moving past simple 'chat' interfaces. Explore how autonomous AI agents are now handling complex, multi-step projects with minimal human intervention.",
        tags: ["AI", "Automation", "Future of Work"]
    },
    {
        date: "March 22, 2026",
        title: "Green Code: Why Efficiency is the New SEO",
        desc: "As data centers consume more power than ever, developers are turning to 'Carbon-Aware Computing' to optimize code for environmental impact and performance.",
        tags: ["Sustainability", "WebDev", "TechTrends"]
    },
    {
        date: "March 15, 2026",
        title: "Spatial UI: Designing for the Post-Screen Era",
        desc: "With the latest lightweight AR glasses hitting the mainstream, we dive into how user interfaces are stepping off our phones and into our physical environments.",
        tags: ["UX Design", "AR", "Spatial Computing"]
    },
    {
        date: "March 10, 2026",
        title: "The Human Premium: Why Soft Skills Matter More in 2026",
        desc: "As technical tasks become increasingly automated, empathy, critical thinking, and ethical judgment have become the most valuable assets in the job market.",
        tags: ["Career", "Soft Skills", "AI Strategy"]
    }
];

function BlogSection() {
  return (
    <section className="w-full h-fit md:h-screen my-5 px-3 flex flex-col-reverse md:flex-row justify-center items-center">
        <div className="w-full md:w-7xl h-auto px-5 md:px-none flex flex-col justify-evenly">
            <div className="w-full h-fit my-5 text-white">
                <h1 className="text-[12px] font-extralight">BLOGS</h1>
                <h1 className="font-extrabold text-4xl md:text-6xl">Opinions & Thoughts</h1>
            </div>
            <div className='w-full mt-5'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {BlogData.map((blog, index) => (
                        <BlogCard key={index} blog={blog} />
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default BlogSection