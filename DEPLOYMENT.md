# 🚀 DEPLOYMENT GUIDE - Tianwaa Website

## Quick Deployment (Choose One)

### Option 1: Deploy to Vercel (Easiest - 5 min)

1. **Push to GitHub**
```bash
git init
git add .
git commit -m "Initial commit - Tianwaa website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/tianwaa.git
git push -u origin main
```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repo
   - Click "Deploy"

3. **Done!** Your site is live at `tianwaa.vercel.app`

### Option 2: Deploy to Netlify (5 min)

1. **Build the project**
```bash
npm run build
```

2. **Go to [netlify.com](https://netlify.com)**
   - Click "Add new site" → "Deploy manually"
   - Drag the `dist/` folder
   - Your site is live

### Option 3: Self-Hosted (VPS/Dedicated Server)

1. **SSH into your server**
```bash
ssh user@your-server.com
```

2. **Install Node.js**
```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

3. **Clone and deploy**
```bash
git clone https://github.com/YOUR_USERNAME/tianwaa.git
cd tianwaa
npm install
npm run build
npm start
```

4. **Setup domain**
   - Point domain DNS to server IP
   - Use nginx as reverse proxy
   - Install SSL certificate (Let's Encrypt)

---

## Pre-Deployment Checklist

### Security
- [ ] Change admin credentials in `app/api/auth/login/route.ts`
- [ ] Update WhatsApp number in `data/content.json`
- [ ] Review all environment variables
- [ ] Disable console logs in production
- [ ] Update NEXT_PUBLIC_SITE_URL in .env.local

### Content
- [ ] Update site name in settings
- [ ] Add real blog posts
- [ ] Update contact email
- [ ] Add social media links
- [ ] Update company address
- [ ] Verify all images load
- [ ] Check all links work

### Technical
- [ ] Run `npm run build` successfully
- [ ] Test on localhost with `npm run dev`
- [ ] Verify all API routes work
- [ ] Test admin login/logout
- [ ] Check responsive design on phone
- [ ] Test form submissions
- [ ] Verify WhatsApp links work

---

## Environment Variables

### For Development (.env.local)
```env
# Optional - only if using external services
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_WA_NUMBER=62812345678
```

### For Production
```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_WA_NUMBER=62812345678
```

---

## Database Migration (When Ready)

The project currently uses JSON files. To upgrade to a real database:

### Option A: MongoDB
1. Create account at [mongodb.com](https://mongodb.com)
2. Create cluster and get connection string
3. Update `lib/db.ts` to use MongoDB driver
4. Migrate content.json to MongoDB collections

### Option B: PostgreSQL
1. Set up PostgreSQL server
2. Update `lib/db.ts` to use postgres driver
3. Create schema from content.json structure
4. Migrate data

### Option C: Supabase (Firebase Alternative)
1. Create project at [supabase.com](https://supabase.com)
2. Update `lib/db.ts` to use Supabase client
3. Create tables matching JSON structure
4. Migrate data

---

## SSL Certificate (HTTPS)

### Using Vercel
✅ **Automatic** - Vercel provides free SSL

### Using Netlify
✅ **Automatic** - Netlify provides free SSL

### Self-Hosted (Let's Encrypt)
```bash
sudo apt update
sudo apt install certbot python3-certbot-nginx

sudo certbot certonly --nginx -d yourdomain.com -d www.yourdomain.com

# Renew automatically
sudo certbot renew --dry-run
```

---

## Performance Optimization

### Enable Caching
Update `next.config.ts`:
```typescript
export default {
  headers: async () => {
    return [
      {
        source: '/api/:path*',
        headers: [
          { key: 'Cache-Control', value: 'max-age=0' },
        ],
      },
      {
        source: '/_next/image(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ];
  },
};
```

### Enable Image Optimization
Already configured in `next.config.ts`

### Monitor Performance
- Use Vercel Analytics
- Monitor Core Web Vitals
- Check Google PageSpeed
- Set up error tracking (Sentry)

---

## Monitoring & Analytics

### Set Up Error Tracking (Sentry)
1. Create account at [sentry.io](https://sentry.io)
2. Create project for Next.js
3. Add to `app/layout.tsx`:
```typescript
import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
});
```

### Set Up Analytics (Google Analytics)
1. Create account at [analytics.google.com](https://analytics.google.com)
2. Get tracking ID
3. Add to `app/layout.tsx`:
```typescript
<Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=GA_ID" />
<Script
  id="gtag-init"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'GA_ID');
    `,
  }}
/>
```

---

## Continuous Deployment (GitHub Actions)

Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to Vercel
on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: vercel/action@master
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
```

---

## Backup Strategy

### Automated Backups
1. **GitHub** - Code automatically versioned
2. **data/content.json** - Backup weekly:
```bash
#!/bin/bash
cp data/content.json backups/content-$(date +%Y%m%d).json
```

3. **Database** - If using MongoDB/PostgreSQL:
```bash
# MongoDB backup
mongodump --uri "mongodb+srv://..." --out ./backups/

# PostgreSQL backup
pg_dump -U user -d database > backups/backup-$(date +%Y%m%d).sql
```

---

## Troubleshooting Deployment

### Vercel Build Fails
- Check build logs in Vercel dashboard
- Ensure all env vars are set
- Try `npm run build` locally first
- Check for TypeScript errors

### Site Loads But No Content
- Verify API endpoints are accessible
- Check data/content.json exists and is valid JSON
- Clear cache (Ctrl+Shift+R)
- Check browser console for errors

### Admin Login Not Working
- Clear all cookies/localStorage
- Verify credentials set correctly
- Check API endpoint works
- Try incognito/private window

### Images Not Loading
- Verify image URLs are correct
- Check image URLs are publicly accessible
- Ensure CORS is configured if needed
- Test image URLs in browser

---

## Post-Deployment Checklist

- [ ] Site loads on custom domain
- [ ] HTTPS working (green lock icon)
- [ ] All pages accessible
- [ ] Admin login works
- [ ] Contact form submits to WhatsApp
- [ ] Registration form works
- [ ] Blog detail pages load
- [ ] Search/filter working
- [ ] Mobile responsive
- [ ] Images display correctly
- [ ] Analytics tracking active
- [ ] Error logging enabled
- [ ] Daily backup running
- [ ] SSL certificate auto-renews
- [ ] Performance acceptable (> 80 Lighthouse)

---

## Scaling for 200,000+ Users

### Database Upgrade
- Migrate from JSON to PostgreSQL/MongoDB
- Add caching layer (Redis)
- Set up database replication

### Content Delivery
- Enable CDN (Vercel/Cloudflare)
- Optimize image delivery
- Cache API responses

### Infrastructure
- Auto-scaling containers
- Load balancing
- Multiple region deployment

### Monitoring
- Real-time alerts
- Performance dashboards
- User behavior analytics

---

## Support & Resources

- **Vercel Docs**: https://vercel.com/docs
- **Next.js Docs**: https://nextjs.org/docs
- **Node.js Hosting Guide**: https://nodejs.org/en/docs/guides/hosting-nodejs
- **SSL/TLS**: https://letsencrypt.org/
- **Git Guides**: https://github.github.com/training-kit/

---

## Emergency Procedures

### Rollback Deployment
```bash
# Vercel - Automatic from Git history
git revert HEAD
git push origin main

# Self-hosted - Manual rollback
cd /var/www/tianwaa
git checkout previous-commit-hash
npm run build
npm restart
```

### Emergency Downtime
1. Deploy maintenance page
2. Notify users (social media, email)
3. Update status page
4. Investigate and fix issue
5. Deploy fix
6. Notify users again

---

**🎉 Ready to launch? Follow the Quick Deployment section above!**

Questions? Check README.md for more details.
