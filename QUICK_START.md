# ⚡ QUICK START GUIDE - Tianwaa Website

## 🚀 Get Running in 2 Minutes

### Step 1: Install & Run
```bash
npm install
npm run dev
```

Visit: **http://localhost:3000**

### Step 2: Explore the Site
- **Home**: http://localhost:3000
- **About**: http://localhost:3000/tentang
- **Programs**: http://localhost:3000/program
- **Blog**: http://localhost:3000/blog
- **Contact**: http://localhost:3000/kontak
- **Register**: http://localhost:3000/daftar

### Step 3: Access Admin Panel
Go to: **http://localhost:3000/admin**

**Login Credentials:**
- Username: `admin`
- Password: `tianwaa2025`

---

## 📝 What's Included

✅ **7 Public Pages** - Fully styled & responsive  
✅ **Dynamic Blog** - With categories & search  
✅ **Admin CMS** - Manage all content  
✅ **Design System** - Modern luxury aesthetic  
✅ **Mobile Ready** - Touch-friendly navigation  
✅ **WhatsApp Integration** - CTA links built-in  
✅ **Form Validation** - Registration & contact forms  
✅ **Production Ready** - No TODOs or placeholders  

---

## 🎨 Customize in 30 Seconds

### Change Brand Colors
Edit `app/globals.css` lines 5-18:
```css
--color-primary: #6DBF8A;        /* Change this */
--color-accent: #E8B84B;         /* And this */
```

### Update WhatsApp Number
Edit `data/content.json`:
```json
"whatsapp": "+62812345678"      /* Change this */
```

### Add Content via Admin
1. Login: http://localhost:3000/admin
2. Click any manager (Programs, Blog, Gallery, etc.)
3. Click "Add" or edit existing
4. Changes save immediately

---

## 📁 File Structure at a Glance

```
app/              ← Pages & layouts
├── page.tsx      ← Home
├── daftar/       ← Registration
├── blog/         ← Blog pages
└── admin/        ← Admin panel

components/       ← Reusable components
├── ui/           ← Navbar, Footer, etc.
└── sections/     ← Home page sections

data/
└── content.json  ← All site content (edit here!)

lib/
├── db.ts         ← Content management
├── auth.ts       ← Admin authentication
└── utils.ts      ← Helper functions
```

---

## 🔧 Common Tasks

### Add a New Blog Post
**Method 1 (Easier):** Use Admin Panel
- Go to http://localhost:3000/admin
- Click "Blog Manager"
- Click "Add Blog Post"
- Fill in details, click Save

**Method 2 (Direct):** Edit `data/content.json`
```json
{
  "id": 4,
  "slug": "new-article",
  "title": "New Article Title",
  "category": "Tips",
  "date": "2025-01-15",
  "author": "Tianwaa Team",
  "excerpt": "Short description...",
  "content": "<p>Full HTML content...</p>",
  "coverImage": "https://example.com/image.jpg"
}
```

### Change Navigation Links
Edit `components/ui/Navbar.tsx` lines 30-40:
```jsx
const navLinks = [
  { label: "Beranda", href: "/" },
  { label: "Tentang", href: "/tentang" },
  // Add or modify links here
];
```

### Update WhatsApp Number Everywhere
Edit `data/content.json`:
```json
"whatsapp": "+6281234567890"
```

### Add New Program
Use Admin Panel or edit `data/content.json`:
```json
{
  "id": 5,
  "icon": "BookOpen",
  "title": "New Program",
  "tag": "Premium",
  "description": "Description here...",
  "highlights": ["Point 1", "Point 2"],
  "duration": "12 weeks",
  "featured": true
}
```

---

## 🛠️ Build & Deploy

### For Development
```bash
npm run dev
```

### For Production
```bash
npm run build
npm start
```

### Deploy to Vercel (Easiest)
1. Push code to GitHub
2. Go to vercel.com
3. Click "New Project"
4. Select your repo
5. Click "Deploy"
   
Done! Your site is live.

---

## 🔐 Change Admin Password (Important!)

Edit `app/api/auth/login/route.ts`:

Find this line (around line 10):
```typescript
if (username === "admin" && password === "tianwaa2025") {
```

Change to:
```typescript
if (username === "YOUR_USERNAME" && password === "YOUR_PASSWORD") {
```

---

## 🎯 Admin Features

| Feature | Location | What It Does |
|---------|----------|-------------|
| Dashboard | `/admin` | View statistics |
| Hero Editor | `/admin/hero` | Edit homepage hero section |
| Programs | `/admin/programs` | Create/edit courses |
| Testimonials | `/admin/testimonials` | Manage student reviews |
| Blog Manager | `/admin/blog` | Write/edit articles |
| Gallery | `/admin/gallery` | Upload/manage images |
| Settings | `/admin/settings` | Site config & SEO |

---

## 📱 Responsive Breakpoints

The site automatically adapts to screen sizes:
- **Mobile**: < 640px (hamburger menu)
- **Tablet**: 640px - 1024px (optimized layout)
- **Desktop**: > 1024px (full experience)

Test on mobile: Right-click → "Inspect" → Mobile view

---

## 🐛 Troubleshooting

| Problem | Solution |
|---------|----------|
| Port 3000 in use | `npm run dev -- -p 3001` |
| Admin login fails | Clear cookies/localStorage, check credentials |
| Changes not showing | Refresh browser (Ctrl+Shift+R) |
| Styles broken | `rm -rf .next && npm run dev` |
| Content not loading | Check JSON syntax in `data/content.json` |

---

## 📚 Learn More

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [React](https://react.dev)

---

## ✨ Key Features

- ✅ **No Server Setup** - Runs locally out of the box
- ✅ **No Database** - Content in JSON (easy to migrate)
- ✅ **No Build Tools Config** - Pre-configured
- ✅ **Mobile Friendly** - Touch optimized
- ✅ **SEO Ready** - Meta tags + Open Graph
- ✅ **Dark Mode Ready** - CSS variables for theming
- ✅ **Form Validation** - Contact & registration forms
- ✅ **Animations** - Smooth, performant transitions

---

**Questions?** Check `README.md` for detailed documentation.

**Ready to deploy?** See `README.md` → Deployment section.

**Happy building! 🚀**
