import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Typography } from '@theme/Typography';
import { lightColors as colors } from '@theme/ColorScheme';

interface IconInputFieldProps {
  value: string;
  onChangeText: (text: string) => void;
  icon: React.ReactNode;
  placeholder?: string;
  onSubmitEditing?: () => void;
}

export default function IconInputField({
  value,
  onChangeText,
  icon,
  placeholder = '',
  onSubmitEditing,
}: IconInputFieldProps) {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>{icon}</View>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={colors.onSurface}
        onSubmitEditing={onSubmitEditing}
        style={[Typography.bodyLarge, styles.input]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.outline,
    paddingVertical: 14,
    paddingHorizontal: 16,
  },
  icon: {
    marginRight: 6,
  },
  input: {
    flex: 1,
    color: colors.onBackground,
  },
});
