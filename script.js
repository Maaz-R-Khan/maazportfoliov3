const messages = ["Hello, I am Maaz Khan, a Software Engineer and AI Researcher."];
let pos = 0;
const speed = 100;

function typewriter() {
  const nodes = document.querySelectorAll(".typewriter"); // h1 and p both have this class
  const text = messages[0] || "";
  nodes.forEach(el => {
    el.innerHTML = text.substring(0, pos + 1) + "<span>\u25AE</span>";
  });

  if (pos < text.length - 1) {
    pos++;
    setTimeout(typewriter, speed);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  typewriter(); // <-- start it!

  // your timeline code (kept)
  const tl = document.querySelector(".timeline");
  if (!tl) return;
  const io = new IntersectionObserver(([e]) => {
    if (e.isIntersecting) { tl.classList.add("animate"); io.disconnect(); }
  }, { threshold: 0.2 });
  io.observe(tl);
});