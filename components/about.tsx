export default function About() {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 relative">
      <div className="accent-line absolute top-0 left-0 right-0" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card rounded-lg p-6 sm:p-8 md:p-12 animate-in fade-in slide-in-from-bottom duration-700">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            About
          </h2>
          <div className="space-y-4 sm:space-y-6 text-gray-300 leading-relaxed text-base sm:text-lg">
            <p>
              I am a backend developer focused on Java with Spring Boot and Python with Django, building secure, well
              structured and reliable web applications. I enjoy working close to the core of systems, designing
              architecture, databases and APIs, and deploying solutions in Linux environments using Docker.
            </p>
            <p>
              I have hands on experience with real world projects, especially platforms with social impact, where
              reliability, organization and scalability truly matter. I do not just write code that works, I build
              solutions designed to last.
            </p>
            <p>
              I also work as an IT instructor, teaching Linux, MySQL and core computing concepts. This experience has
              strengthened my communication skills, architectural thinking and ability to make clear technical
              decisions, which are essential for strong team collaboration.
            </p>
            <p>
              I enjoy writing technical articles and sharing knowledge, reflecting my commitment to continuous learning
              and best practices. If you are looking for a backend developer with a strong Linux foundation, a security
              conscious mindset and clean, well designed code, I would be glad to connect.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
