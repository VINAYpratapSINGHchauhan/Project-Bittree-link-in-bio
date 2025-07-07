# 🌳 BitTree – Get Your Personalized Link-in-Bio Page 

BitTree is a modern, minimalist **Linktree clone** that allows users to create a personal landing page with a unique handle, profile picture, and multiple custom links. It's perfect for creators, professionals, or anyone who wants to share all their important links through a single bio page.

---

## ✨ Features

- 🔗 Add multiple custom links with custom labels
- 💼 Claim your unique handle
- 🖼️ Add a profile picture to personalize your BitTree
- 🚀 Real-time UI updates using React state management
- 🛠️ Built with **Next.js 14**, **Tailwind CSS**, and **MongoDB**
- 📦 Simple JSON-based API to add and fetch BitTree profiles
- ✅ Form validation and duplicate handle protection
- 🔁 Clean redirection and URL handling with `encodeURIComponent`
- ✅ Fully responsive design (mobile/desktop)
- 🔔 Toast notifications for feedback
- 📅 MongoDB-based backend for data storage
- 📍 URL routing using dynamic [handle] routes

---

## 🧪 Tech Stack

| Tech           | Description                         |
|----------------|-------------------------------------|
| Next.js        | Full-stack React Framework          |
| React          | UI Development                      |
| MongoDB        | NoSQL Database                      |
| Tailwind CSS   | Utility-first CSS Framework         |
| Toastify       | Notifications and alerts            |

---

## 🚀 Getting Started (Development)

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/bittree.git
cd bittree
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a .env.local file with your MongoDB URI:

```ini
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/?retryWrites=true&w=majority
```

### 4. Run the development server

```bash
npm run dev
```

Visit http://localhost:3000 to view the homepage.

📝 Example

Visit:

```bash
http://localhost:3000/generate?handle=vinay
```

and after creation:

```bash
http://localhost:3000/vinay
```

💡 Inspiration

This project is inspired by Linktree, designed to be a simplified clone with personalized touch and developer control.

😊 Made with ❤

by vinay
