export interface Project {
  title: string
  description: string
  image: string
  tech: string[]
  demoUrl?: string
  githubUrl?: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    title: 'Align AI',
    description:
      'An AI-powered resume optimizer and job matcher built with OpenAI, Adzuna API, and Firebase, scoring resumes against job descriptions via semantic similarity and keyword weighting. Delivered a production-ready MVP within 24 hours at a university hackathon, earning the Best AI Use Award and supporting 100+ accurate job matches through secure backend services and responsive Next.js dashboards.',
    image: '/images/alignai.png',
    tech: ['Next.js', 'OpenAI', 'Adzuna API', 'Firebase'],
    demoUrl: 'https://alignai.vercel.app/',
    githubUrl: 'https://github.com/Maaz-R-Khan/align-ai',
    featured: true,
  },
  {
    title: 'Cardify AI',
    description:
      'A responsive web application that transforms text into AI-driven flashcards for efficient learning. Built with React and Firebase, it focuses on accessibility, intuitive design, and seamless user experience.',
    image: '/images/cardifyai.png',
    tech: ['React', 'Firebase'],
    githubUrl: 'https://github.com/Maaz-R-Khan/CardifyAI',
  },
  {
    title: 'Web Dev AI Assistant',
    description:
      'A simple web-based chatbot capable of generating intelligent, conversational responses. Developed using HTML, CSS, and JavaScript to demonstrate front-end logic and API integration.',
    image: '/images/hpp.png',
    tech: ['HTML', 'CSS', 'JavaScript'],
    demoUrl: 'https://www.youtube.com/watch?v=hgb-N_jNHoU',
    githubUrl: 'https://github.com/Maaz-R-Khan/chatbot',
  },
  // {
  //   title: 'ToDo App',
  //   description:
  //     'A responsive task management application with an intuitive interface. Features include task creation, completion tracking, and local storage persistence for seamless user experience.',
  //   image: '/images/todoapp.png',
  //   tech: ['JavaScript', 'HTML', 'CSS'],
  // },
]
