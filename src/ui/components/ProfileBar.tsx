import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import NotificationIcon from '@icons/ic_notification.svg';
import { Typography } from '@theme/Typography';
import { lightColors as colors } from '@theme/ColorScheme';

interface ProfileBarProps {
  name: any;
  profileImage: any;
}

const ProfileBar = ({ name, profileImage }: ProfileBarProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.profileWrapper}>
        <Image source={profileImage} style={styles.profileImage} />
        <Text style={[Typography.titleLarge, { color: colors.onBackground }]}>
          {name}
        </Text>
      </View>
      <View style={{ flex: 1 }} /> {/* 이게 자동 gap 역할 */}
      <NotificationIcon width={24} height={24} />
    </View>
  );
};

export default ProfileBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 20,
    backgroundColor: colors.surface,
  },
  profileWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  profileImage: {
    width: 24,
    height: 24,
    borderRadius: 12,
  },
});
