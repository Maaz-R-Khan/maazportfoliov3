export interface EducationItem {
  school: string
  degree: string
  detail: string
  period: string
  image?: string
}

export const education: EducationItem[] = [
  {
    school: 'Stony Brook University',
    degree: 'Master of Science in Computer Science',
    detail: 'Data Science & Engineering',
    period: 'Expected Graduation: May 2028',
  },
  {
    school: 'Farmingdale State College',
    degree: 'Bachelor of Science in Computer Science',
    detail: 'GPA: 3.50 / 4.00',
    period: 'Graduated: June 2026',
    image: '/images/fsc.png',
  },
]
