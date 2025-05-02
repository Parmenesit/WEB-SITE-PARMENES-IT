export const theme = {
  colors: {
    primary: '#A8CF45',
    secondary: '#4B4B4D',
    tertiary: '#BCBEBF',
    white: '#FFFFFF',
    black: '#000000',
    background: {
      light: '#F9F9F9',
      dark: '#4B4B4D'
    }
  },
  opacity: {
    light: '0.1',
    medium: '0.5',
    high: '0.9'
  }
} as const;

export type Theme = typeof theme;

// Add styles to hide Google Translate widget
const style = document.createElement('style');
style.textContent = `
  .goog-te-banner-frame {
    display: none !important;
  }
  .goog-te-menu-value:hover {
    text-decoration: none !important;
  }
  body {
    top: 0 !important;
  }
  .goog-tooltip {
    display: none !important;
  }
  .goog-tooltip:hover {
    display: none !important;
  }
  .goog-text-highlight {
    background-color: transparent !important;
    border: none !important;
    box-shadow: none !important;
  }
`;
document.head.appendChild(style);