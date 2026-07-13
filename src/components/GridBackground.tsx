export default function GridBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-grid bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,black,transparent)]" />
      <div className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-slate/20 rounded-full blur-[140px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40rem] h-[40rem] bg-accent/10 rounded-full blur-[140px]" />
    </div>
  )
}
