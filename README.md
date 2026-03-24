# ShifT - Logistics & Transport Management Platform

A modern, full-stack logistics platform that connects customers, drivers, and admins for seamless freight and transport operations.

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Usage Guide](#usage-guide)
- [File Structure](#file-structure)
- [Future Enhancements](#future-enhancements)

---

## ✨ Features

### For Customers
- **Easy Booking**: Quick booking form for transport services
- **Real-time Tracking**: Monitor booking status in real-time
- **Multiple Vehicle Types**: Choose from mini trucks, standard trucks, etc.
- **Pickup & Drop Location**: Specify exact pickup and drop locations
- **Scheduling**: Book trips at preferred times

### For Drivers
- **Driver Dashboard**: Personalized dashboard showing assigned loads
- **Load Management**: View, accept, or reject assigned bookings
- **Trip Details**: See customer info, pickup/drop locations, and schedules
- **Status Updates**: Update trip status in real-time

### For Admins
- **Comprehensive Dashboard**: Overview of all bookings and drivers
- **Booking Management**: View, filter, and manage all bookings
- **Driver Management**: Approve, activate, or deactivate drivers
- **Driver Assignment**: Assign drivers to bookings with one click
- **Analytics**: Track revenue, active trips, top cities, driver utilization
- **Real-time Updates**: Refresh data and see live changes

---

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **React Router DOM** - Client-side routing

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Server framework
- **Firebase Admin SDK** - Database & authentication

### Database
- **Google Firestore** - NoSQL cloud database
- **Firebase Authentication** - User authentication

### Deployment
- **Vercel/Netlify** - Frontend (recommended)
- **Render/Railway** - Backend (recommended)

---

## 📁 Project Structure

shif-T-/
├── client/ # Frontend React app
│ ├── src/
│ │ ├── components/ # Reusable components
│ │ │ ├── AppHeader.jsx
│ │ │ ├── BottomNav.jsx
│ │ │ ├── BookingModal.jsx # Customer booking form
│ │ │ ├── PartnerModal.jsx # Driver signup form
│ │ │ ├── Hero.jsx
│ │ │ ├── HowItWorks.jsx
│ │ │ ├── Services.jsx
│ │ │ ├── Plans.jsx
│ │ │ └── ...other components
│ │ ├── App.jsx # Main router
│ │ ├── AdminPage.jsx # Admin dashboard
│ │ ├── DriverPage.jsx # Driver dashboard
│ │ ├── main.jsx # Entry point
│ │ └── index.css
│ ├── package.json
│ └── vite.config.js
│
├── server/ # Backend Node/Express app
│ ├── index.js # Main server file with all routes
│ ├── serviceAccountKey.json # Firebase credentials (gitignored)
│ ├── package.json
│ └── .gitignore
│
├── README.md # This file
└── .gitignore




### Prerequisites

1. **Node.js** (v16+) and **npm**
2. **Firebase Project** - Create one at [Firebase Console](https://console.firebase.google.com)
3. **Git** - For version control
