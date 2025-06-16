import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MannerStatus from '@components/MannerStatus';
import LevelProgress from '@components/LevelProgress';

const HomePage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>홈 페이지입니다.</Text>
      <MannerStatus percent={50} />
      <LevelProgress level={14} nextXp={140} percent={42} />
    </View>
  );
};

export default HomePage;

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
