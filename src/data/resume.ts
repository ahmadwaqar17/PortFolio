import { Experience, Education, PersonalInfo } from './types';

export const experiences: Experience[] = [
  {
    id: 'exp-1',
    company: 'Stack360',
    role: 'Associate Software Engineer (Python, Django, AI)',
    logo: 'https://via.placeholder.com/150',
    startDate: 'April 2025',
    endDate: null,
    description: 'Building and enhancing web applications using Python and Django. Collaborating with my team to create straightforward, dependable solutions for clients.',
    achievements: [
      'Built and enhanced web applications using Python and Django',
      'Collaborated with team to create straightforward, dependable solutions for clients',
    ],
    technologies: ['Python', 'Django', 'PostgreSQL', 'Celery', 'Redis', 'OpenAI API', 'Ollama', 'Django Tenants'],
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
  bio: 'Associate Software Engineer at Stack360 with expertise in Python, Django, and AI-driven development. Experienced in building multi-tenant SaaS platforms, integrating AI models, and developing full-stack applications using modern frameworks.',
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
    {
      platform: 'Portfolio',
      url: 'https://ahmadwaqar.vercel.app',
      icon: 'FaGlobe',
    },
  ],
  resume: 'https://drive.google.com/file/d/1YUg1SRAoj1x7xkJlnO-1ys3_SjcfF9RW/view?usp=sharing',
};
