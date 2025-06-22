import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProfileBar from '@components/ProfileBar';
import UserStatsSection from '@components/UserStatsSection';
import { lightColors as colors } from '@theme/ColorScheme';
import LevelProgress from '@components/LevelProgress';
import { useUserStore } from '../../hooks/useUserStore';

const HomePage = () => {
  const user = useUserStore((state) => state.user);

  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={{ backgroundColor: colors.surface }}>
        <ProfileBar
          name={"김현호"}
          profileImage={{ uri: user?.kakao_account.profile.profile_image_url }}
        />
      </SafeAreaView>

      {/* 통계 섹션 */}
      <UserStatsSection />
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16, // 필요 시 상태바 아래 여유 공간
    backgroundColor: '#fff',
    justifyContent: 'flex-start', // 상단 고정
    alignItems: 'stretch', // 가로로 꽉 차게
  },
});
