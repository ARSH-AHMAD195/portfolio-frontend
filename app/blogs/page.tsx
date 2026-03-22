import { main } from "motion/react-client";
import Navbar from "../components/Navbar";

function BlogPage() {
  return (
    <main className="w-full flex flex-col justify-between items-center overflow-x-hidden">
      <Navbar />
    </main>
  )
}

export default BlogPage;