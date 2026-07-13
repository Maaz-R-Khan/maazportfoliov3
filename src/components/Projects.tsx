import { motion } from 'framer-motion'
import { FaArrowUpRightFromSquare, FaGithub } from 'react-icons/fa6'
import SectionHeading from './SectionHeading'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6 bg-navy-light/40">
      <div className="max-w-6xl mx-auto">
        <SectionHeading index="04" tag="// selected work" title="Projects" />

        <div className="grid sm:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group glass-card overflow-hidden hover:border-accent/40 hover:shadow-glow transition-all flex flex-col"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/10 to-transparent" />
                {project.featured && (
                  <span className="absolute top-3 right-3 font-mono text-[11px] px-2.5 py-1 rounded-full bg-accent text-navy font-semibold">
                    Featured
                  </span>
                )}
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-semibold text-mist mb-2">{project.title}</h3>
                <p className="text-sm text-mist/70 leading-relaxed mb-4 flex-1">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[11px] px-2 py-0.5 rounded-full bg-accent/10 text-accent border border-accent/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 mt-auto">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="font-mono text-xs flex items-center gap-2 border border-accent/40 text-accent rounded px-3 py-2 hover:bg-accent hover:text-navy transition-all"
                    >
                      <FaArrowUpRightFromSquare /> Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="font-mono text-xs flex items-center gap-2 border border-accent/40 text-accent rounded px-3 py-2 hover:bg-accent hover:text-navy transition-all"
                    >
                      <FaGithub /> Source
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
