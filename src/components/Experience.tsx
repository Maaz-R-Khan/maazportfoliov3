import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { experience } from '../data/experience'

function initials(name: string) {
  return name
    .split(' ')
    .filter((w) => w[0] === w[0]?.toUpperCase())
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
}

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading index="01" tag="// career log" title="Experience" />

        <div className="relative pl-10 md:pl-0">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent/50 via-accent/20 to-transparent md:-translate-x-1/2" />

          <div className="flex flex-col gap-14">
            {experience.map((job, i) => {
              const isLeft = i % 2 === 0
              return (
                <motion.div
                  key={job.company}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.5 }}
                  className={`relative md:grid md:grid-cols-2 md:gap-10 ${isLeft ? '' : ''}`}
                >
                  <span
                    className="absolute left-4 md:left-1/2 top-2 w-3.5 h-3.5 rounded-full bg-accent shadow-glow -translate-x-1/2 z-10 ring-4 ring-navy"
                  />

                  <div className={isLeft ? 'md:pr-14 md:text-right md:col-start-1' : 'md:pl-14 md:col-start-2'}>
                    <div className="glass-card p-6 hover:border-accent/40 hover:shadow-glow transition-all">
                      <div className={`flex items-center gap-3 mb-3 ${isLeft ? 'md:flex-row-reverse' : ''}`}>
                        <div className="w-11 h-11 rounded-lg bg-navy border border-accent/20 flex items-center justify-center overflow-hidden shrink-0">
                          {job.image ? (
                            <img src={job.image} alt={job.company} className="w-full h-full object-cover" />
                          ) : (
                            <span className="font-mono text-xs text-accent font-semibold">{initials(job.company)}</span>
                          )}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-mist">{job.company}</h3>
                          <p className="text-accent font-mono text-xs">{job.role}</p>
                        </div>
                      </div>
                      <p className="font-mono text-xs text-mist/40 mb-4">
                        {job.period} · {job.location}
                      </p>
                      <ul className={`space-y-2 text-sm text-mist/70 leading-relaxed ${isLeft ? 'md:text-right' : ''}`}>
                        {job.bullets.map((b, idx) => (
                          <li key={idx}>{b}</li>
                        ))}
                      </ul>
                      <div className={`flex flex-wrap gap-2 mt-4 ${isLeft ? 'md:justify-end' : ''}`}>
                        {job.tech.map((t) => (
                          <span
                            key={t}
                            className="font-mono text-[11px] px-2 py-0.5 rounded-full bg-accent/10 text-accent border border-accent/20"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
