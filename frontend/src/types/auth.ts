export interface User {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  studentId?: string;
  roomNumber?: string;
  phone?: string;
  avatar?: string;
  createdAt: string;
  updatedAt: string;
}

export enum UserRole {
  STUDENT = 'STUDENT',
  DUTY_MANAGER = 'DUTY_MANAGER',
  ADMIN = 'ADMIN',
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  error: string | null;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  studentId?: string;
  roomNumber?: string;
  phone?: string;
}

export interface AuthResponse {
  user: User;
  token: string;
}
