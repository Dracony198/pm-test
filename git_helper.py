#!/usr/bin/env python3
"""
Git Helper Script - pm-test loyihasi uchun
Bu script orqali fayllarni Git'ga yuklash va boshqarish
"""

import subprocess
import os
from datetime import datetime

class GitHelper:
    def __init__(self, repo_path):
        self.repo_path = repo_path
        os.chdir(repo_path)
    
    def run_command(self, command):
        """Git komandalarini bajarish"""
        try:
            result = subprocess.run(
                command, 
                shell=True, 
                capture_output=True, 
                text=True,
                check=True
            )
            print(f"✅ {command}")
            if result.stdout:
                print(result.stdout)
            return True
        except subprocess.CalledProcessError as e:
            print(f"❌ Xato: {command}")
            print(f"Error: {e.stderr}")
            return False
    
    def init_repo(self):
        """Repository'ni initsializatsiya qilish"""
        print("\n🔧 Git repository initsializatsiya...\n")
        self.run_command("git init")
        self.run_command("git branch -M main")
    
    def check_status(self):
        """Git status tekshirish"""
        print("\n📊 Git status:\n")
        self.run_command("git status")
    
    def add_files(self, files="."):
        """Fayllarni staging'ga qo'shish"""
        print(f"\n➕ Fayllarni qo'shish: {files}\n")
        self.run_command(f"git add {files}")
    
    def commit(self, message):
        """Commit yaratish"""
        print(f"\n💾 Commit: {message}\n")
        timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        full_message = f"{message} - {timestamp}"
        self.run_command(f'git commit -m "{full_message}"')
    
    def set_remote(self, remote_url):
        """Remote repository qo'shish"""
        print(f"\n🔗 Remote repository qo'shish: {remote_url}\n")
        # Avval mavjud remote'ni o'chirish (agar bo'lsa)
        subprocess.run("git remote remove origin", shell=True, capture_output=True)
        self.run_command(f"git remote add origin {remote_url}")
    
    def push(self, branch="main"):
        """GitHub'ga yuklash"""
        print(f"\n⬆️  Push to {branch}:\n")
        self.run_command(f"git push -u origin {branch}")
    
    def pull(self, branch="main"):
        """GitHub'dan olish"""
        print(f"\n⬇️  Pull from {branch}:\n")
        self.run_command(f"git pull origin {branch}")
    
    def create_gitignore(self):
        """Standard .gitignore yaratish"""
        gitignore_content = """
# Python
__pycache__/
*.py[cod]
*$py.class
*.so
.Python
env/
venv/
ENV/
build/
develop-eggs/
dist/
downloads/
eggs/
.eggs/
lib/
lib64/
parts/
sdist/
var/
wheels/
*.egg-info/
.installed.cfg
*.egg

# Django
*.log
local_settings.py
db.sqlite3
db.sqlite3-journal
media/
staticfiles/

# React
node_modules/
npm-debug.log*
yarn-debug.log*
yarn-error.log*
.pnp/
.pnp.js
coverage/
build/
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local

# IDEs
.vscode/
.idea/
*.swp
*.swo
*~

# OS
.DS_Store
Thumbs.db

# Environment
.env
.env.local
*.env

# Database
*.sqlite3
*.db
"""
        gitignore_path = os.path.join(self.repo_path, ".gitignore")
        with open(gitignore_path, "w") as f:
            f.write(gitignore_content.strip())
        print("✅ .gitignore yaratildi")
    
    def create_readme(self):
        """README.md yaratish"""
        readme_content = """# PM-Test: Yotoqxona Navbatchilik Tizimi

## 📋 Loyiha haqida
Talabalar uchun yotoqxona navbatchilik tizimini yaratish orqali Product Management va dasturiy jamoada ishlash ko'nikmalarini o'rgatish loyihasi.

## 🎯 Maqsad
- Product Management asoslarini o'rganish
- Agile/Scrum metodologiyasi
- Full-stack development (Django + React)
- Jamoaviy dasturlash ko'nikmalari

## 🛠️ Texnologiyalar
- **Backend:** Django, DRF, PostgreSQL
- **Frontend:** React, TypeScript, Tailwind CSS
- **DevOps:** Docker, GitHub Actions

## 📚 Hujjatlar
- [Texnik Topshiriq (TZ)](docs/TZ.md)
- [Architecture](docs/architecture.md)
- [API Specification](docs/api-spec.md)

## 🚀 Boshlash

### Backend
```bash
cd backend
python -m venv venv
source venv/bin/activate  # Windows: venv\\Scripts\\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

## 👥 Jamoa
- Product Owner: TBD
- Scrum Master: TBD
- Developers: TBD

## 📄 License
MIT License

---
**Version:** 1.0  
**Last Updated:** 2026-02-14
"""
        readme_path = os.path.join(self.repo_path, "README.md")
        with open(readme_path, "w") as f:
            f.write(readme_content.strip())
        print("✅ README.md yaratildi")


def main():
    """Asosiy funksiya"""
    print("=" * 60)
    print("🚀 PM-TEST - Git Helper Script")
    print("=" * 60)
    
    # Repository yo'li
    repo_path = "/home/claude/pm-test"
    remote_url = "https://github.com/dracony88/pm-test.git"
    
    # GitHelper yaratish
    git = GitHelper(repo_path)
    
    # Menu
    print("\n📌 Quyidagi amalni tanlang:\n")
    print("1. Yangi loyihani sozlash (init, gitignore, README)")
    print("2. Fayllarni qo'shish va commit qilish")
    print("3. GitHub'ga yuklash (push)")
    print("4. GitHub'dan olish (pull)")
    print("5. Status ko'rish")
    print("6. To'liq jarayon (add → commit → push)")
    print("0. Chiqish")
    
    choice = input("\n👉 Tanlov (0-6): ").strip()
    
    if choice == "1":
        print("\n🔧 Yangi loyihani sozlash...\n")
        git.init_repo()
        git.create_gitignore()
        git.create_readme()
        git.check_status()
        
    elif choice == "2":
        files = input("📁 Qaysi fayllarni qo'shasiz? (. - hammasi): ").strip() or "."
        message = input("💬 Commit message: ").strip() or "Update files"
        git.add_files(files)
        git.commit(message)
        
    elif choice == "3":
        git.set_remote(remote_url)
        git.push()
        
    elif choice == "4":
        git.pull()
        
    elif choice == "5":
        git.check_status()
        
    elif choice == "6":
        print("\n🔄 To'liq jarayon boshlandi...\n")
        
        # 1. .gitignore va README yaratish (agar yo'q bo'lsa)
        if not os.path.exists(os.path.join(repo_path, ".gitignore")):
            git.create_gitignore()
        if not os.path.exists(os.path.join(repo_path, "README.md")):
            git.create_readme()
        
        # 2. Fayllarni qo'shish
        git.add_files(".")
        
        # 3. Commit
        message = input("💬 Commit message (default: 'Initial commit with TZ'): ").strip()
        if not message:
            message = "Initial commit with TZ and documentation"
        git.commit(message)
        
        # 4. Remote qo'shish va push
        git.set_remote(remote_url)
        git.push()
        
        print("\n" + "="*60)
        print("✅ Barcha jarayonlar muvaffaqiyatli yakunlandi!")
        print("🔗 Repository: " + remote_url)
        print("="*60)
        
    elif choice == "0":
        print("\n👋 Xayr!")
    else:
        print("\n❌ Noto'g'ri tanlov!")


if __name__ == "__main__":
    main()
