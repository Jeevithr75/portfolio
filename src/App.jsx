import { useEffect, useState } from "react"

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal")

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show")
          }
        })
      },
      {
        threshold: 0.15,
      }
    )

    elements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* Navbar */}
      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

          <a
            href="#home"
            onClick={closeMenu}
            className="text-xl font-bold tracking-wide"
          >
            Jeevith<span className="text-blue-400">.</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden gap-7 text-sm text-gray-300 md:flex">
            <a href="#home" className="nav-link">Home</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#skills" className="nav-link">Skills</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#education" className="nav-link">Education</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl text-gray-300 md:hidden"
          >
            {menuOpen ? "✕" : "☰"}
          </button>

        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="border-t border-white/10 bg-slate-950 px-6 py-5 md:hidden">

            <div className="flex flex-col gap-5 text-gray-300">

              <a href="#home" onClick={closeMenu}>Home</a>
              <a href="#about" onClick={closeMenu}>About</a>
              <a href="#skills" onClick={closeMenu}>Skills</a>
              <a href="#projects" onClick={closeMenu}>Projects</a>
              <a href="#education" onClick={closeMenu}>Education</a>
              <a href="#contact" onClick={closeMenu}>Contact</a>

            </div>

          </div>
        )}
      </nav>

      {/* Hero */}
      <section
        id="home"
        className="flex min-h-screen items-center px-6 pt-20"
      >
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">

          <div className="reveal hero-text">

            <p className="mb-4 text-lg text-blue-400">
              Hello, I'm
            </p>

            <h1 className="text-5xl font-bold leading-tight md:text-7xl">
              Jeevith R
            </h1>

            <h2 className="mt-5 text-2xl font-semibold text-gray-300 md:text-3xl">
              Computer Science Student
            </h2>

            <p className="mt-6 max-w-xl leading-7 text-gray-400">
              I am a Computer Science student interested in software
              development, artificial intelligence and problem solving.
              I enjoy learning new technologies and building practical projects.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <a
                href="#projects"
                className="animated-button rounded-lg bg-blue-600 px-6 py-3 font-medium hover:bg-blue-500"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="animated-button rounded-lg border border-white/20 px-6 py-3 font-medium hover:border-blue-400 hover:text-blue-400"
              >
                Contact Me
              </a>

            </div>

          </div>

          {/* Profile */}
          <div className="reveal flex justify-center">

            <div className="relative">

              <div className="profile-glow absolute inset-0 rounded-full bg-blue-500/20 blur-3xl"></div>

              <div className="profile-circle relative flex h-64 w-64 items-center justify-center rounded-full border border-blue-400/30 bg-slate-900 shadow-2xl md:h-80 md:w-80">

                <div className="text-center">

                  <p className="text-6xl font-bold text-blue-400">
                    JR
                  </p>

                  <p className="mt-3 text-sm text-gray-400">
                    CSE Student
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="scroll-mt-20 px-6 py-24"
      >
        <div className="reveal mx-auto max-w-4xl text-center">

          <p className="mb-2 text-sm uppercase tracking-widest text-blue-400">
            About Me
          </p>

          <h2 className="section-title text-4xl font-bold md:text-5xl">
            A little about me
          </h2>

          <p className="mt-8 leading-8 text-gray-400">
            I am currently pursuing B.Tech in Computer Science and Engineering
            at REVA University, Bengaluru. I am building my foundation in
            programming, web development, databases and artificial intelligence.
            I believe in learning by building projects and continuously improving
            my technical and problem-solving skills.
          </p>

        </div>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="scroll-mt-20 bg-slate-900 px-6 py-24"
      >
        <div className="mx-auto max-w-6xl">

          <div className="reveal text-center">

            <p className="mb-2 text-sm uppercase tracking-widest text-blue-400">
              Skills
            </p>

            <h2 className="section-title text-4xl font-bold md:text-5xl">
              Technologies I work with
            </h2>

          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 md:grid-cols-3">

            {[
              "C Programming",
              "Java",
              "Python",
              "HTML & CSS",
              "JavaScript",
              "React",
              "Git & GitHub",
              "SQL",
              "FastAPI",
              "Machine Learning",
              "Problem Solving",
              "Data Structures",
            ].map((skill, index) => (

              <div
                key={skill}
                className="reveal skill-card rounded-xl border border-white/10 bg-slate-950 p-6 text-center"
                style={{
                  transitionDelay: `${index * 60}ms`,
                }}
              >
                <h3 className="font-semibold text-gray-200">
                  {skill}
                </h3>
              </div>

            ))}

          </div>

        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="scroll-mt-20 px-6 py-24"
      >
        <div className="mx-auto max-w-6xl">

          <div className="reveal text-center">

            <p className="mb-2 text-sm uppercase tracking-widest text-blue-400">
              Projects
            </p>

            <h2 className="section-title text-4xl font-bold md:text-5xl">
              Things I've built
            </h2>

          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">

            {/* LandPulse */}
            <div
              className="reveal project-card rounded-2xl border border-white/10 bg-slate-900 p-7"
              style={{
                transitionDelay: "100ms",
              }}
            >

              <p className="text-sm text-blue-400">
                Project 01
              </p>

              <h3 className="mt-3 text-2xl font-bold">
                LandPulse
              </h3>

              <p className="mt-4 leading-7 text-gray-400">
                A predictive analytics system designed to identify
                potential delays in land acquisition processes using
                backend APIs and machine learning concepts.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">

                <span className="tag">Python</span>
                <span className="tag">FastAPI</span>
                <span className="tag">Machine Learning</span>
                <span className="tag">PostgreSQL</span>

              </div>

              <a
                href="https://github.com/chiranth31/LandPulse"
                target="_blank"
                rel="noreferrer"
                className="mt-7 inline-block text-sm font-medium text-blue-400 hover:text-blue-300"
              >
                View on GitHub →
              </a>

            </div>

            {/* LeetCode */}
            <div
              className="reveal project-card rounded-2xl border border-white/10 bg-slate-900 p-7"
              style={{
                transitionDelay: "200ms",
              }}
            >

              <p className="text-sm text-blue-400">
                Project 02
              </p>

              <h3 className="mt-3 text-2xl font-bold">
                LeetCode Solutions
              </h3>

              <p className="mt-4 leading-7 text-gray-400">
                A programming practice repository containing solutions
                created while improving problem-solving, algorithms and
                data structure skills.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">

                <span className="tag">C</span>
                <span className="tag">Algorithms</span>
                <span className="tag">Problem Solving</span>

              </div>

              <a
                href="https://github.com/dipithsm356-cloud/leetcode-solutions"
                target="_blank"
                rel="noreferrer"
                className="mt-7 inline-block text-sm font-medium text-blue-400 hover:text-blue-300"
              >
                View on GitHub →
              </a>

            </div>

          </div>

        </div>
      </section>

      {/* Education */}
      <section
        id="education"
        className="scroll-mt-20 bg-slate-900 px-6 py-24"
      >
        <div className="reveal mx-auto max-w-4xl">

          <div className="text-center">

            <p className="mb-2 text-sm uppercase tracking-widest text-blue-400">
              Education
            </p>

            <h2 className="section-title text-4xl font-bold md:text-5xl">
              My education
            </h2>

          </div>

          <div className="education-card mt-12 rounded-2xl border border-white/10 bg-slate-950 p-8">

            <div className="flex flex-col justify-between gap-4 md:flex-row">

              <div>

                <p className="text-sm text-blue-400">
                  2025 - Present
                </p>

                <h3 className="mt-2 text-2xl font-bold">
                  B.Tech Computer Science & Engineering
                </h3>

                <p className="mt-2 text-gray-400">
                  REVA University, Bengaluru
                </p>

              </div>

              <div className="flex items-start">

                <span className="rounded-full border border-blue-400/30 px-4 py-2 text-sm text-blue-400">
                  Undergraduate
                </span>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="scroll-mt-20 px-6 py-24"
      >
        <div className="reveal mx-auto max-w-3xl text-center">

          <p className="mb-2 text-sm uppercase tracking-widest text-blue-400">
            Contact
          </p>

          <h2 className="section-title text-4xl font-bold md:text-5xl">
            Let's connect
          </h2>

          <p className="mt-6 leading-7 text-gray-400">
            I'm always interested in learning, collaborating and
            working on interesting technology projects.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">

            {/* Replace with your real email */}
            <a
              href="mailto:your-email@example.com"
              className="contact-button rounded-lg bg-blue-600 px-6 py-3 font-medium hover:bg-blue-500"
            >
              Email Me
            </a>

            <a
              href="https://github.com/Jeevithr75"
              target="_blank"
              rel="noreferrer"
              className="contact-button rounded-lg border border-white/20 px-6 py-3 font-medium hover:border-blue-400 hover:text-blue-400"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/jeevith-r75/"
              target="_blank"
              rel="noreferrer"
              className="contact-button rounded-lg border border-white/20 px-6 py-3 font-medium hover:border-blue-400 hover:text-blue-400"
            >
              LinkedIn
            </a>

            {/* Resume */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="contact-button rounded-lg border border-white/20 px-6 py-3 font-medium hover:border-blue-400 hover:text-blue-400"
            >
              Resume
            </a>

          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-8 text-center">

        <p className="text-sm text-gray-500">
          © 2026 Jeevith R. Built with React & Tailwind CSS.
        </p>

        <div className="mt-3 flex justify-center gap-5 text-sm text-gray-500">

          <a
            href="https://github.com/Jeevithr75"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-400"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/jeevith-r75/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-400"
          >
            LinkedIn
          </a>

        </div>

      </footer>

    </div>
  )
}

export default App