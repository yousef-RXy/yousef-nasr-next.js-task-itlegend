Course Player Web Application
A modern, interactive course learning platform built with Next.js 15, featuring video playback, quizzes, leaderboards, and real-time progress tracking.
🚀 Live Demo
Check out the live application: https://yousef-nasr-next-js-task-itlegend-k.vercel.app/
📋 Project Overview
This is a comprehensive course player web application designed to provide an engaging learning experience. The platform allows students to watch course videos, take quizzes, track their progress, ask questions, view leaderboards, and interact with course materials through an intuitive interface.
✨ Key Features
🎥 Video Player

Custom-built video player with full controls
Play/Pause, mute/unmute, seek functionality
Fullscreen and theater mode support
Responsive design with smooth animations
Touch and keyboard controls

📚 Course Modules

Expandable/collapsible course sections
Week-by-week content organization
Locked and unlocked lessons
PDF viewer for course materials
Question counts and time estimates per lesson

🎯 Interactive Quizzes

Timed quizzes with countdown timer
Multiple-choice questions
Real-time answer tracking
Comprehensive results with answer review
Question navigation and progress indicators
Retake functionality

🏆 Leaderboard System

Real-time ranking display
Trophy icons for top performers
Current user position highlighting
Motivational messages based on performance
Percentage-based progress tracking

💬 Comment System

Add and view comments
User avatars and timestamps
Real-time comment updates
Smooth submission animations

❓ Question Feature

Ask questions during the course
Draft auto-save functionality
Question popup with keyboard shortcuts (Ctrl+Enter)
Context-aware question submission

📊 Progress Tracking

Visual progress bar with percentage
Animated "You are here" marker
Course completion tracking

🛠️ Technologies Used
Frontend Framework

Next.js 15.5.5 - React framework with App Router
React 19.1.0 - UI library
TypeScript 5.9.3 - Type-safe development

Styling

Tailwind CSS 4.1.14 - Utility-first CSS framework
Framer Motion 12.23.24 - Animation library for smooth transitions
React Icons 5.5.0 - Icon library

UI Components & Notifications

Sonner 2.0.7 - Toast notifications

Build Tools

Turbopack - Next.js bundler for faster development
PostCSS - CSS processing

Code Quality

ESLint 9.37.0 - Code linting
TypeScript ESLint - TypeScript-specific linting rules

📁 Project Structure
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
🎨 Design Features
Responsive Design

Mobile-first approach
Tablet and desktop optimizations
Adaptive layouts for different screen sizes
Touch-friendly interfaces

Animations

Smooth page transitions
Interactive hover effects
Loading states
Modal animations with backdrop blur

User Experience

Intuitive navigation
Breadcrumb navigation
Context menus and tooltips
Keyboard shortcuts
Accessibility considerations

🔧 Installation & Setup

Clone the repository

bashgit clone <repository-url>
cd itlegend-course-player-page-test

Install dependencies

bashpnpm install
# or
npm install
# or
yarn install

Run the development server

bashpnpm dev
# or
npm run dev
# or
yarn dev

Open your browser
Navigate to http://localhost:3000

🚀 Build for Production
bashpnpm build
pnpm start
📦 Key Dependencies

next@15.5.5 - React framework
react@19.1.0 & react-dom@19.1.0 - React library
framer-motion@12.23.24 - Animation library
tailwindcss@4.1.14 - CSS framework
typescript@5.9.3 - Type checking
sonner@2.0.7 - Toast notifications
react-icons@5.5.0 - Icon library

🌟 Features Breakdown
Theater Mode
Toggle between normal and wide-screen video viewing modes for an immersive experience.
Quiz System

Comprehensive quiz management with Context API
Timer with visual countdown
Question navigation
Instant feedback on answers
Detailed results with correct answer review

Leaderboard

Dynamic ranking based on course progress
Personalized motivational messages
Visual indicators for top performers
Real-time position updates

Course Materials

PDF viewer integration
Downloadable resources
Structured learning paths
Progress indicators per module

🔐 Browser Support

Chrome (latest)
Firefox (latest)
Safari (latest)
Edge (latest)

📱 Mobile Support
Fully responsive design with touch-optimized controls for iOS and Android devices.
🤝 Contributing
This project was developed as part of a technical assessment. For any suggestions or improvements, feel free to reach out.
📄 License
This project is private and developed for assessment purposes.

Built with ❤️ using Next.js and modern web technologies
