// store/userStore.ts
import { create } from 'zustand';
import { KakaoUser } from '../models/kakaoModels';

type UserState = {
  user: KakaoUser | null;
  setUser: (user: KakaoUser) => void;
};

export const useUserStore = create<UserState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));
