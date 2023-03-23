/* eslint-disable import/prefer-default-export */
import { extendTheme } from '@chakra-ui/react';

export const customTheme = extendTheme({
  semanticTokens: {
    global: {
      'html,body': {
        backgroundColor: '#F2F2F2',
      },
    },
    colors: {
      primary: '#00297B',
      black: '#212326',
      gray: '#CCCCCC',
      white: '#F2F2F2',
    },
  },
  textStyles: {
    bodyText: {
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: ['10px', '15px', '18px'],
      lineHeight: '160%',
      textAlign: ['center', 'center', 'justify'],
      fontFamily: `'Inter', sans-serif`,
    },
    headingText: {
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: ['40px', '60px', '80px'],
      lineHeight: '110%',
      textAlign: ['center', 'center', 'justify'],
      fontFamily: `'Ubuntu'`,
    },
    listText: {
      fontStyle: 'normal',
      fontWeight: 'medium',
      fontSize: ['10px', '16px'],
      lineHeight: '110%',
      textAlign: 'center',
      fontFamily: `'Inter'`,
    },
    buttonText: {
      fontStyle: 'normal',
      fontWeight: 'medium',
      fontSize: ['10px', '18px'],
      lineHeight: '110%',
      textAlign: 'center',
      fontFamily: `'Ubuntu'`,
      textTransform: 'capitalize',
    },
  },
});
