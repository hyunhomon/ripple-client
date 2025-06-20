import React from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { lightColors as colors } from '@theme/ColorScheme';
import { Typography } from '@theme/Typography';
import SendIcon from '@icons/ic_send.svg'; // 아이콘은 프로젝트에 맞게 수정

interface InputFieldProps {
  value: string;
  onChangeText: (text: string) => void;
  onSend: () => void;
  placeholder?: string;
}

const InputField = ({ value, onChangeText, onSend, placeholder = '하고 싶은 말을 입력하세요' }: InputFieldProps) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.inputContainer}>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={colors.onSurface}
          style={[Typography.bodyLarge, styles.input]}
          multiline
        />
        <TouchableOpacity onPress={onSend}>
          <SendIcon width={24} height={24} fill={colors.onSurface} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default InputField;

const styles = StyleSheet.create({
    wrapper: {
      paddingHorizontal: 20,
      paddingVertical: 10,
      backgroundColor: colors.background,
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: colors.surface,
      borderRadius: 10, // 50% radius
      paddingVertical: 14,
      paddingHorizontal: 20,
      borderWidth: 1,
      borderColor: colors.outline,
    },
    input: {
      flex: 1,
      color: colors.onBackground,
      marginRight: 12,
    },
  });
  