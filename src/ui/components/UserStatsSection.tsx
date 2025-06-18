import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LevelProgress from '@components/LevelProgress';
import MannerStatus from '@components/MannerStatus';
import { Typography } from '@theme/Typography';
import { lightColors as colors } from '@theme/ColorScheme';
import StatBox from './StatBox';
import AIFeedback from './AIFeedback';

const UserStatsSection = () => {
  return (
    <View style={styles.container}>
      {/* Progress Bar */}
      <LevelProgress level={14} nextXp={140} percent={42} />

      {/* Stats Row */}
      <View style={styles.statsRow}>
        <MannerStatus percent={90} />
        <View style={styles.statsColumn}>
            <StatBox label="총 토론 횟수" value="340" />
            <StatBox label="누적 XP" value="40,000" />
        </View>
      </View>
      <AIFeedback feedback="상대의 논리에 공격적으로 답하며, 은연 중 경쟁 심리가 드러남. 표현을 논리적으로 할 줄 알기에 조금 부드럽게 말한다면 더 훌륭한 토론자가 될 것임." />
    </View>
  );
};

export default UserStatsSection;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    gap: 10,
  },
  statsRow: {
    flexDirection: 'row',
    gap: 10,
  },
  statsColumn: {
    flex: 1,
    justifyContent: 'space-between',
    gap: 10,
  },
  statBox: {
    backgroundColor: colors.surface,
    borderRadius: 10,
    padding: 16,
  },
  feedbackBox: {
    backgroundColor: colors.surface,
    borderRadius: 10,
    padding: 16,
  },
});
