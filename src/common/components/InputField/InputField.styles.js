import { StyleSheet } from 'react-native';

import theme from 'styles';

export default StyleSheet.create({
  input: {
    padding: theme.sizings.medium,
    alignSelf: 'stretch',
    borderWidth: 2,
    borderColor: theme.colors.light,
    borderRadius: theme.radius.medium,
    fontSize: theme.fontSizes.default,
  },
});
