/**
 * Home Screen / Splash
 * 
 * Primeira tela que o usuário vê
 * Pode ser splash, onboarding, ou login
 */

import { View, Text } from 'react-native';
import { Link } from 'expo-router';

export default function Home() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>FinTracker Hub</Text>
      <Link href="/login" style={{ padding: 10, backgroundColor: '#7C3AED', color: 'white', borderRadius: 5 }}>
        <Text style={{ color: 'white' }}>Ir para Login</Text>
      </Link>
    </View>
  );
}
