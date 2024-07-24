This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started
First, run the development server:
```bash
npm run dev
# or yarn dev # or pnpm dev # or bun dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## .env File
.env file in root folder should contain these contents:
```bash
NEXTAUTH_URL="YOUR_WEBSITE_URL"
NEXTAUTH_SECRET="YOUR_RANDOM_SECRET_KEY"
GITHUB_ID="YOUR_GITHUB_ID"
GITHUB_SECRET="YOUR_GITHUB_SECRET_KEY"
```
## Other
This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.
