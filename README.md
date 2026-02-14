# PM-Test: Yotoqxona Navbatchilik Tizimi 🏢

## 📋 Loyiha haqida
Talabalar uchun yotoqxona navbatchilik tizimini yaratish orqali **Product Management** va **dasturiy jamoada ishlash** ko'nikmalarini o'rgatish loyihasi.

## 🎯 Asosiy maqsadlar

### O'quv maqsadlari:
- ✅ Product Management asoslarini o'rganish
- ✅ Agile/Scrum metodologiyasi bilan ishlash
- ✅ User Story va Backlog boshqarish
- ✅ Sprint Planning va Retrospective
- ✅ Jamoaviy dasturlash (Git, Code Review)

### Texnik maqsadlar:
- ✅ Full-stack development (Django + React)
- ✅ RESTful API yaratish
- ✅ Database dizayni va optimallashtirish
- ✅ Testing va QA
- ✅ Docker va CI/CD

## 🛠️ Texnologiyalar Stack

### Backend
- **Framework:** Django 5.0+
- **API:** Django REST Framework
- **Database:** PostgreSQL 15+
- **Cache:** Redis
- **Task Queue:** Celery
- **Language:** Python 3.11+

### Frontend
- **Framework:** React 18+
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **State Management:** Redux Toolkit
- **Build Tool:** Vite

### DevOps
- **Containerization:** Docker, Docker Compose
- **CI/CD:** GitHub Actions
- **Version Control:** Git/GitHub

## 📚 Hujjatlar

| Hujjat | Status | Havola |
|--------|--------|--------|
| Texnik Topshiriq (TZ) | ✅ Tayyor | [TZ.md](docs/TZ.md) |
| Architecture | 🚧 Jarayonda | [architecture.md](docs/architecture.md) |
| API Specification | 📝 Rejalashtirilgan | [api-spec.md](docs/api-spec.md) |
| Database Schema | 📝 Rejalashtirilgan | [database-schema.md](docs/database-schema.md) |

## 🏗️ Loyiha strukturasi

```
pm-test/
├── docs/              # Hujjatlar
│   ├── TZ.md         # Texnik topshiriq
│   ├── architecture.md
│   └── api-spec.md
├── backend/          # Django backend
│   ├── apps/         # Django apps
│   ├── config/       # Sozlamalar
│   └── tests/        # Backend testlar
├── frontend/         # React frontend
│   ├── src/          # Source kod
│   └── tests/        # Frontend testlar
├── database/         # Database scripts
├── docker/           # Docker konfiguratsiyalari
└── README.md
```

## 🚀 Boshlash

### Talablar
- Python 3.11+
- Node.js 18+
- PostgreSQL 15+
- Redis
- Git

### Backend ishga tushirish

```bash
# Repository clone qilish
git clone https://github.com/dracony88/pm-test.git
cd pm-test

# Virtual environment yaratish
cd backend
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate

# Dependencies o'rnatish
pip install -r requirements.txt

# Database migration
python manage.py migrate

# Serverni ishga tushirish
python manage.py runserver
```

### Frontend ishga tushirish

```bash
cd frontend

# Dependencies o'rnatish
npm install

# Development server
npm run dev
```

### Docker bilan ishga tushirish

```bash
# Barcha servislarni ishga tushirish
docker-compose up -d

# Log ko'rish
docker-compose logs -f
```

## 📈 Development Roadmap

### ✅ Sprint 0: Tayyorgarlik (1 hafta)
- [x] Git repository yaratish
- [x] TZ hujjati tayyorlash
- [ ] Development environment sozlash
- [ ] Team roles belgilash

### 🚧 Sprint 1: Asosiy infratuzilma (2 hafta)
- [ ] Django project struktura
- [ ] PostgreSQL sozlash
- [ ] User authentication
- [ ] React project setup

### 📝 Sprint 2-8: Feature development
Batafsil rejani [TZ.md](docs/TZ.md) da ko'ring.

## 👥 Jamoa

| Rol | Ism | GitHub |
|-----|-----|--------|
| Product Owner | TBD | - |
| Scrum Master | TBD | - |
| Backend Dev | TBD | - |
| Frontend Dev | TBD | - |
| QA Engineer | TBD | - |

## 🤝 Hissa qo'shish

1. Repository'ni fork qiling
2. Feature branch yarating (`git checkout -b feature/AmazingFeature`)
3. O'zgarishlarni commit qiling (`git commit -m 'Add some AmazingFeature'`)
4. Branch'ni push qiling (`git push origin feature/AmazingFeature`)
5. Pull Request oching

## 📝 Git Helper Script

Loyihada `git_helper.py` scripti mavjud - Git operatsiyalarini osonlashtirish uchun:

```bash
python git_helper.py
```

## 📄 License
MIT License - batafsil [LICENSE](LICENSE) faylida.

## 📞 Aloqa

Savollar bo'lsa, Issue oching yoki jamoa a'zolariga murojaat qiling.

---

**Version:** 1.0  
**Last Updated:** 2026-02-14  
**Status:** 🚧 Active Development
