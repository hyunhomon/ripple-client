import axios from 'axios';
import { KakaoLoginResponse, KakaoUser, Token } from '../models/kakaoModels';
import { Linking } from 'react-native';
import { getAccessToken, getRefreshToken, saveTokens } from './storageRepository';
import { useUserStore } from '../hooks/useUserStore';

const setUser = useUserStore.getState().setUser;

const api = axios.create({
  baseURL: 'https://ripple.asta.rs',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
  }
});

export const getKakaoAuthUrl = async (): Promise<string> => {
  const res = await api.get('/oauth/kakao/url')
  return res.data.url
};

export const getKakaoCallback = async (code: string): Promise<KakaoLoginResponse | null> => {
  try {
    const res = await api.get(`/oauth/kakao/callback?code=${code}`)
    const token = res.data.token;
    const user = res.data.user;

    saveTokens(token.access_token, token.refresh_token)
    setUser(user);

    return res.data
  } catch(e: any) {
    return null
  }
};

export const getUserInfo = async (): Promise<KakaoUser | null> => {
  try {
    const acToken = getAccessToken();
    if (!acToken) return null;

    const res = await api.get(`/oauth/kakao/info?access-token=${acToken}`);
    const user = res.data;

    setUser(user)
    return user
  } catch(e: any) {
    return null
  }
};

export const updateAcToken = async (): Promise<string | null> => {
  try {
    const refToken = getRefreshToken();
    if (!refToken) return null;

    const res = await api.get(`/oauth/kakao/refresh?refresh-token=${refToken}`);
    const acToken = res.data.access_token;

    saveTokens(acToken, refToken)
    return acToken
  } catch(e: any) {
    return null
  }
};

export const startKakaoLogin = async () => {
  const url = await getKakaoAuthUrl();
  await Linking.openURL(url);
};
