import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, GitFork, Link2, ArrowRight } from 'lucide-react'
import './Contact.css'

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <motion.div
          className="contact-inner"
          ref={ref}
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="contact-glow" aria-hidden="true" />

          <span className="section-label">Get In Touch</span>
          <h2 className="contact-heading">Let's Build Something Useful.</h2>
          <p className="contact-description">
            I'm open to full-stack development opportunities, interesting projects,
            and good technical conversations. Reach out on LinkedIn or by email —
            I read everything.
          </p>

          <div className="contact-primary">
            <a
              href="mailto:nalekunal343@gmail.com"
              className="btn btn-primary contact-email-btn"
            >
              <Mail size={17} />
              nalekunal343@gmail.com
              <ArrowRight size={15} className="arrow" />
            </a>
          </div>

          <div className="contact-links">
            <a
              href="https://www.linkedin.com/in/kunal-nale/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social-link"
            >
              <Link2 size={20} />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/Nale-kunal"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social-link"
            >
              <GitFork size={20} />
              <span>GitHub</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
