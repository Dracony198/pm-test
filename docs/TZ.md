# Texnik Topshiriq (TZ)
# Yotoqxona Navbatchilik Tizimi

## 1. LOYIHA HAQIDA

### 1.1. Loyiha nomi
**"Dormitory Duty Manager"** - Yotoqxona Navbatchilik Boshqaruv Tizimi

### 1.2. Loyiha maqsadi
Talabalar uchun real loyiha orqali Product Management va dasturiy jamoada ishlash ko'nikmalarini rivojlantirish. Loyiha doirasida talabalar yotoqxonada navbatchilikni tashkil etish tizimini yaratish orqali quyidagi ko'nikmalarni egallaydi:

- Product Management asoslari (backlog, sprint planning, user stories)
- Agile/Scrum metodologiyasi
- Jamoaviy dasturlash (Git, code review, pair programming)
- Full-stack development (Django + React)
- Database dizayni va optimallashtirish
- API yaratish va integratsiya
- Testing va QA jarayonlari
- Deployment va DevOps asoslari

### 1.3. Asosiy foydalanuvchilar
- **Talabalar** - navbatchilikda ishtirok etuvchilar
- **Navbatchi mas'ul** - navbatchilikni nazorat qiluvchi
- **Yotoqxona mudiri** - umumiy boshqaruv
- **Mentor/O'qituvchi** - talabalarni yo'naltiruvchi

---

## 2. FUNKSIONAL TALABLAR

### 2.1. Asosiy modullar

#### Modul 1: Foydalanuvchilar boshqaruvi (User Management)
- **US-001**: Foydalanuvchi ro'yxatdan o'tishi (email, parol)
- **US-002**: Tizimga kirish (login/logout)
- **US-003**: Profil ma'lumotlarini tahrirlash
- **US-004**: Rollar bo'yicha ruxsatlar (Student, Duty Manager, Admin)
- **US-005**: Parolni tiklash funksiyasi

**Acceptance Criteria:**
- Email validatsiya
- Parol kamida 8 ta belgi
- Profil rasmini yuklash imkoniyati
- Role-based access control (RBAC)

#### Modul 2: Navbatchilik jadvali (Duty Schedule)
- **US-006**: Oylik navbatchilik jadvalini yaratish
- **US-007**: Talabalarni navbatchilikka tayinlash
- **US-008**: Jadvalda o'zgarishlar kiritish
- **US-009**: Navbatchilik sanalarini almashtirish (swap)
- **US-010**: Kalendar ko'rinishida jadval ko'rsatish

**Acceptance Criteria:**
- Bir kunda kamida 2 ta navbatchi
- Bir talaba oyiga maksimal 4 marta
- Swap funksiyasi admin/manager tasdig'ini talab qiladi
- Jadval PDF formatda yuklab olish

#### Modul 3: Vazifalar boshqaruvi (Task Management)
- **US-011**: Kunlik navbatchilik vazifalari ro'yxati
- **US-012**: Vazifalarni bajarilgan deb belgilash
- **US-013**: Vazifa holati (To Do, In Progress, Done)
- **US-014**: Vazifaga izoh qo'shish
- **US-015**: Vazifalar tarixini ko'rish

**Acceptance Criteria:**
- Standart vazifalar shabloni (tozalash, nazorat, hisobot)
- Vazifa bajarilish vaqtini yozib olish
- Rasm yuklash (vazifa natijasini tasdiqlash)
- Notifikatsiya (vazifa deadline yaqinlashganda)

#### Modul 4: Hisobotlar (Reports)
- **US-016**: Kunlik hisobot yuborish
- **US-017**: Oylik statistika ko'rish
- **US-018**: Talaba faolligini ko'rish
- **US-019**: Excel/PDF formatda eksport
- **US-020**: Grafiklar va diagrammalar

**Acceptance Criteria:**
- Hisobot shablon tizimi
- Muammolar va taklif qismi
- Statistika: navbatchilik soni, vazifalar %, davomat

#### Modul 5: Bildirishnomalar (Notifications)
- **US-021**: Email orqali eslatma (navbatchilik oldidan 1 kun)
- **US-022**: Dashboard'da real-time bildirishnomalar
- **US-023**: Push notifications (mobil uchun kelajakda)
- **US-024**: Bildirishnomalar tarixini ko'rish

**Acceptance Criteria:**
- Email yuborilishi (Celery + Redis)
- Mark as read funksiyasi
- Sozlamalar (bildirishnomalarni o'chirish/yoqish)

#### Modul 6: PM o'quv moduli (Learning Module)
- **US-025**: Sprint board (Kanban/Scrum)
- **US-026**: Product backlog boshqarish
- **US-027**: Sprint planning va retrospective
- **US-028**: User story yozish shablon
- **US-029**: O'quv materiallari (PM asoslari)

**Acceptance Criteria:**
- Drag & drop sprint board
- Story points tizimi
- Sprint velocity tracking
- Video darslar va dokumentlar bo'limi

---

## 3. TEXNIK TALABLAR

### 3.1. Texnologiyalar Stack

**Backend:**
- Python 3.11+
- Django 5.0+
- Django REST Framework (DRF)
- PostgreSQL 15+
- Redis (caching, Celery)
- Celery (async tasks)

**Frontend:**
- React 18+
- TypeScript
- Vite (build tool)
- Tailwind CSS
- Redux Toolkit (state management)
- React Router v6
- Axios (HTTP client)

**DevOps & Tools:**
- Git/GitHub (version control)
- Docker & Docker Compose
- GitHub Actions (CI/CD)
- Pytest (backend testing)
- Jest/React Testing Library (frontend testing)
- ESLint, Prettier (code quality)

### 3.2. Arxitektura

**Backend arxitektura:**
```
backend/
├── apps/
│   ├── users/          # Foydalanuvchilar
│   ├── duties/         # Navbatchilik
│   ├── tasks/          # Vazifalar
│   ├── reports/        # Hisobotlar
│   ├── notifications/  # Bildirishnomalar
│   └── learning/       # O'quv moduli
├── config/             # Sozlamalar
├── core/               # Umumiy funksiyalar
└── tests/              # Testlar
```

**Frontend arxitektura:**
```
frontend/
├── src/
│   ├── components/     # Reusable components
│   ├── pages/          # Sahifalar
│   ├── features/       # Redux slices
│   ├── services/       # API services
│   ├── hooks/          # Custom hooks
│   ├── utils/          # Helper functions
│   └── assets/         # Rasmlar, fontlar
```

### 3.3. API dizayni
- RESTful API
- JWT authentication
- API versioning (/api/v1/)
- Swagger/OpenAPI dokumentatsiya
- Rate limiting (DDoS himoyasi)

### 3.4. Database
- PostgreSQL 15+
- Migration tizimi (Django migrations)
- Database backup strategiyasi
- Indexing va optimallashtirish

### 3.5. Xavfsizlik
- HTTPS majburiy
- CORS sozlamalari
- SQL injection himoyasi
- XSS himoyasi
- CSRF token
- Rate limiting
- Secure password hashing (Django default)

---

## 4. NON-FUNCTIONAL TALABLAR

### 4.1. Performance
- Sahifa yuklash vaqti: < 2 soniya
- API response time: < 500ms
- 100 concurrent users ni qo'llab-quvvatlash

### 4.2. Scalability
- Horizontal scaling imkoniyati
- Caching strategiyasi (Redis)
- Database query optimizatsiya

### 4.3. Usability
- Responsive dizayn (mobil, planshet, desktop)
- Intuitiv UI/UX
- O'zbek va Ingliz tillari

### 4.4. Reliability
- 99% uptime
- Automatic backup (kunlik)
- Error logging va monitoring

---

## 5. LOYIHA REJASI (ROADMAP)

### Sprint 0: Tayyorgarlik (1 hafta)
- [ ] Git repository yaratish
- [ ] Development environment sozlash
- [ ] Team roles belgilash (PM, Dev, QA)
- [ ] Product backlog yaratish
- [ ] Architecture hujjati

### Sprint 1: Asosiy infratuzilma (2 hafta)
- [ ] Django project struktura
- [ ] PostgreSQL sozlash
- [ ] User authentication (JWT)
- [ ] React project setup
- [ ] Basic routing

### Sprint 2: Foydalanuvchilar moduli (2 hafta)
- [ ] User model va permissions
- [ ] Login/Register UI
- [ ] Profile management
- [ ] Role-based access

### Sprint 3: Navbatchilik jadvali (2 hafta)
- [ ] Duty schedule model
- [ ] Calendar UI component
- [ ] Jadval yaratish va tahrirlash
- [ ] Swap funksiyasi

### Sprint 4: Vazifalar moduli (2 hafta)
- [ ] Task model va CRUD
- [ ] Task board UI (Kanban)
- [ ] Vazifa holati boshqarish
- [ ] File upload (rasmlar)

### Sprint 5: Hisobotlar va notifikatsiya (2 hafta)
- [ ] Report model va templates
- [ ] Email notifications (Celery)
- [ ] Dashboard statistika
- [ ] Excel/PDF export

### Sprint 6: PM o'quv moduli (2 hafta)
- [ ] Sprint board
- [ ] Backlog management
- [ ] Learning resources
- [ ] Documentation

### Sprint 7: Testing va optimization (1 hafta)
- [ ] Unit tests
- [ ] Integration tests
- [ ] Performance optimization
- [ ] Bug fixes

### Sprint 8: Deployment (1 hafta)
- [ ] Docker containerization
- [ ] CI/CD pipeline
- [ ] Production deployment
- [ ] Monitoring setup

---

## 6. SUCCESS METRICS

### Technical Metrics
- Code coverage > 80%
- Zero critical bugs
- API response time < 500ms
- Mobile responsive score > 90/100

### Learning Metrics
- Har bir talaba kamida 3 ta sprint'da ishtirok
- Har bir talaba kamida 10 ta user story yaratgan
- Code review participation > 90%
- Sprint retrospective attendance > 95%

### Product Metrics
- User adoption rate > 80%
- Daily active users > 50%
- Feature completion rate > 90%
- User satisfaction score > 4.0/5.0

---

## 7. RISKS VA MITIGATION

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Tajribasizlik (yangi texnologiyalar) | High | Medium | Mentor support, pair programming |
| Vaqt yetishmovchiligi | Medium | High | Agile approach, MVP fokus |
| Team collaboration muammolari | Medium | Medium | Daily standup, clear roles |
| Technical debt | Medium | High | Code review, refactoring sprints |
| Scope creep | Low | High | Strict backlog management |

---

## 8. TEAM STRUCTURE (tavsiya)

### Roles
- **Product Owner** - 1 kishi (o'qituvchi/mentor)
- **Scrum Master** - 1 talaba (rotatsiya har sprint)
- **Backend Developers** - 2-3 talaba
- **Frontend Developers** - 2-3 talaba
- **QA Engineer** - 1 talaba
- **DevOps** - 1 talaba

**Jami: 8-10 talaba optimal**

---

## 9. DELIVERABLES

### Hujjatlar
- [x] Texnik Topshiriq (TZ)
- [ ] Architecture Document
- [ ] API Specification (Swagger)
- [ ] Database Schema
- [ ] User Manual
- [ ] Deployment Guide

### Kod
- [ ] Backend repository
- [ ] Frontend repository
- [ ] Docker configuration
- [ ] CI/CD pipeline
- [ ] Test suite

### Demo
- [ ] Working prototype
- [ ] Presentation slides
- [ ] Video demo
- [ ] Live deployment

---

## 10. QACHON TAYYOR?

**MVP (Minimum Viable Product) - 8 hafta**
- User authentication
- Duty schedule (basic)
- Task management (basic)
- Simple reporting

**Full Release - 14-16 hafta**
- Barcha modullar to'liq
- Testing complete
- Production ready
- Documentation complete

---

## APPENDIX A: Glossary

- **Sprint** - 2 haftalik development tsikl
- **User Story** - foydalanuvchi talabi
- **Backlog** - vazifalar ro'yxati
- **Standup** - kunlik qisqa uchrashuv
- **Retrospective** - sprint yakuniy tahlil
- **MVP** - Minimum Viable Product

---

## APPENDIX B: References

- Django Documentation: https://docs.djangoproject.com/
- React Documentation: https://react.dev/
- Scrum Guide: https://scrumguides.org/
- Product Management: https://www.productplan.com/learn/

---

**Hujjat versiyasi:** 1.0  
**Sana:** 2026-02-14  
**Muallif:** PM-Test Team  
**Status:** APPROVED ✅
