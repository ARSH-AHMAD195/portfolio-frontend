import { main } from "motion/react-client";
import Navbar from "../components/Navbar";
import BlogSection from "../components/BlogSection";
import PageTransition from "../components/PageTransition";
import Footer from "../components/Footer";

function BlogPage() {
  return (
    <main className="w-full flex flex-col justify-between items-center overflow-x-hidden">
      <Navbar />
      <PageTransition>
        <BlogSection />
      </PageTransition>
      <Footer />
    </main>
  )
}

export default BlogPage;