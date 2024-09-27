export const Theme = {
  light: {
    colors: {
      // Common
      background: '#ffffff',
      // Sphere
      spherePathInitial: '#E0E0E0',
      // Slider
      sliderPositive: '#468585',
      sliderNegative: '#433D8B',
      sliderDivider: 'rgba(0, 0, 0, 0.1)',
    },
  },
  dark: {
    colors: {
      // Common
      background: '#171717',
      // Sphere
      spherePathInitial: 'rgba(80,80,80,0.35)',
      // Slider
      sliderPositive: '#D2E0FB',
      sliderNegative: '#FFEBD4',
      sliderDivider: 'rgba(255, 255, 255, 0.3)',
    },
  },
} as const;
