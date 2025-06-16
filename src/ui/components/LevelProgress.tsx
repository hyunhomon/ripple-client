import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface LevelProgressProps {
  level: number;      // 현재 레벨
  nextXp: number;     // 다음 레벨까지 남은 XP
  percent: number;    // 퍼센트 (0 ~ 100)
}

const LevelProgress: React.FC<LevelProgressProps> = ({ level, nextXp, percent }) => {
  const clampedPercent = Math.max(0, Math.min(percent, 100));

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.levelText}>Lv. {level}</Text>
        <Text style={styles.xpText}>다음 레벨까지 {nextXp}XP</Text>
      </View>
      <View style={styles.progressBarBackground}>
        <View
          style={[
            styles.progressBarFill,
            { width: `${clampedPercent}%` },
          ]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9fafa',
    padding: 16,
    borderRadius: 10,
    width: '100%',
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  levelText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1a1a1a',
  },
  xpText: {
    fontSize: 12,
    color: '#999',
  },
  progressBarBackground: {
    height: 10,
    borderRadius: 999,
    backgroundColor: '#eee',
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    borderRadius: 999,
    backgroundColor: '#4A90E2',
  },
});

export default LevelProgress;
