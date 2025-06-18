import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Typography } from '@theme/Typography';
import { lightColors as colors } from '@theme/ColorScheme';

interface StatBoxProps {
  label: string;
  value: string | number;
}

const StatBox = ({ label, value }: StatBoxProps) => {
  return (
    <View style={styles.container}>
      <Text style={[Typography.bodySmall, styles.label]}>{label}</Text>
      <Text style={[Typography.titleLarge, styles.value]}>{value}</Text>
    </View>
  );
};

export default StatBox;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: 12,
    backgroundColor: colors.surface,
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: 2,
  },
  label: {
    color: colors.onSurfaceVariant,
  },
  value: {
    color: colors.onBackground,
  },
});
