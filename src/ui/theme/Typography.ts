// src/ui/theme/Typography.ts

import { TextStyle } from 'react-native';

type TypographySet = {
  [key: string]: TextStyle;
};

export const Typography: TypographySet = {
  // Headline
  headlineLarge: {
    fontFamily: 'Pretendard-Bold',
    fontSize: 28,
  },
  headlineMedium: {
    fontFamily: 'Pretendard-Bold',
    fontSize: 24,
  },
  headlineSmall: {
    fontFamily: 'Pretendard-Bold',
    fontSize: 20,
  },

  // Title
  titleLarge: {
    fontFamily: 'Pretendard-Bold',
    fontSize: 18,
  },
  titleMedium: {
    fontFamily: 'Pretendard-SemiBold',
    fontSize: 16,
  },
  titleSmall: {
    fontFamily: 'Pretendard-SemiBold',
    fontSize: 14,
  },

  // Body
  bodyLarge: {
    fontFamily: 'Pretendard-Medium',
    fontSize: 16,
  },
  bodyMedium: {
    fontFamily: 'Pretendard-Medium',
    fontSize: 14,
  },
  bodySmall: {
    fontFamily: 'Pretendard-Medium',
    fontSize: 12,
  },
};
