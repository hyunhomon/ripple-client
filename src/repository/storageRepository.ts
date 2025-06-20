// authTokenStorage.ts
import AsyncStorage from '@react-native-async-storage/async-storage';

const ACCESS_TOKEN_KEY = 'kakao_access_token';
const REFRESH_TOKEN_KEY = 'kakao_refresh_token';

// 전역 변수 저장소
let accessTokenCache: string | null = null;
let refreshTokenCache: string | null = null;

export const saveTokens = async (accessToken: string, refreshToken: string): Promise<void> => {
  try {
    accessTokenCache = accessToken;
    refreshTokenCache = refreshToken;
    await AsyncStorage.multiSet([
      [ACCESS_TOKEN_KEY, accessToken],
      [REFRESH_TOKEN_KEY, refreshToken],
    ]);
  } catch (err) {
    console.error('토큰 저장 실패:', err);
  }
};

export const getTokens = async (): Promise<{ accessToken: string | null; refreshToken: string | null }> => {
  try {
    if (accessTokenCache && refreshTokenCache) {
      return { accessToken: accessTokenCache, refreshToken: refreshTokenCache };
    }

    const [[, accessToken], [, refreshToken]] = await AsyncStorage.multiGet([
      ACCESS_TOKEN_KEY,
      REFRESH_TOKEN_KEY,
    ]);

    accessTokenCache = accessToken;
    refreshTokenCache = refreshToken;
    return { accessToken, refreshToken };
  } catch (err) {
    console.error('토큰 불러오기 실패:', err);
    return { accessToken: null, refreshToken: null };
  }
};

export const clearTokens = async (): Promise<void> => {
  try {
    accessTokenCache = null;
    refreshTokenCache = null;
    await AsyncStorage.multiRemove([ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY]);
  } catch (err) {
    console.error('토큰 삭제 실패:', err);
  }
};

export const getAccessToken = (): string | null => accessTokenCache;
export const getRefreshToken = (): string | null => refreshTokenCache;
