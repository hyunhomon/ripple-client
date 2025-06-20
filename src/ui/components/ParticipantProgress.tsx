import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Typography } from '@theme/Typography';
import { lightColors as colors } from '@theme/ColorScheme';

interface ParticipantProgressProps {
  current: number;
  total: number;
}

const ParticipantProgress: React.FC<ParticipantProgressProps> = ({ current, total }) => {
  const percent = Math.min(100, Math.max(0, (current / total) * 100));

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={[Typography.titleLarge, { color: colors.onBackground }]}>
          {current}명
        </Text>
        <View style={styles.totalBox}>
          <Text style={[Typography.bodySmall, { color: colors.onSurfaceVariant }]}>
            {total}명
          </Text>
        </View>
      </View>
      <View style={styles.progressBarBackground}>
        <View
          style={[
            styles.progressBarFill,
            { width: `${percent}%`, backgroundColor: colors.primary },
          ]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.surface,
    padding: 16,
    borderRadius: 10,
    width: '100%',
    gap: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  totalBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  progressBarBackground: {
    height: 10,
    borderRadius: 999,
    backgroundColor: colors.background,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    borderRadius: 999,
  },
});

export default ParticipantProgress;
