import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Typography } from '@theme/Typography';
import { lightColors as colors } from '@theme/ColorScheme';

interface AIFeedbackProps {
  feedback: string;
}

const AIFeedback = ({ feedback }: AIFeedbackProps) => {
  return (
    <View style={styles.container}>
      <Text style={[Typography.bodySmall, styles.label]}>AI 피드백</Text>
      <Text style={[Typography.bodyMedium, styles.feedback]}>{feedback}</Text>
    </View>
  );
};

export default AIFeedback;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 12,
    backgroundColor: colors.surface,
  },
  label: {
    color: colors.onSurfaceVariant,
    marginBottom: 8,
  },
  feedback: {
    color: colors.onBackground,
  },
});
