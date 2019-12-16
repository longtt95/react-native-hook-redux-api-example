import React from 'React'
import { Text, StyleSheet } from 'react-native';

const ComponentsScreen = () => {
  return <Text style={styles.textStyle}>This is the component screen</Text>
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 16
  }
})

export default ComponentsScreen;
