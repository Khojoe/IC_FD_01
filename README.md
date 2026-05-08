# IC_FD_01 — Personal Portfolio

My personal portfolio built as Task 1 for the [Interncred](https://interncred.com) Frontend Development Internship (FD track). A modern, responsive single-page app showcasing my skills, projects, and a working contact form.

**[View Live Demo →](https://immanuel-debe-iota.vercel.app/)**

---

## About

A dynamic portfolio website built with React, Tailwind CSS, Framer Motion, and EmailJS. It covers everything from an animated hero section and skills grid to a project showcase and a fully functional contact form that sends real email notifications.

---

## Features

- **Hero Section** — Intro, photo, and CTA buttons with smooth entrance animations
- **Skills Grid** — Icon cards with hover effects for each technology
- **Projects Showcase** — Project cards with descriptions and live links
- **Contact Form** — Client-side validation + email delivery via EmailJS (no backend needed)
- **Responsive Design** — Mobile, tablet, and desktop layouts via Tailwind breakpoints
- **SEO Ready** — Meta title/description tags, fast loading with Vite
- **Social Links** — GitHub, LinkedIn, Email, and WhatsApp in the footer

---

## Tech Stack

| Layer      | Tools                                              |
| ---------- | -------------------------------------------------- |
| UI         | React.js, Tailwind CSS, Framer Motion, React Icons |
| Email      | EmailJS                                            |
| Build      | Vite                                               |
| Deployment | Vercel                                             |

---

## Getting Started

**1. Clone the repo**

```bash
git clone https://github.com/Khojoe/IC_FD_01.git
cd IC_FD_01
```

**2. Install dependencies**

```bash
npm install
```

**3. Set up environment variables**

Create a `.env` file in the project root:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

> Get these from [emailjs.com](https://emailjs.com) after creating a service and template.  
> **Never commit your `.env` file to GitHub.**

**4. Start the dev server**

```bash
npm run dev
```

**5. Build for production**

```bash
npm run build
```

Output goes to the `dist/` folder, ready for deployment.

---

## Deployment

Hosted on [Vercel](https://vercel.com):

1. Connect the GitHub repo to Vercel
2. Add the three `VITE_EMAILJS_*` environment variables in the Vercel dashboard
3. Push to `main` — Vercel auto-deploys on every push

---

## License

[MIT](LICENSE) — free to use and fork.

---

## About Me

**Immanuel Oheneba Debe** — Aspiring frontend developer studying JavaScript, HTML, CSS, React, Node.js, Python, and Java. Built this portfolio during my Interncred internship.

- **Email:** [immanueldebe@gmail.com](mailto:immanueldebe@gmail.com)
- **GitHub:** [@Khojoe](https://github.com/Khojoe)
- **X:** [@Khojoe01](https://x.com/Khojoe01)
- **LinkedIn:** [Immanuel Oheneba Debe](https://www.linkedin.com/in/immanuel-oheneba-debe-352ab0367)
