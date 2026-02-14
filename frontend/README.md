# PM-Test Frontend

React + TypeScript + Vite + Tailwind CSS

## 🚀 Boshlash

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Dependencies o'rnatish
npm install

# Development server
npm run dev

# Build
npm run build

# Preview production build
npm run preview
```

## 📁 Loyiha strukturasi

```
src/
├── components/        # Reusable components
│   ├── common/       # Button, Input, Card
│   └── layout/       # Navbar, MainLayout, AuthLayout
├── pages/            # Sahifalar (LoginPage, DashboardPage)
├── features/         # Redux slices (auth, duties, tasks)
├── services/         # API services
├── store/            # Redux store
├── routes/           # React Router konfiguratsiya
├── types/            # TypeScript types
├── utils/            # Helper functions
└── assets/           # Rasmlar, ikonlar
```

## 🛠️ Texnologiyalar

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Redux Toolkit** - State management
- **React Router** - Routing
- **Axios** - HTTP client
- **Lucide React** - Icons
- **React Hot Toast** - Notifications

## 🔑 Asosiy funksiyalar

- ✅ Authentication (Login/Register)
- ✅ Protected Routes
- ✅ Redux state management
- ✅ API integration ready
- ✅ Responsive design
- ✅ Toast notifications
- 🚧 Duty Schedule (Coming soon)
- 🚧 Task Management (Coming soon)
- 🚧 Reports (Coming soon)

## 🎨 UI Komponentlar

### Common Components
- `Button` - Customizable button with variants
- `Input` - Input field with validation
- `Card` - Card container

### Layout Components
- `MainLayout` - Main app layout with navbar
- `AuthLayout` - Authentication pages layout
- `Navbar` - Navigation bar

## 📝 Environment Variables

`.env` faylini yarating:

```env
VITE_API_URL=http://localhost:8000/api/v1
```

## 🔄 API Integration

API client `src/services/api.ts` faylida sozlangan.

```typescript
import { apiClient } from '@/services/api';

// Example usage
const response = await apiClient.get('/users');
```

## 📦 Scripts

- `npm run dev` - Development server (port 3000)
- `npm run build` - Production build
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 👨‍💻 Development

### Yangi sahifa qo'shish

1. `src/pages` da yangi fayl yaratish
2. `src/routes/index.tsx` ga route qo'shish

### Yangi API service qo'shish

1. `src/services` da service yaratish
2. Redux slice yaratish (agar kerak bo'lsa)

## 🤝 Contributing

1. Fork repository
2. Feature branch yarating
3. Commit qiling
4. Push qiling
5. Pull Request oching

## 📄 License

MIT
