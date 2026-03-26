import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function ContactPage() {
  return (
    <main className="w-full flex flex-col justify-between items-center overflow-x-hidden">
      <Navbar />
      <Contact />
      <Footer />
    </main>
  )
}

export default ContactPage;
