'use client';
import React from 'react';
import { Blog, BlogData } from './BlogSection';
import { motion } from "motion/react"
// Sub-component for individual Blog Cards
const BlogCard: React.FC<{ blog: Blog }> = ({ blog }) => {
    return (
        <motion.div 
        initial={{
        opacity:0,
        }}
        whileInView={{
        opacity:1,
        transition:{
            duration:1,
            delay:0.2,
            ease: "easeIn"
        }
        }}
        viewport={{
        once:true
        }}
        className="p-6 border rounded-2xl shadow-sm hover:shadow-md bg-[#0a0a0a] outline-2 outline-white/40 transition-all duration-500 hover:invert">
            <h2 className="text-xl text-white font-extrabold">{blog.title}</h2>
            <span className="text-sm text-[#dcfd00]/40">{blog.date}</span>
            <p className="text-white/40 mt-5 mb-4">{blog.desc}</p>
            <div className="flex flex-wrap gap-2">
                {blog.tags.map((tag) => (
                    <span 
                        key={tag} 
                        className="px-3 py-1 bg-[#dcfd00]/20 text-[#dcfd00] text-xs font-semibold rounded-md"
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </motion.div>
    );
};

export default BlogCard;