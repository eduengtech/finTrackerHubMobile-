/**
 * Login Screen
 * 
 * Tela de autenticação
 */

import { View, Text, TextInput, Pressable } from 'react-native';
import { useState } from 'react';
import { Link, router } from 'expo-router';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
      <Text style={{ fontSize: 28, marginBottom: 30, fontWeight: 'bold' }}>
        Login
      </Text>

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={{
          borderWidth: 1,
          borderColor: '#ccc',
          padding: 10,
          marginBottom: 15,
          borderRadius: 5,
        }}
      />

      <TextInput
        placeholder="Senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={{
          borderWidth: 1,
          borderColor: '#ccc',
          padding: 10,
          marginBottom: 20,
          borderRadius: 5,
        }}
      />

      <Pressable
        onPress={() => router.push('/(authenticated)/dashboard')}
        style={{
          backgroundColor: '#7C3AED',
          padding: 15,
          borderRadius: 5,
          alignItems: 'center',
        }}
      >
        <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>
          Entrar
        </Text>
      </Pressable>

      <View style={{ marginTop: 20, alignItems: 'center' }}>
        <Text>Não tem conta? </Text>
        <Link href="/register" style={{ color: '#7C3AED' }}>
          <Text style={{ color: '#7C3AED', fontWeight: 'bold' }}>
            Registre-se
          </Text>
        </Link>
      </View>
    </View>
  );
}
