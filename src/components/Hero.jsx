import { motion } from 'framer-motion'
import { ArrowRight, GitFork, Link2, Mail, Terminal } from 'lucide-react'
import './Hero.css'

const BASE = import.meta.env.BASE_URL

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: [0.25, 0.46, 0.45, 0.94] }
})

const codeLines = [
  { prefix: 'const', name: ' developer', eq: ' =', end: ' {' },
  { indent: true, key: 'name', val: '"Kunal Nale"' },
  { indent: true, key: 'role', val: '"Full-Stack Developer"' },
  { indent: true, key: 'stack', val: '["React", "Node.js", "Express", "MongoDB"]' },
  { indent: true, key: 'location', val: '"Pune, India"' },
  { prefix: '}', val: '' },
  { blank: true },
  { prefix: 'developer', name: '.build(', rest: '"production-ready apps")', end: '' },
]

export default function Hero() {
  const scrollToProjects = () => {
    const el = document.getElementById('projects')
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' })
  }
  const scrollToContact = () => {
    const el = document.getElementById('contact')
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' })
  }

  return (
    <section id="home" className="hero">
      {/* Ambient glow orbs */}
      <div className="hero-orb hero-orb-1" aria-hidden="true" />
      <div className="hero-orb hero-orb-2" aria-hidden="true" />

      <div className="container hero-container">
        {/* LEFT — Text */}
        <div className="hero-content">
          <motion.div className="hero-eyebrow" {...fadeUp(0.1)}>
            <span className="eyebrow-dot" />
            Full-Stack Developer
          </motion.div>

          <motion.h1 className="hero-heading" {...fadeUp(0.22)}>
            Hi, I'm{' '}
            <span className="hero-name">Kunal Nale.</span>
          </motion.h1>

          <motion.p className="hero-subheading" {...fadeUp(0.36)}>
            I build scalable, responsive and{' '}
            <span className="highlight">production-ready</span> web applications
            using the modern JavaScript stack.
          </motion.p>

          <motion.p className="hero-description" {...fadeUp(0.46)}>
            Specializing in React.js frontends, Node.js/Express.js backends,
            RESTful API design, and MongoDB &amp; PostgreSQL database systems.
            Focused on clean architecture and real-world performance.
          </motion.p>

          <motion.div className="hero-ctas" {...fadeUp(0.56)}>
            <button className="btn btn-primary" onClick={scrollToProjects}>
              Explore My Work
              <ArrowRight size={16} className="arrow" />
            </button>
            <button className="btn btn-secondary" onClick={scrollToContact}>
              Contact Me
            </button>
          </motion.div>

          <motion.div className="hero-social" {...fadeUp(0.66)}>
            <a href="https://github.com/Nale-kunal" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
              <GitFork size={19} />
            </a>
            <a href="https://www.linkedin.com/in/kunal-nale/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
              <Link2 size={19} />
            </a>
            <a href="mailto:nalekunal343@gmail.com" className="social-link" aria-label="Email">
              <Mail size={19} />
            </a>
            <span className="social-divider" />
            <a
              href={`${BASE}certs/Kunal_Nale_Resume.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost resume-link"
              aria-label="View resume"
            >
              View Resume ↗
            </a>
          </motion.div>
        </div>

        {/* RIGHT — Developer Visual */}
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          aria-hidden="true"
        >
          <div className="code-window">
            <div className="code-window-header">
              <span className="dot red" />
              <span className="dot yellow" />
              <span className="dot green" />
              <span className="code-window-title">
                <Terminal size={12} />
                developer.js
              </span>
            </div>
            <div className="code-body">
              <div className="code-line">
                <span className="code-keyword">const</span>
                <span className="code-name"> developer</span>
                <span className="code-punct"> = {`{`}</span>
              </div>
              <div className="code-line indent">
                <span className="code-key">name</span>
                <span className="code-punct">: </span>
                <span className="code-string">"Kunal Nale"</span>
                <span className="code-punct">,</span>
              </div>
              <div className="code-line indent">
                <span className="code-key">role</span>
                <span className="code-punct">: </span>
                <span className="code-string">"Full-Stack Developer"</span>
                <span className="code-punct">,</span>
              </div>
              <div className="code-line indent">
                <span className="code-key">stack</span>
                <span className="code-punct">: [</span>
                <span className="code-string">"React"</span>
                <span className="code-punct">, </span>
                <span className="code-string">"Node.js"</span>
                <span className="code-punct">, </span>
                <span className="code-string">"MongoDB"</span>
                <span className="code-punct">],</span>
              </div>
              <div className="code-line indent">
                <span className="code-key">focus</span>
                <span className="code-punct">: </span>
                <span className="code-string">"clean architecture"</span>
                <span className="code-punct">,</span>
              </div>
              <div className="code-line indent">
                <span className="code-key">open</span>
                <span className="code-punct">: </span>
                <span className="code-boolean">true</span>
                <span className="code-punct">,</span>
              </div>
              <div className="code-line">
                <span className="code-punct">{`}`}</span>
              </div>
              <div className="code-line">&nbsp;</div>
              <div className="code-line">
                <span className="code-name">developer</span>
                <span className="code-punct">.</span>
                <span className="code-fn">build</span>
                <span className="code-punct">(</span>
                <span className="code-string">"great products"</span>
                <span className="code-punct">)</span>
              </div>
              <div className="code-line code-output">
                <span className="code-comment">// → 🚀 Production deployed</span>
              </div>
              <div className="code-cursor-line">
                <span className="code-comment">// &gt; _</span>
                <span className="typing-cursor" />
              </div>
            </div>
          </div>

          {/* Floating stats */}
          <motion.div
            className="floating-stat stat-1"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span className="stat-value">~30%</span>
            <span className="stat-label">API speed gain</span>
          </motion.div>

          <motion.div
            className="floating-stat stat-2"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          >
            <span className="stat-value">1000+</span>
            <span className="stat-label">records managed</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Highlights strip */}
      <motion.div
        className="hero-highlights"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <div className="container highlights-inner">
          <div className="highlight-item">
            <span className="hi-value">B.E.</span>
            <span className="hi-label">Computer Engineering · CGPA 7.7</span>
          </div>
          <div className="hi-sep" />
          <div className="highlight-item">
            <span className="hi-value">Tech Mahindra</span>
            <span className="hi-label">Assoc. Technical Support · 2025–2026</span>
          </div>
          <div className="hi-sep" />
          <div className="highlight-item">
            <span className="hi-value">Juriq.in</span>
            <span className="hi-label">Legal Tech · ~30% faster APIs</span>
          </div>
          <div className="hi-sep" />
          <div className="highlight-item">
            <span className="hi-value">TechnoXian</span>
            <span className="hi-label">World Robotics · 2nd Runner Up</span>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
