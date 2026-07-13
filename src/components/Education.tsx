import { motion } from 'framer-motion'
import { FaGraduationCap } from 'react-icons/fa6'
import SectionHeading from './SectionHeading'
import { education } from '../data/education'

export default function Education() {
  return (
    <section id="education" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading index="02" tag="// background" title="Education" />

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((item, i) => (
            <motion.div
              key={item.school}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-6 flex gap-4 hover:border-accent/40 transition-colors"
            >
              <div className="shrink-0 w-14 h-14 rounded-lg bg-navy flex items-center justify-center border border-accent/20 overflow-hidden">
                {item.image ? (
                  <img src={item.image} alt={item.school} className="w-full h-full object-cover" />
                ) : (
                  <FaGraduationCap className="text-accent text-2xl" />
                )}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-mist">{item.school}</h3>
                <p className="text-accent font-mono text-sm mt-1">{item.degree}</p>
                <p className="text-mist/60 text-sm mt-1">{item.detail}</p>
                <p className="text-mist/40 font-mono text-xs mt-3">{item.period}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
