import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import './Education.css'

export default function Education() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="education" className="section education-section">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Academic Background</span>
          <h2 className="section-title">Education</h2>
        </motion.div>

        <motion.div
          className="education-card card"
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.15 }}
        >
          <div className="edu-icon">
            <GraduationCap size={26} />
          </div>
          <div className="edu-body">
            <div className="edu-header">
              <div>
                <h3 className="edu-degree">Bachelor of Computer Engineering</h3>
                <p className="edu-university">Savitribai Phule Pune University</p>
              </div>
              <div className="edu-meta">
                <span className="edu-period">December 2021 – June 2025</span>
                <span className="edu-cgpa">CGPA: 7.7</span>
              </div>
            </div>
            <p className="edu-note">
              Completed a four-year program in Computer Engineering covering core
              areas including software engineering, data structures, database
              management, computer networks, and operating systems. Graduated
              June 2025.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
