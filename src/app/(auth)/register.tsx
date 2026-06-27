/**
 * Register Screen
 * 
 * Tela de criação de conta
 */

import { View, Text, TextInput, Pressable } from 'react-native';
import { useState } from 'react';
import { Link } from 'expo-router';

export default function RegisterScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
      <Text style={{ fontSize: 28, marginBottom: 30, fontWeight: 'bold' }}>
        Criar Conta
      </Text>

      <TextInput
        placeholder="Nome Completo"
        value={name}
        onChangeText={setName}
        style={{
          borderWidth: 1,
          borderColor: '#ccc',
          padding: 10,
          marginBottom: 15,
          borderRadius: 5,
        }}
      />

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
        style={{
          backgroundColor: '#7C3AED',
          padding: 15,
          borderRadius: 5,
          alignItems: 'center',
        }}
      >
        <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>
          Criar Conta
        </Text>
      </Pressable>

      <View style={{ marginTop: 20, alignItems: 'center' }}>
        <Text>Já tem conta? </Text>
        <Link href="/login" style={{ color: '#7C3AED' }}>
          <Text style={{ color: '#7C3AED', fontWeight: 'bold' }}>
            Faça login
          </Text>
        </Link>
      </View>
    </View>
  );
}
