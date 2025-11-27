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
              I'm a backend developer and increasingly fullstack who enjoys building web applications from the ground
              up. My go to tools are Java with Spring Boot and Python with Django, and I'm comfortable handling
              everything from database design to API endpoints. I work with Docker for containerization and have
              hands on experience deploying applications to AWS like environments.
            </p>
            <p>
              Recently, I've been focused on systems for social projects and NGOs platforms that track assisted
              individuals, automate communication flows (like WhatsApp birthday messages), and generate meaningful CSV
              and PDF reports. These aren't just CRUD apps; they solve real problems for organizations that need
              reliable, scalable solutions on tight budgets.
            </p>
            <p>
              Beyond development, I also work as an IT instructor. Teaching Linux, MySQL, and general computing to
              students of all ages has sharpened my ability to break down complex topics and communicate clearly. It's
              taught me patience, adaptability, and how to work with people from different backgrounds skills that
              translate directly to collaborating with teams and stakeholders.
            </p>
            <p>
              What drives me is writing clean, maintainable code that doesn't just work today but holds up tomorrow. I
              care deeply about security, scalability, and making sure what I build actually delivers business value. If
              you're looking for someone who brings both technical depth and a practical, security conscious mindset to
              backend development, let's talk.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
