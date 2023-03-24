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
        boxShadow: '4px 4px 8px 2px rgba(0,0,0,0.3)',
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
        boxShadow: '4px 4px 8px 2px rgba(0,0,0,0.3)',
      },
    },
  },
});
