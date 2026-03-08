# IC_FD_01 - Personal Professional Portfolio

This is my personal professional portfolio, built as Task 1 for the Interncred Frontend Development Internship (FD track). It's a modern, interactive single-page app showcasing my skills, projects, experience, and a contact form for visitors to reach out.

## Live Demo

[View the live portfolio on Vercel](https://ic-fd-01-iota.vercel.app/)

## Description

A responsive, dynamic portfolio website highlighting my journey as an aspiring frontend developer. Built with React for dynamic UI, Tailwind CSS for styling, Framer Motion for animations, and EmailJS for the contact form (real email notifications). It includes sections for about me, skills, projects, and contact — optimized for SEO with meta tags and fast loading.

This project demonstrates my skills in HTML, CSS, JavaScript, React, and responsive design. Optional backend with Node.js and database (MySQL/MongoDB) could be added for advanced features like blog updates, but kept frontend-only for this task.

## Key Features

- **Interactive Resume & Portfolio**: Hero section with intro, photo, and CTA buttons. Skills grid with icons and hover effects. Projects showcase with descriptions and links.
- **Contact Form**: Allows visitors to send messages with client-side validation and email notifications via EmailJS.
- **SEO Optimization**: Meta tags for title/description, responsive design for all devices, fast loading with Vite bundling.
- **Animations & Interactivity**: Smooth entrance effects, hover scales/rotates on cards/icons, mobile hamburger menu.
- **Responsive Design**: Works on desktop, tablet, mobile — uses Tailwind's breakpoints.
- **Dark Mode Ready**: (Optional — can add toggle if needed)
- **Contact Links**: GitHub, LinkedIn, Email, WhatsApp in footer.

## Tech Stack

- **Frontend**: React.js, Tailwind CSS, Framer Motion (animations), React Icons
- **Email Integration**: EmailJS (no server needed)
- **Build Tool**: Vite (fast development/build)
- **Deployment**: Vercel (automatic deploys from GitHub)
- **Optional Backend**: Node.js + MySQL/MongoDB (for form data storage — not implemented here)

## Setup & Running Locally

1. Clone the repo:

   git clone <https://github.com/Khojoe/IC_FD_01.git>
   
   cd IC_FD_01

3. Install dependencies:

npm install

3. Set up EmailJS (for contact form):

- Sign up at emailjs.com
- Create service/template → get SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY
- Add to `.env` file:
- (Do NOT commit .env to GitHub)

4. Run development server:

   npm run build

- Output in `dist/` folder — ready for deployment

## Deployment

Deployed on Vercel (free):

- Connect repo to Vercel
- Add env vars in Vercel dashboard
- Auto-deploys on every push to main

## License

MIT License — feel free to use/fork for your own projects.

## About Me

Immanuel Oheneba Debe (@Khojoe01 on X). Aspiring frontend developer studying JS, HTML, CSS, React, Node.js, Python, Java. This portfolio was built during my Interncred internship — excited to connect!

Contact me: <immanueldebe@gmail.com> or WhatsApp (link in footer).
