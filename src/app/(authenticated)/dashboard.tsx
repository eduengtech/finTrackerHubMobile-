/**
 * Dashboard Screen
 * 
 * Tela principal do aplicativo (após login)
 */

import { View, Text } from 'react-native';

export default function DashboardScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24 }}>Dashboard</Text>
      <Text style={{ marginTop: 10, color: '#666' }}>
        Bem-vindo ao FinTracker Hub!
      </Text>
    </View>
  );
}
