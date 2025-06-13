import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SpectatePage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>구경 페이지입니다.</Text>
    </View>
  );
};

export default SpectatePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
  },
});
