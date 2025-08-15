# Furniture Catalog MVP (Next.js + Tailwind + Azure Static Web Apps)

This is a ready-to-deploy Phase 1 catalog website: header, footer, home hero, and product gallery.

## Quick Start (Local)

```bash
# 1) Install dependencies
npm install

# 2) Run the dev server
npm run dev

# app at http://localhost:3000
```

## Add Your Images

Replace files under `public/images/*` with your actual furniture photos.
Update product data in:
- `pages/index.js` (featured section)
- `pages/products.js` (grid products)

## Build & Export (Static)

```bash
npm run build
# output in ./out
```

## Deploy to Azure Static Web Apps

1. Push this repo to GitHub.
2. In Azure Portal > Static Web Apps > Create:
   - App location: `/`
   - Output location: `out`
   - Build command: `npm run build`
3. Or use Azure CLI:
```bash
az staticwebapp create   --name furniture-catalog   --resource-group furniture-rg   --source https://github.com/<your-username>/<your-repo>   --location eastus   --branch main   --app-location "/"   --output-location "out"   --build-command "npm run build"
```

## Next Phases

- Cart, checkout, payments (Razorpay/Stripe)
- Move images to Azure Blob Storage + CDN
- Product data from a DB (Azure SQL/Cosmos DB)
- SEO, analytics, contact form webhook
```