import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ImageSourcePropType } from 'react-native';
import { Typography } from '@theme/Typography';

interface KaKaoButtonProps {
  text: string;
  backgroundColor: string;
  textColor?: string;
  iconSource: ImageSourcePropType;
  onPress?: () => void;
}

const KaKaoButton = ({ text, backgroundColor, textColor = '#191919', iconSource, onPress }: KaKaoButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8} style={[styles.button, { backgroundColor }]}>
      <View style={styles.content}>
        <Image source={iconSource} style={styles.icon} />
        <Text style={[Typography.titleMedium, styles.text, { color: textColor }]}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default KaKaoButton;

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
  icon: {
    width: 20,
    height: 20,
    marginRight: 10, // 10px gap between icon and text
    resizeMode: 'contain',
  },
  text: {
    textAlign: 'center',
  },
});
