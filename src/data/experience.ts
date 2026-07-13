export interface ExperienceItem {
  company: string
  role: string
  location: string
  period: string
  image?: string
  bullets: string[]
  tech: string[]
}

export const experience: ExperienceItem[] = [
  {
    company: 'Raj Technologies Inc.',
    role: 'Software Engineer Intern',
    location: 'New York, NY',
    period: 'May 2026 – Present',
     image: '/images/rti.png',
    bullets: [
      'Architected a full-stack project bid management dashboard for internal staff, replacing manual spreadsheet and email-thread tracking with a centralized system managing 40+ active bids across 50+ agencies.',
      'Designed a normalized MySQL schema and Django REST backend spanning bids, agencies, users, status, and contracts, implementing custom authentication and role-based access control to enforce data integrity and secure, permission-scoped access.',
      'Built a Vite/React/TypeScript frontend with pre-filtered navigational views and automated status-change notifications, eliminating manual filtering and giving staff real-time visibility into bid progress.',
    ],
    tech: ['Django', 'MySQL', 'React', 'TypeScript', 'Vite'],
  },
  {
    company: 'Hirani Engineering and Land Surveying P.C.',
    role: 'Software Engineer Intern',
    location: 'New York, NY',
    period: 'Jan 2026 – April 2026',
    image: '/images/hirani.png',
    bullets: [
      'Spearheaded the design and development of an end-to-end onboarding automation system that converts HR-submitted requests into fully provisioned user accounts, reducing onboarding time from hours to minutes and eliminating manual IT overhead entirely.',
      'Engineered a Python-based backend pipeline, including a rules-driven inbox listener, email parser (BeautifulSoup), and provisioning engine via Microsoft Graph, to manage 700+ Entra ID users, while orchestrating conditional Microsoft 365 license assignment (100+ licenses) via Azure Functions.',
      'Architected an AI-powered accounts receivable agent integrating Python/Deltek API to ingest AR data each morning, OpenAI API-driven email summarization to track outreach status, and a React dashboard flagging at-risk accounts and surfacing real-time collection status.',
    ],
    tech: ['Python', 'Microsoft Graph', 'Azure Functions', 'OpenAI API', 'React'],
  },
  {
    company: 'Cowan Consulting LC',
    role: 'Software Engineer Intern',
    location: 'New York, NY',
    period: 'Jan 2025 – Sept 2025',
    image: '/images/cowanlc.png',
    bullets: [
      'Led the end-to-end development of 2+ full-stack web applications for hospitality and real estate clients, including a production hotel reservation system, architecting front-end components and implementing features from scratch using React, MUI, and Bootstrap.',
      'Developed responsive, real-time user interfaces and improved existing UI components across a large-scale real estate platform, increasing user engagement by 25% through iterative design improvements and stakeholder-driven feedback.',
      'Implemented and optimized scalable backend systems with Firebase, Firestore, and Cloud Functions, integrating Firebase Auth, Google Maps, Stripe, and PayPal to support secure transactions for 100+ users while improving production stability to 98% and reducing deployment cycles by 20%.',
    ],
    tech: ['React', 'MUI', 'Bootstrap', 'Firebase', 'Firestore', 'Stripe'],
  },
  {
    company: 'Farmingdale State College',
    role: 'Undergraduate AI Researcher',
    location: 'Farmingdale, NY',
    period: 'Jan 2025 – May 2025',
    image: '/images/fsc.png',
    bullets: [
      'Contributed to the development of a fine-tuned LLaMA-based language model by supporting dataset preparation and design review, aligning technical objectives with educational goals.',
      'Reviewed 40+ academic papers on AI-guided tutoring and adaptive learning systems, synthesizing findings to inform model design and curriculum integration aligned with the textbook Java, Java, Java (2022).',
      'Assisted in cleaning and organizing 180+ multi-turn Java-tutoring dialogues, ensuring consistency in syntax, concept difficulty, and alignment with core OOP learning objectives to improve the model’s training data and accuracy.',
    ],
    tech: ['LLaMA', 'Python', 'Dataset Design'],
  },
  {
    company: 'Headstarter AI',
    role: 'Software Engineer Fellow',
    location: 'Remote',
    period: 'Jul 2024 – Sep 2024',
    image: '/images/headstarterai.png',
    bullets: [
      'Built 5+ AI apps and APIs using Next.js, OpenAI, Pinecone, and Stripe API with 98% accuracy and a target user base of 1,000+ users.',
      'Developed projects from design to deployment leading 4+ engineering fellows using MVC design patterns.',
      'Coached by Amazon, Bloomberg, and Capital One engineers on Agile, CI/CD, Git, and microservice patterns.',
    ],
    tech: ['Next.js', 'OpenAI', 'Pinecone', 'Stripe API'],
  },
]
