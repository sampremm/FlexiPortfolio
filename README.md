# Thalla Sam Prem Kumar — Portfolio

> **Backend Engineer** · Distributed Systems · Event-Driven Architectures · Cloud Infrastructure

[![Live Portfolio](https://img.shields.io/badge/Live%20Portfolio-sampremm.dev-f59e0b?style=flat-square&logo=vercel&logoColor=black)](https://sampremm.dev)
[![GitHub](https://img.shields.io/badge/GitHub-sampremm-181717?style=flat-square&logo=github)](https://github.com/sampremm)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-samprem1-0A66C2?style=flat-square&logo=linkedin)](https://www.linkedin.com/in/samprem1/)

---

## Overview

A **cyber-minimalist terminal-style portfolio** built with React + Vite and **Framer Motion** animations, showcasing backend engineering work in distributed systems, cloud infrastructure, and algorithmic research.

### Highlights

- 🖥️ **Interactive terminal UI** — macOS-style shell frame with live clock, typewriter headline, and tabbed log viewer
- ⚡ **Framer Motion animations** — spring physics system, scroll-triggered staggered reveals, hover lift effects, `layoutId` nav indicator
- 🔬 **Interactive CSA MPPT Simulator** — peer-reviewed research paper brought to life with an animated P-V characteristic curve and live telemetry gauges
- 🧱 **15-Skill bento grid** — categorized, filterable backend stack with micro-interaction hover effects
- 📨 **Contact form** — EmailJS integration with SMTP status log animation

---

## Tech Stack

| Layer | Technologies |
|---|---|
| **Framework** | React 18 + Vite |
| **Animations** | Framer Motion (spring physics, `AnimatePresence`, `layoutId`) |
| **Styling** | Tailwind CSS + custom CSS tokens (glassmorphism, cyber-grid) |
| **Icons** | react-icons (fa6, si, bi, gi) |
| **Email** | @emailjs/browser |
| **Fonts** | JetBrains Mono, Plus Jakarta Sans (Google Fonts) |

---

## Projects Showcased

| System | Stack | Description |
|---|---|---|
| **Vercel Clone – Cloud PaaS** | Node.js, Redis, Docker, AWS ECS, S3, NGINX | 4-service event-driven pipeline with ephemeral Fargate containers |
| **Playto Payout Engine** | Python, Django, PostgreSQL, Redis, Celery, Docker, AWS EC2 | Fintech engine with two-tier idempotency barrier & append-only ledger |
| **SnapLink – Distributed URL SaaS** | Node.js, Redis, NGINX, MySQL, Docker | Key generation service + sub-millisecond redirect via NGINX load balancing |
| **Resilient Notification Engine** | BullMQ, Redis, Node.js, Express.js, Docker | Exactly-once delivery with dead-letter queues & exponential backoff |
| **Multithreaded Java Web Server** | Java, Sockets, Multithreading | Custom HTTP/1.1 server on raw TCP/IP sockets with RFC-compliant parser |

---

## Research Publication

**Detection and Tracking Maximum Power Point of a PV System under PSC using Cuckoo Search Algorithm (CSA) MPPT**

- 📖 *International Journal of Research*, Vol XI, Issue VI, June 2022
- 🔖 ISSN: 2236-6124
- 👥 Authors: Dr. G. Sridhar, V. Saikiran, Ch. Saipriya, **T. Sam Prem Kumar**, P. Akshay Kumar
- 🏛️ Dept. of Electrical & Electronics Engineering, JITS

The portfolio includes an **interactive P-V curve simulator** demonstrating how the Cuckoo Search Algorithm (Lévy flight random walk) reaches the Global Maximum Power Point (220.4W) under partial shading conditions, while conventional P&O gets trapped at a local peak losing 36.4% of available solar energy.

---

## Getting Started

```bash
# Clone
git clone https://github.com/sampremm/FlexiPortfolio.git
cd FlexiPortfolio

# Install dependencies
npm install

# Start dev server
npm run dev

# Production build
npm run build
```

### EmailJS Setup (Contact Form)

1. Create an account at [emailjs.com](https://www.emailjs.com/)
2. Open `src/components/ContactForm.jsx`
3. Replace the placeholder constants:

```js
const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';
```

---

## Project Structure

```
src/
├── assets/               # Project images
├── components/
│   ├── HybridHero.jsx    # Hero section + interactive terminal
│   ├── ProjectSpecs.jsx  # Projects bento grid with architecture drawers
│   ├── InfrastructureGrid.jsx  # 15-skill filterable bento grid
│   ├── ResearchSection.jsx     # CSA MPPT interactive simulator
│   └── ContactForm.jsx   # EmailJS contact form
├── constants/
│   └── index.jsx         # All content data (projects, skills, research)
├── App.jsx               # Root layout, navigation, about + contact sections
└── index.css             # Design tokens, glassmorphism, animations
```

---

## Skills Showcased

`Node.js` · `Express.js` · `Python` · `Java` · `TypeScript` · `PostgreSQL` · `Redis` · `MongoDB` · `BullMQ` · `Prisma ORM` · `Docker` · `AWS` · `NGINX` · `GitHub Actions` · `Git`

---

## License

MIT — feel free to fork and adapt for your own portfolio.

---

<p align="center">Built by <strong>Thalla Sam Prem Kumar</strong> · Open to Backend Engineering roles in Hyderabad, Bangalore & Pune · <a href="mailto:samprem888111@gmail.com">samprem888111@gmail.com</a></p>
