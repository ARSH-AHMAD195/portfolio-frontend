import { main } from "motion/react-client";
import Navbar from "../components/Navbar";
import BlogSection from "../components/BlogSection";

function BlogPage() {
  return (
    <main className="w-full flex flex-col justify-between items-center overflow-x-hidden">
      <Navbar />
      <BlogSection />
    </main>
  )
}

export default BlogPage;