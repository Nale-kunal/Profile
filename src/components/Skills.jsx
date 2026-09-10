import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './Skills.css'

const SKILL_CATEGORIES = [
  {
    id: 'frontend',
    label: 'Frontend',
    color: '#4f8ef7',
    skills: [
      { name: 'HTML5' },
      { name: 'CSS3' },
      { name: 'JavaScript' },
      { name: 'React.js' },
      { name: 'Bootstrap' },
      { name: 'jQuery' },
      { name: 'Responsive Design' },
      { name: 'UI/UX' },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    color: '#a78bfa',
    skills: [
      { name: 'Node.js' },
      { name: 'Express.js' },
      { name: 'TypeScript' },
      { name: 'REST API' },
      { name: 'JWT Auth' },
      { name: 'Authentication' },
    ],
  },
  {
    id: 'database',
    label: 'Database',
    color: '#34d399',
    skills: [
      { name: 'MongoDB' },
      { name: 'MongoDB Atlas' },
      { name: 'MongoDB Compass' },
      { name: 'PostgreSQL' },
      { name: 'SQL' },
    ],
  },
  {
    id: 'tools',
    label: 'Tools',
    color: '#fb923c',
    skills: [
      { name: 'Git' },
      { name: 'GitHub' },
      { name: 'VS Code' },
      { name: 'Postman' },
      { name: 'Cloudinary' },
      { name: 'MySQL Workbench' },
      { name: 'Cursor' },
      { name: 'Antigravity' },
    ],
  },
  {
    id: 'concepts',
    label: 'Concepts',
    color: '#f472b6',
    skills: [
      { name: 'MVC Architecture' },
      { name: 'API Design' },
      { name: 'CRUD Operations' },
      { name: 'Performance Optimization' },
      { name: 'Debugging' },
    ],
  },
]

function SkillCategory({ cat, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      className="skill-category"
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="skill-cat-header">
        <span className="skill-cat-dot" style={{ background: cat.color }} />
        <h3 className="skill-cat-label">{cat.label}</h3>
      </div>
      <div className="skill-chips">
        {cat.skills.map((sk) => (
          <span key={sk.name} className="skill-chip" style={{ '--chip-color': cat.color }}>
            {sk.name}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">What I Work With</span>
          <h2 className="section-title">Tech Stack</h2>
          <p className="section-subtitle">
            A focused set of technologies I've actually built with — organized by
            where they fit in the stack.
          </p>
        </motion.div>

        <div className="skills-grid">
          {SKILL_CATEGORIES.map((cat, i) => (
            <SkillCategory key={cat.id} cat={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
