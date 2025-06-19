import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { Typography } from '@theme/Typography';
import { lightColors as colors } from '@theme/ColorScheme';

interface TextInputFieldProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  onSubmitEditing?: () => void;
}

export default function TextInputField({
  value,
  onChangeText,
  placeholder = '',
  onSubmitEditing,
}: TextInputFieldProps) {
  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      placeholderTextColor={colors.onSurface}
      onSubmitEditing={onSubmitEditing}
      style={[Typography.bodyLarge, styles.input]}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    width: '100%',
    backgroundColor: colors.surface,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.outline,
    paddingVertical: 14,
    paddingHorizontal: 16,
    color: colors.onBackground,
  },
});
