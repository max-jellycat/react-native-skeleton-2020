import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { registerRootComponent } from 'expo';

import theme from 'styles';

import Text from 'common/components/Text/Text';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: theme.sizings.medium,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </SafeAreaView>
  );
};

export default registerRootComponent(App);
