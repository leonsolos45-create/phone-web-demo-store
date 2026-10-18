# PhoneWeb - Demo Store

A responsive demo phone e-commerce site built with Next.js 14 App Router, TypeScript and Tailwind CSS. It uses local mock data only—no external backend or payment provider.

## Run locally

1. Install Node.js 18.17+ (Node 20 recommended).
2. Extract this folder and open a terminal inside it.
3. Run:

   ```bash
   npm install
   npm run dev
   ```

4. Visit http://localhost:3000

## Pages

- `/` — homepage, search, featured phones
- `/phones` — product catalogue with brand, RAM and price filters
- `/phones/[id]` — product details and add to cart
- `/cart` — cart quantity controls and subtotal
- `/checkout` — demo checkout; confirms the mock order

## Deploy to Vercel

### Git method (recommended)
1. Push this folder to a GitHub repository.
2. Sign in at https://vercel.com and choose **Add New → Project**.
3. Import the repository. Vercel detects Next.js automatically.
4. Click **Deploy**. The included `vercel.json` defines the framework and standard commands.

### CLI method
```bash
npm install
npm run build
npx vercel
```
Follow the prompts, then run `npx vercel --prod` for production.

## Notes
- Cart contents are saved in browser `localStorage`.
- Checkout is simulated and does not collect or send payment details.
- Product images are loaded from Unsplash Source image URLs; internet access is needed to display them.
- Replace the demo WhatsApp number in `components/WhatsAppButton.tsx` with your store number before presenting.
