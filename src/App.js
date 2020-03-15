import React from 'react';
import { StyleSheet, View } from 'react-native';
import { registerRootComponent } from 'expo';

import theme from 'styles';

import Text from 'common/components/Text/Text';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: theme.sizings.medium,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const App = () => {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
};

export default registerRootComponent(App);
