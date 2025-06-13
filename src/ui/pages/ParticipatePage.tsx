import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ParticipatePage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>참여 페이지입니다.</Text>
    </View>
  );
};

export default ParticipatePage;

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
