import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Typography } from '@theme/Typography';
import { lightColors as colors } from '@theme/ColorScheme';

type StatusItem = {
  icon: React.ReactNode;
  label?: string;
};

interface StatusRowProps {
  items: StatusItem[];
}

export default function StatusRow({ items }: StatusRowProps) {
  return (
    <View style={styles.container}>
      {items.map((item, idx) => (
        <View key={idx} style={styles.statusBox}>
          {item.icon}
          <Text style={styles.label}>{item.label}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 10,
  },
  statusBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    borderWidth: 1,
    justifyContent: 'center',
    borderColor: colors.outline,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: colors.surface,
  },
  label: {
    ...Typography.bodyMedium,
    color: colors.onSurfaceVariant,
  },
});
