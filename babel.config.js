module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'], // 프로젝트 내 루트 경로(보통 src)
        alias: {
          '@fonts': './src/assets/fonts',
          '@icons': './src/assets/icons',
          '@components': './src/ui/components',
          '@pages': './src/ui/pages',
          '@theme': './src/ui/theme',
          '@navigation': './src/ui/navigation',
          // 필요에 따라 alias 추가
        },
      },
    ],
  ],
};
