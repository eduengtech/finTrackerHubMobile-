/**
 * Design System Colors
 *
 * Baseado na paleta do Nubank
 * Referência: https://www.nubank.com.br/
 */

export const colors = {
  // Primary (Roxo Nubank)
  primary: {
    light: '#9E6FD5',
    main: '#7C3AED', // Purple-600
    dark: '#6D28D9', // Purple-700
  },

  // Neutral
  neutral: {
    50: '#F9FAFB',
    100: '#F3F4F6',
    200: '#E5E7EB',
    300: '#D1D5DB',
    400: '#9CA3AF',
    500: '#6B7280',
    600: '#4B5563',
    700: '#374151',
    800: '#1F2937',
    900: '#111827',
  },

  // Semantic
  success: '#10B981',
  warning: '#F59E0B',
  error: '#EF4444',
  info: '#3B82F6',

  // Backgrounds
  background: '#FFFFFF',
  surface: '#F9FAFB',
};

export type ColorKeys = keyof typeof colors;
