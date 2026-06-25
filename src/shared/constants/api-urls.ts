/**
 * API URLs Configuration
 * 
 * Centraliza todas as URLs de requisição
 * Muda automaticamente baseado no ambiente
 */

const API_BASE_URL = process.env.EXPO_PUBLIC_API_URL || 'http://localhost:8080';

export const API_URLS = {
  // Auth
  auth: {
    login: `${API_BASE_URL}/v1/auth/login`,
    register: `${API_BASE_URL}/v1/auth/register`,
    refresh: `${API_BASE_URL}/v1/auth/refresh`,
    logout: `${API_BASE_URL}/v1/auth/logout`,
  },

  // Users
  users: {
    profile: `${API_BASE_URL}/v1/users/profile`,
    update: `${API_BASE_URL}/v1/users/profile`,
  },

  // Accounts
  accounts: {
    list: `${API_BASE_URL}/v1/accounts`,
    create: `${API_BASE_URL}/v1/accounts`,
    detail: (id: string) => `${API_BASE_URL}/v1/accounts/${id}`,
    update: (id: string) => `${API_BASE_URL}/v1/accounts/${id}`,
    delete: (id: string) => `${API_BASE_URL}/v1/accounts/${id}`,
  },
};
