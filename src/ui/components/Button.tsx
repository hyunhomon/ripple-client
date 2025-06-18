import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Typography } from '@theme/Typography';
import { lightColors as colors } from '@theme/ColorScheme';

interface ButtonProps {
  text: string;
  backgroundColor: keyof typeof colors;  
  textColor?: string;
  onPress?: () => void;
}

const Button = ({ text, backgroundColor, textColor = colors.onPrimary, onPress }: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={[styles.button, { backgroundColor: colors[backgroundColor] }]} 
    >
      <View style={styles.content}>
        <Text style={[Typography.titleMedium, styles.text, { color: textColor }]}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 14,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 999,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
  },
});
