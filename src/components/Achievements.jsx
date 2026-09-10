import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Trophy, Rocket, ClipboardList, BookOpen } from 'lucide-react'
import './Achievements.css'

const BASE = import.meta.env.BASE_URL

const ACHIEVEMENTS = [
  {
    icon: Trophy,
    title: '2nd Runner Up',
    org: 'TechnoXian World Robotics Championship',
    detail: 'Competed in one of Asia\'s largest robotics competitions and placed in the top three.',
    color: '#f59e0b',
    docLink: null,
  },
  {
    icon: Rocket,
    title: 'Global Hyperloop Competition — Round 2',
    org: 'IIT Madras (GHC)',
    detail: 'Contributed to a team that qualified past the initial screening into the second round of the IIT Madras Global Hyperloop Competition.',
    color: '#4f8ef7',
    docLink: `${BASE}certs/Kunal's Hyperloop (IIT Madras) (Qualifying for 2nd round).pdf`,
    docLabel: 'View Qualifying Document',
  },
  {
    icon: ClipboardList,
    title: 'AI-NCAT Participation',
    org: 'Naukri Campus — May 2025',
    detail: 'Participated in the Naukri Campus All India Career Assessment Test for technology roles.',
    color: '#34d399',
    docLink: `${BASE}certs/naukri_campus_ai_ncat_participation_may_2025.pdf`,
    docLabel: 'View Document',
  },
  {
    icon: BookOpen,
    title: 'Edureka Technical Seminar',
    org: 'Edureka',
    detail: 'Attended a technical seminar hosted by Edureka on modern software development.',
    color: '#a78bfa',
    docLink: `${BASE}certs/Edureka - seminar attendance.pdf`,
    docLabel: 'View Certificate',
  },
]

export default function Achievements() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="achievements" className="section achievements-section">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Recognition & Competitions</span>
          <h2 className="section-title">Achievements</h2>
        </motion.div>

        <div className="achievements-grid">
          {ACHIEVEMENTS.map((item, i) => (
            <AchievementCard key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function AchievementCard({ item, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const Icon = item.icon

  return (
    <motion.div
      ref={ref}
      className="achievement-card"
      style={{ '--ach-color': item.color }}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.1 }}
    >
      <div className="ach-icon">
        <Icon size={22} />
      </div>
      <div className="ach-body">
        <h3 className="ach-title">{item.title}</h3>
        <p className="ach-org">{item.org}</p>
        <p className="ach-detail">{item.detail}</p>
        {item.docLink && (
          <a
            href={item.docLink}
            target="_blank"
            rel="noopener noreferrer"
            className="ach-link"
          >
            {item.docLabel} ↗
          </a>
        )}
      </div>
    </motion.div>
  )
}
