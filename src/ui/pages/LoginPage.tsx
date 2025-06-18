// LoginPage.tsx
import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Typography } from '@theme/Typography';
import { lightColors as colors } from '@theme/ColorScheme';
import KaKaoButton from '@components/KakaoButton';

const LoginPage = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        source={require('../../assets/icons/loginbackground.png')} // PNG 배경 이미지
        style={styles.background}
        imageStyle={{ opacity: 1.0 }}
      >
        <View style={styles.textContainer}>
          <Text style={[Typography.headlineLarge, styles.title]}>
            환영합니다.{"\n"}
            토론을 시작해볼까요?
          </Text>
          <Text style={[Typography.bodyLarge, styles.subtitle]}>
            리플에서는 시간을 정해두고 토론을 할 수 있어요.{"\n"}
            원하는 방에 들어가 토론을 시작해보세요.
          </Text>
        </View>

        <View style={styles.buttonWrapper}>
          <KaKaoButton
            text="카카오 로그인"
            backgroundColor="#F7E600"
            iconSource={require('@icons/ic_kakao.png')}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'space-between',
    color: colors.surface
  },
  textContainer: {
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  title: {
    color: colors.onPrimary,
    marginBottom: 16,
    lineHeight: 40,
  },
  subtitle: {
    color: colors.onSurfaceVariant,
    lineHeight: 24,
  },
  buttonWrapper: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
});