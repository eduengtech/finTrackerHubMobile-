/**
 * Account Domain Types
 * 
 * Define a estrutura de dados de contas financeiras
 */

export interface Account {
  id: string;
  userId: string;
  name: string;
  type: 'checking' | 'savings' | 'investment';
  balance: number;
  currency: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateAccountRequest {
  name: string;
  type: 'checking' | 'savings' | 'investment';
  initialBalance: number;
}

export interface UpdateAccountRequest {
  name?: string;
  type?: 'checking' | 'savings' | 'investment';
}
