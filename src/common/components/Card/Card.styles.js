import { StyleSheet } from 'react-native';

import theme from 'styles';

export default (noPadding) =>
  StyleSheet.create({
    card: {
      backgroundColor: theme.colors.white,
      alignSelf: 'stretch',
      borderRadius: theme.radius.medium,
      padding: noPadding ? 0 : theme.sizings.medium,
      shadowColor: theme.colors.greyLighter,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.5,
      shadowRadius: 3,
      elevation: 1,
    },
  });
