// HeaderBar.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Typography } from '@theme/Typography';
import { lightColors as colors } from '@theme/ColorScheme';

interface HeaderBarProps {
  title: string;
  icons?: React.ReactNode[];
}

const HeaderBar = ({ title, icons }: HeaderBarProps) => {
  return (
    <View style={styles.container}>
      <Text style={[Typography.headlineMedium, { color: colors.onBackground }]}>{title}</Text>
      <View style={styles.iconRow}>
        {icons?.map((icon, index) => (
          <View key={index} style={index !== 0 ? styles.iconGap : undefined}>
            {icon}
          </View>
        ))}
      </View>
    </View>
  );
};

export default HeaderBar;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 14,
    justifyContent: 'space-between',
    backgroundColor: colors.surface,
    // marginTop: 50,
  },
  iconRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconGap: {
    marginLeft: 16,
  },
});