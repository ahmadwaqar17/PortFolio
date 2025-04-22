import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    /* Colors */
    --primary-color: #0070f3;
    --secondary-color: #6c757d;
    --accent-color: #ff9800;
    --success-color: #28a745;
    --error-color: #dc3545;
    --warning-color: #ffc107;
    --info-color: #17a2b8;
    --background-color: #ffffff;
    --bg-secondary: #f8f9fa;
    --text-color: #333333;
    --text-secondary: #6c757d;
    --border-color: #e0e0e0;
    --box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    --card-bg: #ffffff;
    --input-bg: #ffffff;
    --input-border: #ced4da;

    /* Layout */
    --transition: all 0.3s ease;
    --border-radius: 8px;
    --max-width: 1200px;
    --header-height: 70px;
    --footer-height: 60px;
    --font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: var(--font-family);
    background-color: var(--background-color);
    color: var(--text-color);
    line-height: 1.6;
    overflow-x: hidden;
  }

  a {
    color: var(--primary-color);
    text-decoration: none;
    transition: var(--transition);

    &:hover {
      color: var(--accent-color);
    }
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  button, input, textarea, select {
    font-family: inherit;
  }

  h1, h2, h3, h4, h5, h6 {
    margin-bottom: 1rem;
    line-height: 1.2;
  }

  p {
    margin-bottom: 1rem;
  }

  section {
    padding: 5rem 0;
  }

  .container {
    width: 100%;
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 0 1.5rem;
  }

  .section-title {
    font-size: 2.5rem;
    margin-bottom: 3rem;
    text-align: center;
    position: relative;

    &:after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 80px;
      height: 4px;
      background-color: var(--primary-color);
      border-radius: 2px;
    }
  }

  @media (max-width: 768px) {
    section {
      padding: 3rem 0;
    }

    .section-title {
      font-size: 2rem;
      margin-bottom: 2rem;
    }
  }
`;

export default GlobalStyles;
