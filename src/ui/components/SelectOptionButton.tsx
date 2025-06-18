import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Typography } from '@theme/Typography';
import { lightColors as colors } from '@theme/ColorScheme';
import { FC } from 'react';
import { SvgProps } from 'react-native-svg';

interface SelectOptionButtonProps {
  icon: FC<SvgProps>; // SVG 컴포넌트 타입
  text: string;
  onPress? : () => void;
}

// interface SelectOptionButtonProps {
//   icon: React.ReactNode;
//   text: string;
//   onPress?: () => void;
// }

const SelectOptionButton = ({ icon: Icon, text }: SelectOptionButtonProps) => {
    return (
      <TouchableOpacity style={styles.button}>
        <Icon width={20} height={20} />
        <Text style={Typography.bodyLarge}>{text}</Text>
      </TouchableOpacity>
    );
  };

export default SelectOptionButton;

const styles = StyleSheet.create({
  button: {
    flexGrow: 1,
    flexBasis: 0,
    flexShrink: 1,
    paddingVertical: 14,
    borderRadius: 999,
    backgroundColor: colors.surface,
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 6,
    borderWidth: 1,
    borderColor: colors.outline,
  },
//   content: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   label: {
//     marginLeft: 10,
//     color: colors.onBackground,
//   },
});
