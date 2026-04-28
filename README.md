## Shreyas Uday — Portfolio

Backend-focused portfolio site with a “terminal / infra” vibe, project-first content, and a real contact form endpoint for Vercel.

## Getting Started

Install and run:

```bash
cd portfolio-site
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Edit content in:

- `src/content/portfolio.ts` (projects, skills, links)

## Contact Form (Email)

The form posts to `POST /api/contact`.

### Local `.env.local`

Create `portfolio-site/.env.local`:

```bash
RESEND_API_KEY=your_key_here
CONTACT_TO_EMAIL=udayshreyas123@gmail.com
CONTACT_FROM_EMAIL="Portfolio <onboarding@resend.dev>"
```

If `RESEND_API_KEY` is missing, the API returns `501` with a helpful message.

## Deploy on Vercel

High level steps:

1. Push this repo to GitHub
2. Import it in Vercel
3. Set the same env vars in Vercel Project Settings
4. Deploy

I can guide you step-by-step when you’re ready to deploy.

Docs: https://nextjs.org/docs/app/building-your-application/deploying
