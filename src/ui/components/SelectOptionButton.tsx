import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { Typography } from '@theme/Typography';
import { lightColors as colors } from '@theme/ColorScheme';

type SelectOptionButtonProps = {
  label: string;
  icon: React.ReactNode;
  selected?: boolean;
  onPress: () => void;
};

export default function SelectOptionButton({
  label,
  icon,
  selected = false,
  onPress,
}: SelectOptionButtonProps) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor: selected ? colors.primary : colors.surface,
          borderColor: selected ? colors.primary : colors.outline,
        },
      ]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <View style={styles.inner}>
        {icon}
        <Text
          style={[
            Typography.bodyMedium,
            {
              color: selected ? colors.onPrimary : colors.onSurfaceVariant,
            },
          ]}
        >
          {label}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inner: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6, // 최신 RN만 지원, 아니면 아이콘에 marginRight: 6
  },
});
