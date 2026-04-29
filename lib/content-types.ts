export type Content = {
  hero: {
    headline: string;
    subheadline: string;
    cta_primary: { label: string; href: string };
    cta_secondary: { label: string; href: string };
    stats: Array<{ value: string; label: string }>;
  };
  programs: Array<{
    id: number;
    title: string;
    description: string;
    tag: string;
    duration: string;
    icon: string;
    highlights: string[];
    featured: boolean;
  }>;
  why_us: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
  testimonials: Array<{
    id: number;
    name: string;
    program: string;
    rating: number;
    quote: string;
    avatar: string;
  }>;
  blog: Array<{
    id: number;
    title: string;
    slug: string;
    category: string;
    author: string;
    date: string;
    excerpt: string;
    coverImage: string;
    content: string;
  }>;
  gallery: Array<{
    id: number;
    url: string;
    alt: string;
  }>;
  settings: {
    siteTitle: string;
    tagline: string;
    logoUrl: string;
    whatsappNumber: string;
    email: string;
    instagram: string;
    tiktok: string;
    youtube: string;
    maintenanceMode: boolean;
    metaTitle: string;
    metaDescription: string;
  };
};

export type ContentSection = keyof Content;
export type HeroContent = Content["hero"];
export type Program = Content["programs"][number];
export type WhyUsItem = Content["why_us"][number];
export type Testimonial = Content["testimonials"][number];
export type BlogPost = Content["blog"][number];
export type GalleryImage = Content["gallery"][number];
export type SettingsContent = Content["settings"];
