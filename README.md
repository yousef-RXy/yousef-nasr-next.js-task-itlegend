# 🎓 Course Player Web Application

[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1-38B2AC?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.23-ff69b4?logo=framer)](https://www.framer.com/motion/)

A modern, interactive course learning platform built with **Next.js 15**, featuring **video playback**, **quizzes**, **leaderboards**, and **real-time progress tracking**.

---

## 🚀 Live Demo

Check out the live application:  
👉 [https://yousef-nasr-next-js-task-itlegend-k.vercel.app/](https://yousef-nasr-next-js-task-itlegend-k.vercel.app/)

---

## 📋 Project Overview

This is a comprehensive **course player web application** designed to provide an engaging learning experience.  
The platform allows students to:

- Watch course videos
- Take quizzes
- Track their progress
- Ask questions
- View leaderboards
- Interact with course materials through an intuitive interface

---

## ✨ Key Features

### 🎥 Video Player

- Custom-built player with full controls
- Play/Pause, mute/unmute, seek functionality
- Fullscreen and theater mode support
- Responsive design with smooth animations
- Touch and keyboard controls

### 📚 Course Modules

- Expandable/collapsible sections
- Week-by-week content organization
- Locked/unlocked lessons
- PDF viewer for materials
- Question counts and time estimates

### 🎯 Interactive Quizzes

- Timed quizzes with countdown
- Multiple-choice questions
- Real-time answer tracking
- Detailed results and answer review
- Question navigation and progress indicators
- Retake functionality

### 🏆 Leaderboard System

- Real-time ranking display
- Trophy icons for top performers
- Current user position highlighting
- Motivational messages
- Percentage-based progress tracking

### 💬 Comment System

- Add and view comments
- User avatars and timestamps
- Real-time comment updates
- Smooth submission animations

### ❓ Question Feature

- Ask questions during the course
- Draft auto-save functionality
- Keyboard shortcuts (Ctrl + Enter)
- Context-aware submission

### 📊 Progress Tracking

- Visual progress bar with percentage
- Animated “You are here” marker
- Course completion tracking

---

## 🛠️ Technologies Used

### Frontend Framework

- **Next.js 15.5.5** – React framework with App Router
- **React 19.1.0** – UI library
- **TypeScript 5.9.3** – Type-safe development

### Styling

- **Tailwind CSS 4.1.14** – Utility-first CSS framework
- **Framer Motion 12.23.24** – Animation library
- **React Icons 5.5.0** – Icon library

### UI Components & Notifications

- **Sonner 2.0.7** – Toast notifications

### Build Tools

- **Turbopack** – Faster bundling for development
- **PostCSS** – CSS processing

### Code Quality

- **ESLint 9.37.0** – Code linting
- **TypeScript ESLint** – TypeScript-specific rules

---

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with global styles
│   ├── page.tsx            # Main course player page
│   └── globals.css         # Global CSS imports
├── components/
│   ├── Comment/            # Comment system components
│   ├── CourseModule/       # Course module components
│   ├── Leaderboard/        # Leaderboard components
│   ├── Question/           # Question feature components
│   ├── Quiz/               # Quiz system components
│   ├── progressBar/        # Progress tracking
│   ├── sections/           # Page sections (Header, CourseInfo, etc.)
│   ├── ui/                 # Reusable UI components
│   └── video/              # Video player components
└── types/                  # TypeScript type definitions
```

---

## 🎨 Design Features

### Responsive Design

- Mobile-first approach
- Tablet and desktop optimizations
- Adaptive layouts for various screen sizes
- Touch-friendly controls

### Animations

- Smooth page transitions
- Interactive hover effects
- Loading states
- Modal animations with backdrop blur

### User Experience

- Intuitive navigation
- Breadcrumb navigation
- Context menus and tooltips
- Keyboard shortcuts
- Accessibility considerations

---

## 🔧 Installation & Setup

### 1. Clone the repository

```bash
git clone <repository-url>
cd itlegend-course-player-page-test
```

### 2. Install dependencies

```bash
pnpm install
# or
npm install
# or
yarn install
```

### 3. Run the development server

```bash
pnpm dev
# or
npm run dev
# or
yarn dev
```

### 4. Open in browser

Visit [http://localhost:3000](http://localhost:3000)

---

## 🚀 Build for Production

```bash
pnpm build
pnpm start
```

---

## 📦 Key Dependencies

| Dependency                         | Description         |
| ---------------------------------- | ------------------- |
| `next@15.5.5`                      | React framework     |
| `react@19.1.0`, `react-dom@19.1.0` | React library       |
| `framer-motion@12.23.24`           | Animation library   |
| `tailwindcss@4.1.14`               | CSS framework       |
| `typescript@5.9.3`                 | Type checking       |
| `sonner@2.0.7`                     | Toast notifications |
| `react-icons@5.5.0`                | Icon library        |

---

## 🌟 Features Breakdown

### 🎬 Theater Mode

Toggle between normal and wide-screen video viewing modes for an immersive experience.

### 🧩 Quiz System

- Managed via React Context API
- Countdown timer with visual feedback
- Question navigation
- Instant feedback
- Answer review and score summary

### 🏅 Leaderboard

- Dynamic ranking based on course progress
- Personalized motivational messages
- Visual indicators for top performers
- Real-time updates

### 📘 Course Materials

- PDF viewer integration
- Downloadable resources
- Structured learning paths
- Progress per module

---

## 🔐 Browser Support

| Browser | Supported |
| ------- | --------- |
| Chrome  | ✅ Latest |
| Firefox | ✅ Latest |
| Safari  | ✅ Latest |
| Edge    | ✅ Latest |

---

## 📱 Mobile Support

Fully responsive with touch-optimized controls for both **iOS** and **Android** devices.

---

## 🤝 Contributing

This project was developed as part of a **technical assessment**.  
For suggestions or improvements, feel free to reach out.

---

## 📄 License

This project is **private** and developed for **assessment purposes only**.

---

**Built with ❤️ using Next.js and modern web technologies**
