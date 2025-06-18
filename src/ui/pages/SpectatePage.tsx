import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import SpectateComponent from '@components/SpectateComponent';
import HeaderBar from '@components/HeaderBar';
import DebateCard from '@components/DebateCard';

import SearchIcon from '@icons/ic_search.svg';
import FilterIcon from '@icons/ic_filter.svg';
import TimeIcon from '@icons/ic_time.svg';
import FormatIcon from '@icons/ic_format.svg';


import { SafeAreaView } from 'react-native-safe-area-context';
import { lightColors as colors } from '@theme/ColorScheme';

const SpectatePage = () => {
  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={{ backgroundColor: colors.surface }}>
        <HeaderBar
          title="토론 관전"
          icons={[<SearchIcon width={28} height={28} />, <FilterIcon width={28} height={28} />]}
        />
      </SafeAreaView>
      <ScrollView contentContainerStyle={styles.container}>
      <SpectateComponent
          title="우울증은 그저 핑계인가?"
          time="10분 남음"
          participate="10명"
          spectate="10명"
          format="정석"
          micStatus="on"
        />
        <SpectateComponent
          title="우울증은 그저 핑계인가?"
          time="10분 남음"
          participate="10명"
          spectate="10명"
          format="정석"
          micStatus="on"
        />
        <SpectateComponent
          title="우울증은 그저 핑계인가?"
          time="10분 남음"
          participate="10명"
          spectate="10명"
          format="정석"
          micStatus="on"
        />
        <SpectateComponent
          title="우울증은 그저 핑계인가?"
          time="10분 남음"
          participate="10명"
          spectate="10명"
          format="정석"
          micStatus="on"
        />
        <SpectateComponent
          title="우울증은 그저 핑계인가?"
          time="10분 남음"
          participate="10명"
          spectate="10명"
          format="정석"
          micStatus="on"
        />
        <SpectateComponent
          title="우울증은 그저 핑계인가?"
          time="10분 남음"
          participate="10명"
          spectate="10명"
          format="정석"
          micStatus="on"
        />
        <SpectateComponent
          title="우울증은 그저 핑계인가?"
          time="10분 남음"
          participate="10명"
          spectate="10명"
          format="정석"
          micStatus="on"
        />
      </ScrollView>
    </View>
  );
};

export default SpectatePage;

const styles = StyleSheet.create({
  container: {
    rowGap: 10,
    flexDirection: 'column',
    paddingHorizontal: 16,
  },
});
