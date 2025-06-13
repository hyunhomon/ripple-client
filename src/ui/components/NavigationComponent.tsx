import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import HomeIcon from '@icons/ic_home.svg';
import ParticipateIcon from '@icons/ic_participate.svg';
import AddIcon from '@icons/ic_add.svg';
import SpectateIcon from '@icons/ic_spectate.svg';
import GalleryIcon from '@icons/ic_gallery.svg';

import { lightColors, ThemeColors } from '@theme/ColorScheme'; 

interface NavItem {
  icon: React.FC<{ width?: number; height?: number; fill?: string }>;
  label: string;
}

const NAV_ITEMS: NavItem[] = [
  { icon: HomeIcon, label: '홈' },
  { icon: ParticipateIcon, label: '참여' },
  { icon: AddIcon, label: '생성' },
  { icon: SpectateIcon, label: '관전' },
  { icon: GalleryIcon, label: '구경' },
];

interface NavigationBarProps {
  activeIndex: number;
  onPress: (index: number) => void;
}

const NavigationBar = ({ activeIndex, onPress }: NavigationBarProps) => {
  const colors = lightColors;

  return (
    <View style={[styles.container, { backgroundColor: colors.surface }]}>
      {NAV_ITEMS.map((item, index) => {
        const Icon = item.icon;
        const isActive = activeIndex === index;
        const color = isActive ? colors.onBackground : colors.onSurfaceVariant;

        return (
          <TouchableOpacity
            key={index}
            style={styles.navItem}
            onPress={() => onPress(index)}
            activeOpacity={0.7}
          >
            <Icon width={24} height={24} fill={color} />
            <Text style={[styles.label, { color }]}>
              {item.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default NavigationBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 8,
    justifyContent: 'space-between',
    width: '100%',
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    marginTop: 4,
    fontSize: 12,
  },
});
