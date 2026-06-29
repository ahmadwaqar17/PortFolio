import { Skill } from './types';

export const skills: Skill[] = [
  // Programming Languages
  {
    id: 'c',
    title: 'C',
    icon: 'FaHashtag',
    level: 80,
    color: '41, 128, 185',
    category: 'other',
    description: 'Proficient in C for system-level programming and algorithm implementation.'
  },
  {
    id: 'cpp',
    title: 'C++',
    icon: 'FaCodeBranch',
    level: 75,
    color: '0, 89, 156',
    category: 'other',
    description: 'Experienced in C++ for object-oriented programming and application development.'
  },
  {
    id: 'javascript',
    title: 'JavaScript',
    icon: 'FaJs',
    level: 85,
    color: '247, 223, 30',
    category: 'frontend',
    description: 'Proficient in JavaScript for frontend and backend development.'
  },
  {
    id: 'python',
    title: 'Python',
    icon: 'FaPython',
    level: 90,
    color: '55, 118, 171',
    category: 'backend',
    description: 'Expert in Python for web development, automation, and AI integration.'
  },

  // Frameworks & Libraries
  {
    id: 'django',
    title: 'Django',
    icon: 'SiDjango',
    level: 90,
    color: '12, 75, 51',
    category: 'backend',
    description: 'Expert in Django for building robust web applications with multi-tenant architecture.'
  },
  {
    id: 'react',
    title: 'React.js',
    icon: 'FaReact',
    level: 85,
    color: '97, 218, 251',
    category: 'frontend',
    description: 'Creating interactive user interfaces with React.js and its ecosystem.'
  },
  {
    id: 'pandas',
    title: 'pandas',
    icon: 'SiPandas',
    level: 75,
    color: '51, 102, 153',
    category: 'backend',
    description: 'Data manipulation and analysis using pandas library.'
  },
  {
    id: 'websockets',
    title: 'WebSockets',
    icon: 'FaPlug',
    level: 80,
    color: '68, 68, 68',
    category: 'backend',
    description: 'Real-time bidirectional communication using WebSockets.'
  },

  // Databases
  {
    id: 'sql',
    title: 'SQL',
    icon: 'FaDatabase',
    level: 85,
    color: '0, 117, 143',
    category: 'backend',
    description: 'Proficient in SQL for database querying, optimization, and management.'
  },
  {
    id: 'mysql',
    title: 'MySQL',
    icon: 'FaDatabase',
    level: 80,
    color: '0, 117, 143',
    category: 'backend',
    description: 'Experienced in MySQL database design and implementation.'
  },
  {
    id: 'postgresql',
    title: 'PostgreSQL',
    icon: 'SiPostgresql',
    level: 85,
    color: '51, 103, 145',
    category: 'backend',
    description: 'Working with PostgreSQL for advanced relational database management in production systems.'
  },

  // AI & Machine Learning Tools
  {
    id: 'openai-api',
    title: 'OpenAI API',
    icon: 'SiOpenai',
    level: 85,
    color: '0, 0, 0',
    category: 'other',
    description: 'Integrating OpenAI models for document parsing, classification, and validation.'
  },
  {
    id: 'gemini',
    title: 'Gemini LLM',
    icon: 'SiGoogle',
    level: 80,
    color: '66, 133, 244',
    category: 'other',
    description: 'Building LLM-powered chatbots using Google Gemini for legal query assistance.'
  },
  {
    id: 'llm-chatbots',
    title: 'LLM Chatbots',
    icon: 'FaRobot',
    level: 85,
    color: '100, 100, 100',
    category: 'other',
    description: 'Designing and deploying AI-driven chatbot solutions for enterprise applications.'
  },

  // Development & DevOps Tools
  {
    id: 'visual-studio',
    title: 'Visual Studio',
    icon: 'FaWindows',
    level: 80,
    color: '91, 45, 140',
    category: 'tools',
    description: 'Using Visual Studio for .NET and Python development.'
  },
  {
    id: 'pycharm',
    title: 'PyCharm',
    icon: 'FaPython',
    level: 85,
    color: '33, 215, 137',
    category: 'tools',
    description: 'Using PyCharm for Python development with advanced code analysis.'
  },
  {
    id: 'vscode',
    title: 'VS Code',
    icon: 'FaLaptop',
    level: 90,
    color: '0, 122, 204',
    category: 'tools',
    description: 'Primary editor for web development across multiple languages and frameworks.'
  },
  {
    id: 'colab',
    title: 'Google Colab',
    icon: 'SiGooglecolab',
    level: 75,
    color: '244, 194, 44',
    category: 'tools',
    description: 'Using Google Colab for machine learning experimentation and prototyping.'
  },
  {
    id: 'git',
    title: 'Git',
    icon: 'FaGitAlt',
    level: 85,
    color: '240, 80, 50',
    category: 'tools',
    description: 'Version control and collaborative development using Git workflows.'
  },
  {
    id: 'postman',
    title: 'Postman',
    icon: 'SiPostman',
    level: 85,
    color: '255, 108, 62',
    category: 'tools',
    description: 'API testing and documentation using Postman.'
  },
  {
    id: 'celery',
    title: 'Celery',
    icon: 'SiCelery',
    level: 80,
    color: '128, 186, 0',
    category: 'backend',
    description: 'Asynchronous task queue for handling large document batches and background jobs.'
  },
  {
    id: 'redis',
    title: 'Redis',
    icon: 'SiRedis',
    level: 80,
    color: '220, 50, 50',
    category: 'backend',
    description: 'In-memory data store for caching, message brokering, and queuing.'
  },
  {
    id: 'docker',
    title: 'Docker',
    icon: 'FaDocker',
    level: 80,
    color: '13, 109, 177',
    category: 'tools',
    description: 'Containerization for consistent development and deployment environments.'
  },
  {
    id: 'aws',
    title: 'AWS',
    icon: 'FaAws',
    level: 75,
    color: '255, 153, 0',
    category: 'tools',
    description: 'Cloud services including S3, RDS, EC2, and ECR for scalable infrastructure.'
  },
  {
    id: 'cicd',
    title: 'CI/CD (GitHub Actions)',
    icon: 'FaGithub',
    level: 75,
    color: '200, 200, 200',
    category: 'tools',
    description: 'Automating build, test, and deployment pipelines with GitHub Actions.'
  },
];

export default skills;
