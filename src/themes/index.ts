/* eslint-disable import/prefer-default-export */
import { extendTheme } from '@chakra-ui/react';
import { Button } from './components/Button';

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
  components: {
    Checkbox: {
      baseStyle: {
        control: {
          borderColor: '#212326',
          _checked: {
            bg: '#00297B',
            borderColor: '#00297B',
          },
        },
      },
    },
    Button,
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
      fontWeight: '700',
      fontSize: ['40px', '60px', '80px'],
      lineHeight: '110%',
      textAlign: ['center', 'center', 'justify'],
      fontFamily: `'Ubuntu'`,
    },
    listText: {
      fontStyle: 'normal',
      fontWeight: '500',
      fontSize: ['8px', '12px', '16px'],
      textAlign: 'center',
      fontFamily: `'Inter',sans-serif`,
    },
  },
});