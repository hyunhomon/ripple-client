import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Typography } from '@theme/Typography';
import { lightColors as colors } from '@theme/ColorScheme';

interface GoBackBarProps {
  title: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onLeftPress?: () => void;
  onRightPress?: () => void;
}

const GoBackBar = ({ title, leftIcon, rightIcon, onLeftPress, onRightPress }: GoBackBarProps) => {
  return (
    <View style={styles.container}>
      {leftIcon ? (
        <TouchableOpacity onPress={onLeftPress} style={styles.iconWrapper}>
          {leftIcon}
        </TouchableOpacity>
      ) : (
        <View style={styles.iconPlaceholder} />
      )}

      <Text style={[Typography.titleLarge, styles.title]} numberOfLines={1}>
        {title}
      </Text>

      {rightIcon ? (
        <TouchableOpacity onPress={onRightPress} style={styles.iconWrapper}>
          {rightIcon}
        </TouchableOpacity>
      ) : (
        <View style={styles.iconPlaceholder} />
      )}
    </View>
  );
};

export default GoBackBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 14,
    backgroundColor: colors.surface,
    gap: 10,
  },
  iconWrapper: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconPlaceholder: {
    width: 24,
    height: 24,
  },
  title: {
    flex: 1,
    color: colors.onBackground,
  },
});
