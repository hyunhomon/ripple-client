import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Typography } from '@theme/Typography';
import { lightColors as colors } from '@theme/ColorScheme';

interface UserCardProps {
  name: string;
  level: number;
  avatarUrl: string;
  rightLabel?: string;
  isHost?: boolean;
  onKickPress?: () => void;
}

export default function UserCard({
  name,
  level,
  avatarUrl,
  rightLabel,
  isHost = false,
  onKickPress,
}: UserCardProps) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: avatarUrl }} style={styles.avatar} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.level}>Lv.{level}</Text>
      </View>

      {isHost ? (
        <View style={styles.actionContainer}>
          {rightLabel && (
            <View style={styles.rightBox}>
              <Text style={styles.rightText}>{rightLabel}</Text>
            </View>
          )}
          <TouchableOpacity onPress={onKickPress} style={styles.kickBox}>
            <Text style={styles.kickText}>퇴장</Text>
          </TouchableOpacity>
        </View>
      ) : rightLabel ? (
        <View style={styles.rightBox}>
          <Text style={styles.rightText}>{rightLabel}</Text>
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    paddingVertical: 14,
    paddingHorizontal: 10,
    borderRadius: 10,
    gap: 10,
  },
  avatar: {
    width: 24,
    height: 24,
    borderRadius: 18,
    backgroundColor: colors.outline,
  },
  infoContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  name: {
    ...Typography.titleLarge,
    color: colors.onBackground,
  },
  level: {
    ...Typography.bodySmall,
    color: colors.onSurfaceVariant,
    marginLeft: 6,
  },
  actionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10, // 👈 두 박스 사이 간격
  },
  rightBox: {
    backgroundColor: colors.background,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 999,
  },
  rightText: {
    ...Typography.bodySmall,
    color: colors.onSurfaceVariant,
  },
  kickBox: {
    backgroundColor: '#F14E4E',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 999,
  },
  kickText: {
    ...Typography.bodySmall,
    color: colors.background,
  },
});
