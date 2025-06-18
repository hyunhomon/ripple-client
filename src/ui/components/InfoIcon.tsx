// InfoIcon.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Typography } from '@theme/Typography';
import { lightColors as colors } from '@theme/ColorScheme';

interface InfoIconProps {
  icon: React.FC<{ width?: number; height?: number; fill?: string }>;
  text: string;
}

const InfoIcon = ({ icon: Icon, text }: InfoIconProps) => {
  return (
    <View style={styles.container}>
      <Icon width={16} height={16} fill={colors.onSurfaceVariant} />
      <Text style={[Typography.bodyMedium, { color: colors.onSurfaceVariant, marginLeft: 6 }]}>{text}</Text>
    </View>
  );
};

export default InfoIcon;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});