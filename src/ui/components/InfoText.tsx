import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Typography } from '@theme/Typography';
import { lightColors as colors } from '@theme/ColorScheme';

type InfoTextProps = {
  text: string;
};

export default function InfoText({ text }: InfoTextProps) {
  return <Text style={styles.text}>{text}</Text>;
}

const styles = StyleSheet.create({
  text: {
    paddingTop: 10,
    color: colors.onSurfaceVariant,
    textAlign: 'left',
    alignSelf: 'flex-start',
    ...Typography.bodyMedium,
  },
});
