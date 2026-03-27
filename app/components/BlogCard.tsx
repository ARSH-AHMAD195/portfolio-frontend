import React from 'react';
import { Blog, BlogData } from './BlogSection'; // Adjust path as needed

// Sub-component for individual Blog Cards
const BlogCard: React.FC<{ blog: Blog }> = ({ blog }) => {
    return (
        <div className="p-6 border rounded-2xl shadow-sm hover:shadow-md transition-shadow bg-[#0a0a0a] outline-2 outline-white/40">
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
        </div>
    );
};

export default BlogCard;