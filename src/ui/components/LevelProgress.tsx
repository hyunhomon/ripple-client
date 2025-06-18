import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Typography } from '@theme/Typography';
import { lightColors as colors } from '@theme/ColorScheme';

interface LevelProgressProps {
  level: number;
  nextXp: number;
  percent: number;
}

const LevelProgress: React.FC<LevelProgressProps> = ({ level, nextXp, percent }) => {
  const clampedPercent = Math.max(0, Math.min(percent, 100));

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={[Typography.titleLarge, { color: colors.onBackground }]}>Lv. {level}</Text>
        <Text style={[Typography.bodySmall, { color: colors.onSurfaceVariant }]}>
          다음 레벨까지 {nextXp}XP
        </Text>
      </View>
      <View style={styles.progressBarBackground}>
        <View
          style={[
            styles.progressBarFill,
            { width: `${clampedPercent}%`, backgroundColor: colors.primary },
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

export default LevelProgress;
