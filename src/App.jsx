import "./App.css";

function App() {
  return (
    <div className="portfolio">

      {/* ================= NAVBAR ================= */}
      <nav className="navbar">

        <div className="logo">
          <span className="logo-mark">RP</span>
          <span>Rutuja Patil</span>
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>

        <a
          href="/Rutuja_Patil_resume1.pdf"
          className="resume-btn"
          download
        >
          ↓ &nbsp; Download Resume
        </a>

        <button className="menu-btn" aria-label="Open menu">
          ☰
        </button>
      </nav>


      {/* ================= HERO ================= */}
      <section id="home" className="hero">

        <div className="hero-content">

          <p className="hero-greeting">
            HELLO, I'M
          </p>

          <h1>
             <span>Rutuja Patil</span>
          </h1>

          <h2>
            Software Developer
          </h2>

          <p className="hero-skills">
            Python <b>•</b> React.js <b>•</b> FastAPI
            <b>•</b> Flask <b>•</b> Generative AI
            <b>•</b> Automation
          </p>

          <p className="hero-description">
            B.Sc. Computer Science graduate with hands-on experience
            in web development, backend APIs, automation, and
            AI-powered applications. I enjoy building practical,
            scalable, and user-focused software solutions.
          </p>

          <div className="hero-buttons">

            <a href="#projects" className="btn primary-btn">
              View My Projects →
            </a>

            <a
              href="/Rutuja_Patil_resume1.pdf"
              className="btn outline-btn"
              download
            >
              Download Resume ↓
            </a>

          </div>

          <div className="social-links">

            <a
              href="https://github.com/Rutuja0912"
              target="_blank"
              rel="noreferrer"
            >
              ◉ GitHub
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              in &nbsp; LinkedIn
            </a>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=rutujapatil12022005@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
               ✉ Email
            </a>

          </div>

        </div>


        {/* ================= HERO VISUAL ================= */}
        <div className="hero-visual">

          <div className="glow glow-one"></div>
          <div className="glow glow-two"></div>

          <div className="tech-orb orb-one">
            Python
          </div>

          <div className="tech-orb orb-two">
            React
          </div>

          <div className="tech-orb orb-three">
            FastAPI
          </div>

          <div className="code-window">

            <div className="window-header">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="code-content">

              <p>
                <span>const</span> developer = {"{"}
              </p>

              <p className="indent">
                name: <strong>"Rutuja"</strong>,
              </p>

              <p className="indent">
                role: <strong>"Software Developer"</strong>,
              </p>

              <p className="indent">
                skills: [
              </p>

              <p className="indent-two">
                "Python",
              </p>

              <p className="indent-two">
                "React.js",
              </p>

              <p className="indent-two">
                "Generative AI"
              </p>

              <p className="indent">
                ]
              </p>

              <p>{"}"}</p>

              <p className="cursor">
                _
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= ABOUT ================= */}
      <section id="about" className="section">

        <h2>About Me</h2>

        <p>
          I am a B.Sc. Computer Science graduate with a strong interest
          in software development and Generative AI. I have hands-on
          experience building web applications, backend APIs,
          automation workflows, and AI-powered solutions.
        </p>

        <p>
          My technical experience includes Python, Java, JavaScript,
          React.js, Flask, FastAPI, MySQL, REST APIs, Playwright,
          Git and Generative AI technologies. I enjoy learning new
          technologies and building practical software solutions.
        </p>

      </section>


      {/* ================= SKILLS ================= */}
      <section id="skills" className="section">

        <h2>Technical Skills</h2>

        <div className="skills-grid">

          <div className="skill-card">
            <h3>Programming</h3>
            <p>
              Python, Java, JavaScript
            </p>
          </div>

          <div className="skill-card">
            <h3>Frontend</h3>
            <p>
              HTML5, CSS3, Bootstrap, React.js
            </p>
          </div>

          <div className="skill-card">
            <h3>Backend</h3>
            <p>
              Flask, FastAPI, REST APIs
            </p>
          </div>

          <div className="skill-card">
            <h3>Database</h3>
            <p>
              MySQL, SQL
            </p>
          </div>

          <div className="skill-card">
            <h3>Generative AI</h3>
            <p>
              LLMs, VLMs, Prompt Engineering,
              AI-powered Applications
            </p>
          </div>

          <div className="skill-card">
            <h3>Tools & Automation</h3>
            <p>
              Git, GitHub, Playwright, VS Code,
              Ollama
            </p>
          </div>

        </div>

      </section>


      {/* ================= PROJECTS ================= */}
      <section id="projects" className="section">

        <h2>Featured Projects</h2>

        <div className="projects-grid">

          {/* OmniSight */}
          <div className="project-card">

            <h3>
              OmniSight – Multimodal UI Self-Healing & RPA Agent
            </h3>

            <p>
              AI-powered system designed to analyze UI screenshots
              and DOM information, identify interface issues, and
              generate potential fixes for automated UI testing.
            </p>

            <p className="project-tech">
              <strong>Technologies:</strong> Python, FastAPI,
              Playwright, VLM, Ollama, React.js
            </p>

            <ul>
              <li>Implemented FastAPI backend APIs.</li>
              <li>
                Integrated screenshot and DOM based UI analysis.
              </li>
              <li>
                Worked with local LLaVA VLM through Ollama.
              </li>
              <li>
                Automated UI testing using Playwright.
              </li>
            </ul>

          </div>


          {/* FairShare */}
          <div className="project-card">

            <h3>
              FairShare – Expense Management System
            </h3>

            <p>
              A web-based expense management application that
              helps users manage and track shared expenses efficiently.
            </p>

            <p className="project-tech">
              <strong>Technologies:</strong> Python, Flask,
              MySQL, HTML, Bootstrap
            </p>

            <ul>
              <li>Developed backend functionality using Flask.</li>
              <li>
                Designed and managed MySQL database operations.
              </li>
              <li>
                Created responsive web pages using HTML and Bootstrap.
              </li>
            </ul>

          </div>


          {/* Her Comfort */}
          <div className="project-card">

            <h3>
              Her Comfort – E-commerce Website
            </h3>

            <p>
              An e-commerce web application for browsing products,
              managing customer information and placing orders.
            </p>

            <p className="project-tech">
              <strong>Technologies:</strong> Python, Flask,
              MySQL, HTML, Bootstrap, JavaScript
            </p>

            <ul>
              <li>Implemented product and order management.</li>
              <li>Integrated MySQL database operations.</li>
              <li>Developed customer checkout functionality.</li>
            </ul>

          </div>

        </div>

      </section>


      {/* ================= EXPERIENCE ================= */}
      <section id="experience" className="section">

        <h2>Experience</h2>

        <div className="experience-card">

          <h3>Frontend Developer Intern</h3>

          <h4>CodeWonders Tech LLP</h4>

          <p>
            Frontend development internship focused on building
            web interfaces and understanding modern web development
            practices.
          </p>

          <ul>
            <li>
              Worked with React.js and web development technologies.
            </li>

            <li>
              Developed and improved responsive user interfaces.
            </li>

            <li>
              Worked with HTML, CSS, Bootstrap and JavaScript.
            </li>

            <li>
              Collaborated on practical development tasks.
            </li>
          </ul>

        </div>


        <div className="experience-card">

          <h3>Generative AI Engineering Intern</h3>

          <h4>Infotact Solutions</h4>

          <p>
            Worked on Generative AI engineering concepts and
            multimodal AI applications as part of a project-based
            internship.
          </p>

          <ul>
            <li>
              Worked with Generative AI and multimodal AI concepts.
            </li>

            <li>
              Contributed to the OmniSight self-healing UI project.
            </li>

            <li>
              Worked with FastAPI, VLMs and automation workflows.
            </li>

            <li>
              Used Git and GitHub for collaborative development.
            </li>
          </ul>

        </div>

      </section>


      {/* ================= EDUCATION ================= */}
      <section id="education" className="section">

        <h2>Education</h2>

        <div className="education-card">

          <h3>
            Bachelor of Science in Computer Science
          </h3>

          <h4>
            Vivekanand College, Kolhapur
          </h4>

          <p>
            B.Sc. Computer Science Graduate
          </p>

        </div>

      </section>


      {/* ================= CONTACT ================= */}
      <section id="contact" className="section">

        <h2>Let's Connect</h2>

        <p>
          I am actively looking for opportunities in software
          development, web development and Generative AI.
        </p>

        <p>
          If you are looking for a motivated developer who enjoys
          learning and building practical solutions, feel free to
          connect with me.
        </p>

        <div className="contact-links">

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=rutujapatil12022005@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            ✉ Email
          </a>

          <a
            href="https://github.com/Rutuja0912"
            target="_blank"
            rel="noreferrer"
          >
            ◉ GitHub
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
          >
            in LinkedIn
          </a>

        </div>

      </section>


      {/* ================= FOOTER ================= */}
      <footer className="footer">

        <p>
          © 2026 Rutuja Patil. All rights reserved.
        </p>

        <p>
          Software Developer | Generative AI Enthusiast
        </p>

      </footer>

    </div>
  );
}

export default App;