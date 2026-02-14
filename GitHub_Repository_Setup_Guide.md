# 🚀 GITHUB REPOSITORY SOZLASH - Yotoqxona Navbatchiligi Loyihasi

## 📋 QADAMMA-QADAM KO'RSATMA

---

## QADAM 1: GITHUB REPOSITORY YARATISH

### 1.1. GitHub'ga kiring
```
https://github.com
```

### 1.2. Yangi repository yarating
- **"+"** tugmasi (o'ng yuqori burchak) → **"New repository"**

### 1.3. Repository sozlamalari

**Repository name:**
```
yotoqxona-navbatchiligi
```
yoki
```
dormitory-duty-management
```

**Description:**
```
Yotoqxona navbatchiligi raqamlashtirish tizimi - Talabalar uchun amaliy loyiha
```

**Visibility:**
- ✅ **Public** (ochiq, portfolio uchun yaxshi)
- ⬜ **Private** (yopiq, faqat jamoa ko'radi)

**Initialize repository:**
- ✅ **Add a README file** (albatta!)
- ✅ **Add .gitignore** → Template: **Node** (agar Node.js) yoki **Python** (agar Django/Flask)
- ✅ **Choose a license** → **MIT License** (tavsiya etiladi)

### 1.4. "Create repository" bosing

---

## QADAM 2: REPOSITORY STRUKTURASINI YARATISH

### 2.1. Local kompyuterda clone qiling

```bash
# Repository'ni clone qilish
git clone https://github.com/YOUR_USERNAME/yotoqxona-navbatchiligi.git

# Papkaga kirish
cd yotoqxona-navbatchiligi
```

### 2.2. Folder strukturasini yarating

```bash
# Backend papkasi
mkdir backend
mkdir backend/src
mkdir backend/tests
mkdir backend/config

# Frontend papkasi
mkdir frontend
mkdir frontend/src
mkdir frontend/public
mkdir frontend/components

# Database papkasi
mkdir database
mkdir database/migrations
mkdir database/seeds

# Docs papkasi
mkdir docs
mkdir docs/api
mkdir docs/design

# Scripts papkasi
mkdir scripts
```

---

## QADAM 3: ASOSIY FAYLLARNI YARATISH

Men sizga quyidagi fayllarni tayyorlab beraman:

1. **README.md** - Loyiha haqida asosiy ma'lumot
2. **.gitignore** - Git ignore qilinadigan fayllar
3. **CONTRIBUTING.md** - Hissa qo'shish qoidalari
4. **LICENSE** - Litsenziya
5. **package.json** (Node.js uchun)
6. **requirements.txt** (Python uchun)
7. **.env.example** - Environment variables namunasi
8. **docker-compose.yml** - Docker sozlamalari (ixtiyoriy)

---

## QADAM 4: BRANCH STRATEGIYASI

### 4.1. Main branches
```bash
# Main branch (production)
git branch main

# Development branch (development)
git checkout -b development
git push -u origin development
```

### 4.2. Feature branches naming
```
feature/auth-api
feature/dashboard-ui
feature/schedule-management
bugfix/login-error
hotfix/security-patch
```

### 4.3. Branch protection rules

GitHub'da:
1. **Settings** → **Branches**
2. **Add rule** (main va development uchun)
3. Sozlamalar:
   - ✅ Require pull request reviews before merging
   - ✅ Require status checks to pass
   - ✅ Include administrators

---

## QADAM 5: JAMOA A'ZOLARINI QO'SHISH

### 5.1. Collaborators qo'shish
```
Settings → Collaborators → Add people
```

### 5.2. Rollar
- **Admin** - Loyiha menejeri
- **Write** - Dasturchlar
- **Read** - Reviewers, QA

---

## QADAM 6: ISSUES VA PROJECT BOARD

### 6.1. Issues template yaratish

**Settings → Features → Issues → Set up templates**

Templates:
1. **Bug Report**
2. **Feature Request**
3. **Task**

### 6.2. Labels yaratish

```
priority: high (red)
priority: medium (yellow)
priority: low (green)
type: bug (red)
type: feature (blue)
type: documentation (purple)
status: in-progress (yellow)
status: review (orange)
sprint: 1, 2, 3... (gray)
```

### 6.3. Project Board yaratish

**Projects → New project**

Template: **Team backlog**

Columns:
- 📋 Backlog
- 🔜 To Do
- 🔄 In Progress
- 👀 In Review
- ✅ Done

---

## QADAM 7: CONTINUOUS INTEGRATION (CI/CD)

### 7.1. GitHub Actions sozlash

`.github/workflows` papkasini yarating

Men sizga tayyor workflow fayllarini beraman:
- **ci.yml** - Har push'da test
- **deploy.yml** - Production'ga deploy

---

## QADAM 8: DOCUMENTATION

### 8.1. Wiki yaratish

**Wiki → Create the first page**

Sahifalar:
1. **Home** - Loyihaga kirish
2. **Installation** - O'rnatish
3. **API Documentation** - API docs
4. **Database Schema** - DB tuzilishi
5. **Deployment** - Deploy qilish

### 8.2. API Documentation

Swagger/OpenAPI ishlatish (keyinroq)

---

## QADAM 9: COMMIT CONVENTIONS

### 9.1. Commit message format

```
<type>(<scope>): <subject>

<body>

<footer>
```

**Types:**
- **feat** - Yangi feature
- **fix** - Bug fix
- **docs** - Documentation
- **style** - Formatting
- **refactor** - Code refactoring
- **test** - Tests
- **chore** - Maintenance

**Examples:**
```bash
feat(auth): add JWT authentication

Implemented JWT token-based authentication system
with refresh token support.

Closes #12
```

```bash
fix(schedule): resolve date parsing error

Fixed bug where dates were incorrectly parsed
in schedule generation algorithm.

Fixes #34
```

---

## QADAM 10: FIRST COMMIT

```bash
# Barcha fayllarni qo'shish
git add .

# Commit
git commit -m "chore: initial project setup

- Added project structure
- Configured development environment
- Created documentation templates"

# Push
git push origin development
```

---

## 📁 RECOMMENDED FOLDER STRUCTURE

```
yotoqxona-navbatchiligi/
├── .github/
│   ├── workflows/
│   │   ├── ci.yml
│   │   └── deploy.yml
│   └── ISSUE_TEMPLATE/
│       ├── bug_report.md
│       └── feature_request.md
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── middleware/
│   │   └── utils/
│   ├── tests/
│   ├── config/
│   ├── package.json
│   └── .env.example
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── utils/
│   │   └── App.jsx
│   ├── public/
│   ├── package.json
│   └── .env.example
├── database/
│   ├── migrations/
│   ├── seeds/
│   └── schema.sql
├── docs/
│   ├── api/
│   ├── design/
│   └── architecture.md
├── scripts/
│   ├── setup.sh
│   └── deploy.sh
├── .gitignore
├── README.md
├── CONTRIBUTING.md
├── LICENSE
└── docker-compose.yml
```

---

## 🎯 KEYINGI QADAMLAR

1. ✅ Repository yaratildi
2. ✅ Strukturasi tayyor
3. ✅ Jamoa qo'shildi
4. 🔄 Development boshlash
5. 🔄 Feature branch'lar yaratish
6. 🔄 Pull request jarayoni
7. 🔄 Code review
8. 🔄 Deploy

---

## 📚 FOYDALI HAVOLALAR

**Git Commands Cheatsheet:**
```bash
# Clone
git clone <url>

# Branch
git checkout -b feature/new-feature
git push -u origin feature/new-feature

# Commit
git add .
git commit -m "message"
git push

# Pull Request
GitHub'da manually yarat

# Sync
git pull origin development
git merge development
```

**GitHub Best Practices:**
- Tez-tez commit qiling (kuniga 3-5 marta)
- Descriptive commit messages yozing
- Pull request'larda code review qiling
- Issues orqali vazifalarni kuzating
- Documentation'ni yangilab turing
```

---

Endi men sizga barcha kerakli fayllarni yaratib beraman!
