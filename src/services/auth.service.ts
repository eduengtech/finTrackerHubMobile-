/**
 * Authentication Service
 * 
 * Centraliza todas as requisições de autenticação
 * Login, Register, Token refresh
 */

import { API_URLS } from '@/shared/constants/api-urls';
import { 
  LoginRequest, 
  LoginResponse, 
  RegisterRequest 
} from '@/shared/types/user.types';
import { apiClient } from './api';

export const authService = {
  /**
   * Faz login do usuário
   * @param email - Email do usuário
   * @param password - Senha do usuário
   * @returns Token e dados do usuário
   */
  login: async (email: string, password: string): Promise<LoginResponse> => {
    const payload: LoginRequest = { email, password };
    return apiClient.post(API_URLS.auth.login, payload);
  },

  /**
   * Registra novo usuário
   * @param email - Email do usuário
   * @param password - Senha do usuário
   * @param name - Nome completo
   */
  register: async (
    email: string,
    password: string,
    name: string
  ): Promise<LoginResponse> => {
    const payload: RegisterRequest = { email, password, name };
    return apiClient.post(API_URLS.auth.register, payload);
  },

  /**
   * Faz logout (limpa token local)
   */
  logout: async () => {
    return apiClient.post(API_URLS.auth.logout);
  },
};
