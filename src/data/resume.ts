import { Experience, Education, PersonalInfo } from './types';

export const experiences: Experience[] = [
  {
    id: 'exp-1',
    company: 'Internship',
    role: 'ASP.NET Core Backend Developer',
    logo: 'https://via.placeholder.com/150',
    startDate: 'June 2024',
    endDate: 'August 2024',
    description: 'Worked as a backend developer intern focusing on ASP.NET Core and MS SQL Server database management.',
    achievements: [
      'Developed RESTful APIs using ASP.NET Core for backend development',
      'Optimized MS SQL Server queries for improved database management',
      'Collaborated with team members on various backend development tasks',
      'Gained practical experience in professional software development environment',
    ],
    technologies: ['C#', 'ASP.NET Core', 'MS SQL Server', 'RESTful APIs', 'Visual Studio'],
  },
];

export const education: Education[] = [
  {
    id: 'edu-1',
    institution: 'FAST National University of Computer and Emerging Sciences',
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
  role: 'Software Engineer',
  bio: 'Software Engineer skilled in full-stack development with .NET Core and MERN Stack, specializing in API integration, database management, and Agile methodologies. Proficient in building secure web applications with authentication and real-time features.',
  avatar: 'https://avatars.githubusercontent.com/u/137921275?v=4',
  location: 'Lahore, Pakistan',
  email: 'ahmedwaqar2002@gmail.com',
  phone: '+92-344-0479545',
  socialLinks: [
    {
      platform: 'GitHub',
      url: 'https://github.com/ahmedwaqar',
      icon: 'FaGithub',
    },
    {
      platform: 'LinkedIn',
      url: 'https://linkedin.com/in/ahmad-waqar',
      icon: 'FaLinkedin',
    }
  ],
  resume: '/resume.pdf',
};
