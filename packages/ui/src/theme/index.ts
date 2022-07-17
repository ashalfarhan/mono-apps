import { createStitches } from '@stitches/react';

const { globalCss, getCssText, styled, theme } = createStitches({
  prefix: 'MyUI',
  theme: {
    fonts: {
      montserrat: "'Montserrat', sans-serif",
      raleway: "'Raleway', sans-serif",
    },
    colors: {
      primary: '#2F80ED',
      secondary: '#BDBDBD',
      danger: '#EB5757',
      black: '#333333',
    },
  },
});

const injectGlobalStyles = globalCss({
  '*, *::before, *::after': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
  '*:disabled': {
    cursor: 'not-allowed !important',
  },
  body: {
    color: '$black',
    fontFamily: '$montserrat',
  },
});

export { injectGlobalStyles, getCssText, styled, theme };
