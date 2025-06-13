// src/theme/colorScheme.ts

export type ThemeColors = {
    primary: string;
    onPrimary: string;
    background: string;
    onBackground: string;
    surface: string;
    onSurface: string;
    onSurfaceVariant: string;
    outline: string;
  };
  
  export const lightColors: ThemeColors = {
    primary: '#4E8EF3',
    onPrimary: '#FFFFFF',
    background: '#F4F5F6',
    onBackground: '#151719',
    surface: '#FFFFFF',
    onSurface: '#CACFD3',
    onSurfaceVariant: '#9A9FA7',
    outline: '#E6E8EA',
  };
  
  export const darkColors: ThemeColors = {
    primary: '#4E8EF3',
    onPrimary: '#FFFFFF',
    background: '#2C3035',
    onBackground: '#FFFFFF',
    surface: '#363B40',
    onSurface: '#68727E',
    onSurfaceVariant: '#929BA5',
    outline: '#434951',
  };
  