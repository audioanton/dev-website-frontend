# Frontend for a Dev Website
### Live at [audioanton.vercel.app](https://audioanton.vercel.app)

Very simple frontend with a contact form and a portfolio component. Intended for use with [this backend](https://github.com/audioanton/dev-website-backend). To use as a template - clone the repository, change the content in `app/page.tsx` as you like and follow the following steps.




**Requires [node.js](https://nodejs.org/en/download) installed**



### Local development:
Add a `.env`-file with the variabel `NEXT_PUBLIC_BACKEND_URL=<path-to-your-local-backend>`
or change the following in `next.config.ts`:
```
async rewrites() {
    return [
      {
        source: '/api/contact-form',
        destination: process.env.NEXT_PUBLIC_BACKEND_URL || http://"<path-to-your-local-backend>",
      },
    ]
  },
```

### Install dependencies and run frontend:
```
npm i
npm run dev
```

### Deploy at vercel.com:
Edit the following in `vercel.json` to match your backend-url:
```
"rewrites": [
    {
      "source": "/api/:path*",
      "destination": "https://<add-your-backend-url-here>/:path*"
    }
  ]
```

### Frameworks/languages:
- Next.js
- React.js
- Typescript
