import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Content from "@/components/content"
import Credentials from "@/components/credentials"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Content />
        <Credentials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
