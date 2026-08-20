import { Experience, Education, PersonalInfo } from './types';

export const experiences: Experience[] = [
  {
    id: 'exp-1',
    company: 'Folium AI',
    role: 'Associate Software Engineer (Python, Django, AI)',
    logo: 'https://via.placeholder.com/150',
    startDate: 'February 2026',
    endDate: null,
    description: 'Developing backend systems using Python, Django, and LangChain to support AI-driven learning features.',
    achievements: [
      'Developing backend systems using Python, Django, and LangChain to support AI-driven learning features',
    ],
    technologies: ['Python', 'Django', 'LangChain', 'PostgreSQL', 'Redis'],
  },
  {
    id: 'exp-2',
    company: 'Stack360',
    role: 'Associate Software Engineer (Python, Django, AI)',
    logo: 'https://via.placeholder.com/150',
    startDate: 'January 2025',
    endDate: 'February 2026',
    description: 'Building and enhancing web applications using Python, Django, and LangChain. Designing and deploying LLM-based solutions for document classification, data extraction, and structured JSON output pipelines.',
    achievements: [
      'Building and enhancing web applications using Python, Django, and LangChain',
      'Designing and deploying LLM-based solutions for document classification, data extraction, and structured JSON output pipelines',
      'Developed Altertia Compliance, a multi-tenant compliance automation platform for enterprise clients',
    ],
    technologies: ['Python', 'Django', 'PostgreSQL', 'Celery', 'Redis', 'LangChain', 'Ollama', 'Django Tenants'],
  },
];

export const education: Education[] = [
  {
    id: 'edu-1',
    institution: 'FAST National University of Computer and Emerging Sciences (NUCES), Lahore',
    degree: 'Bachelor of Science',
    field: 'Computer Science',
    logo: 'https://via.placeholder.com/150',
    startDate: 'August 2021',
    endDate: 'July 2025',
    description: 'Pursuing a degree in Computer Science with focus on software engineering, web development, and database management.',
    achievements: [
      'Developed multiple full-stack applications as part of coursework',
      'Participated in programming competitions',
      'Worked on real-world projects with industry partners',
      'Specialized in web application development and database design',
    ],
  },
];

export const personalInfo: PersonalInfo = {
  name: 'Ahmad Waqar',
  role: 'Associate Software Engineer',
  bio: 'Associate Software Engineer with experience at Folium AI and Stack360. Specialized in Python, Django, LangChain, and AI-driven backend systems. Built multi-tenant SaaS platforms, LLM-powered document processing pipelines, and real-time communication features.',
  avatar: 'https://cdn2.vectorstock.com/i/1000x1000/61/41/software-language-programmer-avatar-vector-17866141.jpg',
  location: 'Lahore, Pakistan',
  email: 'ahmedwaqar2002@gmail.com',
  phone: '+92-344-0479545',
  socialLinks: [
    {
      platform: 'GitHub',
      url: 'https://github.com/ahmadwaqar17',
      icon: 'FaGithub',
    },
    {
      platform: 'LinkedIn',
      url: 'https://www.linkedin.com/in/ahmad-waqar-05413021b/',
      icon: 'FaLinkedin',
    },
  ],
  resume: 'https://drive.google.com/file/d/1YUg1SRAoj1x7xkJlnO-1ys3_SjcfF9RW/view?usp=sharing',
};
