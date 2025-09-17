# Nishil Pathak Portfolio

This is my personal portfolio website built with React, Vite, and Tailwind CSS. It showcases my projects, education, certifications, and provides a way to contact me directly.

## Features

- **Responsive Design:** Works seamlessly on desktop and mobile devices.
- **Project Showcase:** Highlights selected projects with descriptions and links.
- **Resume Download:** Download my latest resume in PDF format.
- **Contact Form:** Send me a message directly from the site (EmailJS integration).
- **Like Button:** Interactive like button with local storage support.
- **Education & Certifications:** Overview of my academic background and certifications.

## Tech Stack

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [EmailJS](https://www.emailjs.com/) (for contact form notifications)

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
