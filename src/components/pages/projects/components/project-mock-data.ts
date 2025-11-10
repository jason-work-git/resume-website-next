import {ProjectItemProps} from "@/types/projects";

export const mockProjects: ProjectItemProps[] = [
        {
            id: 1,
            title: 'Tatpnu',
            slug: 'tatpnu',
            description:
                'University website was built originally from scratch using several powerful stacks.',
            image: '/static/project/tatpnu.avif',
            link_demo: 'https://tatpnu.com/',
            link_github: null,
            stacks: '["Next.js", "React.js", "TypeScript", "TailwindCSS","JavaScript","CSS","Node.js","Shadcn"]',
            is_show: true,
            updated_at: '2024-03-4T12:29:09.882Z',
            content:
                `### 🚀 Introduction  
🎓 **Aghdasieh University** – a **real accredited university** that issues **official degrees** • 💻 Hybrid platform: **online + in-person** courses • 🧠 Complex **profiles, enrollment, grading, certificates** • ⚙️ Built 100% by me with **Next.js 14**, **TypeScript**, **Tailwind** • 🌐 Live since **June 2024** – still shipping weekly 


## ✨ Features  

📝 **Lexical + Yjs Collaborative Editor**  
- 📊 Tables, 🎥 videos, 📂 drag & drop files, 💻 code blocks, 🗣️ mentions  
- ⚡ **Real-time co-editing** (no merge conflicts)  
- 🧩 Same tech as Facebook & Notion  

🔍 **Instant Cmd+K Search**  
- ⚡ Search 10k+ courses/students in <50ms  
- 🔎 Powered by **Algolia** + **cmdk**  

🎥 **Hybrid Learning (Online & In-Person)**  
- 🧑‍🏫 Live classes + physical attendance tracking  
- 📅 Persian/English calendar  
- 📍 QR + GPS check-in  

👥 **5 User Roles & Dashboards**  
- 🎓 Student | 👨‍🏫 Teacher | 🧑‍💼 Admin | 🏢 Department Head | 🧾 Registrar  
- ♿ 100% accessible (Radix UI + WAI-ARIA)  

🎓 **Official Degree & Certificate System**  
- 🧾 Auto-generated signed PDFs  
- 🔗 Blockchain-ready verification  
- ⚙️ Instant issuance via TanStack Query  

🎬 **Video.js Player + Swiper Galleries**  
- 🎛️ Full control: speed, subtitles, sync  
- 🖼️ Beautiful responsive carousels  

📦 **Excel/CSV Bulk Import**  
- 📤 Drag & drop thousands of students (xlsx + react-dropzone)  

📈 **Live Analytics**  
- 🔢 Animated counters (react-countup)  
- 🎞️ Framer Motion + tailwindcss-animate  

💬 **Toast + Micro-interactions**  
- 🔔 react-hot-toast  
- 🦴 Skeleton loaders, 🎯 focus rings, 🌗 dark mode  


## ⚡ Performance  

💡 **Lighthouse Scores**  
- 🚀 Performance: **98–100**  
- ♿ Accessibility: **100**  
- 🧩 Best Practices: **100**  
- 🔍 SEO: **100**  
📊 Report → [pagespeed.web.dev](https://pagespeed.web.dev/analysis/https-tatpnu-com/)

📈 **GTmetrix** → Grade A (100%)  
🔗 Report → [gtmetrix.com](https://gtmetrix.com/reports/tatpnu.com/)


## 🧰 Tech Stack  

- ⚛️ **Next.js 14**  
- 🟦 **TypeScript**  
- 🎨 **Tailwind CSS**  
- 💬 **Lexical + Yjs**  
- 🔍 **Algolia Search + cmdk**  
- 🪄 **Framer Motion + react-countup**  
- 🔥 **react-hot-toast + Skeleton loaders**  
- 🗂️ **TanStack Query**  
- 🪶 **MIT Licensed (Open Source)**  

`,
            is_featured: true,
        },
        {
            id: 2,
            title: 'Tatpnu-AdminPanel',
            slug: 'Tatpnu-AdminPanel',
            description:
                'University admin panel built originally from scratch using several powerful stacks.',
            image: '/static/project/su-admin.tatpnu.com.avif',
            link_demo: 'https://su-admin.tatpnu.com/',
            link_github: null,
            stacks: '["Material UI", "React.js", "TailwindCSS","JavaScript","Styled Components","CSS"]',
            is_show: true,
            updated_at: '2024-03-4T12:29:09.882Z',
            content:
                `### 🚀 Introduction  
🧩 **Aghdasieh University Admin Panel** – the **core management system** behind the university platform  
• 🏛️ Built from scratch using **React + Material UI (MUI 5)**  
• 📊 Powerful tools for **managing students, teachers, courses, grades, and certificates**  
• 🌐 Supports **multi-language (Persian/English)** interfaces  
• ⚙️ Designed for **high performance, scalability, and accessibility**  
• 💾 Seamless integration with the **Next.js front-end platform**  
• 📈 Real-time dashboards, analytics, and role-based access  
• 🧠 Optimized for productivity with keyboard shortcuts, validation, and autosave  

---

## ✨ Features  

📊 **Smart Dashboards**  
- 📈 Live charts and analytics with **ApexCharts + MUI X-Charts**  
- ⚡ Real-time KPIs and reports for departments, users, and performance tracking  

🧩 **Dynamic Form Builder**  
- 🧾 Built with **React Hook Form + Yup** for validation  
- 📥 Supports nested inputs, color pickers, date pickers, and file uploads  
- 📊 Excel/CSV import & export via **xlsx + react-dropzone**  

📝 **Advanced Text Editing**  
- 💬 Integrated **Lexical + Draft.js + React-Quill** editors  
- ✍️ Markdown, mentions, hashtags, tables, code blocks, and file attachments  
- 🤝 Collaborative editing powered by **Yjs**  

🔐 **Role-Based Access & Auth**  
- 🔑 JWT authentication with **Redux Persist**  
- 🧩 Multiple user roles (Admin, Registrar, Department Head, Instructor)  
- ⚙️ Secure routing via **React Router v6**  

🌏 **Localization & RTL Support**  
- 🌐 Full Persian + English localization using **i18next**  
- 🔁 RTL layout using **stylis-plugin-rtl**  
- 📅 Integrated **Jalali & Gregorian** date pickers  

🎨 **Material UI Design System**  
- 🧭 Built with **MUI 5 + Emotion** for consistent styling  
- 🖌️ Custom theme system with dynamic color management  
- ⚡ Smooth transitions with **Framer Motion**  

💬 **Notifications & UX Enhancements**  
- 🔔 **notistack + nprogress** for toasts and progress indicators  
- 💫 Skeleton loaders, lazy loading, and error boundaries  
- 🌗 Dark mode support out of the box  

📑 **Visualization & Exports**  
- 🧾 Data tables with filters, pagination, and inline editing  
- 📤 Export reports as PDF, CSV, or Excel  
- 🧮 Live analytics + number formatting via **numeral.js**  

---

## ⚡ Performance  

💡 **Optimized for Speed**  
- 🧠 Uses **Redux Toolkit** for predictable and efficient state management  
- ⚡ Lazy-loaded routes & code-splitting via React Suspense  
- 🪶 MUI caching for instant theme and layout loading  

📊 **Lighthouse & Core Web Vitals**  
- 🚀 Performance: **95–100**  
- ♿ Accessibility: **100**  
- 🧩 Best Practices: **100**  
- 🔍 SEO: **99**  

---

## 🧰 Tech Stack  

- ⚛️ **React 18**  
- 🎨 **Material UI (MUI 5)**  
- 💙 **Emotion + Tailwind Line Clamp**  
- 🧩 **Redux Toolkit + Persist**  
- 🧮 **ApexCharts + X-Charts**  
- 📝 **Lexical + React-Quill + Draft.js**  
- 🧾 **React Hook Form + Yup Validation**  
- 🌐 **i18next (Persian/English)**  
- 📅 **Date-fns + Jalali Calendar**  
- 🔒 **JWT + Secure Auth System**  
- 💬 **notistack + nprogress + error boundaries**  
- ⚡ **Framer Motion + Lazy Loading**  

`,
            is_featured: true,
        },
        {
            id: 3,
            title: 'Hamrahane',
            slug: 'hamrahane',
            description:
                'Another University website was built originally from scratch using several powerful stacks.',
            image: '/static/project/hamrahanefarda.avif',
            link_demo: 'https://Hamrahan.com/',
            link_github: null,
            stacks: '["Next.js", "React.js", "TypeScript", "TailwindCSS","Node.js","JavaScript","Shadcn"]',
            is_show: true,
            updated_at: '2023-07-23T12:29:09.882Z',
            content:
                `### 🚀 Introduction  
🎓 **Hamrahan Platform** – a **next-generation educational system** designed for institutes, teachers, and learners  
• 💻 Built entirely by me using **Next.js 14**, **TypeScript**, and **Tailwind CSS**  
• 🧠 Advanced tools for **course management, lessons, grading, and collaboration**  
• 🌐 Hybrid platform combining **online + in-person** education  
• ⚙️ Highly modular architecture with **Radix UI**, **Framer Motion**, and **TanStack Query**  
• 📹 Includes a custom **Node.js video processing service** for **HLS streaming**, **download protection**, and **performance optimization**  
• 🚀 Live since **2024** – continuously evolving and expanding features  

---

## ✨ Features  

📝 **Next-Gen Editor System**  
- 💬 **Lexical + Yjs + Kendo Editor** integration  
- 📊 Tables, 🎥 videos, 💻 code blocks, 🗣️ mentions, 📂 drag & drop uploads  
- ⚡ Real-time collaboration (no merge conflicts)  
- 🧩 Same tech foundation as **Notion**, **Facebook**, and **Google Docs**  

🎥 **Video Platform Integration**  
- ⚙️ Built a **custom Node.js video service** that converts any format to **HLS**  
- 🧠 Optimized for **speed, caching, and adaptive quality streaming**  
- 🔒 Prevents downloads while maintaining smooth playback  
- 🌍 Fully integrated into both **frontend** and **admin** dashboards  

🔍 **Universal Cmd+K Search**  
- ⚡ Search across courses, lessons, and students in under 50ms  
- 🔎 Built using **cmdk + custom fuzzy logic + React Query**  

👥 **Smart Role Management**  
- 🎓 Student | 👨‍🏫 Instructor | 🧾 Registrar | 🏢 Admin | 🧠 Super Admin  
- ⚙️ Role-based access control with modular components  
- ♿ 100% accessible with **Radix UI + WAI-ARIA** compliance  

📅 **Dual Calendar & Localization**  
- 🗓️ **Persian (Jalali)** and **Gregorian** calendars  
- 🌐 Fully localized interface using **moment-jalaali**  
- 💬 Direction-aware layout (LTR + RTL) with **tailwind-merge**  

📦 **Data Import & Export**  
- 📤 Bulk import via **Excel/CSV** (xlsx + react-dropzone)  
- 📈 Automatic parsing and validation  
- 📑 Export student or class data in multiple formats  

🎬 **Responsive Media Galleries**  
- 🖼️ Beautiful, mobile-first carousels powered by **Swiper.js**  
- 🎛️ Fully responsive video and image layouts  
- 🔊 Dynamic loading for improved performance  

📈 **Live Stats & Interactions**  
- 🔢 Real-time counters using **react-countup**  
- 🪄 Smooth animations via **Framer Motion + tailwindcss-animate**  
- 🔔 Toast notifications and micro-interactions with **react-hot-toast**  

---

## ⚡ Performance  

💡 **Optimized Infrastructure**  
- 🧠 Built-in caching with **TanStack Query**  
- ⚡ Dynamic imports and code-splitting for instant load  
- 🪶 Image & video optimization via custom **Next.js loaders**  

📊 **Lighthouse Results**  
- 🚀 Performance: **99–100**  
- ♿ Accessibility: **100**  
- 🧩 Best Practices: **100**  
- 🔍 SEO: **100**  

📈 **Server Optimization (Node.js HLS)**  
- 🎥 Converts all video formats into **HLS adaptive streaming**  
- 🔒 Protects against direct download access  
- 📦 Uses **ffmpeg** for transcoding and bitrate optimization  
- ⚡ Delivers smooth playback under limited bandwidth conditions  

---

## 🧰 Tech Stack  

- ⚛️ **Next.js 14**  
- 🟦 **TypeScript**  
- 🎨 **Tailwind CSS + Radix UI**  
- 🧩 **Lexical + Yjs + Kendo Editor**  
- 🔍 **Cmdk + TanStack Query**  
- ⚙️ **Framer Motion + tailwindcss-animate**  
- 🧾 **React Dropzone + XLSX**  
- 📅 **Moment-Jalaali + React Multi Date Picker**  
- 🔔 **React Hot Toast + Skeleton loaders**  
- 🎥 **Node.js + ffmpeg (HLS Streaming)**  

`,
            is_featured: true,
        },
        {
            id: 4,
            title: 'Hamrahan-AdminPanel',
            slug: 'Hamrahan-AdminPanel',
            description:
                'University admin panel built originally from scratch using several powerful stacks.',
            image: '/static/project/su-admin.tatpnu.com.avif',
            link_demo: 'https://su-admin.Hamrahan.com/',
            link_github: null,
            stacks:
                '["Material UI", "React.js", "TailwindCSS","JavaScript","Styled Components","CSS"]',
            is_show: true,
            updated_at: '2024-03-4T12:29:09.882Z',
            content:
                `This Proejct as same as the tatpnu admin panel, just a few small changes`,
            is_featured: true,
        },
        {
            id: 5,
            title: 'Report Tatpnu',
            slug: 'Hamrahan',
            description:
                'A modern React admin dashboard built with Vite and Material UI.',
            image: '/static/project/report.tatpnu.com.avif',
            link_demo: 'https://report.tatpnu.com/',
            link_github: null,
            stacks: '[ "React.js", "TailwindCSS","JavaScript","Vite"]',
            is_show: true,
            updated_at: '2023-07-23T12:29:09.882Z',
            content:
                `### 🚀 Introduction  
🧩 **Minimal Kit Vite React App** – a **modern React-based admin and analytics platform** built for **speed, scalability, and performance**  
• ⚙️ Developed using **Vite + React 18 + Material UI 5**  
• 💻 Includes advanced dashboards, form systems, and global state management  
• 📊 Designed for **real-world enterprise apps**, with analytics, localization, and data visualization  
• 🌐 Fully optimized for **multi-language, RTL/LTR, and dynamic theming**  
• 🚀 Lightning-fast development and builds powered by **Vite**  
• 🧠 Modular architecture — easy to extend and customize for any use case  

---

## ✨ Features  

📊 **Smart Dashboards & Analytics**  
- 📈 Built with **ApexCharts + React ApexCharts + Numeral.js**  
- 📉 Live metrics, charts, and KPI cards  
- ⚡ Interactive widgets with **Framer Motion** transitions  

🧩 **Enterprise-Ready Forms**  
- 🧾 Powered by **React Hook Form + Yup validation**  
- 🎨 Material UI components for seamless UX  
- 📤 File uploads with **React Dropzone**  
- 🔢 Input masks, number formats, and OTP fields  

🗓️ **Advanced Scheduling & Calendar**  
- 📅 Fully featured with **FullCalendar (DayGrid, TimeGrid, Timeline, List)**  
- ⏱️ Drag & drop event management  
- 📆 Dual calendar support (**Gregorian + Jalali**)  

🌏 **Localization & RTL Support**  
- 🌐 **i18next + Language Detector** integration  
- 💬 Multi-language (e.g., English/Persian) interface  
- 🔁 Automatic **RTL/LTR layout** switching using **Stylis + RTL Plugin**  

🧠 **State & Data Management**  
- ⚛️ **Redux Toolkit** for scalable app state  
- 🔄 **SWR + Supabase + Axios** for API data sync  
- 🔒 Role-based access integrated with **Auth0 + Firebase + AWS Amplify**  

🪄 **UI/UX & Interactivity**  
- 🎨 Clean, minimal UI powered by **Material UI 5 + Emotion**  
- 🧭 Dynamic theming with dark/light mode  
- 🎬 Micro-animations and transitions via **Framer Motion**  
- 🪶 Smooth scrolling and virtualized lists with **Simplebar React**  

🗂️ **Documents & Exports**  
- 📑 Generate PDFs using **React-PDF Renderer**  
- 📤 Export reports to Excel (XLSX) or CSV  
- 🧾 Markdown rendering with syntax highlighting (**React Markdown + Rehype Highlight**)  

📍 **Maps & Visualization**  
- 🗺️ Integrated **Mapbox GL + React Map GL**  
- 📍 Real-time markers, routes, and geolocation features  

🪶 **Productivity & Feedback Tools**  
- 🧭 **React Joyride** for guided onboarding  
- 🔔 **Notistack + NProgress** for toasts and loading states  
- 💬 In-app help and tooltips with **React Tooltip + MUI Lab**  

---

## ⚡ Performance  

💡 **Vite-Powered Build System**  
- ⚡ Blazing-fast HMR (Hot Module Reload)  
- 🪶 Instant rebuilds and optimized bundling  
- 🧩 Minimal JS output with tree-shaking and lazy loading  

📊 **Lighthouse Results**  
- 🚀 Performance: **98–100**  
- ♿ Accessibility: **100**  
- 🧩 Best Practices: **100**  
- 🔍 SEO: **100**  

🧠 **Optimized for Scalability**  
- 🪄 Modular code structure with aliases and reusable components  
- 💾 Efficient caching and prefetching using SWR  
- 📈 Dynamic imports and code-splitting for faster load  

---

## 🧰 Tech Stack  

- ⚛️ **React 18 + Vite 5**  
- 🎨 **Material UI 5 + Emotion**  
- 💙 **Tailwind CSS + Framer Motion**  
- 🧩 **Redux Toolkit + SWR**  
- 📊 **ApexCharts + FullCalendar + React PDF**  
- 🗺️ **Mapbox GL + React Map GL**  
- 🌐 **i18next + Stylis RTL**  
- 🔒 **Auth0 + Firebase + AWS Amplify**  
- 🧾 **React Hook Form + Yup Validation**  
- 💬 **Notistack + NProgress**  

---

⭐ If you found this project inspiring, give it a **star** — it helps a lot!  
📩 Have questions or want to collaborate? **DM me anytime — I actually reply!**
`,
            is_featured: true,
        },
        {
            id: 6,
            title: 'Static Catalog',
            slug: 'hm-catalog',
            description:
                'A modern React admin dashboard built with Vite and Material UI.',
            image: '/static/project/hm-catalog.avif',
            link_demo: 'https://catalog.Hamrahan.com/',
            link_github: null,
            stacks: '[ "React.js", "TailwindCSS","JavaScript","CSS","Material UI"]',
            is_show: true,
            updated_at: '2023-07-23T12:29:09.882Z',
            content:
                ``,
            is_featured: true,
        },
        {
            id: 7,
            title: 'Auth Manager',
            slug: 'auth-manager',
            description:
                'A secure multi-project authentication management panel enabling centralized control .',
            image: '/static/project/minimal-dashboard.avif',
            link_demo: null,
            link_github: null,
            stacks: '[ "React.js","JavaScript","Material UI"]',
            is_show: true,
            updated_at: '2023-07-23T12:29:09.882Z',
            content:
                `
A secure multi-project authentication management panel built with **Vite + React 18 + MUI 5**, enabling centralized control of user access, project keys, and privilege levels across all connected platforms.

---

### 🚀 Introduction  
🔐 **AdminPanel-Auth-Service** – a **centralized authentication and project-key management system**  
• ⚙️ Built with **Vite 5**, **React 18**, and **Material UI 5** for speed and reliability  
• 🧠 Designed to manage **multiple projects** sharing one authentication core  
• 🔑 Each project gets a unique **API key** for its own authentication flow  
• 👥 Provides complete **user management, privilege control, and token assignment**  
• 🌐 Fully supports **RTL + LTR layouts** and **multi-language UI**  
• 🚀 Scalable architecture that integrates seamlessly with all your existing front-ends  

---

## ✨ Features  

🧩 **Project-Based Authentication Keys**  
- 🔑 Generate and manage unique API keys per project  
- 🧠 Centralized control over **authentication logic**  
- 🧾 Instantly revoke, renew, or limit project access  

👥 **User & Role Management**  
- 👨‍💼 Add, edit, and assign user roles dynamically  
- ⚙️ Fine-grained privilege settings per module  
- 🧩 Built on **React Hook Form + Zod** for fast validation  

💾 **Token Lifecycle Control**  
- 🔒 Monitor issued tokens in real-time  
- 🔁 Auto-refresh and manual invalidation  
- 📜 Export or audit token history in XLSX  

📈 **Smart Dashboards & Logs**  
- 📊 Interactive tables built with **MUI X Data Grid**  
- 🪶 Activity logs with filters and pagination  
- 🧮 Real-time metrics and token analytics  

🎨 **Modern Interface**  
- 🎨 **Material UI 5 + Emotion** theming system  
- 🌗 Dark / Light mode switch  
- ⚡ Smooth transitions using **Framer Motion**  
- 🧭 **Simplebar React** for custom scroll and clean UX  

🌍 **Localization + RTL Support**  
- 🌐 Dynamic layout via **Stylis RTL Plugin**  
- 🗓️ Date handling with **Day.js**  
- 💬 Multi-language ready architecture  

🔔 **Feedback & UX Enhancements**  
- 🔔 Real-time notifications using **Sonner + NProgress**  
- 💫 Form validation and inline alerts  
- 🪄 Micro-animations for loading and transitions  

📤 **Data Export & Backup**  
- 📑 Export user lists or keys to **Excel (XLSX)**  
- 💾 Backup configurations with **File Saver**  
- 📂 Secure offline archival  

---

## ⚡ Performance  

💡 **Optimized with Vite 5**  
- ⚡ Instant HMR and lightning-fast builds  
- 🧩 Code splitting + lazy loading for scalability  
- 🪶 Tree-shaken bundle for minimal payload  

📊 **Best Practices & Reliability**  
- 🚀 Performance Score: 98–100  
- ♿ Accessibility: 100  
- 🧩 Best Practices: 100  
- 🔍 SEO: 100  

---

## 🧰 Tech Stack  

- ⚛️ **React 18 + Vite 5**  
- 🎨 **Material UI 5 + Emotion + Tailwind CSS**  
- 🔒 **Auth Token & Key Management System**  
- 🧩 **React Hook Form + Zod Validation**  
- 🗂️ **MUI X Data Grid + Day.js + File Saver + XLSX**  
- ⚡ **Framer Motion + Sonner + NProgress**  
- 🧭 **Stylis RTL Plugin + Simplebar React**  

`,
            is_featured: true,
        },
        {
            id: 8,
            title: 'Aghayerond',
            slug: 'aghayerond',
            description:
                'A modern **Next.js 14 e-commerce platform** for buying and selling **premium (rond) SIM cards**',
            image: '/static/project/aghayerond.com.avif',
            link_demo: 'https://aghayerond.com/',
            link_github: null,
            stacks: '["Next.js", "React.js", "TypeScript", "TailwindCSS","JavaScript","CSS"]',
            is_show: true,
            updated_at: '2023-07-23T12:29:09.882Z',
            content: `
A modern **Next.js 14 e-commerce platform** for buying and selling **premium (rond) SIM cards**, featuring multi-seller profiles, advanced search, and a rich multilingual experience.

---

### 🚀 Introduction  
📱 **Next.js SIM Marketplace** – a full-featured online platform for **selling and managing rond SIM cards**  
• 🛒 Built entirely with **Next.js 14**, **TypeScript**, and **Tailwind CSS**  
• 💼 Allows individual **sellers to create their own shops**, manage listings, and track sales  
• 🌍 Multi-language and fully **localized (Persian + English)** experience  
• ⚙️ Optimized for SEO, performance, and responsive design  
• 🔐 Integrated **NextAuth** authentication for secure user sessions  
• 📦 Streamlined checkout and easy management of SIM card inventories  

---

## ✨ Features  

💎 **Rond Number Marketplace**  
- 🔍 Advanced filtering and sorting by **operator, price, and pattern**  
- 💰 Dynamic pricing and promotion system  
- 🧾 Product cards optimized for readability and mobile view  

👤 **Multi-Seller Profiles**  
- 🏪 Each seller can create a custom **shop profile** with branding  
- 📦 Add, edit, and manage SIM card listings  
- 📊 Track views, favorites, and transactions  

🧠 **Intuitive User Experience**  
- 🪄 Animated and interactive interface with **Framer Motion + Lottie**  
- 🧭 Smooth navigation using **NextUI + Headless UI + Heroicons**  
- 🪶 Auto-animated components via **@formkit/auto-animate**  

📱 **Fully Responsive Design**  
- 🎨 Built with **Material Tailwind + Styled Components**  
- 🧩 Dynamic grids using **tw-bootstrap-grid-optimizer**  
- 📐 Seamless layout for mobile, tablet, and desktop  

🌍 **Localization + RTL Support**  
- 🌐 **next-i18next + i18next + react-intl** for multilingual content  
- 🔁 RTL support via **tailwindcss-rtl** for Persian layouts  
- 📅 Persian date pickers via **react-advance-jalaali-datepicker**  

🧾 **Seller Dashboard & Analytics**  
- 📊 Real-time stats on listed SIMs and sales performance  
- 💬 In-app notifications and toasts using **react-toastify**  
- 📈 Table views powered by **react-table + react-paginate**  

📄 **PDF & QR Integration**  
- 📤 Generate order summaries via **html2pdf.js**  
- 🔗 **QR codes** for product sharing with **qrcode.react**  

🧩 **SEO & Performance**  
- 🔍 Built-in **next-sitemap + metadata optimization**  
- ⚡ Dynamic prefetching for near-instant navigation  
- 🪶 Lazy loading and skeleton screens for smooth transitions  

---

## ⚡ Performance  

💡 **Powered by Next.js 14**  
- 🚀 Server and static rendering for max performance  
- 🧠 Image and asset optimization built-in  
- 🧩 Smart routing and caching system for fast responses  

📊 **Metrics & Results**  
- Performance: **98–100**  
- Accessibility: **100**  
- Best Practices: **100**  
- SEO: **100**  

---

## 🧰 Tech Stack  

- ⚛️ **Next.js 14 + React 18**  
- 🟦 **TypeScript**  
- 🎨 **Tailwind CSS + Material Tailwind + Styled Components**  
- 💬 **NextAuth + Axios**  
- 🧩 **NextUI + Headless UI + Heroicons**  
- 🌐 **next-i18next + react-intl + tailwindcss-rtl**  
- 🪄 **Framer Motion + Lottie Web**  
- 📊 **React Table + React Paginate + Chart Integrations**  
- 📱 **React Dropzone + React Hook Form + Yup**  
- 🧾 **HTML2PDF.js + QRCode.React**  

`,
            is_featured: true,
        },
        {
            id: 9,
            title: 'LMS AdminPanel',
            slug: 'lms-AdminPanel',
            description: 'A professional **LMS Admin Panel** designed to manage courses, lessons, professors, and multimedia uploads with precision and scalability',
            image: '/static/project/minimal-dashboard.avif',
            link_demo: 'https://catalog.Hamrahan.com/',
            link_github: null,
            stacks: '[ "React.js", "JavaScript","CSS","Material UI"]',
            is_show: true,
            updated_at: '2023-07-23T12:29:09.882Z',
            content: `
A professional **LMS Admin Panel** built with **Vite + React 18 + MUI 5**, designed to manage courses, lessons, professors, and multimedia uploads with precision and scalability.

---

### 🚀 Introduction  
🎓 **LMS Control Panel** – a full-featured **admin dashboard** for managing the entire learning ecosystem  
• ⚙️ Built using **Vite 5**, **React 18**, and **Material UI 5** for speed and efficiency  
• 🧠 Handles **courses, lessons, professors, students, and media uploads**  
• 🧾 Integrated with **Lexical + TipTap** for rich content creation and lesson management  
• 🌐 Supports **multi-language + RTL** layouts  
• ☁️ Includes **AWS S3 integration** for secure file storage and media hosting  
• 🚀 Crafted for scalability, modularity, and seamless integration with any LMS frontend  

---

## ✨ Features  

📚 **Complete Course Management**  
- 📖 Create, edit, and organize courses and lessons  
- 🧩 Assign professors and categories  
- ⚡ Manage learning materials, attachments, and lesson visibility  

👨‍🏫 **Professor & User Administration**  
- 🧠 Register and manage professors and their course assignments  
- 🔐 Role-based access control for admin, teacher, and content creator  
- 📊 Real-time stats and performance tracking  

📝 **Rich Text Editing System**  
- 💬 Dual editors: **Lexical** and **TipTap** with collaborative support via **Yjs**  
- 🖼️ Upload images, embed videos, and format code blocks  
- ✍️ Advanced features: hashtags, mentions, tables, and alignment tools  

📦 **Media Upload & File Handling**  
- ☁️ AWS S3 and **react-dropzone** integration  
- 📤 Drag-and-drop uploads for files, images, and videos  
- 🔒 Secure access and progress tracking  

📅 **Scheduling & Multi-Date Support**  
- 🗓️ Built with **react-multi-date-picker + Day.js**  
- 📆 Persian/Gregorian dual calendar system  
- ⏰ Lesson scheduling and time-based content access  

🎨 **UI/UX Excellence**  
- 🎨 Clean modern layout powered by **Material UI + Emotion + TailwindCSS**  
- 🧭 Intuitive navigation with **React Router 6**  
- 💫 Smooth animations with **Framer Motion**  
- 🌗 Full dark/light theme toggle  

💬 **Notifications & Feedback**  
- 🔔 Real-time updates via **Sonner**  
- 💾 Progress indicators with **NProgress**  
- 🧠 Context-aware success/error alerts  

📄 **Analytics & Reporting**  
- 📊 Interactive data grids using **MUI X Data Grid**  
- 🧾 Download reports or user data as **Excel (XLSX)**  
- 🪶 Number formatting and summaries with **Numeral.js**  

---

## ⚡ Performance  

💡 **Vite-Powered Architecture**  
- ⚡ Instant HMR and ultra-fast build times  
- 🧩 Code-splitting and lazy-loading for dynamic modules  
- 🪶 Optimized bundle size and caching  

📊 **Metrics & Quality**  
- 🚀 Performance: **98–100**  
- ♿ Accessibility: **100**  
- 🧩 Best Practices: **100**  
- 🔍 SEO: **100**  

---

## 🧰 Tech Stack  

- ⚛️ **React 18 + Vite 5**  
- 🎨 **Material UI 5 + Emotion + Tailwind CSS**  
- 🧾 **Lexical + TipTap + Yjs**  
- ☁️ **AWS S3 + React Dropzone**  
- 📅 **React Multi Date Picker + Day.js**  
- 🧩 **React Hook Form + Zod Validation**  
- 📊 **MUI X Data Grid + Numeral.js**  
- 💬 **Sonner + NProgress + Framer Motion**  
- 🧭 **React Router 6 + Simplebar React**  

            `,
            is_featured:
                true,
        },
        {
            id: 10,
            title: '23 Gane',
            slug: '23-gane',
            description: 'An advanced Site for exploring and analyzing Iran’s 23 National Building Regulation books with lightning-fast, intelligent semantic search.',
            image: '/static/project/23gane.com.avif',
            link_demo: 'https://www.23gane.com/',
            link_github: null,
            stacks: '["Next.js", "React.js", "TypeScript", "TailwindCSS","JavaScript","CSS","Framer-Motion","PWA","Shadcn"]',
            is_show: true,
            updated_at: '2023-07-23T12:29:09.882Z',
            content: `
            
An advanced **Next.js 15 AI-powered search platform** for exploring and analyzing Iran’s 23 National Building Regulation books with lightning-fast, intelligent semantic search.

---

### 🚀 Introduction  
🏗️ **23Gane** – the **smart search engine for Iran’s National Building Codes**  
• 💻 Built entirely with **Next.js 15 (Turbopack)** and **React 19**  
• 🔍 Enables **AI-enhanced search** across all 23 official building law books  
• 🧠 Combines **semantic understanding** with keyword matching to deliver highly relevant results  
• 🧾 Users can **save, favorite, and annotate** code articles for future reference  
• ⚙️ Modular Next.js structure with hundreds of optimized routes for search, profile, favorites, and topics  
• 🌐 Accessible to **architects, engineers, and legal professionals** looking for precise construction law references  

---

## ✨ Features  

🔎 **AI-Powered Advanced Search**  
- Understands the **context** of queries, not just keywords  
- Supports **semantic similarity** and **multi-term filtering**  
- Returns **instant, ranked results** across thousands of regulation paragraphs  

⭐ **Favorites & Personalized Workspace**  
- Save and manage frequently used articles or topics  
- Access saved content via the user’s personal dashboard  
- Synchronization through the secure **profile system**  

📚 **Complete Access to Building Regulations**  
- Full coverage of **all 23 building law books**  
- Structured hierarchy: chapters → topics → clauses → notes  
- Constantly updated to match the latest official editions  

🧩 **Dynamic Interface & Modern UX**  
- Built with **Tailwind CSS + Radix UI + Lucide Icons**  
- Beautiful transitions and animations via **Framer Motion & Swiper**  
- **Responsive layout** for desktop, tablet, and mobile devices  

👤 **User Dashboard & Account Management**  
- Secure authentication and token sessions  
- Manage personal info, saved searches, and support tickets  
- Track recent searches and AI recommendations  

📊 **Smart Insights & Recommendations**  
- Displays related topics and referenced laws  
- Offers **AI-generated summaries and context suggestions** (via internal models)  
- Integrated feedback system for improving results relevance  

🔔 **Notifications & PWA Support**  
- Progressive Web App (PWA) ready using **Serwist + Next.js**  
- In-app push notifications and install prompts  
- Offline caching and fast reload performance  

---

## ⚡ Performance  

💡 **Next.js 15 + Turbopack Architecture**  
- 🚀 Ultra-fast builds and hot reload  
- 🧠 Server Components and dynamic routing for efficient rendering  
- 🪶 Optimized static generation for regulation pages and search results  

📊 **Real-World Results**  
- Instant (<100ms) regulation search response times  
- Lighthouse Performance: **98–100**  
- SEO and Accessibility: **100**  

---

## 🧰 Tech Stack  

- ⚛️ **Next.js 15 + React 19**  
- 🎨 **Tailwind CSS + Radix UI + Lucide React**  
- 🧠 **AI-Powered Search Logic (Semantic + Keyword)**  
- 🔍 **Axios + Zustand** for data flow and state management  
- 📂 **Dynamic Routing + App Router (Next.js)**  
- 🪄 **Framer Motion + Swiper + Embla Carousel** for animations  
- 🔔 **Serwist (PWA) + Sonner** for notifications  
- ⚡ **Next-Themes + Tailwind Merge** for light/dark modes  
- 🧾 **Profile, Favorites, and Project APIs** for user features  

            `,
            is_featured:
                true,
        },
        {
            id: 11,
            title: '23Gane Admin',
            slug: '23Gane-Admin',
            description: 'A **React + MUI admin dashboard** built with the Minimal Template — designed to manage and power the 23Gane providing full control over users, content, analytics, and system data.',
            image: '/static/project/minimal-dashboard.avif',
            link_demo: null,
            link_github: null,
            stacks: '[ "React.js", "JavaScript","CSS","Material UI"]',
            is_show: true,
            updated_at: '2023-07-23T12:29:09.882Z',
            content: `
A **React + MUI admin dashboard** built with the Minimal Template — designed to manage and power the **23Gane AI-powered Building Regulation Platform**, providing full control over users, content, analytics, and system data.

---

### 🧠 Introduction  
🧩 **23Gane Admin Panel** – the intelligent management system for the **23Gane AI platform**, enabling administrators to oversee users, building law content, AI search data, and engagement analytics.  
• 💻 Built with **React + Material UI (MUI)** and **Minimal Template** for a clean, professional experience  
• ⚙️ Provides complete content, user, and analytics control for the **Next.js 15 23Gane** front-end  
• 🧾 All regulations, blogs, and search logs are dynamically managed from this dashboard  
• 🔒 Secured with authentication, permission levels, and API integration  

---

## ✨ Core Features  

📊 **Dashboard Overview**  
- Displays system metrics: total users, active searches, favorite articles, and daily views  
- Real-time analytics for performance monitoring  

👤 **User Management**  
- Create, edit, or suspend user accounts  
- Assign roles and control access levels  
- Track user activity, favorites, and feedback  

📚 **Regulation & Content Management**  
- Manage all 23 National Building Regulation books and related articles  
- Edit chapters, sections, and topics directly from the admin interface  
- Link AI metadata and update semantic tags dynamically  

🧠 **AI Data Controls**  
- Review and train AI models on new data sets  
- Edit embeddings, synonyms, and retriever configurations  
- Fine-tune semantic relationships between topics  

📰 **Blog & News Module**  
- Create and publish educational blog posts for architects and engineers  
- Manage SEO titles, slugs, and Open Graph metadata  
- Preview articles in a live-render panel before publishing  

🔍 **Search Analytics**  
- Monitor user queries and AI search performance  
- Identify top searched keywords and topics  
- Generate reports to improve future AI model updates  

📥 **Feedback & Support System**  
- Manage user-submitted feedback and tickets  
- Integrate responses with internal CRM or communication APIs  

---

## 🧰 Tech Stack  

- ⚛️ **React 18 + Vite (Minimal Template)**  
- 🎨 **Material UI (MUI v5)** for professional UI  
- 📦 **Axios + Zustand** for API and state management  
- 🧩 **Framer Motion** for smooth UI transitions  
- 🧾 **Zod** for form validation  
- 🔔 **Sonner** for notifications and alerts  

---

## 🏗️ Integration with 23Gane  

This admin panel directly manages and enhances the **Next.js 15-based 23Gane platform**, powering:  
- Dynamic regulation data updates  
- AI model configuration and training inputs  
- Blog and media synchronization  
- User account and access control  
- Analytics and report generation  

---

## ⚡ Performance  

- Optimized with **lazy-loaded data tables** and **API caching**  
- Responsive design suitable for both desktop and tablets  
- Minimal load times with efficient MUI rendering  

---

⭐ The **23Gane Admin Dashboard** transforms the static AI search engine into a **living, data-driven ecosystem** — enabling seamless management, intelligent insights, and effortless scalability.

            `,
            is_featured:
                true,
        },
        {
            id: 12,
            title: 'Hire',
            slug: 'hire-hamrahan',
            description: 'A beautifully designed job hiring platform where users can submit resumes under specific job categories, and companies can review, accept, or reject applications through a modern, intuitive UI.',
            image: '/static/project/hire-hamrahan.avif',
            link_demo: null,
            link_github: null,
            stacks: '["Next.js", "React.js", "TypeScript", "TailwindCSS","CSS","Shadcn"]',
            is_show: true,
            updated_at: '2023-07-23T12:29:09.882Z',
            content: `
A beautifully designed **Next.js 15 job hiring platform** where users can submit resumes under specific job categories, and companies can review, accept, or reject applications through a modern, intuitive UI.

---

### 🚀 Introduction  
💼 **Hiring Portal** – a **stunningly crafted job recruitment platform** built with **Next.js 15**, **TailwindCSS**, and **ShadCN UI components**  
• 🧠 Designed for both **job seekers** and **employers**, offering an elegant, fast, and responsive interface  
• 📄 Job applicants can **submit resumes** directly in their desired category  
• 🏢 Companies can **review, accept, or reject** applications based on skill and suitability  
• ⚙️ Fully dynamic and modular architecture — optimized for scalability and performance  
• 🌗 Includes dark mode, animations, and micro-interactions for a polished user experience  

---

## ✨ Features  

👤 **Candidate Experience**  
- 🧾 Submit resumes via dynamic category-based forms  
- 📂 Upload files using **React Dropzone** with instant feedback  
- 🔍 Browse open positions with filters and live search  
- 💬 Receive live notifications about application status  

🏢 **Employer Dashboard**  
- 🧠 Manage all incoming applications in one place  
- ✅ Accept or reject candidates based on job requirements  
- 📊 Track analytics like views, applicants, and engagement  
- ⚙️ Built-in communication and status tracking tools  

🎨 **Stunning Modern UI**  
- 🌈 Powered by **Radix UI + Tailwind + Framer Motion**  
- 🪄 Smooth transitions and reveal animations with **AOS & Motion**  
- 🧩 Modular design system (cards, drawers, modals, and dropdowns)  
- 🖼️ Responsive grid layouts that adapt seamlessly across devices  

📅 **Advanced Job Filtering & Date Tools**  
- 📆 Integrated **React Multi Date Picker + React Date Object**  
- 🔎 Refine results by posting date, category, or contract type  

📦 **Category-Based Job System**  
- 🧩 Each listing belongs to a structured category (IT, Design, Finance, etc.)  
- 📊 Optimized search using **cmdk command palette**  
- 🪶 Category animations and hover effects for intuitive browsing  

🔔 **Notifications & Feedback**  
- 💬 Realtime status alerts with **Sonner Toast System**  
- ⚡ Smooth progress indicators for uploads and form submissions  
- 🧠 Minimal clutter, focused experience for both sides  

---

## ⚡ Performance  

💡 **Next.js 15 + React 19**  
- 🚀 Powered by the latest **App Router + Turbopack** features  
- ⚡ Lightning-fast routing and prefetching  
- 🪶 Optimized asset loading for near-instant navigation  

📊 **Best-in-Class UX Metrics**  
- Performance: **99–100**  
- Accessibility: **100**  
- SEO: **100**  
- Best Practices: **100**  

---

## 🧰 Tech Stack  

- ⚛️ **Next.js 15 + React 19 (RC)**  
- 🎨 **TailwindCSS + ShadCN + Radix UI Components**  
- 🧩 **Framer Motion + AOS Animations**  
- 📦 **React Dropzone + Multi Date Picker**  
- 🔍 **cmdk Command Palette + Axios API Layer**  
- 💬 **Sonner Toasts + Tailwind Animate**  
---
      `,
            is_featured:
                true,
        },
        {
            id: 13,
            title: 'Inre',
            slug: 'inre',
            description: 'A large-scale platform (INRE.ir) that connects professionals with top industrial, commercial, and tech companies through structured exams, automated screening, and AI-driven insights.',
            image: '/static/project/inre.avif',
            link_demo: null,
            link_github: null,
            stacks: '["Next.js", "React.js", "TypeScript", "TailwindCSS","CSS"]',
            is_show: true,
            updated_at: '2023-07-23T12:29:09.882Z',
            content: `
A large-scale **Next.js 15 + T3 Stack hiring platform** (INRE.ir) that connects professionals with top industrial, commercial, and tech companies through structured exams, automated screening, and AI-driven insights.

---

### 🚀 Introduction  
🏢 **INRE (Industrial Recruitment Exam)** – the official **private-sector employment platform** designed for large-scale hiring in Iran’s industrial and tech ecosystem.  
• 💻 Built with **Next.js 15**, **T3 stack**, and **TypeScript**  
• 🤝 Connects **job seekers** to over **2700 private companies** with **31,000+ job opportunities**  
• 🧠 Implements structured exam-based recruitment, automated evaluation, and application tracking  
• 🎨 Delivers a **visually striking, modern UI** with **dynamic animations and live statistics**  
• ⚙️ Fully modular architecture powered by **tRPC**, **React Query**, and **Zod** for validation  
• 🌐 Publicly accessible at [https://inre.ir](https://inre.ir)  

---

## ✨ Features  

🧾 **Exam-Based Hiring System**  
- Job candidates register and participate in standardized employment exams  
- Each applicant’s results are automatically analyzed and scored  
- Companies can review and select top-performing candidates directly  

🏢 **Company Dashboard**  
- Manage company listings, job posts, and candidate invitations  
- View applicants filtered by category, skillset, and exam performance  
- Real-time notifications for application updates  

👤 **Candidate Experience**  
- Personalized onboarding and resume submission  
- Status tracking for submitted applications  
- Secure authentication with **NextAuth v5 (Beta)**  
- Responsive dashboards for managing job submissions and history  

📈 **Dynamic Home & Analytics Sections**  
- Animated **status counters** showing live participation metrics  
- **Company marquees** and rotating banners built with **Swiper.js**  
- Embedded **Aparat video gallery** for candidate feedback  
- **Blog and notebook sections** offering hiring tips and guidance  

🎨 **Beautiful & Functional UI**  
- Built with **TailwindCSS + DaisyUI + Radix UI + Geist**  
- **Framer Motion** and **Tailwind Animate** for micro-interactions  
- Highly accessible and adaptive across devices  
- Modular components: hero, schedule table, help notebook, and more  

🔍 **Performance-Driven Architecture**  
- Optimized with **Next.js Turbopack** and **React 18 concurrent features**  
- **tRPC** ensures type-safe, end-to-end API communication  
- **SuperJSON** and **React Query** for client-side caching and hydration  

---

## ⚡ Performance  

💡 **T3 Stack Architecture (Next.js + tRPC + Prisma-ready)**  
- 🚀 Type-safe communication across front and back  
- 🔁 Zero-API boilerplate via **tRPC**  
- 🧠 Ultra-fast revalidation using **TanStack React Query**  
- 🪶 Minimal bundle size with optimized dynamic imports  

📊 **Real Stats from Deployment**  
- Over **31,000 job listings** managed seamlessly  
- Tens of thousands of concurrent applicants handled smoothly  
- Lighthouse: **98–100** in Performance & Accessibility  

---

## 🧰 Tech Stack  

- ⚛️ **Next.js 15 + React 18.3**  
- 🧠 **T3 Stack (tRPC + Zod + React Query + NextAuth)**  
- 💬 **Axios + Notistack** for notifications  
- 🎨 **TailwindCSS + DaisyUI + Radix UI + Geist**  
- 🪄 **Framer Motion + Swiper + CMDK** for animations and command tools  
- ⚙️ **TypeScript + ESLint + Prettier + SuperJSON**  
- 📈 **Deployed at [inre.ir](https://inre.ir)**  

---

⭐ Built for efficiency, trust, and scalability — helping companies discover talent faster.  
📩 Interested in collaboration or integration? **DM me anytime — I actually reply!**

            `,
            is_featured:
                true,
        },
        {
            id: 14,
            title: 'Persiansite',
            slug: 'persiansite',
            description: 'A full-service **Next.js 16 digital agency website** for **Persian Site**, a leading tech company offering web design, SEO, content creation, automation, and etc.',
            image: '/static/project/persiansite.ir.avif',
            link_demo: null,
            link_github: null,
            stacks: '["Next.js", "React.js", "TypeScript", "TailwindCSS","CSS"]',
            is_show: true,
            updated_at: '2023-07-23T12:29:09.882Z',
            content: `
A full-service **Next.js 16 digital agency website** for **Persian Site**, a leading tech company offering web design, SEO, content creation, automation, and marketing campaigns — empowering businesses to shine in the digital era.

---

### 🚀 Introduction  
🌐 **Persian Site** – a **modern digital transformation agency** with over **20 years of experience**, helping businesses grow through technology and strategy.  
• 💻 Built with **Next.js 16 + React 19 + TailwindCSS** for maximum performance and aesthetics  
• 🧠 Offers professional services including **web development, SEO, content marketing, automation**, and **digital campaigns**  
• 💬 Designed to engage clients through persuasive visuals, storytelling, and smooth animations  
• ⚙️ A complete corporate-grade site with contact forms, service pages, blog system, and process flow  
• 🏢 Headquarters: Tehran – Pasdaran Street  

---

## ✨ Features  

🎨 **Professional Web Design & Development**  
- Custom responsive websites built to elevate brand identity  
- Fast, secure, and optimized for all devices  
- Designed for conversion — turning visitors into customers  

🔍 **SEO & Search Engine Optimization**  
- Strategic SEO planning to boost organic visibility  
- Continuous analysis and optimization  
- Long-term growth through keyword authority and ranking improvements  

📣 **Digital Marketing & Campaign Management**  
- Creative and data-driven ad campaigns  
- Targeted audience engagement across multiple channels  
- Conversion tracking, optimization, and ROI monitoring  

🧠 **Content Creation & Branding**  
- Engaging written, visual, and video content  
- Storytelling that strengthens brand voice and recognition  
- Supports blog publishing, influencer collaborations, and social media strategy  

⚙️ **Automation & Marketing Systems**  
- Business process automation tools to improve efficiency  
- Email marketing, CRM integration, and smart analytics  
- Enhanced productivity through AI-assisted workflows  

💼 **Corporate Identity & Strategy**  
- Defines clear digital strategies from concept to execution  
- Long-term partnerships for sustainable growth  
- Tailored solutions based on client needs and industry trends  

---

## 🌟 Highlights & Achievements  

🏆 **20+ Years of Excellence**  
- Trusted by over **1800 clients** across multiple industries  

🚀 **2,880+ Successful Projects**  
- Proven track record in delivering measurable growth  

👨‍💻 **150+ Expert Professionals**  
- Cross-functional team specializing in development, marketing, and automation  

📈 **+43% Average Monthly Sales Growth**  
- Real results driven by continuous analysis and innovation  

---

## ⚙️ Process Overview  

1️⃣ **Consultation & Discovery** – Understand client goals and challenges  
2️⃣ **Needs Analysis** – Market research, competition review, and roadmap creation  
3️⃣ **Implementation** – Develop, design, and launch digital solutions  
4️⃣ **Delivery & Support** – Ongoing optimization, maintenance, and analytics  

---

## ⚡ Performance  

💡 **Next.js 16 + Turbopack**  
- Blazing-fast server rendering and incremental builds  
- Optimized SEO and Lighthouse scores above 95  

🎬 **Framer Motion + Swiper Animations**  
- Modern transitions, parallax effects, and interactive hero sections  

💬 **Smart UI & UX**  
- Accessible and engaging components via **Lucide Icons**, **React Hook Form**, and **React Hot Toast**  
- Smooth, real-time interactions powered by **Zustand** for state management  

---

## 🧰 Tech Stack  

- ⚛️ **Next.js 16 + React 19**  
- 🎨 **TailwindCSS + Framer Motion + Lucide React**  
- 🧠 **React Hook Form + Yup Validation**  
- 🪄 **Zustand State Management**  
- 📊 **Swiper + Motion Animations**  
- ⚙️ **TypeScript + ESLint + Prettier + Turbopack**  

            `,
            is_featured:
                true,
        },
        {
            id: 15,
            title: 'Concert',
            slug: 'concert-next-dubai',
            description: 'A **Next.js 15 concert and event website** designed for **“The Grand Night of Iranians”**, showcasing artists, ticket plans, event details, and travel packages ',
            image: '/static/project/concert.avif',
            link_demo: null,
            link_github: null,
            stacks: '["Next.js", "React.js", "TypeScript", "TailwindCSS","CSS"]',
            is_show: true,
            updated_at: '2023-07-23T12:29:09.882Z',
            content: `
A **Next.js 15 concert and event website** designed for **“The Grand Night of Iranians”**, showcasing artists, ticket plans, event details, and travel packages — delivering an immersive, luxury concert experience.

---

### 🎤 Introduction  
🌃 **The Grand Night of Iranians** – an unforgettable 7-hour live concert event featuring the biggest names in Persian rap and pop.  
• 💻 Built with **Next.js 15**, **React 18**, and **TailwindCSS** for high performance and stunning visuals  
• 🎟️ Showcases ticket plans (Bronze to Platinum), artist profiles, and event information  
• 🌍 Supports **multi-currency booking (AED, USD, EUR, Toman)**  
• 🌐 Fully multilingual with **next-intl** (English & Persian)  
• 🏖️ Hosted at **Jumeirah Beach, Dubai** — April 1, 2025, from 7 PM to 3 AM  

---

## ✨ Event Highlights  

🎶 **Non-Stop 7 Hours of Live Music**  
- Featuring **Sohrab MJ**, **Behzad Leito**, **Sepehr Khalse**, **Koorosh**, **Poobon**, and **Arta**  
- Energetic performances blending Persian rap, pop, and electronic vibes  

🔥 **Extraordinary Experience**  
- Fireworks & professional lighting effects  
- Dance performances by top Iranian DJs  
- Open-air setup with luxury amenities  
- Hookah lounges, drinks, and gourmet dining  

🎟️ **Luxury Ticket Plans**  
- **Platinum:** VIP table, limousine transfer, red carpet, dinner & exclusive photos  
- **Diamond:** Premium stay + full service + limousine  
- **Gold:** Front-stage seating, dinner & VIP zone  
- **Silver:** Party access + fireworks + beach dancing  
- **Bronze:** Entry-level ticket for night party & open dance floor  

---

## 🧑‍🎤 Artists Lineup  

🎧 **Sohrab MJ**  
A pioneer of Persian rap — emotional, nostalgic, and high-energy performances.  
Featured tracks: *Na Ni Ok, Polomp, Haabil*

🎧 **Behzad Leito**  
Legend of Persian hip-hop blending modern beats with classic vibes.  
Featured tracks: *Mary Jane, Bi Marefat, Too In Shahr*

🎧 **Sepehr Khalse**  
Modern, creative, and electric — live renditions of *Tiffany, Yakuza, Ye Emshabo*  

🎧 **Koorosh**  
Known for smooth vocals and heartfelt lyrics.  
Featured tracks: *Isam, Nashod Behet Begam, Too In Khoone*

🎧 **Poobon**  
A genre-bending performer with his own distinct style.  
Featured tracks: *In Man Kist, 12-34, Bi Marefat*

🎧 **Arta**  
Captivating with emotion and warmth.  
Featured tracks: *Dokhtare Tokhs, Erade Kon, Kash Boodi*

---

## 🖼️ Gallery  

📸 Full-screen photo gallery of the venue and event highlights  
- Stunning images from **Jumeirah Beach**  
- Fireworks, crowd energy, artist performances, and stage effects  

---

## ⚙️ Tech Stack  

- ⚛️ **Next.js 15 + React 18**  
- 🎨 **TailwindCSS 3 + Geist UI**  
- 🌀 **Swiper.js** for galleries and slides  
- 🌍 **next-intl** for multilingual content  
- 🎬 **GSAP** for motion and stage animations  
- 🎧 **hls-video-element** for secure HLS video streaming  
- ✅ **Zod** for data validation  

---

## ⚡ Performance & Design  

💡 **Optimized for Modern Browsers**  
- Turbo rendering via Next.js  
- Fast image and video loading  

🎬 **Immersive Visuals**  
- Smooth animations powered by **GSAP**  
- Fluid transitions between artist and ticket sections  

📱 **Mobile-First & Responsive**  
- Tailored experience across all devices  
- Adaptive layouts for booking and viewing performances  

---

📍 **Event Location:**  
**Jumeirah Beach, in front of W Dubai Hotel**  
📅 **Date:** April 1, 2025  
🕖 **Time:** 7 PM – 3 AM  
📞 **Contact:** +97 150 702 1294  

---

⭐ The **Concert-Next** platform redefines event booking — blending artistry, technology, and luxury into one seamless concert experience.

            `,
            is_featured:
                true,
        },
        {
            id: 16,
            title: 'Persian Horizan',
            slug: 'Persian-Horizan-next',
            description: 'A luxurious **Next.js 15 single-page application** for **Persian Horizon**, showcasing premium residency, business, and VIP travel services in Dubai — crafted for elegance, clarity, and exclusivity.',
            image: '/static/project/persian-horizan-next.avif',
            link_demo: null,
            link_github: null,
            stacks: '["Next.js", "React.js", "TypeScript", "TailwindCSS","CSS"]',
            is_show: true,
            updated_at: '2023-07-23T12:29:09.882Z',
            content: `
A luxurious **Next.js 15 single-page application** for **Persian Horizon**, showcasing premium residency, business, and VIP travel services in Dubai — crafted for elegance, clarity, and exclusivity.

---

## 🏙️ Introduction  
🌍 **Persian Horizon** is a digital gateway to luxury living, elite travel, and international business opportunities in the UAE.  
This SPA (Single Page Application) combines a sleek modern design with high-performance Next.js architecture, guiding users through curated sections for residency, business setup, tourism, and marketing services.  

• 🏡 Specialized in **residency and immigration consultation** for the UAE  
• 💼 Offers **company formation**, **investment residency**, and **business trade** facilitation  
• ✈️ Curates **VIP private tours** and **ultra-luxury experiences** for distinguished clients  
• 🛍️ Provides **premium concierge and lifestyle services** for Iranians abroad  
• 💬 Multilingual, mobile-optimized, and SEO-friendly for global accessibility  

---

## ✨ Core Sections  

### 🏠 Home  
- A cinematic hero section highlighting the brand’s luxury identity  
- Smooth navigation across all service categories with a polished visual flow  

### 🏢 Residence & Smart Migration  
- Detailed programs for **residency through investment, real estate, and company formation**  
- Integrated consultation forms for personalized immigration guidance  
- Legal and financial advisory integration for complete transparency  

### 💼 Business & Trade with UAE  
- Tools for **product ordering, export, and import** between Iran and the UAE  
- Smart logistics guidance and cost-optimized trade pathways  
- Tailored B2B solutions for Iranian entrepreneurs  

### ✨ Luxury Tours  
- Showcases **exclusive VIP private tours** and **ultra-luxury experiences**  
- Includes helicopter rides, private yachts, gourmet dining, and luxury events  
- Personalized trip planning with high-end concierge service  

### 💎 Exclusive Services for Iranians in UAE  
- Assistance with **relocation, visa extensions, business operations**, and **property investment**  
- Complete integration of **concierge, travel, and legal support**  

---

## 🧭 Features  

- 🌐 **SPA Architecture:** Ultra-fast single-page transitions using Next.js 15  
- 🧠 **Next-Intl Integration:** Multilingual routing and seamless translation  
- 🎨 **TailwindCSS + Geist UI:** Elegant, minimal, and consistent branding  
- 🧩 **Lucide Icons + Radix UI:** Modern UI components with accessibility in mind  
- ⚡ **SEO Optimized & Responsive:** Designed for luxury audience visibility on all devices  

---

## 🧰 Tech Stack  

- ⚛️ **Next.js 15 + React 18**  
- 🎨 **TailwindCSS + Geist + Lucide React**  
- 🧩 **Radix UI Components (Dropdown, Select)**  
- 🧠 **Next-Intl for localization**  
- ⚙️ **Zod for form validation and schema control**  
- 🚀 **Prettier + ESLint + TypeScript 5** for clean, maintainable development  

---

## 💡 Vision  

**Persian Horizon** blends technology, aesthetics, and service excellence — creating a seamless bridge between luxury, business, and global mobility.  
It’s not just a website — it’s an experience that reflects prestige, trust, and international sophistication.

            `,
            is_featured:
                true,
        },
        {
            id: 17,
            title: 'Touretbama',
            slug: 'Touretbama-next',
            description: 'A fully responsive **Next.js 15 travel and tour booking platform** that showcases curated travel packages, dynamic destinations, and seamless booking experiences — all wrapped in a modern, user-friendly interface.',
            image: '/static/project/touretbama.avif',
            link_demo: 'https://touretbama.com/',
            link_github: null,
            stacks: '["Next.js", "React.js", "TypeScript", "TailwindCSS","CSS","Shadcn"]',
            is_show: true,
            updated_at: '2023-07-23T12:29:09.882Z',
            content: `
A fully responsive **Next.js 15 travel and tour booking platform** that showcases curated travel packages, dynamic destinations, and seamless booking experiences — all wrapped in a modern, user-friendly interface.

---

## 🧭 Introduction  
🌍 **TourtBama** is a comprehensive tour management and booking website built with **Next.js 15** and **TailwindCSS**, designed for travelers seeking both domestic and international adventures.  
The platform combines **elegant UI design**, **fast search**, and **real-time booking features** to make trip planning effortless and enjoyable.

• 🧳 Explore tours across destinations such as **Dubai, Kish, Armenia, Japan, and more**  
• 📅 Search and filter by **date range, location, and duration**  
• 💰 Compare plans by **price and trip length**  
• 🏨 Get full package details including **flights, hotels, insurance, and services**  
• 🔔 Stay updated with **newsletters, blogs, and promotional offers**  

---

## ✨ Core Features  

### 🔍 Smart Tour Search  
- Filter tours by destination, date, and category  
- Advanced mode for refining searches (price, duration, luxury level, etc.)  
- Real-time availability and package data  

### 🌴 Featured Tours  
- Dynamic sections highlighting **seasonal and special offers** (e.g. Norooz packages)  
- Multi-city packages with transparent pricing and duration details  
- Each package includes gallery, description, and cost breakdown  

### 📰 Blog & Travel Tips  
- Educational posts about travel destinations and cultural insights  
- News about visa updates, local festivals, and travel deals  

### 👤 User Authentication  
- Login/Sign-up functionality with session-based access  
- Personalized dashboard for booking management and saved tours  

### 🧭 About & Support  
- Company info, contact forms, and **24/7 customer service** section  
- FAQ and refund policy integrated directly within the interface  

---

## 🌐 Key Pages  

- **Home:** Hero slider, featured destinations, and top offers  
- **Destinations:** Grid view of available tour countries  
- **Packages:** List of customizable travel plans  
- **Blog:** Travel stories, insights, and updates  
- **About & Contact:** Support, partnerships, and social links  

---

## 🧰 Tech Stack  

- ⚛️ **Next.js 15 + React 18** for performance and scalability  
- 🎨 **TailwindCSS + DaisyUI + Geist UI** for elegant, modern design  
- 🧩 **Radix UI Components** (Dialog, Dropdown, Tabs, Slider, etc.)  
- 🔥 **Swiper.js** for responsive tour carousels  
- ⚙️ **Zod + React Hook Form** for robust form validation  
- 📦 **Axios + Notistack + Hot Toast** for smooth API and notification handling  

---

## ⚡ Performance & Design  

- Built with **Turbopack** for ultra-fast dev experience  
- Fully **responsive** across devices  
- Optimized images, smooth transitions, and lazy-loaded tour grids  
- **SEO and accessibility optimized** for global audience reach  

---

## 🧳 Vision  

**TourtBama** aims to redefine how users discover and book tours — transforming traditional travel browsing into an engaging digital experience.  
It’s not just a booking portal — it’s your **gateway to adventure**, offerin

            `,
            is_featured:
                true,
        },
        {
            id: 18,
            title: 'Persian Group',
            slug: 'Persiangroup-next',
            description: 'A **Next.js 15 digital marketing agency website** built for **Persian Group**, showcasing professional web design, SEO, content creation, and smart automation services with a modern, motion-driven user experience.',
            image: '/static/project/persiangroup.ir.avif',
            link_demo: 'https://persiangroup.ir/',
            link_github: null,
            stacks: '["Next.js", "React.js", "TypeScript", "TailwindCSS","CSS"]',
            is_show: true,
            updated_at: '2023-07-23T12:29:09.882Z',
            content: `
A **Next.js 15 digital marketing agency website** built for **Persian Group**, showcasing professional web design, SEO, content creation, and smart automation services with a modern, motion-driven user experience.

---

## 🚀 Introduction  
💡 **Persian Group** is a top-tier digital marketing agency offering a full spectrum of online growth services — from **web design and branding** to **SEO optimization**, **content marketing**, and **automation systems**.  
This site embodies the company’s core philosophy: *"The future is here — and we design it."*

• 🌐 Built with **Next.js 15**, **React 19**, and **TailwindCSS 4**  
• 🎯 Focused on lead generation, client acquisition, and conversion optimization  
• 🧠 Structured around smart marketing, automation, and branding solutions  
• ✨ Designed for agencies seeking a premium, minimalist, and high-performance web presence  

---

## ✨ Core Features  

### 🎨 Professional Web Design Showcase  
- Highlights fast, responsive, and SEO-friendly web development  
- Promotes brand identity with engaging visuals and modern UI  
- Mobile-first design with attention to accessibility and usability  

### 📈 Digital Marketing & Campaigns  
- Dedicated section for **strategic marketing campaigns**  
- Emphasis on data-driven results and brand visibility growth  
- Integrated storytelling for case studies and client success  

### 🧠 Smart Automation Solutions  
- Introduces **CRM-based and process automation systems**  
- Streamlines marketing and customer engagement workflows  
- Demonstrates how AI and data improve conversion rates  

### 📝 Content Creation  
- Comprehensive services: copywriting, creative imagery, and video marketing  
- Emphasizes audience engagement and brand consistency  
- Designed to convert visitors into long-term clients  

### 🔍 SEO & Optimization  
- Advanced on-page and technical SEO solutions  
- Aims for top Google rankings and sustainable traffic growth  
- Incorporates blog and educational resources for client awareness  

---

## 💼 Testimonials  
Real stories from satisfied clients praising the agency’s creativity, professionalism, and impact:  
> “An exceptional team with unmatched precision and creativity — they transformed our brand’s digital presence.”  
> “Professional, responsive, and always on time. They delivered beyond expectations.”  

---

## 🧭 Collaboration Process  
1️⃣ **Initial Consultation** – understanding client goals and challenges  
2️⃣ **Market Analysis** – identifying opportunities and competitors  
3️⃣ **Execution & Implementation** – deploying strategies and creative solutions  
4️⃣ **Delivery & Ongoing Support** – continuous optimization and support  

---

## 🧩 Tech Stack  

- ⚛️ **Next.js 15 + React 19**  
- 🎨 **TailwindCSS 4** for responsive design  
- 🌀 **Swiper.js** for interactive sliders  
- 💫 **Motion** for smooth animations and transitions  
- 🔔 **Next.js Top Loader** for improved UX during navigation  
- ⚙️ **Axios** for API communication  

---

## ⚡ Performance & SEO  

- Fully optimized static and dynamic routes  
- Lighthouse scores: **Performance 98+ / Accessibility 100 / SEO 100**  
- Clean semantic markup for excellent indexing  

---

## 🌟 Vision  
**Persian Group** strives to redefine digital marketing in Iran and the Middle East — merging creativity, strategy, and technology to empower businesses with real, measurable growth.  
The website reflects this vision through **clarity, sophistication, and digital excellence**.

            `,
            is_featured:
                true,
        },
        {
            id: 19,
            title: 'Samfit Gym',
            slug: 'samfitgym-next',
            description: 'A modern **Next.js 15.4 fitness and gym platform** for **SamFit**, Iran’s largest premium fitness chain — featuring branch listings, membership plans, professional trainers, and online registration with full PWA support.',
            image: '/static/project/samfitgym.com.avif',
            link_demo: 'https://samfitgym.com/',
            link_github: null,
            stacks: '["Next.js", "React.js", "TypeScript", "TailwindCSS","CSS","PWA","Shadcn"]',
            is_show: true,
            updated_at: '2023-07-23T12:29:09.882Z',
            content: `
A modern **Next.js 15.4 fitness and gym platform** for **SamFit**, Iran’s largest premium fitness chain — featuring branch listings, membership plans, professional trainers, and online registration with full PWA support.

---

## 💪 Introduction  
🏋️‍♂️ **SamFit Gym** is the country’s largest fitness franchise, providing high-end health and bodybuilding services across **15+ active branches** nationwide.  
This website centralizes everything — from **branch info, membership plans, and elite trainer profiles** to **fitness education, brand partnerships, and mobile app integration** — built with the latest **Next.js + React 19** stack.

• 🌐 **15+ premium branches** across Tehran, Mashhad, and Mazandaran  
• 🏆 Trusted by professional athletes, actors, and fitness influencers  
• 📲 Integrated with **SamFit App** for online membership and class booking  
• 💼 Developed by **Persian Group** for performance, scalability, and design excellence  

---

## ✨ Core Features  

### 🏋️ Branch Management & Search  
- View all branches with **locations, contact info, and Google Map links**  
- Branch pages include working hours, facilities, and trainer info  
- Dynamic "Coming Soon" placeholders for expanding branches  

### 💳 Membership Plans & Pricing  
- Multi-tier plans (VIP, 3-month, 6-month, annual)  
- Transparent details: duration, sessions, and price in Toman  
- Online registration and plan comparison  

### 🧠 Professional Trainer Profiles  
- Showcases certified and award-winning trainers  
- Details include education, federation credentials, and achievements  
- Includes specializations (TRX, EMS, IFBB Fitness, etc.)  

### 🧍 Exercise Education & Tutorials  
- Visual and textual guides for bodybuilding movements  
- Instructions for proper form, muscle focus, and injury prevention  
- Example: Barbell Shrug, Dumbbell Shrug, Face Pull, Upright Row  

### 📰 Fitness Magazine  
- Articles on training programs, diet, and recovery  
- Expert insights like "5 Common Muscle Growth Mistakes" or "Home Workout Routines"  
- Regular updates and “Read More” blog navigation  

### ⚙️ Facilities & Equipment Highlights  
- Lists premium imported fitness brands (Technogym, Precor, HOIST, LifeFitness)  
- Details on each brand’s origin, features, and use in SamFit gyms  

### 📲 SamFit App Integration  
- Members can:  
  - Buy and renew subscriptions  
  - Reserve classes and track workouts  
  - Monitor body stats and progress  
  - Access professional coaching via mobile  
- Promoted prominently with “Install App” CTA  

---

## 🧩 Tech Stack  

- ⚛️ **Next.js 15.4 + React 19**  
- 🎨 **TailwindCSS 4** for responsive UI  
- 🔥 **Swiper.js** for dynamic carousels  
- ⚡ **Serwist + Next-PWA** for full **Progressive Web App** support  
- 🧠 **TanStack React Query** for API caching and real-time data fetching  
- ⚙️ **Axios** for backend communication  

---

## 🧱 Structure Overview  

- **Home Page:** Hero banner, quick metrics, top facilities  
- **Branches Page:** Locations, maps, and direct call links  
- **Plans Page:** Dynamic pricing and sign-up  
- **Trainers Page:** Certified coaches and bios  
- **Magazine Page:** Educational and motivational fitness content  
- **Contact Page:** Direct call and message integration  

---

## ⚡ Performance  

- 🚀 Optimized for SEO and Core Web Vitals  
- 📲 PWA-enabled for offline access  
- 💨 Lightning-fast navigation with Turbopack  
- 🧩 Modular design for easy scalability as new branches launch  

---

## 🌟 Vision  

**SamFit** isn’t just a gym — it’s a nationwide health ecosystem.  
With a digital-first platform and an expanding branch network, it aims to deliver **personalized, science-backed fitness experiences** both online and offline — setting a new benchmark for fitness innovation in Iran.

            `,
            is_featured:
                true,
        },
        {
            id: 20,
            title: 'Persian Crm',
            slug: 'persian-crm-next',
            description: 'A powerful **Next.js 16 SaaS platform** for **PersianCRM**, providing intelligent CRM and marketing automation for Iranian businesses with full analytics, integrations, and AI-driven sales management.',
            image: '/static/project/persiancrm.ir.avif',
            link_demo: 'https://persiancrm.ir/',
            link_github: null,
            stacks: '["Next.js", "React.js", "TypeScript", "TailwindCSS","CSS","Shadcn"]',
            is_show: true,
            updated_at: '2023-07-23T12:29:09.882Z',
            content: `
A powerful **Next.js 16 SaaS platform** for **PersianCRM**, providing intelligent CRM and marketing automation for Iranian businesses with full analytics, integrations, and AI-driven sales management.

---

## 🚀 Introduction  
**PersianCRM** is an advanced **customer relationship management platform** designed to help modern businesses in Iran increase sales, streamline operations, and automate customer engagement.  
With **AI-powered marketing automation**, **integrated analytics**, and **mobile access**, PersianCRM enables companies to manage leads, optimize sales pipelines, and enhance customer satisfaction through smart automation.

- 🧠 **Smart lead management and sales automation**  
- 📊 **Advanced analytics and real-time dashboards**  
- 🤖 **Marketing automation with multi-channel campaigns**  
- 📱 **Mobile app for remote CRM access**  
- 🔗 **Easy integrations via API and Webhook**  

---

## 💼 Core Features  

### 🧩 Sales & Marketing Automation  
- Automate email, SMS, and in-system marketing campaigns  
- Smart workflows for lead scoring, routing, and follow-up  
- Manage the full customer journey from lead to sale  

### 📈 Advanced Reporting & Analytics  
- Interactive reports and custom dashboards  
- Track KPIs: conversion rate, sales growth, and team performance  
- AI insights for revenue forecasting and trend detection  

### 💬 Customer Service & Support  
- Centralized ticketing and service automation  
- Multi-channel customer communication  
- SLA tracking and satisfaction reports  

### 🧠 Smart Personalization  
- Tailored CRM experiences per industry and business scale  
- Fully customizable modules, fields, and pipelines  
- Personalized dashboards for each role  

### 🔗 Integrations & Ecosystem  
Seamless connection with leading tools and platforms:  
**WordPress, Slack, Asana, Jira, Shopify, Okta, ZoomInfo, Gong, Xero, Workday**, and more.  
All through **API**, **Webhooks**, and **native integration modules**.

### 🔒 Security & Data Management  
- Enterprise-grade encryption and access control  
- Automated backups and GDPR-aligned policies  
- Role-based permissions and audit trails  

---

## 🧠 Tech Stack  

- ⚛️ **Next.js 16 + React 19**  
- 🎨 **TailwindCSS 4 + Radix UI Components**  
- 🧩 **Zustand** for state management  
- 📊 **Axios + React Query** for data fetching  
- 🔍 **Lucide Icons + Swiper + Sonner Toasts**  
- 🧠 **Turbopack** for blazing-fast build performance  

---

## 🏗️ Platform Modules  

| Module | Description |
|---------|-------------|
| **CRM Core** | Centralized customer and lead management |
| **Sales Automation** | Smart funnel tracking and activity scheduling |
| **Marketing Hub** | Campaign builder, lead scoring, segmentation |
| **Analytics & BI** | Reports, KPIs, and business insights |
| **Customer Portal** | Dedicated portal for client communication |
| **Integrations** | WordPress, Shopify, Slack, WhatsApp API, etc. |
| **Mobile App** | iOS & Android companion app for CRM on the go |

---

## 📊 Business Impact  

| Metric | With CRM | Without CRM |
|--------|-----------|-------------|
| Customer Satisfaction | 85% | 50% |
| Error Reduction | 90% | 60% |
| Sales Management Time Saved | 50% | — |

Thousands of companies across **finance, healthcare, education, retail, and tourism** trust PersianCRM to grow smarter.

---

## 🎙️ Extra Features  

- 🎧 **PersianCRM Podcast** – Leadership, data-driven marketing, and CRM best practices  
- 📰 **PersianCRM Blog** – Insights on sales, automation, and business growth  
- 📘 **Free Catalog Download** – Detailed overview of modules and integration options  
- 📞 **Free Demo & 15-Day Trial** – Full access to explore before purchase  

---

## 🌍 Vision  

PersianCRM’s mission is to **empower Iranian businesses** with world-class CRM technology that rivals global leaders.  
It combines modern design, automation, and intelligent analytics into one integrated ecosystem — enabling every business to achieve **faster growth, deeper insights, and stronger customer loyalty**.


            `,
            is_featured:
                true,
        },
        {
            id: 21,
            title: 'Carilow',
            slug: 'carilow-next',
            description: 'A modern **Next.js 15 automotive import and parts platform** connecting Iranian buyers with luxury cars and OEM parts from the UAE — offering transparent pricing, tracking, and full import management.',
            image: '/static/project/carilow.com.avif',
            link_demo: 'https://carilow.com/',
            link_github: null,
            stacks: '["Next.js", "React.js", "TypeScript", "TailwindCSS","CSS"]',
            is_show: true,
            updated_at: '2023-07-23T12:29:09.882Z',
            content: `
A modern **Next.js 15 automotive import and parts platform** connecting Iranian buyers with luxury cars and OEM parts from the UAE — offering transparent pricing, tracking, and full import management.

---

## 🚘 Introduction  
**Khodrogate** is a professional **car import and parts procurement platform** built to simplify every step of vehicle importation from the UAE to Iran.  
It provides transparent pricing, expert consultation, and online tracking — from selection to customs clearance and delivery in Iran.  

Whether you’re importing a **luxury vehicle**, a **temporary car**, or **authentic spare parts**, Khodrogate ensures a smooth, secure, and fully managed process.

- 🌍 Import luxury and exotic cars from the UAE  
- 🔧 Order genuine OEM auto parts directly from suppliers  
- 📦 Real-time tracking and order transparency  
- ⚙️ Customs clearance and insured delivery  
- 🤝 20+ years of trusted expertise in automotive imports  

---

## 🧩 Core Services  

### 🚗 Vehicle Import  
- **Temporary imports** for short-term use in Iran (up to 6 months)  
- **Free zone imports** for areas like Kish and Qeshm  
- **Veterans and expat import programs** with exclusive benefits  
- **Complete import management** — purchase, shipping, customs, and delivery  

### 🧠 Consultation & Support  
- Expert **one-on-one consultation** for selecting cars and navigating legal steps  
- Transparent contracts and secure payment systems  
- Dedicated support until vehicle delivery  

### 🔧 Parts Procurement  
- Sourcing original parts from verified UAE distributors  
- Comprehensive **quality checks and authenticity validation**  
- Online order tracking through personal dashboard  
- Import options for engines, gearboxes, lighting, suspension, and electronics  

| Example Parts | Brand | Status | Price |
|----------------|--------|---------|-------|
| 9G-Tronic Transmission | Mercedes-Benz | Delivered | 34,900 AED |
| Rear Light X4 | BMW | Delivered | 26,300 AED |
| Alternator | Toyota Camry | Delivered | 9,700 AED |

---

## 💡 Unique Advantages  

| Feature | Description |
|----------|-------------|
| 💰 **Transparent Pricing** | Live price updates directly from UAE markets |
| 🚚 **Full-Service Import** | Handling logistics, insurance, and customs |
| 🔎 **Verified Authentic Parts** | Certified by global OEM standards |
| 📱 **Online Dashboard** | Real-time tracking and digital documentation |
| 🕐 **Fast Delivery** | Streamlined import workflow from Dubai to Iran |

---

## 🏗️ Tech Stack  

- ⚛️ **Next.js 15 + React 19**  
- 🎨 **TailwindCSS 4 + Radix UI Components**  
- 🧩 **Zustand** for global state management  
- 💨 **Turbopack** for build speed  
- 🧭 **Swiper** for vehicle and parts galleries  
- 🔔 **NextJS Toploader + Lucide Icons** for sleek UX  
- ⚙️ **Vaul + CMDK** for modals and command palette UI  

---

## 🚘 Experience Simplified Imports  

**Khodrogate** transforms the complex car import process into a transparent, trackable experience:  

1. **Select your car** from verified UAE listings  
2. **Receive full inspection & documentation reports**  
3. **Sign your digital import contract securely**  
4. **Track customs & shipping updates in real time**  
5. **Receive your car in Iran with full insurance coverage**  

---

## 🌐 About Khodrogate  

With over **20 years of automotive experience**, **50+ international partners**, and **1000+ successful imports**,  
Khodrogate has become one of the most trusted import agencies in the UAE–Iran automotive corridor.  

- 🏢 Headquarters: Dubai, Sheikh Zayed Rd, Fairmont Hotel, Office 511  
- ☎️ Contact: +971 4 254 4524  
- 🌐 Website: [khodrogate.com](#)  

**Khodrogate — Drive luxury home, safely and transparently.**

            `,
            is_featured:
                true,
        },
    {
        id: 22,
        title: 'CRM',
        slug: 'crm-next',
        description: 'An enterprise-grade **Next.js 15 CRM platform** that unifies sales, marketing, support, and automation into one intelligent workspace — built for data-driven business growth.',
        image: '/static/project/erp-persian.avif',
        link_demo: null,
        link_github: null,
        stacks: '["Next.js", "React.js", "TypeScript", "TailwindCSS","CSS"]',
        is_show: true,
        updated_at: '2023-07-23T12:29:09.882Z',
        content: `
An enterprise-grade **Next.js 15 CRM platform** that unifies sales, marketing, support, and automation into one intelligent workspace — built for data-driven business growth.

---

## 🧠 Introduction  
**PersianCRM Next** is a complete **Customer Relationship Management (CRM) platform** developed with **Next.js 15**, **React 19**, and **TailwindCSS 4**, designed to centralize every customer interaction, automate workflows, and empower teams with analytics, communication tools, and AI-ready insights.

It brings together **sales automation**, **marketing campaigns**, **support ticketing**, **inventory control**, and **role-based user management** — all within a sleek, responsive, and modular interface.

---

## ⚙️ Core Modules  

### 💼 Sales Management  
- Full **Lead → Opportunity → Deal pipeline**  
- Contact and account linking with complete activity history  
- Customizable sales stages with Kanban and drag-and-drop interface  
- Automatic quote, invoice, and payment generation  
- Territory, tax, and discount rules built-in  

### 📢 Marketing Automation  
- Campaign creation and multi-channel automation (email, SMS, in-app)  
- Segmentation, lead scoring, and conversion tracking  
- Real-time campaign analytics and ROI dashboards  
- Smart form builder for capturing and routing leads  

### 💬 Support & Helpdesk  
- Centralized ticket management with priorities and SLAs  
- Knowledge base and FAQ integration  
- Multi-channel support: web, email, and chat  
- Escalation rules, canned responses, and assignment automation  

### 👥 Contact & Account Management  
- Unified customer profiles with 360° view  
- Hierarchical organization accounts with sub-contacts  
- Activity timelines with calls, meetings, tasks, and notes  
- Role-based visibility and access control  

### 🧾 Inventory & Product Management  
- Product catalog with pricing, taxes, and stock levels  
- Purchase orders, sales orders, and invoices  
- Supplier and vendor tracking  
- Warehouse and shipment tracking  

### 🔄 Workflow Automation  
- Visual drag-and-drop workflow designer  
- Triggers for field updates, notifications, and approvals  
- Scheduled jobs, escalation rules, and condition logic  
- Multi-step process approvals with status automation  

### 🧰 Reports & Dashboards  
- Interactive charts (powered by ApexCharts & Recharts)  
- Custom dashboards with drag-and-drop layout editor  
- Data grouping, pivot tables, and export to PDF/Excel  
- Real-time metrics for KPIs, performance, and pipeline health  

### 🧑‍💼 Role & Permission Control  
- Modular user access with profiles and roles  
- Field-level and action-level permission settings  
- Group and team hierarchy structure  
- Audit trail and activity logging  

### 📦 Module Customization  
- Fully dynamic module builder for new entities  
- Custom fields, blocks, and relationships  
- Conditional logic and layout editor  
- Import/export tools for records and module definitions  

---

## 🧩 Additional Capabilities  

| Category | Features |
|-----------|-----------|
| 📱 **Mobile Integration** | Progressive Web App (PWA) ready, offline access, mobile dashboards |
| 🔔 **Notifications** | Real-time system alerts, toasts, and email notifications |
| 📡 **Integrations** | REST + WebSocket API, webhook triggers, and external system sync |
| 📅 **Calendar & Tasks** | Shared team calendar with meeting sync and reminders |
| 💾 **Documents** | File management with drag-and-drop uploads and preview |
| 🧮 **Finance Tools** | Taxes, currencies, and automatic total calculations |
| 🧠 **AI-Ready** | Smart lead scoring, recommendations, and data pattern insights |

---

## 🧰 Tech Stack  

- ⚛️ **Next.js 15 + React 19**  
- 🎨 **TailwindCSS 4 + Radix UI Components**  
- 🧩 **Zustand + SWR** for state and data fetching  
- 🪶 **Recharts + ApexCharts** for analytics  
- 🧱 **React Hook Form + Zod** for robust validation  
- 🧠 **Jodit & Tiptap** rich-text editors for notes and descriptions  
- 💬 **Socket.io** for real-time updates and notifications  
- 📦 **React Grid Layout + DnD Kit** for customizable dashboards  
- 🔔 **Serwist (PWA) + NextJS Toploader + Sonner** for smooth UX  

---

## 🧭 Why It Stands Out  

- Complete modular CRM core built for **enterprises and agencies**  
- 100% **customizable modules, fields, and workflows**  
- Advanced **reporting and real-time dashboards**  
- Integrated **sales, support, and marketing**  
- Built for **speed, scalability, and API extensibility**  

---

## 🌐 Summary  

**PersianCRM Next** transforms how organizations manage customers, sales, and support — combining power, flexibility, and automation into a single cohesive system.  
It’s not just CRM — it’s an **operating system for modern businesses**, built on the latest web technologies for performance, scalability, and usability.

        `,
        is_featured:
            true,
    },
        /*
        example to create new ones
        {
            id: 10000,
            title: '',
            slug: '',
            description: '',
            image: '/static/project/hm-catalog.avif',
            link_demo: null,
            link_github: null,
            stacks: '["Next.js", "React.js", "TypeScript", "TailwindCSS","CSS"]',
            is_show: true,
            updated_at: '2023-07-23T12:29:09.882Z',
            content: ``,
            is_featured:
                true,
        },*/

    ];
// {
//     id: 11,
//     title: 'Pomoro',
//     slug: 'pomoro',
//     description:
//         'Simple Pomodoro and Todo List App built with Next.js, TS, Tailwind CSS and Zustand.',
//     image: 'https://cloud.aulianza.com/public/images/projects/pomoro.webp',
//     link_demo: 'https://pomoro.vercel.app/',
//     link_github: 'https://github.com/aulianza/pomoro',
//     stacks: '["Next.js", "React.js", "TypeScript", "TailwindCSS"]',
//     is_show: true,
//     updated_at: '2023-07-20T12:29:09.882Z',
//     content: null,
//     is_featured: true,
// },
// {
//     id: 9,
//     title: 'Next + Tailwind Starter Template',
//     slug: 'aulianza-next-tailwind-starter',
//     description:
//         'Next.js + TS + Tailwind CSS starter template packed with useful development features.',
//     image:
//         'https://cloud.aulianza.com/public/images/projects/aulianza-next-tailwind-starter-new.webp',
//     link_demo: 'https://next-tailwind-starter.aulianza.id',
//     link_github: 'https://github.com/aulianza/next-tailwind-starter',
//     stacks: '["Next.js", "React.js", "TypeScript", "TailwindCSS"]',
//     is_show: true,
//     updated_at: '2023-06-25T04:17:44.339Z',
//     content:
//         "## Introduction\n\nIntroducing a simple Next.js with Typescript and Tailwind CSS starter template. This custom-made template has been carefully designed to simplify complex configurations and time-consuming setups, allowing developers (me; especially) to focus on my work effortlessly.\n\nIf you find this amazing creation valuable, you're invited to use it for your own projects. I warmly welcome any helpful feedback or suggestions you may have. You can easily make your own version by copying or downloading this code repository and contribute your own fantastic ideas by submitting a Pull Request.\n\n## Features\n\nThis repository is packed with:\n\n- 🎉 Next.js 13.4\n- ⚛️ React 18\n- 🔰 TypeScript\n- 💠 Tailwind CSS 3\n- 🛢 Jest — Configured for unit testing\n- 🧿 Absolute Import and Path Alias — Import components using `@/` prefix\n- 📏 ESLint — Find and fix problems in the code, also will **auto sort** the imports\n- ✨ Prettier — Format your code consistently\n- 🐶 Husky & Lint Staged — Run scripts on your staged files before committed\n- 📌 Conventional Commit Lint — Make sure to follow conventional commit\n- ♻️ Snippets — A collection of most useful snippets\n- 🌚 Dark Mode & Light Mode - Switch theme just one click\n\n\n## Getting Started\n\n### 1. Clone this template using one of the three ways:\n\n1. Use this repository as template\n2. Using `create-next-app`\n\n   ```bash\n   npx create-next-app -e https://github.com/aulianza/next-tailwind-starter project-name\n   ```\n\n3. Using `degit`\n\n   ```bash\n   npx degit aulianza/next-tailwind-starter YOUR_APP_NAME\n   ```\n\n4. Deploy to Vercel or etc\n\n   [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/aulianza/next-tailwind-starter)\n\n### 2. Install dependencies\n\nIt is encouraged to use **yarn** so the husky hooks can work properly.\n\n```bash\nyarn install\n```\n\n### 3. Run the development server\n\nYou can start the server using this command:\n\n```bash\nyarn dev\n```\n\nOpen [http://localhost:3000](http://localhost:3000) with your browser to see the result. You can start editing the page by modifying `src/pages/index.tsx`.\n\n### 4. Change defaults\n\nThere are some things you need to change including title, urls, favicons, etc. Don't forget to change the package name in package.json\n\n### 5. Commit Message Convention\n\nThis starter is using [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/), it is mandatory to use it to commit changes.\n\n\n## License\n\nLicensed under the [MIT license](https://github.com/aulianza/next-tailwind-starter/blob/master/LICENSE).",
//     is_featured: true,
// },
// {
//     id: 13,
//     title: 'FlexCode Company Profile',
//     slug: 'flexcode-v1',
//     description: 'A company profile website of PT Flexcode Space Teknologi.',
//     image: 'https://cloud.aulianza.com/public/images/projects/flexcodev1.webp',
//     link_demo: 'https://flexcode.co.id',
//     link_github: null,
//     stacks: '["Next.js", "React.js", "TypeScript", "TailwindCSS"]',
//     is_show: true,
//     updated_at: '2023-10-16T06:53:48.320Z',
//     content: null,
//     is_featured: false,
// },
// {
//     id: 10,
//     title: 'Vite + React Starter Template',
//     slug: 'vite-react-starter',
//     description: 'Vite + React + TypeScript + Tailwind CSS starter template.',
//     image:
//         'https://cloud.aulianza.com/public/images/projects/aulianza-vite-react-starter-new.webp',
//     link_demo: 'https://vite-react-starter.aulianza.id',
//     link_github: 'https://github.com/aulianza/vite-react-starter',
//     stacks: '["Vite", "React.js", "TypeScript", "TailwindCSS"]',
//     is_show: true,
//     updated_at: '2023-07-05T10:40:41.055Z',
//     content:
//         "## Introduction\n\nIntroducing a simple Vite with React + Typescript and Tailwind CSS starter template. This custom-made template has been carefully designed to simplify complex configurations and time-consuming setups, allowing developers (me; especially) to focus on my work effortlessly.\n\nIf you find this amazing creation valuable, you're invited to use it for your own projects. I warmly welcome any helpful feedback or suggestions you may have. You can easily make your own version by copying or downloading this code repository and contribute your own fantastic ideas by submitting a Pull Request.\n\n## Features\n\nThis repository is packed with:\n\n- ⚡️ Vite 4.3\n- ⚛️ React 18\n- 🔰 TypeScript\n- 💠 Tailwind CSS 3\n- 🛢 Jest — Configured for unit testing\n- 🧿 Absolute Import and Path Alias — Import components using `@/` prefix\n- 📏 ESLint — Find and fix problems in the code, also will **auto sort** the imports\n- ✨ Prettier — Format your code consistently\n- 🐶 Husky & Lint Staged — Run scripts on your staged files before committed\n- 📌 Conventional Commit Lint — Make sure to follow conventional commit\n- ♻️ Snippets — A collection of most useful snippets\n- 🌚 Dark Mode & Light Mode - Switch theme just one click\n\n\n## Getting Started\n\n### 1. Clone this template using one of the three ways:\n\n1. Use this repository as template\n2. Using `degit`\n\n   ```bash\n   npx degit aulianza/vite-react-starter YOUR_APP_NAME\n   ```\n\n3. Deploy to Vercel or etc\n\n   [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/aulianza/vite-react-starter)\n\n### 2. Install dependencies\n\nIt is encouraged to use **pnpm** so the husky hooks can work properly.\n\n```bash\npnpm install\n```\n\n### 3. Run the development server\n\nYou can start the server using this command:\n\n```bash\npnpm dev\n```\n\nOpen [http://localhost:5173](http://localhost:5173) with your browser to see the result. You can start editing the page by modifying `src/App.tsx`.\n\n### 4. Change defaults\n\nThere are some things you need to change including title, urls, favicons, etc. Don't forget to change the package name in package.json\n\n### 5. Commit Message Convention\n\nThis starter is using [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/), it is mandatory to use it to commit changes.\n\n\n## License\n\nLicensed under the [MIT license](https://github.com/aulianza/vite-react-starter/blob/master/LICENSE).",
//     is_featured: false,
// },
// {
//     id: 3,
//     title: 'Astri Yulianti Portfolio Site',
//     slug: 'astri-yulianti-site',
//     description:
//         'Personal portfolio, integrated with Google Spreadsheet. Design inspired by...',
//     image:
//         'https://cloud.aulianza.com/public/images/projects/49094a50-c17f-4fe3-8bd1-1aef1b1ddb40.webp',
//     link_demo: 'https://astriyulianti.my.id',
//     link_github: null,
//     stacks: '["Next.js", "React.js", "JavaScript", "TailwindCSS"]',
//     is_show: true,
//     updated_at: '2023-06-05T09:01:04.871Z',
//     content: null,
//     is_featured: false,
// },
// {
//     id: 7,
//     title: 'PLN Log Dispatcher',
//     slug: 'pln-dispatcher',
//     description:
//         'Log platform developed for PT PLN (Persero) UP2B Central Java & DIY.',
//     image:
//         'https://cloud.aulianza.com/public/images/projects/Logsheet-Online-Dispatcher-Material-Design-React-Admin-Template.webp',
//     link_demo: null,
//     link_github: null,
//     stacks: '["Next.js", "React.js", "TypeScript", "Material UI"]',
//     is_show: true,
//     updated_at: '2023-06-03T16:29:10.889Z',
//     content: null,
//     is_featured: false,
// },
// {
//     id: 6,
//     title: 'Mitech Career Platfrom',
//     slug: 'mitech-career',
//     description:
//         'A platform where you can find job opportunities at Mitech company.',
//     image:
//         'https://cloud.aulianza.com/public/images/projects/Mitech-Careers.webp',
//     link_demo: 'https://career.mitech.co.id/',
//     link_github: null,
//     stacks: '["Laravel", "Bootstrap", "MySQL", "PHP"]',
//     is_show: true,
//     updated_at: '2023-06-03T16:05:34.074Z',
//     content: null,
//     is_featured: false,
// },
// {
//     id: 5,
//     title: 'Mitech Company Profile',
//     slug: 'mitech-landing',
//     description:
//         'Official website of Mitech, PT Mandiri International Technology. ',
//     image: 'https://cloud.aulianza.com/public/images/projects/mitech.webp',
//     link_demo: 'https://mitech.co.id/',
//     link_github: null,
//     stacks: '["WordPress", "Bootstrap", "PHP"]',
//     is_show: true,
//     updated_at: '2023-06-03T01:23:26.052Z',
//     content: null,
//     is_featured: false,
// },
// {
//     id: 4,
//     title: 'Aulianza Blog',
//     slug: 'aulianza-blog',
//     description: 'My personal blog, a directory of wonderful things.',
//     image: 'https://cloud.aulianza.com/public/images/projects/blog.webp',
//     link_demo: 'https://aulianza.com',
//     link_github: null,
//     stacks: '["WordPress", "Bootstrap", "PHP"]',
//     is_show: true,
//     updated_at: '2023-06-01T01:12:12.795Z',
//     content: null,
//     is_featured: false,
// },
// {
//     id: 14,
//     title: 'eMerge Dashboard',
//     slug: 'emerge',
//     description: 'Indonesia-focused Angel Investment Network Dashboard.',
//     image: 'https://cloud.aulianza.com/public/images/projects/emerge.webp',
//     link_demo: null,
//     link_github: null,
//     stacks: '["Laravel", "Bootstrap", "MySQL", "PHP"]',
//     is_show: true,
//     updated_at: '2022-01-01T06:53:48.320Z',
//     content: null,
//     is_featured: false,
// },
// {
//     id: 2,
//     title: 'Linktree Clone',
//     slug: 'linktree-clone',
//     description: 'Linktree Clone built with React and Emotion Styled.',
//     image: 'https://cloud.aulianza.com/public/images/projects/linktree.webp',
//     link_demo: 'https://hello.aulianza.id',
//     link_github: 'https://github.com/aulianza/react-linktree-clone',
//     stacks: '["JavaScript", "React.js", "TailwindCSS"]',
//     is_show: true,
//     updated_at: '2021-01-01T03:28:44.234Z',
//     content: null,
//     is_featured: false,
// },
// {
//     id: 1,
//     title: 'Pokemon Web  App',
//     slug: 'pokemon-app',
//     description: 'A pokemon list app allows view and catch the Pokemon.',
//     image: 'https://cloud.aulianza.com/public/images/projects/pokemon.webp',
//     link_demo: 'https://aulianza-pokemon-app.vercel.app',
//     link_github: 'https://github.com/aulianza/pokemon-app',
//     stacks: '["JavaScript", "React.js", "GraphQL", "Apollo", "Emotion"]',
//     is_show: true,
//     updated_at: '2021-01-01T03:13:23.371Z',
//     content: null,
//     is_featured: false,
// },
// {
//     id: 15,
//     title: 'KPN Ticketing System',
//     slug: 'kpn-ticketing',
//     description:
//         'A modern and new generation helpdesk system of PT AMS Teknologi.',
//     image:
//         'https://cloud.aulianza.com/public/images/projects/kpnticketing.webp',
//     link_demo: null,
//     link_github: null,
//     stacks: '["Nuxt.js", "Vue.js", "Bootstrap"]',
//     is_show: true,
//     updated_at: '2020-01-01T06:53:48.320Z',
//     content: null,
//     is_featured: false,
// },
// {
//     id: 16,
//     title: 'UILIS Mobile App',
//     slug: 'uilis',
//     description: 'Syiah Kuala University OPAC and library lending application.',
//     image: 'https://cloud.aulianza.com/public/images/projects/uilis.webp',
//     link_demo: null,
//     link_github: null,
//     stacks: '["Angular"]',
//     is_show: true,
//     updated_at: '2019-01-01T03:13:23.371Z',
//     content: null,
//     is_featured: false,
// },
// {
//     id: 20,
//     title: 'geulisindonesia.com',
//     slug: 'geulisindonesia',
//     description: 'A company profile website of PT Geulis Travel Indonesia.',
//     image:
//         'https://cloud.aulianza.com/public/images/projects/geulisindonesia.webp',
//     link_demo: null,
//     link_github: null,
//     stacks: '["WordPress", "Bootstrap", "PHP"]',
//     is_show: true,
//     updated_at: '2017-01-01T03:13:23.371Z',
//     content: null,
//     is_featured: false,
// },
// {
//     id: 18,
//     title: 'elfdibandung.com',
//     slug: 'elfdibandung',
//     description: 'A company profile website of PT Geulis Travel Indonesia.',
//     image:
//         'https://cloud.aulianza.com/public/images/projects/elfdibandung.webp',
//     link_demo: null,
//     link_github: null,
//     stacks: '["WordPress", "Bootstrap", "PHP"]',
//     is_show: true,
//     updated_at: '2017-01-01T03:13:23.371Z',
//     content: null,
//     is_featured: false,
// },
// {
//     id: 19,
//     title: 'elfsebandung.com',
//     slug: 'elfsebandung',
//     description: 'A company profile website of PT Geulis Travel Indonesia.',
//     image:
//         'https://cloud.aulianza.com/public/images/projects/elfsebandung.webp',
//     link_demo: null,
//     link_github: null,
//     stacks: '["WordPress", "Bootstrap", "PHP"]',
//     is_show: true,
//     updated_at: '2017-01-01T03:13:23.371Z',
//     content: null,
//     is_featured: false,
// },
// {
//     id: 21,
//     title: 'athayaglobal.com',
//     slug: 'athayaglobal',
//     description: 'A company profile website of PT Athaya Global Indonesia.',
//     image:
//         'https://cloud.aulianza.com/public/images/projects/athayaglobal.webp',
//     link_demo: null,
//     link_github: null,
//     stacks: '["WordPress", "Bootstrap", "PHP"]',
//     is_show: true,
//     updated_at: '2017-01-01T03:13:23.371Z',
//     content: null,
//     is_featured: false,
// },
// {
//     id: 23,
//     title: 'dhahab.co.id',
//     slug: 'dhahab',
//     description: 'A company profile website of PT Dhahab Tour WIsata.',
//     image: 'https://cloud.aulianza.com/public/images/projects/dhahabtour.webp',
//     link_demo: null,
//     link_github: null,
//     stacks: '["WordPress", "Bootstrap", "PHP"]',
//     is_show: true,
//     updated_at: '2017-01-01T03:13:23.371Z',
//     content: null,
//     is_featured: false,
// },
// {
//     id: 17,
//     title: 'britishpropolis.com',
//     slug: 'british-propolis',
//     description:
//         'A landing page of British Propolis Indonesia Bee Pro products.',
//     image:
//         'https://cloud.aulianza.com/public/images/projects/britishpropolis.webp',
//     link_demo: null,
//     link_github: null,
//     stacks: '["WordPress", "Bootstrap", "PHP"]',
//     is_show: true,
//     updated_at: '2017-01-01T03:13:23.371Z',
//     content: null,
//     is_featured: false,
// },
// {
//     id: 24,
//     title: 'acehtouring.com',
//     slug: 'acehtouring',
//     description:
//         'A company profile website of PT Kuala Nanggroe Kita Tour & Travel.',
//     image: 'https://cloud.aulianza.com/public/images/projects/acehtouring.webp',
//     link_demo: null,
//     link_github: null,
//     stacks: '["WordPress", "Bootstrap", "PHP"]',
//     is_show: true,
//     updated_at: '2017-01-01T03:13:23.371Z',
//     content: null,
//     is_featured: false,
// },
// {
//     id: 22,
//     title: 'aichitrainingcenter.com',
//     slug: 'aichitrainingcenter',
//     description: 'A company profile website of AichiTraining Center.',
//     image:
//         'https://cloud.aulianza.com/public/images/projects/aichitrainingcenter.webp',
//     link_demo: null,
//     link_github: null,
//     stacks: '["WordPress", "Bootstrap", "PHP"]',
//     is_show: true,
//     updated_at: '2017-01-01T03:13:23.371Z',
//     content: null,
//     is_featured: false,
// },
