/* eslint-disable import/prefer-default-export */
import { extendTheme } from '@chakra-ui/react';
import { Button } from './components/Button';

export const customTheme = extendTheme({
  styles: {
    global: {
      'html,body': {
        backgroundColor: '#F2F2F2',
      },
    },
  },
  semanticTokens: {
    colors: {
      primary: '#00297B',
      black: '#212326',
      softBlack: '#263238',
      smoothBlack: '#191919',
      gray: '#CCCCCC',
      darkGray: '#DADADA',
      lightGray: '#F2F2F2',
      white: '#FFFFFF',
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
      fontSize: ['16px', '18px'],
      lineHeight: '160%',
      textAlign: ['center', 'center', 'justify'],
      fontFamily: `'Inter', sans-serif`,
    },
    headingText: {
      fontStyle: 'normal',
      fontWeight: '700',
      fontSize: ['60px', '90px', '80px'],
      lineHeight: '110%',
      textAlign: ['center', 'center', 'justify'],
      fontFamily: `'Ubuntu'`,
    },
    listText: {
      fontStyle: 'normal',
      fontWeight: '500',
      fontSize: ['18px', '16px'],
      textAlign: 'center',
      fontFamily: `'Inter',sans-serif`,
    },
  },
});
