import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code2, Server, Database, Zap } from 'lucide-react'
import './About.css'

const highlights = [
  { icon: Code2, title: 'Frontend', desc: 'React.js · JavaScript · Responsive UI · Bootstrap' },
  { icon: Server, title: 'Backend', desc: 'Node.js · Express.js · RESTful APIs · JWT Auth' },
  { icon: Database, title: 'Database', desc: 'MongoDB · PostgreSQL · SQL · Atlas' },
  { icon: Zap, title: 'Focus', desc: 'Clean architecture · Performance · Production-ready' },
]

function Section({ children, className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <Section>
          <span className="section-label">Who I Am</span>
          <h2 className="section-title">About Me</h2>
        </Section>

        <div className="about-grid">
          <Section className="about-text-block">
            <p>
              I'm a Full-Stack Developer with solid hands-on experience building
              end-to-end web applications across the JavaScript ecosystem. My work
              ranges from crafting responsive React interfaces to designing Node.js
              and Express.js backends, RESTful API systems, and both relational
              (PostgreSQL) and document (MongoDB) databases.
            </p>
            <p>
              I care deeply about clean architecture — the kind that makes codebases
              maintainable six months later, not just impressive in a demo. I focus
              on writing modular, readable code, optimizing for real-world
              performance, and building systems that hold up in production.
            </p>
            <p>
              I hold a Bachelor of Computer Engineering from Savitribai Phule Pune
              University (completed June 2025, CGPA 7.7), and most recently worked
              as an Associate Technical Support engineer at Tech Mahindra, where I
              focused on infrastructure performance and system reliability.
            </p>
            <p>
              Outside of development, I've competed in the IIT Madras Global
              Hyperloop Competition and placed 2nd Runner Up in the TechnoXian World
              Robotics Championship — experiences that sharpened my ability to work
              under pressure and think through complex engineering problems.
            </p>
          </Section>

          <Section className="about-highlights">
            {highlights.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="about-highlight-card">
                <div className="about-hl-icon">
                  <Icon size={20} />
                </div>
                <div>
                  <h3 className="about-hl-title">{title}</h3>
                  <p className="about-hl-desc">{desc}</p>
                </div>
              </div>
            ))}
          </Section>
        </div>
      </div>
    </section>
  )
}
