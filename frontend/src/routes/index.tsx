import { createBrowserRouter, Navigate } from 'react-router-dom';
import { MainLayout, AuthLayout } from '@/components/layout';
import { LoginPage } from '@/pages/LoginPage';
import { RegisterPage } from '@/pages/RegisterPage';
import { DashboardPage } from '@/pages/DashboardPage';

// Protected Route wrapper
import { ProtectedRoute } from './ProtectedRoute';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/dashboard" replace />,
  },
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'register',
        element: <RegisterPage />,
      },
    ],
  },
  {
    path: '/',
    element: <ProtectedRoute />,
    children: [
      {
        element: <MainLayout />,
        children: [
          {
            path: 'dashboard',
            element: <DashboardPage />,
          },
          {
            path: 'duties',
            element: <div>Duties Page - Coming Soon</div>,
          },
          {
            path: 'tasks',
            element: <div>Tasks Page - Coming Soon</div>,
          },
          {
            path: 'reports',
            element: <div>Reports Page - Coming Soon</div>,
          },
          {
            path: 'profile',
            element: <div>Profile Page - Coming Soon</div>,
          },
        ],
      },
    ],
  },
  {
    path: '*',
    element: <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
        <p className="text-gray-600">Sahifa topilmadi</p>
      </div>
    </div>,
  },
]);
