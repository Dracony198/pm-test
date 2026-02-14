import axios, { AxiosInstance, AxiosError } from 'axios';
import { toast } from 'react-hot-toast';

const API_BASE_URL = (import.meta as any).env?.VITE_API_URL || 'http://localhost:8000/api/v1';

class ApiClient {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: API_BASE_URL,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    this.client.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem('token');
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    this.client.interceptors.response.use(
      (response) => response,
      (error: AxiosError<{ detail?: string; message?: string }>) => {
        if (error.response) {
          const message = error.response.data?.detail || error.response.data?.message || 'Xatolik yuz berdi';
          
          if (error.response.status === 401) {
            localStorage.removeItem('token');
            window.location.href = '/login';
            toast.error('Sessiya tugadi. Iltimos, qayta kiring.');
          } else {
            toast.error(message);
          }
        } else if (error.request) {
          toast.error('Serverga ulanishda xatolik');
        } else {
          toast.error('Kutilmagan xatolik');
        }
        
        return Promise.reject(error);
      }
    );
  }

  getInstance(): AxiosInstance {
    return this.client;
  }
}

export const apiClient = new ApiClient().getInstance();
