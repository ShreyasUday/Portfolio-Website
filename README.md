# Shreyas Uday | Portfolio

Welcome to the source code for my personal developer portfolio. This site serves as a central hub for my professional identity, showcasing my technical projects, backend engineering skills, and contact information.

## 🔗 Live Demo
**[Insert Your Vercel URL Here]**

## 🎨 Design & Architecture
The design philosophy of this portfolio is heavily inspired by **developer environments and terminal aesthetics**. It uses dark, mechanical themes, glowing accent colors (neon emerald), and interactive code-block styling to reflect my focus on backend engineering and infrastructure.

### Key Features
- **Interactive Project Timeline:** A custom, scroll-driven vertical timeline built from scratch using Framer Motion, featuring interactive hover states and full-screen project modals.
- **Chronological Learning Path:** A narrative-driven skills section that visually maps my technical growth from foundational languages to advanced DevOps tools.
- **Dynamic 3D Interactions:** Includes an interactive, physics-based tech stack globe (`three.js`) and Spline embeds for high-end visual polish.
- **Serverless Contact API:** A custom `/api/contact` route handler that securely processes form submissions, filters spam via honeypots, and dispatches emails directly to my inbox using the **Resend API**.
- **Fully Responsive:** Meticulously designed to maintain its terminal-like, boxy aesthetic across both desktop and mobile devices.

## 🛠️ Tech Stack
- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Email Delivery:** Resend
- **Deployment:** Vercel

## 🚀 Running Locally
If you are reviewing my code, you can run this project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/ShreyasUday/Portfolio-Website.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables. Create a `.env.local` file in the root directory:
   ```env
   RESEND_API_KEY=your_resend_key
   CONTACT_FROM_EMAIL=onboarding@resend.dev
   CONTACT_TO_EMAIL=your_email@domain.com
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

---
*Built by Shreyas Uday*
