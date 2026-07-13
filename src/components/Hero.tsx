import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa6'
import { contact } from '../data/contact'

const roles = [
  'Software Engineer',
  'Data Science & Engineering @ Stony Brook',
  'Full-Stack + AI Systems Builder',
]

function useTypewriter(words: string[], speed = 55, pause = 1600) {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIndex % words.length]
    let timeout: ReturnType<typeof setTimeout>

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && text === '') {
      setDeleting(false)
      setWordIndex((i) => i + 1)
    } else {
      timeout = setTimeout(
        () => {
          const next = deleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1)
          setText(next)
        },
        deleting ? speed / 2 : speed,
      )
    }

    return () => clearTimeout(timeout)
  }, [text, deleting, wordIndex, words, speed, pause])

  return text
}

export default function Hero() {
  const typed = useTypewriter(roles)
  const [imgError, setImgError] = useState(false)

  return (
    <section id="top" className="min-h-screen flex items-center pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[1.1fr_0.9fr] gap-16 items-center w-full">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="font-mono text-accent mb-4">
            <span className="text-mist/50">$</span> whoami
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold text-mist leading-tight mb-4">
            Hi, I'm Maaz Khan.
          </h1>
          <div className="h-10 md:h-12 mb-6">
            <p className="font-mono text-xl md:text-2xl text-accent">
              {typed}
              <span className="inline-block w-[2px] h-6 md:h-7 bg-accent ml-1 animate-blink align-middle" />
            </p>
          </div>
          <p className="text-mist/70 text-lg leading-relaxed max-w-xl mb-8">
            I build full-stack platforms and AI-driven automation — from normalized backends and
            role-based systems to LLM-powered agents that turn manual workflows into real-time,
            self-serve tools.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="font-mono text-sm bg-accent text-navy font-semibold rounded px-6 py-3 hover:shadow-glow transition-all hover:-translate-y-0.5"
            >
              View Projects →
            </a>
            <a
              href="#contact"
              className="font-mono text-sm border border-accent/40 text-mist rounded px-6 py-3 hover:border-accent hover:text-accent transition-all"
            >
              Get In Touch
            </a>
            <div className="flex items-center gap-3 ml-2">
              <a
                href={contact.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-accent/20 text-mist/70 hover:text-accent hover:border-accent transition-all"
              >
                <FaGithub />
              </a>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-accent/20 text-mist/70 hover:text-accent hover:border-accent transition-all"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative mx-auto"
        >
          <div className="absolute inset-0 bg-accent/20 blur-3xl rounded-full animate-float" />
          <div className="relative glass-card p-2 rounded-2xl shadow-glow-lg animate-float">
            <div className="flex items-center gap-1.5 px-3 py-2 border-b border-accent/10">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
              <span className="ml-3 font-mono text-xs text-mist/40">maaz.dev</span>
            </div>
            {imgError ? (
              <div className="w-full aspect-square rounded-b-xl bg-gradient-to-br from-slate to-navy flex items-center justify-center">
                <span className="font-mono text-6xl font-bold text-accent">MK</span>
              </div>
            ) : (
              <img
                src="/images/profile.png"
                alt="Maaz Khan"
                onError={() => setImgError(true)}
                className="w-full aspect-square object-cover rounded-b-xl"
              />
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
