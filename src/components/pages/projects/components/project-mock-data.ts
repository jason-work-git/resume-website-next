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
            stacks:
                '["Next.js", "React.js", "TypeScript", "TailwindCSS","JavaScript","CSS","Node.js"]',
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
            stacks:
                '["Material UI", "React.js", "TailwindCSS","JavaScript","Styled Components","CSS"]',
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
            title: 'Hamrahanefarda',
            slug: 'hamrahanefarda',
            description:
                'Another University website was built originally from scratch using several powerful stacks.',
            image: '/static/project/hamrahanefarda.avif',
            link_demo: 'https://hamrahanefarda.com/',
            link_github: null,
            stacks: '["Next.js", "React.js", "TypeScript", "TailwindCSS","Node.js","JavaScript"]',
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
            title: 'Hamrahanefarda-AdminPanel',
            slug: 'hamrahanefarda-AdminPanel',
            description:
                'University admin panel built originally from scratch using several powerful stacks.',
            image: '/static/project/su-admin.tatpnu.com.avif',
            link_demo: 'https://su-admin.hamrahanefarda.com/',
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
            slug: 'hamrahanefarda',
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
            link_demo: 'https://catalog.hamrahanefarda.com/',
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
            link_demo: 'https://catalog.hamrahanefarda.com/',
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
            stacks: '["Next.js", "React.js", "TypeScript", "TailwindCSS","JavaScript","CSS","Framer-Motion"]',
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
            id: 10000,
            title: '',
            slug: '',
            description: '',
            image: '/static/project/hm-catalog.avif',
            link_demo: '/',
            link_github: null,
            stacks: '[ "React.js", "TailwindCSS","JavaScript","CSS","Material UI"]',
            is_show: true,
            updated_at: '2023-07-23T12:29:09.882Z',
            content: ``,
            is_featured:
                true,
        },

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
    ]
;
