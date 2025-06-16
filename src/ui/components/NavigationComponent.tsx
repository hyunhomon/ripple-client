import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import HomeIcon from '@icons/HomeIcon';
import ParticipateIcon from '@icons/ParticipateIcon';

import AddIcon from '@icons/AddIcon';  // 👈 SVG JSX 형태니까 이제 정상 작동
import SpectateIcon from '@icons/SpectateIcon';
import GalleryIcon from '@icons/GalleryIcon';

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

        // console.log(`[NavigationBar] ${item.label} → ${color}`);

        return (
          <TouchableOpacity
            key={index}
            style={styles.navItem}
            onPress={() => onPress(index)}
            activeOpacity={0.7}
          >
            {/* 아이콘 색도 상태에 따라 변경 */}
             <Icon width={24} height={24} fill={isActive ? colors.onBackground : colors.onSurfaceVariant} />
            <Text style={{
              marginTop: 4,
              fontSize: 12,
              color: isActive ? colors.onBackground : colors.onSurfaceVariant,
            }}>{item.label}</Text>
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
