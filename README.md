# Tianwaa - Kursus Mandarin Online & Offline

Production-ready Next.js 16 website for **Tianwaa**, a premium private Mandarin language course with 200,000+ students across 30+ countries.

## 🚀 Features

### Public Website
- ✅ Beautiful landing page with hero section and floating animations
- ✅ Why Tianwaa section showcasing key differentiators  
- ✅ Programs showcase with cards and details
- ✅ How it works timeline
- ✅ Testimonials carousel
- ✅ Blog/artikel section with categories
- ✅ Horizontal scroll gallery
- ✅ CTA banner sections
- ✅ Responsive navbar with mobile menu
- ✅ Sticky WhatsApp floating button
- ✅ Complete footer with social links

### Pages
- **Home** (`/`) - Full landing page with all sections
- **Tentang** (`/tentang`) - About page with mission, vision, timeline  
- **Program** (`/program`) - All programs listing with FAQ
- **Blog** (`/blog`) - Blog list with search & category filters
- **Blog Detail** (`/blog/[slug]`) - Individual article with related posts
- **Kontak** (`/kontak`) - Contact form with info cards
- **Daftar** (`/daftar`) - 3-step registration form

### Admin CMS Panel (`/admin`)
- 🔐 Secure login (demo: `admin` / `tianwaa2025`)
- 📊 Dashboard with content statistics
- ✏️ Hero section editor with live preview
- 📚 Programs manager (Create/Read/Update/Delete)
- ⭐ Testimonials manager
- 📝 Blog manager
- 🖼️ Gallery manager with image uploads
- ⚙️ Site settings (SEO, social, contact info)

### Design System
- Modern Organic Luxury aesthetic
- Custom CSS variables for colors, spacing, shadows
- **Fonts**: Playfair Display (headings) + DM Sans (body) + Noto Serif SC (Chinese)
- Responsive mobile-first design
- Tailwind CSS v4 with extended configuration
- Animations: Framer Motion + CSS keyframes
- 12-color palette with sage green primary (#6DBF8A)

## 🛠️ Tech Stack

- **Framework**: Next.js 16.x (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4 + CSS variables
- **UI Components**: Lucide React icons
- **Animations**: Framer Motion, CSS keyframes
- **CMS**: JSON file-based (`data/content.json`)
- **Form Handling**: Native HTML forms
- **Database**: File system (easily migrable to PostgreSQL/MongoDB)

## 📦 Installation & Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

### 3. Build for Production
```bash
npm run build
npm start
```

## 📁 Project Structure

```
app/                          # Next.js App Router
├── page.tsx                  # Home landing page
├── layout.tsx                # Root layout with fonts
├── globals.css               # Design system & base styles
├── (public)/
│   ├── tentang/page.tsx      # About page
│   ├── program/page.tsx      # Programs listing
│   ├── blog/page.tsx         # Blog listing
│   ├── blog/[slug]/page.tsx  # Blog detail page
│   ├── kontak/page.tsx       # Contact page
│   └── daftar/page.tsx       # Registration form
├── admin/                    # Protected admin routes
│   ├── page.tsx              # Dashboard
│   ├── login/page.tsx        # Login page
│   ├── hero/page.tsx         # Hero editor
│   ├── programs/page.tsx     # Programs manager
│   ├── testimonials/page.tsx # Testimonials
│   ├── blog/page.tsx         # Blog manager
│   ├── gallery/page.tsx      # Gallery manager
│   └── settings/page.tsx     # Site settings
└── api/                      # API routes
    ├── content/[section]/route.ts   # Content CRUD
    └── auth/login/route.ts          # Authentication

components/
├── ui/                       # Base UI components
│   ├── Navbar.tsx           # Header with mobile menu
│   ├── Footer.tsx           # Footer with links
│   ├── WhatsAppFAB.tsx      # Floating WhatsApp button
│   └── Toast.tsx            # Toast notifications
├── sections/                 # Home page sections
│   ├── HeroSection.tsx
│   ├── WhyTianwaaSection.tsx
│   ├── ProgramsSection.tsx
│   ├── HowItWorksSection.tsx
│   ├── TestimonialsSection.tsx
│   ├── BlogSection.tsx
│   ├── GallerySection.tsx
│   └── CTABannerSection.tsx
└── admin/
    └── AdminLayout.tsx      # Admin layout wrapper

lib/
├── db.ts                     # Database/file operations
├── auth.ts                   # Authentication hooks
└── utils.ts                  # Utility functions

data/
└── content.json              # CMS content storage

public/                       # Static assets
tailwind.config.ts           # Tailwind configuration
```

## 🎨 Design System

### Color Palette (CSS Variables)
```css
--color-primary: #6DBF8A           /* Sage Green - Main */
--color-primary-dark: #4DA870      /* Darker Green */
--color-primary-light: #B8E8C8     /* Lighter Green */
--color-primary-muted: #A3D4B3     /* Muted Green */
--color-accent: #E8B84B            /* Warm Gold */
--color-bg: #F9FAF7                /* Off-white */
--color-bg-dark: #0F1510           /* Near Black */
--color-surface: #FFFFFF           /* White */
--color-surface-alt: #F5F5F5       /* Light Gray */
--color-text: #151A12              /* Dark Text */
--color-text-muted: #6B7166        /* Muted Text */
--color-text-light: #C5C9C1        /* Light Text */
```

### Typography
- **Display (h1-h2)**: Playfair Display, 400-700 weights
- **Headings (h3-h6)**: Playfair Display, 600-700 weights  
- **Body**: DM Sans, 400-600 weights
- **Chinese Text**: Noto Serif SC, 400-700 weights

### Shadows
- sm, md, lg, xl, 2xl, glow (custom)

### Animations
- fadeIn, slideUp, float, pulse, glow

## 🔐 Admin Authentication

### Default Credentials
```
Username: admin
Password: tianwaa2025
```

⚠️ **IMPORTANT**: Change credentials in production at `app/api/auth/login/route.ts`

### How It Works
- Session stored in localStorage + HttpOnly cookie
- Protected routes redirect to `/admin/login`
- Login token is base64-encoded
- Auto-logout redirects to login page

## 📊 Content Management

### Content Structure (`data/content.json`)

```json
{
  "hero": {
    "headline": "string",
    "subheadline": "string",
    "cta": [{ "label": "string", "link": "string" }],
    "stats": [{ "label": "string", "value": "string" }]
  },
  "programs": [
    {
      "id": "number",
      "icon": "string",
      "title": "string",
      "tag": "string",
      "description": "string",
      "highlights": ["string"],
      "duration": "string",
      "featured": "boolean"
    }
  ],
  "testimonials": [
    {
      "id": "number",
      "avatar": "string",
      "name": "string",
      "program": "string",
      "stars": "number",
      "quote": "string"
    }
  ],
  "blog": [
    {
      "id": "number",
      "slug": "string",
      "title": "string",
      "category": "string",
      "date": "string",
      "author": "string",
      "excerpt": "string",
      "content": "string (HTML)",
      "coverImage": "string"
    }
  ],
  "gallery": [
    {
      "id": "number",
      "url": "string",
      "alt": "string"
    }
  ],
  "settings": {
    "siteName": "string",
    "siteUrl": "string",
    "email": "string",
    "whatsapp": "string",
    "address": "string",
    "navLinks": [{ "label": "string", "href": "string" }],
    "social": [{ "platform": "string", "url": "string" }]
  }
}
```

### API Endpoints

#### Get Content Section
```bash
GET /api/content/[section]

# Example: GET /api/content/hero
# Returns: { headline: "...", subheadline: "...", ... }
```

#### Update Content Section
```bash
PUT /api/content/[section]
Content-Type: application/json

# Example: PUT /api/content/hero
# Body: { headline: "New headline", subheadline: "..." }
```

#### Admin Login
```bash
POST /api/auth/login
Content-Type: application/json

# Body: { username: "admin", password: "tianwaa2025" }
# Returns: { token: "...", success: true }
```

## 🎯 Key Features Deep Dive

### Responsive Design
- Mobile-first approach with Tailwind breakpoints
- Hamburger menu on mobile (Navbar)
- Collapsible admin sidebar
- Touch-friendly interactive elements

### Performance
- Image optimization via Next.js Image component
- Font-display: swap for Google Fonts
- CSS variables for efficient theming
- Lazy loading for below-fold sections

### Accessibility
- Semantic HTML structure
- ARIA labels on interactive elements
- Proper heading hierarchy
- Color contrast meets WCAG standards

### SEO
- Meta tags in layout.tsx
- Dynamic metadata for blog posts
- Open Graph tags
- Sitemap-ready structure

## 🚀 Deployment

### Vercel (Recommended)
```bash
vercel
```
Automatic deployments on push to main branch.

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

### Environment Variables (`.env.local`)
```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_WA_NUMBER=62812345678
```

## 🔧 Customization

### Change Brand Colors
Edit `app/globals.css` CSS variables (lines 5-18)

### Update Navigation Links
Edit Navbar component in `components/ui/Navbar.tsx`

### Add New Program
1. Edit `data/content.json` - add to `programs` array
2. Use `/admin` panel (easier method)

### Add New Blog Post
1. Use `/admin/blog` panel
2. Or manually add to `data/content.json` with unique slug

### Change WhatsApp Number
- Update `settings.whatsapp` in `data/content.json`
- Or use `/admin/settings` panel

## 🐛 Troubleshooting

| Issue | Solution |
|-------|----------|
| Port 3000 in use | `npm run dev -- -p 3001` |
| Admin login fails | Check credentials in API route, clear localStorage |
| Styles not applying | `rm -rf .next && npm run dev` |
| Content not loading | Verify `data/content.json` syntax, check browser console |
| Images not loading | Update image URLs in `data/content.json` |

## 📚 Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS v4](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)
- [TypeScript](https://www.typescriptlang.org/)

## 📄 License

© 2025 Tianwaa. All rights reserved.

---

**Built with ❤️ by Tianwaa for Making Mandarin Learning Accessible Worldwide**
