import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableWithoutFeedback } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import HeaderBar from '@components/HeaderBar';
import ParticipateComponent from '@components/ParticipateComponent';
import SpectateComponent from '@components/SpectateComponent';

import { lightColors as colors } from '@theme/ColorScheme';

import SearchIcon from '@icons/ic_search.svg';
import FilterIcon from '@icons/ic_filter.svg';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../App';

const ParticipatePage = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  
  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={{ backgroundColor: colors.surface }}>
        <HeaderBar
          title="토론 참여"
          icons={[<SearchIcon width={28} height={28} />, <FilterIcon width={28} height={28} />]}
        />
      </SafeAreaView>
      <TouchableWithoutFeedback onPress={() => {
        navigation.navigate('WaitingDebate');
      }}>
        <ScrollView contentContainerStyle={styles.container}>
        <ParticipateComponent
          title="여성징병제 도입은 필요한가"
          time="10분"
          participate="5명 필요"
          format="정석"
          micStatus="off"
        />
        <ParticipateComponent
          title="정시 확대 vs 수시 확대, 무엇이 공정한가"
          time="10분"
          participate="5명 필요"
          format="정석"
          micStatus="off"
        />
        <ParticipateComponent
          title="사형제도는 유지되어야 하는가"
          time="10분"
          participate="5명 필요"
          format="정석"
          micStatus="off"
        />
        <ParticipateComponent
          title="청소년에게 정치 참여(선거권)를 허용해야 하는가"
          time="10분"
          participate="5명 필요"
          format="정석"
          micStatus="off"
        />
        <ParticipateComponent
          title="공영방송은 정치적 중립을 유지할 수 있는가"
          time="10분"
          participate="5명 필요"
          format="정석"
          micStatus="off"
        />
        <ParticipateComponent
          title="최저임금 인상은 청년 고용에 도움이 되는가"
          time="10분"
          participate="5명 필요"
          format="정석"
          micStatus="off"
        />
        <ParticipateComponent
          title="플랫폼 노동(배달, 크몽 등)은 정당한 노동인가"
          time="10분"
          participate="5명 필요"
          format="정석"
          micStatus="off"
        />
        <ParticipateComponent
          title="부의 세습은 정당한가"
          time="10분"
          participate="5명 필요"
          format="정석"
          micStatus="off"
        />
        <ParticipateComponent
          title="기본소득 제도는 실현 가능한가"
          time="10분"
          participate="5명 필요"
          format="정석"
          micStatus="off"
        />
        <ParticipateComponent
          title="정년 연장은 청년 실업을 악화시키는가"
          time="10분"
          participate="5명 필요"
          format="정석"
          micStatus="off"
        />
      </ScrollView>
      </TouchableWithoutFeedback>
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
