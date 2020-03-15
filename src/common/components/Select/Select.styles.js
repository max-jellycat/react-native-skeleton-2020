import { StyleSheet } from 'react-native';

import theme from 'styles';

export default StyleSheet.create({
  select: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignSelf: 'stretch',
    borderRadius: theme.radius.medium,
    overflow: 'hidden',
  },
});
