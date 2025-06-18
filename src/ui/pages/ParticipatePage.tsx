import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import HeaderBar from '@components/HeaderBar';
import ParticipateComponent from '@components/ParticipateComponent';
import SpectateComponent from '@components/SpectateComponent';

import { lightColors as colors } from '@theme/ColorScheme';

import SearchIcon from '@icons/ic_search.svg';
import FilterIcon from '@icons/ic_filter.svg';

const ParticipatePage = () => {
  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={{ backgroundColor: colors.surface }}>
        <HeaderBar
          title="토론 참여"
          icons={[<SearchIcon width={28} height={28} />, <FilterIcon width={28} height={28} />]}
        />
      </SafeAreaView>
      <ScrollView contentContainerStyle={styles.container}>
        <ParticipateComponent
          title="삶에서 고통은 필수적인가?"
          time="10분"
          participate="5명 필요"
          format="정석"
          micStatus="off"
        />
        <ParticipateComponent
          title="삶에서 고통은 필수적인가?"
          time="10분"
          participate="5명 필요"
          format="정석"
          micStatus="off"
        />
        <ParticipateComponent
          title="삶에서 고통은 필수적인가?"
          time="10분"
          participate="5명 필요"
          format="정석"
          micStatus="off"
        />
        <ParticipateComponent
          title="삶에서 고통은 필수적인가?"
          time="10분"
          participate="5명 필요"
          format="정석"
          micStatus="off"
        />
        <ParticipateComponent
          title="삶에서 고통은 필수적인가?"
          time="10분"
          participate="5명 필요"
          format="정석"
          micStatus="off"
        />
        <ParticipateComponent
          title="삶에서 고통은 필수적인가?"
          time="10분"
          participate="5명 필요"
          format="정석"
          micStatus="off"
        />
        <ParticipateComponent
          title="삶에서 고통은 필수적인가?"
          time="10분"
          participate="5명 필요"
          format="정석"
          micStatus="off"
        />
        <ParticipateComponent
          title="삶에서 고통은 필수적인가?"
          time="10분"
          participate="5명 필요"
          format="정석"
          micStatus="off"
        />
      </ScrollView>
    </View>
  );
};

export default ParticipatePage;

const styles = StyleSheet.create({
  container: {
    rowGap: 10,
    flexDirection: 'column',
    paddingHorizontal: 16
  },
});
