# 💎 Quirio Store (🚧 Work in Progress)

> **Current Status:** 🎨 Building UI & Component Structure.
> **Next Step:** Implementing Redux Logic & API Integration.

**Quirio** is a modern e-commerce dashboard currently under active development. The goal of this project is to build a scalable Single-Page Application (SPA) that demonstrates advanced proficiency in **React Architecture**, **Redux Toolkit**, and **Tailwind CSS v4**.

---

## 🎯 Project Roadmap

This project is being built in phases:

- [x] **Phase 1: UI/UX & Layout** (Current Focus)
    - Designing responsive components (Navbar, Sidebar, Hero).
    - Setting up **Tailwind CSS v4**.
    - Implementing **Framer Motion** animations.
- [ ] **Phase 2: Routing & Architecture**
    - Configuring React Router v6.
    - Creating Protected Routes for Admin access.
- [ ] **Phase 3: State Management (The Core)**
    - Setting up **Redux Toolkit** for global state.
    - Building Cart logic (Add/Remove/Calculate).
    - Connecting to DummyJSON API for Auth & Products.

## 🛠️ Tech Stack

* **Core:** React.js (Vite)
* **Styling:** Tailwind CSS v4 & Framer Motion
* **State:** Redux Toolkit (Planned)
* **Routing:** React Router DOM
* **Icons:** React Icons

## 📂 Current Structure

The project follows a **Feature-First** architecture (Co-location):

```bash
src/
├── components/          
│   ├── layout/          # Layout (Navbar, Footer)
│   ├── ui/              # Shared UI (buttons, cards, ...)
│   └── ...
├── pages/               # Application Pages
│   ├── Home/            # Home page & its specific components
│   ├── Admin/           # Admin dashboard views
│   └── ...
└── App.jsx              # Main Entry