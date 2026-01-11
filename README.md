# Modern React Portfolio

A sleek, premium, and fully responsive portfolio website built with modern web technologies. This project showcases professional experience, skills, and projects with high-quality animations and a glassmorphic design.

## 🚀 Features

- **Dynamic Hero Section**: Engaging entry point with smooth animations.
- **Interactive Sections**: About, Skills, Experience, and Projects with Framer Motion transitions.
- **Glassmorphic UI**: Modern aesthetic with high-blur panels and subtle glow effects.
- **Functional Contact Form**: Integrated with EmailJS for direct communication.
- **Mobile First**: Fully responsive design for all screen sizes.
- **Experience Timeline**: Vertical timeline for professional history.

## 🛠️ Tech Stack

- **Framework**: [React 18](https://reactjs.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Backend/Services**: [Supabase](https://supabase.com/) & [EmailJS](https://www.emailjs.com/)

## 🏁 Getting Started

### Prerequisites

- Node.js (Latest LTS recommended)
- npm or yarn

### Installation

1.  **Clone the repository**:
    ```bash
    git clone <repository-url>
    cd portfolio
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Environment Variables**:
    Create a `.env` file in the root directory and add your credentials:
    ```env
    VITE_EMAILJS_SERVICE_ID=your_service_id
    VITE_EMAILJS_TEMPLATE_ID=your_template_id
    VITE_EMAILJS_PUBLIC_KEY=your_public_key
    VITE_SUPABASE_URL=your_supabase_url
    VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
    ```

4.  **Run in development mode**:
    ```bash
    npm run dev
    ```

## 📜 Available Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the application for production.
- `npm run lint`: Runs ESLint to check for code quality.
- `npm run preview`: Previews the production build locally.
- `npm run typecheck`: Runs TypeScript compiler for type checking.

## 📄 License

This project is licensed under the MIT License.
