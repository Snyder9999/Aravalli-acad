# Aravalli Academy Website

A modern, responsive, and feature-rich school website built for **Aravalli Academy**. This project serves as a comprehensive digital platform for the school, offering information to prospective students and parents, while also providing administrative tools for managing content.

## Project Overview

This application is designed to be the primary online presence for Aravalli Academy. It showcases the school's academic excellence, vibrant student life, and state-of-the-art facilities. It includes a dedicated **Admin Panel** to empower school staff to easily manage dynamic content like notices and photo galleries without needing technical expertise.

## Key Features

### 🌐 Public Website
*   **Home Page:** Dynamic hero section, quick stats, admission enquiry form, and latest notices.
*   **Academics:** Detailed curriculum information for all grade levels (Primary to Higher Secondary).
*   **Student Life:** A visual journey through extracurriculars, sports, clubs, and events.
*   **Gallery:** A filterable photo gallery showcasing life at the academy.
*   **Contact:** Interactive contact page with a working enquiry form and location details.
*   **Responsive Design:** Fully optimized for desktops, tablets, and mobile devices.

### 🛡️ Admin Panel (CMS)
*   **Dashboard:** specialized interface for administrators.
*   **Notice Manager:** Create, edit, and delete school notices and announcements.
*   **Gallery Manager:** Upload and categorize images for the public gallery.
*   **Client-Side Persistence:** (Demo Mode) Changes are saved locally for demonstration purposes.

## Tech Stack

*   **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
*   **Language:** TypeScript
*   **Styling:** Tailwind CSS v4 & [Shadcn UI](https://ui.shadcn.com/)
*   **State Management:** Zustand
*   **Forms:** React Hook Form + Zod Validation
*   **Icons:** Lucide React

## Getting Started

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/aravalli-academy.git
    cd aravalli_acad
    ```

2.  **Install dependencies:**
    ```bash
    pnpm install
    ```

3.  **Run the development server:**
    ```bash
    pnpm dev
    ```

4.  **Open locally:**
    Navigate to [http://localhost:3000](http://localhost:3000) to view the site.
    Navigate to [http://localhost:3000/admin](http://localhost:3000/admin) to access the Admin Panel.

## Project Structure

```plaintext
src/
├── app/                 # Next.js App Router pages
│   ├── (public)/        # Public-facing routes (Home, About, Contact)
│   ├── admin/           # Admin panel routes
│   └── layout.tsx       # Root layout
├── components/          # Reusable UI components
│   ├── ui/              # Shadcn UI primitives
│   └── layout/          # Header, Footer, etc.
├── features/            # Feature-specific logic (gallery, notices)
└── lib/                 # Utilities and constants
```

## License

This project is proprietary to Aravalli Academy.
