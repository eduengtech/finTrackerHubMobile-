/**
 * Validation Utilities
 *
 * Funções de validação reutilizáveis
 */

/**
 * Valida email usando regex
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Valida senha (mínimo 8 caracteres)
 */
export const isValidPassword = (password: string): boolean => {
  return password.length >= 8;
};

/**
 * Valida nome (mínimo 3 caracteres)
 */
export const isValidName = (name: string): boolean => {
  return name.trim().length >= 3;
};

/**
 * Valida se é número
 */
export const isValidNumber = (value: unknown): boolean => {
  return !isNaN(Number(value));
};
