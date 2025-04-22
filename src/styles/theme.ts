export const theme = {
  colors: {
    primary: 'var(--primary-color)',
    secondary: 'var(--secondary-color)',
    accent: 'var(--accent-color)',
    background: 'var(--background-color)',
    darkBackground: 'var(--dark-background)',
    text: 'var(--text-color)',
    lightText: 'var(--light-text-color)',
    border: 'var(--border-color)',
    success: 'var(--success-color)',
    error: 'var(--error-color)',
    warning: 'var(--warning-color)',
    info: 'var(--info-color)',
  },
  shadows: {
    small: '0 2px 4px rgba(0, 0, 0, 0.1)',
    medium: 'var(--box-shadow)',
    large: '0 10px 20px rgba(0, 0, 0, 0.15)',
  },
  transitions: {
    default: 'var(--transition)',
    slow: 'all 0.5s ease',
    fast: 'all 0.2s ease',
  },
  borderRadius: {
    small: '4px',
    default: 'var(--border-radius)',
    large: '12px',
    circle: '50%',
  },
  typography: {
    fontFamily: 'var(--font-family)',
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      md: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
    },
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
    },
  },
  breakpoints: {
    xs: '480px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
    '3xl': '4rem',
    '4xl': '6rem',
  },
  layout: {
    maxWidth: 'var(--max-width)',
    headerHeight: 'var(--header-height)',
    footerHeight: 'var(--footer-height)',
  },
};

export type Theme = typeof theme;

export default theme;
