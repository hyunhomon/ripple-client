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
          title="인공지능은 인간의 일자리를 위협하는가"
          time="10분 남음"
          participate="10명"
          spectate="10명"
          format="정석"
          micStatus="on"
        />
        <SpectateComponent
          title="유전자 편집은 윤리적으로 허용 가능한가"
          time="10분 남음"
          participate="10명"
          spectate="10명"
          format="정석"
          micStatus="on"
        />
        <SpectateComponent
          title="원자력 발전은 지속 가능한가"
          time="10분 남음"
          participate="10명"
          spectate="10명"
          format="정석"
          micStatus="on"
        />
        <SpectateComponent
          title="인터넷 실명제는 표현의 자유를 침해하는가"
          time="10분 남음"
          participate="10명"
          spectate="10명"
          format="정석"
          micStatus="on"
        />
        <SpectateComponent
          title="자율주행차 사고 시 책임은 누구에게 있는가"
          time="10분 남음"
          participate="10명"
          spectate="10명"
          format="정석"
          micStatus="on"
        />
        <SpectateComponent
          title="기후위기 대응을 위해 원자력은 필요한가"
          time="10분 남음"
          participate="10명"
          spectate="10명"
          format="정석"
          micStatus="on"
        />
        <SpectateComponent
          title="선진국은 탄소배출에 더 큰 책임을 져야 하는가"
          time="10분 남음"
          participate="10명"
          spectate="10명"
          format="정석"
          micStatus="on"
        />
        <SpectateComponent
          title="동물 실험은 정당화될 수 있는가"
          time="10분 남음"
          participate="10명"
          spectate="10명"
          format="정석"
          micStatus="on"
        />
        <SpectateComponent
          title="플라스틱 사용은 전면 금지되어야 하는가"
          time="10분 남음"
          participate="10명"
          spectate="10명"
          format="정석"
          micStatus="on"
        />
        <SpectateComponent
          title="다문화 사회로의 전환은 필연적인가"
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
