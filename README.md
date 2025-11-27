# dbrum-portfolio

Personal portfolio website for **Douglas Brum**, a backend & cybersecurity-oriented developer from Rio de Janeiro, Brazil. It showcases technical skills, real-world projects, professional experience and education using a modern, responsive UI/UX. :contentReference[oaicite:0]{index=0}

## 🌐 Live Demo

- **Website:** https://dbrum-portfolio.vercel.app/ :contentReference[oaicite:1]{index=1}

---

## ✨ Features

- Hero section with role, short bio and call-to-action buttons (view projects / contact). :contentReference[oaicite:2]{index=2}  
- Detailed **About** section focused on backend, security mindset and work with social projects/NGOs. :contentReference[oaicite:3]{index=3}  
- Structured **Skills** grouped by backend & languages, frameworks, databases, infrastructure/DevOps and tooling. :contentReference[oaicite:4]{index=4}  
- **Certifications & Badges** highlighting Google Cybersecurity, Cisco, Python, Java and more. :contentReference[oaicite:5]{index=5}  
- **Highlighted Projects** with short descriptions, tech stack chips and direct links to GitHub. :contentReference[oaicite:6]{index=6}  
- **Experience** and **Education** timeline with concise bullet points. :contentReference[oaicite:7]{index=7}  
- Contact section with email, LinkedIn and a contact form.

---

## 🧰 Tech Stack

This project is built as a modern React/Next.js app with TypeScript and a component-based design system.

- **Framework:** Next.js (App Router)
- **Language:** TypeScript :contentReference[oaicite:8]{index=8}  
- **Styling:** CSS / utility-first styling (Tailwind-like structure)  
- **UI Components:** `@/components/ui/*` (shadcn/ui-style components), icons from `lucide-react`  
- **Build Tooling:** PostCSS, pnpm :contentReference[oaicite:9]{index=9}  
- **Deployment:** Vercel

---

## 📁 Project Structure

High-level folder structure: :contentReference[oaicite:10]{index=10}  

```text
app/            # Next.js app router pages & sections
components/     # Reusable UI components
hooks/          # Custom React hooks
lib/            # Utilities, config and helpers
public/         # Static assets (logo, favicons, images)
styles/         # Global styles
```

🚀 Getting Started
Prerequisites

Node.js 18+ (recommended 20+)

pnpm (preferred, since the repo includes pnpm-lock.yaml) 
GitHub

Installation
# Clone this repository
git clone https://github.com/dbcfilho/dbrum-portfolio.git

cd dbrum-portfolio

# Install dependencies
pnpm install
# or
npm install

Running the development server
pnpm dev
# or
npm run dev

Then open:
http://localhost:3000

Production build
pnpm build
pnpm start
# or
npm run build
npm start

🧱 Customization

You can adapt this portfolio to your own profile by editing:

Content sections inside app/ (hero, about, skills, projects, experience, education, contact).

Projects list (titles, descriptions, tech stack and GitHub links).

Skills and certifications data structures to match your stack.

Branding (logo and colors) inside public/ and styles/.

📬 Contact

If you’d like to get in touch:

Email: dbcfilho01@gmail.com 
Douglas Brum Portfolio

LinkedIn: https://www.linkedin.com/in/dbcfilho
 
Douglas Brum Portfolio

Live portfolio: https://dbrum-portfolio.vercel.app/

📄 License

This project is licensed under the MIT License.
