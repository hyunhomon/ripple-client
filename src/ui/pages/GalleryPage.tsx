import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HeaderBar from '@components/HeaderBar';

import SearchIcon from '@icons/ic_search.svg';
import FilterIcon from '@icons/ic_filter.svg';

import { SafeAreaView } from 'react-native-safe-area-context';
import { lightColors as colors } from '@theme/ColorScheme';

const GalleryPage = () => {
  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={{ backgroundColor: colors.surface }}>
        <HeaderBar
          title="토론 구경"
          icons={[<SearchIcon width={28} height={28} />, <FilterIcon width={28} height={28} />]}
        />
      </SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.text}>갤러리 페이지입니다.</Text>
      </View>
    </View>
  );
};


export default GalleryPage;

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
