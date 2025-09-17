# Nishil Pathak - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features include project showcases, certificate displays, contact form with auto-reply functionality, and more.

## 🚀 Features

- **Responsive Design**: Optimized for all devices and screen sizes
- **Interactive Sections**: Hero, About, Projects, Certificates, Education, Contact
- **Contact Form**: EmailJS integration with auto-reply functionality
- **Certificate Showcase**: Expandable skills display with direct certificate links
- **Project Gallery**: Interactive project cards with live demo and code links
- **Like Button**: Engaging user interaction with local storage
- **Resume Download**: Direct PDF download functionality

## 🛠️ Tech Stack

- **Frontend**: [React](https://react.dev/) 18 + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Email Service**: [EmailJS](https://www.emailjs.com/)
- **Deployment**: Netlify Ready

## 📋 Prerequisites

Before running this project, make sure you have:

- Node.js (v16 or higher)
- npm or yarn package manager
- EmailJS account (for contact form functionality)

## ⚙️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/nishil61/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration**
   
   Copy the example environment file:
   ```bash
   cp .env.example .env.local
   ```
   
   Update `.env.local` with your EmailJS credentials:
   ```bash
   VITE_EMAILJS_SERVICE_ID=your_service_id_here
   VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
   VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID=your_autoreply_template_id_here
   VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
   ```

4. **EmailJS Setup**
   
   - Create an account at [EmailJS](https://www.emailjs.com/)
   - Create an email service
   - Create two email templates:
     - Main template (for receiving messages)
     - Auto-reply template (for sender confirmation)
   - Get your service ID, template IDs, and public key

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Build for production**
   ```bash
   npm run build
   ```

## 📧 EmailJS Template Configuration

### Main Template (for receiving messages)
Variables to use: `{{name}}`, `{{email}}`, `{{subject}}`, `{{message}}`, `{{time}}`

### Auto-reply Template (for sender confirmation)
Variables to use: `{{email}}`, `{{name}}`, `{{subject}}`, `{{original_message}}`, `{{time}}`

## Getting Started

1. **Clone the repository:**
   ```sh
   git clone https://github.com/nishil61/Portfolio.git
   cd Portfolio/project
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Set up environment variables:**
   - Create a `.env.local` file in the `project` directory.
   - Add your EmailJS keys:
     ```env
     VITE_EMAILJS_SERVICE_ID=your_service_id
     VITE_EMAILJS_TEMPLATE_ID=your_template_id
     VITE_EMAILJS_PUBLIC_KEY=your_public_key
     ```

4. **Run the development server:**
   ```sh
   npm run dev
   ```
   The site will be available at `http://localhost:5173` by default.

## Folder Structure

```
project/
  public/
    resume/           # PDF resumes
  src/
    components/       # React components
    index.css         # Tailwind CSS imports
    App.tsx           # Main app component
    main.tsx          # Entry point
  .env.local          # Environment variables (not committed)
  package.json        # Project metadata and scripts
  tailwind.config.js  # Tailwind CSS config
  vite.config.ts      # Vite config
```

## Customization

- **Resume:** Replace the PDF in `public/resume/` with your own.
- **Projects:** Edit `src/components/Projects.tsx` to update your project list.
- **Contact:** Update contact details in `src/components/Contact.tsx`.

## Deployment

You can deploy this site to any static hosting provider (Vercel, Netlify, GitHub Pages, etc.).

## License

This project is open source and available under the [MIT License](LICENSE).

---

If you have any questions or suggestions, feel free to reach out via the contact form on the site.
