import { IconType } from 'react-icons'
import { FaCode, FaPlug, FaLayerGroup, FaDatabase, FaScrewdriverWrench } from 'react-icons/fa6'

export interface SkillGroup {
  label: string
  icon: IconType
  items: string[]
}

export const skills: SkillGroup[] = [
  {
    label: 'Languages',
    icon: FaCode,
    items: ['Python', 'JavaScript', 'TypeScript', 'Java', 'SQL', 'HTML5', 'CSS'],
  },
  {
    label: 'APIs & Protocols',
    icon: FaPlug,
    items: ['REST APIs', 'Microsoft Graph API', 'OAuth 2.0'],
  },
  {
    label: 'Frameworks & Libraries',
    icon: FaLayerGroup,
    items: [
      'Django',
      'React',
      'Next.js',
      'Vite',
      'Node.js',
      'Firebase',
      'Spring Boot',
      'Tailwind CSS',
      'Material-UI',
      'Bootstrap',
      'BeautifulSoup',
    ],
  },
  {
    label: 'Databases & Cloud',
    icon: FaDatabase,
    items: ['MySQL', 'Firebase / Firestore', 'Azure Functions', 'Microsoft Entra ID'],
  },
  {
    label: 'Developer Tools',
    icon: FaScrewdriverWrench,
    items: ['Git', 'GitHub', 'VS Code', 'IntelliJ IDEA', 'Eclipse', 'Linux (Ubuntu)', 'macOS', 'Windows'],
  },
]
