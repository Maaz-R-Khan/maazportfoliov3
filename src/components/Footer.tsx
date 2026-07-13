import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa6'
import { contact } from '../data/contact'

export default function Footer() {
  return (
    <footer id="contact" className="pt-24 pb-8 px-6 border-t border-accent/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="section-heading justify-center">// get in touch</p>
          <h2 className="text-3xl md:text-4xl font-bold text-mist mb-4">Let's build something.</h2>
          <p className="text-mist/60 mb-8">
            Open to new grad roles, internships, and interesting collaborations in full-stack
            and applied AI. Reach out — I usually reply within a day.
          </p>
          <a
            href={`mailto:${contact.email}`}
            className="inline-flex items-center gap-2 font-mono text-sm bg-accent text-navy font-semibold rounded px-6 py-3 hover:shadow-glow transition-all hover:-translate-y-0.5"
          >
            <FaEnvelope /> {contact.email}
          </a>
        </div>

        <div className="grid sm:grid-cols-3 gap-8 font-mono text-sm mb-12">
          <div>
            <h3 className="text-accent mb-3">{contact.name}</h3>
            <p className="text-mist/60">Software Engineer</p>
            <p className="text-mist/60">{contact.location}</p>
          </div>

          <div>
            <h3 className="text-accent mb-3">Quick Links</h3>
            <ul className="space-y-2 text-mist/60">
              <li><a href="#experience" className="hover:text-accent transition-colors">Experience</a></li>
              <li><a href="#education" className="hover:text-accent transition-colors">Education</a></li>
              <li><a href="#projects" className="hover:text-accent transition-colors">Projects</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-accent mb-3">Connect</h3>
            <p className="text-mist/60 mb-1">{contact.phone}</p>
            <p className="text-mist/60 mb-4">{contact.website}</p>
            <div className="flex gap-3">
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 flex items-center justify-center rounded-full border border-accent/20 text-mist/70 hover:text-accent hover:border-accent transition-all"
              >
                <FaLinkedin />
              </a>
              <a
                href={contact.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="w-9 h-9 flex items-center justify-center rounded-full border border-accent/20 text-mist/70 hover:text-accent hover:border-accent transition-all"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>

        <div className="text-center font-mono text-xs text-mist/30 border-t border-accent/10 pt-6">
          © {new Date().getFullYear()} {contact.name}. Built with React + Tailwind.
        </div>
      </div>
    </footer>
  )
}
