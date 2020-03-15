import { StyleSheet } from 'react-native';

import theme from '~/styles';

export default (color, size, isUppercase, isBold) =>
  StyleSheet.create({
    text: {
      margin: 0,
      color: theme.colors[color],
      fontSize: theme.fontSizes[size],
      textTransform: isUppercase ? 'uppercase' : 'none',
      fontWeight: isBold ? 'bold' : 'normal',
    },
  });
