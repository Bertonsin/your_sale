/* eslint-disable import/prefer-default-export */
import { defineStyleConfig } from '@chakra-ui/react';

export const Button = defineStyleConfig({
  baseStyle: {
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: ['10px', '18px'],
    lineHeight: '110%',
    textAlign: 'center',
    fontFamily: `'Inter'`,
    textTransform: 'capitalize',
    borderRadius: '89px',
    p: 6,
  },

  sizes: {
    sm: {
      fontSize: 'sm',
      px: 10,
    },
    md: {
      fontSize: 'md',
      px: 20,
    },
  },

  variants: {
    outline: {
      border: '2px solid',
      borderColor: '#00297B',
      color: '#00297B',
      bg: '#F3F3F3',
      _hover: {
        boxShadow: '0px 16px 32px rgba(145, 158, 171, 0.25)',
      },
      _active: {
        opacity: 0.2,
      },
    },
    solid: {
      bg: '#00297B',
      color: 'white',
      _hover: {
        bg: '#00297B',
        boxShadow: '0px 16px 32px rgba(145, 158, 171, 0.25)',
      },
    },
  },
});
