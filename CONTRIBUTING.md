# 🤝 Hissa qo'shish bo'yicha qo'llanma

Yotoqxona Navbatchiligi loyihasiga hissa qo'shishni xohlaganingiz uchun rahmat! 

## 📋 Mundarija

- [Code of Conduct](#code-of-conduct)
- [Qanday hissa qo'shish](#qanday-hissa-qoshish)
- [Development Setup](#development-setup)
- [Pull Request Jarayoni](#pull-request-jarayoni)
- [Coding Standards](#coding-standards)
- [Commit Conventions](#commit-conventions)
- [Branch Naming](#branch-naming)

---

## Code of Conduct

Barcha ishtirokchilar quyidagi qoidalarga amal qilishi kerak:

- ✅ Hurmatli va professional muloqot
- ✅ Konstruktiv tanqid
- ✅ Boshqalarning fikr va tajribasini hurmat qilish
- ❌ Hech qanday kamsitish yoki zo'ravonlik
- ❌ Shaxsiy hujumlar

---

## Qanday hissa qo'shish

### 1. Issue yaratish

Agar bug topsangiz yoki yangi feature taklif qilmoqchi bo'lsangiz:

1. [Issues](https://github.com/YOUR_USERNAME/yotoqxona-navbatchiligi/issues) ni tekshiring (duplikat emasligiga ishonch hosil qiling)
2. Yangi Issue yarating
3. Template'ga muvofiq to'ldiring
4. To'liq ma'lumot bering (screenshots, code examples)

### 2. Feature Development

1. Issue'ga comment qoldiring ("Men ustida ishlayapman")
2. Issue admin tomonidan sizga assign qilinadi
3. Feature branch yarating
4. Kodlash boshlang!

---

## Development Setup

### Prerequisites

- Node.js >= 18.x
- PostgreSQL >= 15.x
- Git

### Setup qadamlari

```bash
# 1. Fork qiling repository'ni
# GitHub'da "Fork" tugmasini bosing

# 2. Clone qiling
git clone https://github.com/YOUR_USERNAME/yotoqxona-navbatchiligi.git
cd yotoqxona-navbatchiligi

# 3. Upstream qo'shing
git remote add upstream https://github.com/ORIGINAL_OWNER/yotoqxona-navbatchiligi.git

# 4. Backend setup
cd backend
npm install
cp .env.example .env
# .env'ni to'ldiring

# 5. Database setup
createdb navbatchilik_db
npm run migrate
npm run seed

# 6. Frontend setup
cd ../frontend
npm install
cp .env.example .env

# 7. Run development servers
# Terminal 1
cd backend && npm run dev

# Terminal 2
cd frontend && npm start
```

---

## Pull Request Jarayoni

### 1. Branch yaratish

```bash
# Latest development'ni oling
git checkout development
git pull upstream development

# Feature branch yarating
git checkout -b feature/your-feature-name
```

### 2. Kodlash

- Clean code yozing
- Comments qo'shing (kerak bo'lsa)
- Tests yozing
- Documentation yangilang

### 3. Testing

```bash
# Backend tests
cd backend
npm test

# Frontend tests
cd frontend
npm test

# E2E tests
npm run test:e2e
```

### 4. Commit

```bash
git add .
git commit -m "feat: add amazing feature"
```

### 5. Push

```bash
git push origin feature/your-feature-name
```

### 6. Pull Request yaratish

1. GitHub'da repository'ga o'ting
2. "Compare & pull request" tugmasini bosing
3. Template'ni to'ldiring:
   - **Title:** Qisqa va aniq
   - **Description:** Nima qilganingiz, nega qilganingiz
   - **Related Issue:** #123 (agar mavjud bo'lsa)
   - **Screenshots:** (UI o'zgarishlari uchun)
   - **Testing:** Qanday test qilganingiz

4. "Create pull request" bosing

### 7. Code Review

- Reviewerlar sizning kodingizni ko'rib chiqadi
- O'zgarishlar so'ralishi mumkin
- Har bir izohga javob bering
- Kerakli o'zgarishlarni qiling

### 8. Merge

- Barcha checks pass bo'lgandan keyin
- Approvals olgandan keyin
- Maintainer merge qiladi

---

## Coding Standards

### JavaScript/Node.js

```javascript
// ✅ YAXSHI
const getUserById = async (userId) => {
  try {
    const user = await User.findByPk(userId);
    return user;
  } catch (error) {
    logger.error('Error fetching user:', error);
    throw error;
  }
};

// ❌ YOMON
async function getuser(id) {
  let user = await User.findByPk(id)
  return user
}
```

### React/JSX

```jsx
// ✅ YAXSHI
const UserCard = ({ user }) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Card>
      <CardHeader>{user.name}</CardHeader>
      <CardContent>
        {isLoading ? <Spinner /> : <UserInfo user={user} />}
      </CardContent>
    </Card>
  );
};

// ❌ YOMON
function usercard(props) {
  return <div>{props.user.name}</div>
}
```

### Naming Conventions

- **Variables/Functions:** camelCase (`getUserData`, `isActive`)
- **Classes/Components:** PascalCase (`UserCard`, `AuthService`)
- **Constants:** UPPER_SNAKE_CASE (`API_URL`, `MAX_RETRY`)
- **Files:** kebab-case (`user-service.js`, `auth-controller.js`)
- **Folders:** lowercase (`components`, `services`, `utils`)

### Code Organization

```
backend/src/
├── controllers/     # Request handlers
├── models/          # Database models
├── routes/          # API routes
├── middleware/      # Custom middleware
├── services/        # Business logic
├── utils/           # Helper functions
└── config/          # Configuration

frontend/src/
├── components/      # Reusable components
├── pages/           # Page components
├── services/        # API calls
├── hooks/           # Custom hooks
├── utils/           # Helper functions
└── styles/          # CSS/Styling
```

---

## Commit Conventions

### Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- **feat**: Yangi feature
- **fix**: Bug fix
- **docs**: Documentation
- **style**: Formatting, missing semicolons, etc.
- **refactor**: Code refactoring
- **test**: Adding tests
- **chore**: Maintenance tasks

### Examples

```bash
feat(auth): add JWT refresh token

Implemented refresh token mechanism to allow
users to stay logged in for longer periods.

Closes #42


fix(schedule): resolve duplicate entry bug

Fixed an issue where the same student could be
assigned to multiple duties on the same day.

Fixes #67


docs(api): update authentication endpoint docs

Added examples and improved descriptions for
all auth-related API endpoints.


chore(deps): update dependencies

- Updated React to 18.2.0
- Updated Express to 4.18.2
```

---

## Branch Naming

### Format

```
<type>/<description>
```

### Types

- **feature/** - Yangi feature
- **bugfix/** - Bug fix
- **hotfix/** - Kritik bug fix
- **refactor/** - Code refactoring
- **docs/** - Documentation
- **test/** - Tests

### Examples

```bash
feature/jwt-authentication
feature/schedule-generator
bugfix/login-validation
bugfix/date-parsing-error
hotfix/security-vulnerability
refactor/user-service
docs/api-documentation
test/auth-integration
```

---

## Review Checklist

Pull Request yaratishdan oldin:

- [ ] Code style guidelines'ga mos
- [ ] Barcha testlar pass bo'ldi
- [ ] Yangi testlar yozildi (agar kerak bo'lsa)
- [ ] Documentation yangilandi
- [ ] No console.log() qolmadi
- [ ] No commented code
- [ ] .env.example yangilandi (yangi env vars qo'shilgan bo'lsa)
- [ ] Migration fayllar yaratildi (DB o'zgarishlari uchun)
- [ ] CHANGELOG.md yangilandi (major changes uchun)

---

## Getting Help

Savollar bormi?

- 💬 [Discussions](https://github.com/YOUR_USERNAME/yotoqxona-navbatchiligi/discussions)
- 📧 Email: support@example.com
- 💬 Telegram: @your_channel

---

## Minnatdorchilik

Har bir hissa qimmatli! Rahmat!

- 🐛 Bug reports
- 💡 Feature ideas
- 📖 Documentation improvements
- 💻 Code contributions
- ⭐ Stars va Shares

---

**Yaxshi kodlash! 🚀**
