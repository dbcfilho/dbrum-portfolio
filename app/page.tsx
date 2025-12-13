import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import AboutUnified from "@/components/about-unified"
import Projects from "@/components/projects"
import Content from "@/components/content"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden max-w-full">
      <Navigation />
      <main className="overflow-x-hidden">
        <Hero />
        <AboutUnified />
        <Projects />
        <Content />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
