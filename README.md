# Nearnest – Your Nearest Store, Just a Click Away 🚀

A local delivery-based e-commerce platform that lets users order groceries, medicines, and essentials from nearby stores instantly.

## 🧱 Tech Stack

| Layer | Technology |
|------|------------|
| Frontend | React.js |
| Backend | Firebase Functions |
| Database | Firestore |
| Auth | Firebase Auth |
| Hosting | Firebase Hosting |
| Storage | Firebase Storage |

## 📁 Folder Structure
profile
Qwen3-235B-A22B
6:34 pm
Awesome Macha! Neevu "Next" ani cheppinav. Ippudu nenu neeku ee "Nearnest" project ni GitHub lo deploy cheyyadam , documentation add cheyyadam, inka launch cheyyadam ela ante step-by-step gane explain chesta.

🧱 Step 1: GitHub Repo Setup
🔹 Step A: Create New Repo on GitHub
Go to github.com
Click New repository
Name it: nearnest
Choose Public
Initialize with a README? → ❌ No (we'll create our own)
Click Create repository
🔹 Step B: Connect Local Folder to GitHub
In your project root (vinith folder), run:

bash


1
2
3
git init
git add .
git commit -m "Initial commit: Firebase setup complete"
Now link to GitHub:

bash


1
2
3
git remote add origin https://github.com/your-username/nearnest.git 
git branch -M main
git push -u origin main
✅ This pushes all your code to GitHub.

📄 Step 2: Add README.md & Project Docs
Create a detailed README.md:

bash


1
notepad README.md
Paste this content:

md


1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
# Nearnest – Your Nearest Store, Just a Click Away 🚀

A local delivery-based e-commerce platform that lets users order groceries, medicines, and essentials from nearby stores instantly.

## 🧱 Tech Stack

| Layer | Technology |
|------|------------|
| Frontend | React.js |
| Backend | Firebase Functions |
| Database | Firestore |
| Auth | Firebase Auth |
| Hosting | Firebase Hosting |
| Storage | Firebase Storage |

## 📁 Folder Structure

/nearnest/
├── client/ → React frontend
├── functions/ → Firebase Cloud Functions
├── public/ → Static files
├── firestore.rules → Security rules
├── firebase.json → Firebase config
└── README.md

## 🚀 How to Run

### Frontend
```bash
cd client
npm start