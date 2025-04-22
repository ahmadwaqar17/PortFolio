import { Skill } from './types';

export const skills: Skill[] = [
  // Programming Languages
  {
    id: 'c',
    title: 'C',
    icon: 'FaHashtag',
    level: 85,
    color: '41, 128, 185',
    category: 'frontend',
    description: 'Proficient in C programming for system-level development and algorithm implementation.'
  },
  {
    id: 'cpp',
    title: 'C++',
    icon: 'FaCodeBranch',
    level: 80,
    color: '0, 89, 156',
    category: 'frontend',
    description: 'Experienced in C++ for object-oriented programming and application development.'
  },
  {
    id: 'csharp',
    title: 'C#',
    icon: 'FaMicrosoft',
    level: 90,
    color: '104, 33, 122',
    category: 'frontend',
    description: 'Skilled in C# for .NET application development with a focus on web applications and services.'
  },
  {
    id: 'javascript',
    title: 'JavaScript',
    icon: 'FaJs',
    level: 85,
    color: '247, 223, 30',
    category: 'frontend',
    description: 'Proficient in JavaScript for frontend and backend development with modern frameworks and libraries.'
  },
  {
    id: 'python',
    title: 'Python',
    icon: 'FaPython',
    level: 75,
    color: '55, 118, 171',
    category: 'frontend',
    description: 'Experienced in Python for scripting, data analysis, and backend development.'
  },

  // Frameworks
  {
    id: 'dotnet-core',
    title: '.NET Core',
    icon: 'FaNetworkWired',
    level: 90,
    color: '92, 45, 145',
    category: 'backend',
    description: 'Building scalable and secure web applications and APIs using ASP.NET Core framework.'
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
    id: 'node-js',
    title: 'Node.js',
    icon: 'FaNodeJs',
    level: 80,
    color: '104, 160, 99',
    category: 'backend',
    description: 'Developing server-side applications and RESTful APIs with Node.js and Express.js.'
  },
  {
    id: 'express',
    title: 'Express.js',
    icon: 'SiExpress',
    level: 80,
    color: '68, 68, 68',
    category: 'backend',
    description: 'Building robust web servers and APIs with Express.js framework.'
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
    description: 'Experienced in MySQL database design, implementation, and optimization.'
  },

  {
    id: 'postgresql',
    title: 'PostgreSQL',
    icon: 'SiPostgresql',
    level: 75,
    color: '51, 103, 145',
    category: 'backend',
    description: 'Working with PostgreSQL for advanced relational database management.'
  },
  {
    id: 'mssql',
    title: 'MS SQL Server',
    icon: 'FaCogs',
    level: 90,
    color: '204, 0, 0',
    category: 'backend',
    description: 'Proficient in Microsoft SQL Server for enterprise database solutions and optimization.'
  },

  // Tools & Others
  {
    id: 'visual-studio',
    title: 'Visual Studio',
    icon: 'FaWindows',
    level: 90,
    color: '91, 45, 140',
    category: 'tools',
    description: 'Proficient in Visual Studio IDE for .NET development and debugging.'
  },
  {
    id: 'pycharm',
    title: 'PyCharm',
    icon: 'FaPython',
    level: 75,
    color: '33, 215, 137',
    category: 'tools',
    description: 'Using PyCharm for Python development with advanced code analysis and debugging.'
  },
  {
    id: 'vscode',
    title: 'VS Code',
    icon: 'FaLaptop',
    level: 90,
    color: '0, 122, 204',
    category: 'tools',
    description: 'Experienced with VS Code for web development across multiple languages and frameworks.'
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

];

export default skills;
