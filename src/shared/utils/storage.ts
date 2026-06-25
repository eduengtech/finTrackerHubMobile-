/**
 * Local Storage Utilities
 * 
 * Abstrai acesso ao AsyncStorage/localStorage
 * Centraliza chaves de armazenamento
 */

// Em Expo Web, usamos localStorage
// Em Expo Native, seria AsyncStorage

const STORAGE_KEYS = {
  AUTH_TOKEN: '@fintracker:auth_token',
  USER_DATA: '@fintracker:user_data',
};

/**
 * Salva token de autenticação
 */
export const saveToken = async (token: string): Promise<void> => {
  try {
    localStorage.setItem(STORAGE_KEYS.AUTH_TOKEN, token);
  } catch (error) {
    console.error('Erro ao salvar token:', error);
  }
};

/**
 * Obtém token de autenticação
 */
export const getToken = async (): Promise<string | null> => {
  try {
    return localStorage.getItem(STORAGE_KEYS.AUTH_TOKEN);
  } catch (error) {
    console.error('Erro ao obter token:', error);
    return null;
  }
};

/**
 * Remove token de autenticação
 */
export const removeToken = async (): Promise<void> => {
  try {
    localStorage.removeItem(STORAGE_KEYS.AUTH_TOKEN);
  } catch (error) {
    console.error('Erro ao remover token:', error);
  }
};

/**
 * Salva dados do usuário
 */
export const saveUserData = async (userData: unknown): Promise<void> => {
  try {
    localStorage.setItem(STORAGE_KEYS.USER_DATA, JSON.stringify(userData));
  } catch (error) {
    console.error('Erro ao salvar dados do usuário:', error);
  }
};

/**
 * Obtém dados do usuário
 */
export const getUserData = async () => {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.USER_DATA);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error('Erro ao obter dados do usuário:', error);
    return null;
  }
};

/**
 * Limpa todo o storage
 */
export const clearStorage = async (): Promise<void> => {
  try {
    localStorage.removeItem(STORAGE_KEYS.AUTH_TOKEN);
    localStorage.removeItem(STORAGE_KEYS.USER_DATA);
  } catch (error) {
    console.error('Erro ao limpar storage:', error);
  }
};
