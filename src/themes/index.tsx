/* eslint-disable import/prefer-default-export */
import { extendTheme } from '@chakra-ui/react';

export const customTheme = extendTheme({
  semanticTokens: {
    colors: {
      primary: '#00297B',
      black: '#212326',
      gray: '#CCCCCC',
      white: '#F2F2F2',
    },
    fonts: {
      heading: `'Inter', sans-serif`,
      body: `'Inter', sans-serif`,
      button: `'Inter', sans-serif`,
    },
  },
});
