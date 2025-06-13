import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CreatePage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>생성 페이지입니다.</Text>
    </View>
  );
};

export default CreatePage;

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
