import { StyleSheet } from 'react-native';

import theme from '~/styles';

export default (variant) =>
  StyleSheet.create({
    button: {
      backgroundColor: theme.colors[variant],
      paddingVertical: theme.sizings.small,
      paddingHorizontal: theme.sizings.larger,
      borderRadius: theme.radius.large,
    },
  });
