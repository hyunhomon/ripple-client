import React, { useState } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import HeaderBar from '@components/HeaderBar';
import SelectOptionButton from '@components/SelectOptionButton';

import { SafeAreaView } from 'react-native-safe-area-context';
import { lightColors as colors } from '@theme/ColorScheme';
import WandIcon from '@icons/ic_wand.svg';
import CancelIcon from '@icons/ic_cancel.svg';
import FormatIcon from '@icons/ic_format.svg';
import MicIcon from '@icons/ic_mic_on.svg';
import TimeIcon from '@icons/ic_time.svg';
import PeopleIcon from '@icons/ic_people.svg';
import { Typography } from '@theme/Typography';
import Button from '@components/Button';

const CreatePage = () => {
  const [inputText, setInputText] = useState('');

  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={{ backgroundColor: colors.surface }}>
        <HeaderBar title="토론 생성" />
      </SafeAreaView>

      <View style={styles.container}>
        {/* Input Field */}
        <View style={styles.inputBox}>
          <View style={styles.inputField}>
            <TextInput
              placeholder="주제를 입력해주세요"
              placeholderTextColor={colors.onSurface}
              value={inputText}
              onChangeText={setInputText}
              style={[Typography.bodyLarge, styles.inputText]}
            />
            <TouchableOpacity onPress={() => setInputText('')}>
              {inputText.length === 0 ? (
                <WandIcon width={24} height={24} />
              ) : (
                <CancelIcon width={24} height={24} />
              )}
            </TouchableOpacity>
          </View>
        </View>

        {/* First Row */}
        <View style={styles.row}>
          <SelectOptionButton icon={FormatIcon} text="정석" />
          <SelectOptionButton icon={MicIcon} text="보이스" />
        </View>

        {/* Second Row */}
        <View style={styles.row}>
          <SelectOptionButton icon={TimeIcon} text="10분" />
          <SelectOptionButton icon={PeopleIcon} text="10명" />
        </View>
        <Button
            text = "생성"
            backgroundColor='primary'             
          />
      </View>
    </View>
  );
};

export default CreatePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  inputBox: {
    flexDirection: 'column',
    marginBottom: 14,
  },
  inputField: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderRadius: 999,
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderWidth: 1,
    borderColor: colors.outline,
  },
  inputText: {
    flex: 1,
    color: colors.onBackground, 
  },
  row: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    gap: 8,
    marginBottom: 14,
  },
  text: {
    fontSize: 18,
  },
});
