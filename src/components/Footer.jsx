import { GitFork, Link2, Mail } from 'lucide-react'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer" role="contentinfo">
      <div className="container footer-inner">
        <div className="footer-left">
          <span className="footer-name">Kunal Nale</span>
          <span className="footer-role">Full-Stack Developer</span>
        </div>

        <div className="footer-links">
          <a href="https://github.com/Nale-kunal" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="footer-icon-link">
            <GitFork size={18} />
          </a>
          <a href="https://www.linkedin.com/in/kunal-nale/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="footer-icon-link">
            <Link2 size={18} />
          </a>
          <a href="mailto:nalekunal343@gmail.com" aria-label="Email" className="footer-icon-link">
            <Mail size={18} />
          </a>
        </div>

        <p className="footer-copy">&copy; {year} Kunal Nale</p>
      </div>
    </footer>
  )
}
