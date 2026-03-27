import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PageTransition from "../components/PageTransition";

function ContactPage() {
  return (
    <main className="w-full flex flex-col justify-between items-center overflow-x-hidden">
      <Navbar />
      <PageTransition>
        <Contact />
      </PageTransition>
      <Footer />
    </main>
  )
}

export default ContactPage;
