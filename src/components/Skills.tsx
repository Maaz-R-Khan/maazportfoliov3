import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { skills } from '../data/skills'

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6 bg-navy-light/40">
      <div className="max-w-6xl mx-auto">
        <SectionHeading index="03" tag="// toolkit" title="Skills" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((group, i) => {
            const Icon = group.icon
            return (
              <motion.div
                key={group.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`glass-card p-6 hover:border-accent/40 hover:shadow-glow transition-all ${
                  i === 2 ? 'lg:col-span-1' : ''
                }`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                    <Icon />
                  </span>
                  <h3 className="font-mono text-sm tracking-wide text-mist">{group.label}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="font-mono text-xs px-2.5 py-1 rounded-full bg-navy border border-accent/15 text-mist/70"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
