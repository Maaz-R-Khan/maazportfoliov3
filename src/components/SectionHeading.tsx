interface Props {
  index: string
  tag: string
  title: string
}

export default function SectionHeading({ index, tag, title }: Props) {
  return (
    <div className="mb-14 flex items-end gap-4">
      <span className="font-mono text-accent/50 text-2xl md:text-3xl">{index}</span>
      <div>
        <p className="section-heading">{tag}</p>
        <h2 className="text-3xl md:text-4xl font-bold text-mist">{title}</h2>
      </div>
      <div className="hidden md:block flex-1 h-px bg-gradient-to-r from-accent/30 to-transparent ml-4" />
    </div>
  )
}
