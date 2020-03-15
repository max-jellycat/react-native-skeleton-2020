import { StyleSheet } from 'react-native';

import theme from 'styles';

export default (selected) =>
  StyleSheet.create({
    item: {
      borderColor: theme.colors.danger,
      backgroundColor: selected ? theme.colors.primary : theme.colors.light,
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      padding: theme.sizings.medium,
    },
  });
