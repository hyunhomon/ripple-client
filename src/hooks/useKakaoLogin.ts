import { useEffect, useState } from 'react';
import { Linking } from 'react-native';
import { startKakaoLogin, getKakaoCallback } from '../repository/kakaoRepository';
import { KakaoLoginResponse } from '../models/kakaoModels';
import { saveTokens } from '../repository/storageRepository';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import { useUserStore } from './useUserStore';

const setUser = useUserStore.getState().setUser;

export function useKakaoLogin() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [data, setData] = useState<KakaoLoginResponse | null>(null);

  useEffect(() => {
    const onReceiveUrl = async ({ url }: { url: string }) => {
      const matched = url.match(/code=([^&]+)/);
      if (!matched) return;
      const code = matched[1];
      const res = await getKakaoCallback(code);

      if (!res) return;
      setData(res);

      // navigate
      navigation.navigate('Home');
    };
    const sub = Linking.addEventListener('url', onReceiveUrl);

    Linking.addEventListener('url', onReceiveUrl);
    return () => sub.remove();
  }, []);

  return {
    data,
    startLogin: startKakaoLogin,
  };
}
