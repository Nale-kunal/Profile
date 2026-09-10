import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import './Certifications.css'

const BASE = import.meta.env.BASE_URL

const CERT_CATEGORIES = [
  {
    label: 'Certifications',
    items: [
      {
        title: 'Web Development',
        issuer: 'Udemy',
        file: "Kunal's Web Devlopment Certificate (Udemy).pdf",
      },
      {
        title: 'Python Programming',
        issuer: 'Udemy',
        file: "Kunal's Python Certificate (Udemy).pdf",
      },
      {
        title: 'SQL Intermediate',
        issuer: 'SoloLearn',
        file: "Kunal's SQL intermidate Certificate (Sololearn).pdf",
      },
      {
        title: 'SQL Introduction',
        issuer: 'SoloLearn',
        file: "Kunal,s SQL Introduction Certificate(Sololearn).pdf",
      },
    ],
  },
  {
    label: 'Job Simulations',
    items: [
      {
        title: 'Technology Job Simulation',
        issuer: 'Deloitte',
        file: 'Deloitte Job Simulation Certificate.pdf',
      },
      {
        title: 'Operations Job Simulation',
        issuer: 'Goldman Sachs',
        file: 'Goldman Sachs Job Simulation.pdf',
      },
    ],
  },
]

function CertCard({ cert, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const href = `${BASE}certs/${encodeURIComponent(cert.file)}`

  return (
    <motion.a
      ref={ref}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="cert-card"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      aria-label={`View ${cert.title} certificate from ${cert.issuer}`}
    >
      <div className="cert-body">
        <span className="cert-issuer">{cert.issuer}</span>
        <h4 className="cert-title">{cert.title}</h4>
      </div>
      <div className="cert-action">
        <ExternalLink size={15} />
      </div>
    </motion.a>
  )
}

export default function Certifications() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="certifications" className="section certifications-section">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Credentials</span>
          <h2 className="section-title">Certifications &amp; Training</h2>
          <p className="section-subtitle">
            Click any card to view the original certificate document.
          </p>
        </motion.div>

        <div className="cert-categories">
          {CERT_CATEGORIES.map((cat) => (
            <div key={cat.label} className="cert-category-block">
              <h3 className="cert-cat-label">{cat.label}</h3>
              <div className="cert-grid">
                {cat.items.map((cert, i) => (
                  <CertCard key={cert.title} cert={cert} index={i} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
