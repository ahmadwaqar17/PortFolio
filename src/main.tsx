import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Add meta tags for SEO
const meta = document.createElement('meta');
meta.name = 'description';
meta.content = 'Ahmad Waqar\'s portfolio website showcasing software engineering projects, skills, and experience in .NET Core and MERN Stack development.';
document.head.appendChild(meta);

// Update title
document.title = 'Ahmad Waqar | Software Engineer Portfolio';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
