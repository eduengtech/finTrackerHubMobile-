/**
 * Authenticated Layout
 * 
 * Layout para usuários autenticados
 * Com header, navegação, etc
 */

import { Stack } from 'expo-router';

export default function AuthenticatedLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: '#7C3AED',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      {/* Rotas autenticadas aqui */}
    </Stack>
  );
}
