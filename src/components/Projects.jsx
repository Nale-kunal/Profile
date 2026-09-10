import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ExternalLink, GitFork, ArrowUpRight, Layers } from 'lucide-react'
import './Projects.css'

const PROJECTS = [
  {
    name: 'Juriq.in',
    category: 'Legal Tech Platform',
    description:
      'A scalable full-stack platform for the legal domain. Built with modular architecture, JWT-secured APIs, and a responsive SEO-friendly frontend. Achieved approximately 30% improvement in API response time through database query optimization.',
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Vercel'],
    highlights: [
      'Modular MVC architecture for maintainable, scalable codebase',
      'RESTful APIs with JWT authentication and secure user request handling',
      '~30% improvement in API response time via query and backend optimization',
      'Responsive, SEO-friendly frontend for cross-device accessibility',
      'Deployed on Vercel for reliable, low-downtime performance',
    ],
    accent: '#4f8ef7',
    featured: true,
    link: 'https://juriq.in',
    linkLabel: 'Visit Juriq.in',
    linkType: 'live',
  },
  {
    name: 'BizzAI',
    category: 'Business Intelligence Tool',
    description:
      'A data-driven application for surfacing business insights and automating repetitive workflows. Handles 1,000+ records reliably, with a 40% reduction in manual effort through workflow automation.',
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    highlights: [
      'Backend APIs and integrations for efficient data ingestion and processing',
      'Full CRUD operations managing 1,000+ records reliably',
      '~40% reduction in manual effort through workflow automation',
      'Responsive UI designed for speed and a clean user experience',
    ],
    accent: '#a78bfa',
    featured: false,
    link: 'https://github.com/Nale-kunal/BizzAI',
    linkLabel: 'View on GitHub',
    linkType: 'github',
  },
]

function ProjectCard({ project, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      className={`project-card${project.featured ? ' featured' : ''}`}
      style={{ '--project-accent': project.accent }}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      {project.featured && (
        <span className="featured-badge">Featured Project</span>
      )}

      {/* Visual header */}
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="project-visual"
        aria-label={`Open ${project.name}`}
      >
        <div className="project-icon-bg">
          <Layers size={32} style={{ color: project.accent }} />
        </div>
        <div className="project-glow" />
      </a>

      <div className="project-body">
        <div className="project-header">
          <div>
            <span className="project-category">{project.category}</span>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-title-link"
            >
              <h3 className="project-name">{project.name}</h3>
            </a>
          </div>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-arrow-link"
            aria-label={`Open ${project.name} link`}
          >
            <ArrowUpRight className="project-arrow" size={20} />
          </a>
        </div>

        <p className="project-description">{project.description}</p>

        <ul className="project-highlights">
          {project.highlights.map((h, i) => (
            <li key={i}>
              <span className="hl-dot" />
              {h}
            </li>
          ))}
        </ul>

        <div className="project-stack">
          {project.stack.map(tech => (
            <span key={tech} className="tech-badge">{tech}</span>
          ))}
        </div>

        <div className="project-actions">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-btn"
          >
            {project.linkType === 'live' ? (
              <ExternalLink size={15} />
            ) : (
              <GitFork size={15} />
            )}
            <span>{project.linkLabel}</span>
            <ArrowUpRight size={14} className="arrow" />
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">What I've Built</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Production applications built end-to-end — from database design to
            deployed frontend, with measurable results.
          </p>
        </motion.div>

        <div className="projects-grid">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>

        <motion.div
          className="projects-cta"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a
            href="https://github.com/Nale-kunal"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            <GitFork size={16} />
            View All on GitHub
            <ArrowUpRight size={14} className="arrow" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
