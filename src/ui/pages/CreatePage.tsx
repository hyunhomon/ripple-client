import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import HeaderBar from '@components/HeaderBar';
import InfoText from '@components/InfoText';
import SelectOptionGroup from '@components/SelectOptionGroup';
import TextInputField from '@components/TextInputField';
import IconInputField from '@components/IconInputField';
import Button from '@components/Button';

import FormatIcon from '@icons/FormatIcon'
import TimeIcon from '@icons/ic_time.svg';
import PeopleIcon from '@icons/ic_people.svg';
import MicOnIcon from '@icons/ic_mic_on.svg';
import MicOffIcon from '@icons/ic_mic_off.svg';

import { lightColors as colors } from '@theme/ColorScheme';
import { TextInputComponent } from 'node_modules/react-native/types/index';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../App';


export default function CreatePage() {
  const [topic, setTopic] = useState('');
  const [time, setTime] = useState('');
  const [people, setPeople] = useState('');
  const [selectedFormat, setSelectedFormat] = useState<string | null>(null);
  const [selectedMode, setSelectedMode] = useState<string | null>(null);
  const allFieldsFilled = topic && time && people && selectedFormat && selectedMode;
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const debateOptions = [
    { label: '자유', icon: <FormatIcon fill = {selectedFormat === "자유"}/> },
    { label: '정석', icon: <FormatIcon fill = {selectedFormat === "정석"}/> },
    { label: '찬반', icon: <FormatIcon fill = {selectedFormat === "찬반"}/> },
  ];

  const modeOptions = [
    { label: '보이스', icon: <MicOnIcon width={20} height={20}/> },
    { label: '텍스트', icon: <MicOffIcon width={20} height={20}/> },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <HeaderBar title="토론 생성" />

      <View style={styles.content}>
        {/* 토론 형식 */}
        <InfoText text="토론 형식" />
        <View style={styles.row}>
          <SelectOptionGroup
            options={debateOptions}
            defaultSelected={selectedFormat ?? undefined}
            onSelect={setSelectedFormat}
            // style={styles.flexRow}
          />
        </View>

        {/* 주제 */}
        <InfoText text="주제" />
        <TextInputField
          value={topic}
          onChangeText={setTopic}
          placeholder="토론 주제를 입력하세요"
        />
        {/* 시간 / 목표 인원 */}
        <InfoText text="시간 / 목표 인원" />
        <View style={styles.row}>
          <IconInputField
            value={time}
            onChangeText={setTime}
            placeholder="N분"
            icon={<TimeIcon width={20} height={20} fill={colors.onSurface} />}
          />
          <IconInputField
            value={people}
            onChangeText={setPeople}
            placeholder="N명"
            icon={<PeopleIcon width={20} height={20} fill={colors.onSurface} />}
          />
        </View>

        {/* 소통 방식 */}
        <InfoText text="소통 방식"/>
        
         {/* ← 마지막 InfoText 뒤 */}
        <View style={styles.row}>
          <SelectOptionGroup
            options={modeOptions}
            defaultSelected={selectedMode ?? undefined}
            onSelect={setSelectedMode}
          />
        </View>
        <View style={{ marginTop: 20 }}>
          <Button
            text="생성"
            backgroundColor={allFieldsFilled ? 'primary' : 'surface'}
            textColor={allFieldsFilled ? colors.onPrimary : colors.onSurfaceVariant}
            onPress={() => {
              if (!allFieldsFilled) return;
              navigation.navigate('WaitingDebate');
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    gap: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    flexWrap: 'wrap',
  },
  flexRow: {
    flex: 1,
    flexDirection: 'row',
    gap: 10,
  },
  iconMargin: {
    marginRight: 8,
  },
});
