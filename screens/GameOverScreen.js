import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The game is over</Text>
    </View>
  );
};

const styles = StyleSheet({
  screen: {
    flex: 1,
    justifyContent: center,
    alignCenter: center,
  },
});
