/**
 * HTTP Client Configuration
 * 
 * Centraliza configuração de requisições HTTP
 * Adiciona headers, autenticação, tratamento de erros
 */

import { API_URLS } from '@/shared/constants/api-urls';
import { getToken, removeToken } from '@/shared/utils/storage';

interface FetchOptions extends RequestInit {
  headers?: Record<string, string>;
}

class ApiClient {
  private getAuthHeader = async () => {
    const token = await getToken();
    return token ? { Authorization: `Bearer ${token}` } : {};
  };

  async request<T = unknown>(
    url: string,
    options: FetchOptions = {}
  ): Promise<T> {
    const authHeader = await this.getAuthHeader();
    
    const finalOptions: FetchOptions = {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...authHeader,
        ...options.headers,
      },
    };

    const response = await fetch(url, finalOptions);

    // Se token expirou
    if (response.status === 401) {
      await removeToken();
      // TODO: Redirecionar para login
    }

    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }

    return response.json();
  }

  get<T = unknown>(url: string, options?: FetchOptions) {
    return this.request<T>(url, { ...options, method: 'GET' });
  }

  post<T = unknown>(url: string, data?: unknown, options?: FetchOptions) {
    return this.request<T>(url, {
      ...options,
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  put<T = unknown>(url: string, data?: unknown, options?: FetchOptions) {
    return this.request<T>(url, {
      ...options,
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  delete<T = unknown>(url: string, options?: FetchOptions) {
    return this.request<T>(url, { ...options, method: 'DELETE' });
  }
}

export const apiClient = new ApiClient();
