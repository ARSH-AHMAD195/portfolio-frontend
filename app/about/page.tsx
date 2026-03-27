import AboutSection from '../components/AboutSection'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import PageTransition from '../components/PageTransition'

function About() {
 

  return (
    <main className="w-full flex flex-col justify-between items-center overflow-x-hidden">
        <Navbar />
        <PageTransition>
          <AboutSection />
        </PageTransition>
        <Footer />
    </main>
  )
}

export default About