import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Briefcase } from 'lucide-react'
import './Experience.css'

const EXPERIENCE = [
  {
    company: 'Tech Mahindra',
    role: 'Associate Technical Support',
    period: 'September 2025 – July 2026',
    type: 'Full-Time',
    bullets: [
      'Analyzed system infrastructure and identified bottlenecks to improve performance and reliability.',
      'Optimized network routing configurations and reduced latency through system-level tuning.',
      'Diagnosed and resolved complex system issues under live conditions, maintaining service uptime.',
      'Streamlined internal troubleshooting workflows, reducing resolution time and minimizing downtime.',
    ],
  },
]

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Career</span>
          <h2 className="section-title">Professional Experience</h2>
        </motion.div>

        <div className="timeline">
          {EXPERIENCE.map((exp, i) => (
            <ExperienceItem key={i} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ExperienceItem({ exp, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      className="timeline-item"
      initial={{ opacity: 0, x: -24 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      <div className="timeline-connector">
        <div className="timeline-dot">
          <Briefcase size={14} />
        </div>
        <div className="timeline-line" />
      </div>

      <div className="timeline-card card">
        <div className="exp-header">
          <div>
            <h3 className="exp-company">{exp.company}</h3>
            <p className="exp-role">{exp.role}</p>
          </div>
          <div className="exp-meta">
            <span className="exp-badge">{exp.type}</span>
            <span className="exp-period">{exp.period}</span>
          </div>
        </div>

        <ul className="exp-bullets">
          {exp.bullets.map((b, i) => (
            <li key={i} className="exp-bullet">
              <span className="bullet-arrow">→</span>
              {b}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}
