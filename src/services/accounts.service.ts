/**
 * Accounts Service
 *
 * Centraliza requisições relacionadas a contas financeiras
 */

import { API_URLS } from '@/shared/constants/api-urls';
import { Account, CreateAccountRequest } from '@/shared/types/account.types';
import { apiClient } from './api';

export const accountsService = {
  /**
   * Lista todas as contas do usuário
   */
  list: async (): Promise<Account[]> => {
    return apiClient.get(API_URLS.accounts.list);
  },

  /**
   * Obtém detalhes de uma conta específica
   */
  getById: async (id: string): Promise<Account> => {
    return apiClient.get(API_URLS.accounts.detail(id));
  },

  /**
   * Cria nova conta
   */
  create: async (data: CreateAccountRequest): Promise<Account> => {
    return apiClient.post(API_URLS.accounts.create, data);
  },

  /**
   * Atualiza uma conta
   */
  update: async (id: string, data: Partial<Account>): Promise<Account> => {
    return apiClient.put(API_URLS.accounts.update(id), data);
  },

  /**
   * Deleta uma conta
   */
  delete: async (id: string): Promise<void> => {
    return apiClient.delete(API_URLS.accounts.delete(id));
  },
};
