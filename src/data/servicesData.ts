import { ServiceItem } from '../types';

export const mainServices: ServiceItem[] = [
  {
    id: 'wordpress-dev',
    number: '01',
    title: 'WORDPRESS WEBSITE DEVELOPMENT',
    shortDesc: 'Professional WordPress websites built for businesses, organizations, portfolios and online brands.',
    fullDesc: 'Custom-configured, lightweight WordPress websites tailored to your business identity. Built with clean architecture, robust security, fast caching, and an easy-to-use Gutenberg/Elementor editor so you can update content effortlessly.',
    iconName: 'LayoutGrid',
    features: [
      'Custom theme setup & customization',
      'Clean database & lightweight plugin stack',
      'User-friendly admin dashboard for easy editing',
      'High-speed caching & image compression'
    ],
    deliverables: ['Fully functional website', 'Admin walkthrough guide', 'Security hardening', 'Mobile responsiveness check'],
    bestFor: 'Startups, companies, and organizations wanting full control over their content.'
  },
  {
    id: 'web-design',
    number: '02',
    title: 'WEBSITE DESIGN',
    shortDesc: 'Modern, clean and responsive website designs focused on usability and visual impact.',
    fullDesc: 'Striking UI/UX designs crafted with generous whitespace, sharp typography, and intuitive user journeys. Every design is built to establish brand authority and turn first-time visitors into committed clients.',
    iconName: 'Palette',
    features: [
      'Pixel-perfect layout and visual hierarchy',
      'Brand-aligned color palettes & typography',
      'Mobile-first responsive UX/UI',
      'Engaging micro-interactions & smooth transitions'
    ],
    deliverables: ['Custom visual structure', 'Brand style guide alignment', 'Responsive design for all screens', 'Conversion-optimized CTA placements'],
    bestFor: 'Brands looking to elevate their online image and stand out from competitors.'
  },
  {
    id: 'elementor-dev',
    number: '03',
    title: 'ELEMENTOR DEVELOPMENT',
    shortDesc: 'Custom Elementor-based layouts with flexible sections, responsive controls and modern UI.',
    fullDesc: 'Mastery over Elementor Pro to build bespoke, drag-and-drop layouts without heavy bloat. You get complete visual freedom to modify texts, pictures, banners, and pricing anytime without touching code.',
    iconName: 'Layers',
    features: [
      'Custom Elementor section styling',
      'Dynamic post loops & template building',
      'Optimized CSS/JS execution for fast loads',
      'Interactive banners, popups & inquiry modals'
    ],
    deliverables: ['Reusable Elementor templates', 'Visual drag-and-drop layout', 'Mobile breakpoint tuning', 'Custom form integration'],
    bestFor: 'Clients who want complete autonomy to update pages quickly without coding.'
  },
  {
    id: 'business-corporate',
    number: '04',
    title: 'BUSINESS & CORPORATE WEBSITES',
    shortDesc: 'Professional websites designed to establish credibility and generate business inquiries.',
    fullDesc: 'Corporate-grade digital platforms engineered for consulting firms, agencies, manufacturing, hospitality, and local businesses in Nepal and abroad to showcase services and capture leads.',
    iconName: 'Briefcase',
    features: [
      'Comprehensive service catalogs & team profiles',
      'Direct WhatsApp & Click-to-Call integration',
      'Lead capture forms with email notifications',
      'Google Maps & local business schema'
    ],
    deliverables: ['Executive homepage & subpages', 'Contact & quotation forms', 'Client trust badges', 'Search engine indexing setup'],
    bestFor: 'B2B companies, trading firms, contractors, and established enterprises.'
  },
  {
    id: 'news-media',
    number: '05',
    title: 'NEWS & MEDIA WEBSITES',
    shortDesc: 'Modern news portals with organized categories, responsive layouts and easy content management.',
    fullDesc: 'High-speed editorial news platforms designed for Nepali news outlets, regional publishers, and magazines. Handles heavy traffic spikes with breaking news tickers, video embeds, and Google AdSense ad slots.',
    iconName: 'Newspaper',
    features: [
      'Multi-category layout with breaking news tickers',
      'Ad banner management (Header, Sidebar, In-article)',
      'Optimized Nepali font rendering & readability',
      'One-click social media sharing integration'
    ],
    deliverables: ['Editorial newsroom dashboard', 'Category taxonomy hierarchy', 'AdSense & banner widget zones', 'High-traffic caching setup'],
    bestFor: 'Online news portals, digital magazines, community news, and media agencies in Nepal.'
  },
  {
    id: 'e-commerce',
    number: '06',
    title: 'E-COMMERCE WEBSITES',
    shortDesc: 'Professional online stores with product layouts, shopping functionality and responsive design.',
    fullDesc: 'Clean, conversion-driven WooCommerce stores designed for Nepali retailers, clothing brands, handicrafts, and electronic shops with seamless order inquiries and payment gateways.',
    iconName: 'ShoppingBag',
    features: [
      'Product catalog with variations & filtering',
      'Esewa / Khalti / Fonepay or COD integration ready',
      'Mobile-optimized cart and streamlined checkout',
      'Automated order email confirmations'
    ],
    deliverables: ['Complete store setup', 'Product upload workflow', 'Inventory manager', 'Order tracking & inquiry setup'],
    bestFor: 'Retailers, boutique brands, and businesses selling physical or digital goods.'
  }
];

export const additionalServices = [
  { name: 'Website Redesign', desc: 'Revamping outdated websites into sleek, modern, mobile-friendly platforms.' },
  { name: 'Landing Pages', desc: 'High-converting single-page sales funnels for products, services, or events.' },
  { name: 'Portfolio Websites', desc: 'Custom personal branding websites for professionals, artists, and leaders.' },
  { name: 'Website Maintenance', desc: 'Regular backups, plugin updates, security scans, and uptime monitoring.' },
  { name: 'Basic SEO Optimization', desc: 'On-page meta titles, descriptions, schema tags, and sitemaps for Google.' },
  { name: 'Speed Optimization', desc: 'Minifying code, caching setup, and image compression for 90+ PageSpeed.' }
];

export const whyChooseReasons = [
  {
    number: '01',
    title: 'Modern Design',
    description: 'Clean and contemporary websites built around your brand identity with generous whitespace, crisp typography, and refined aesthetic appeal.'
  },
  {
    number: '02',
    title: 'Mobile Responsive',
    description: 'Flawless viewing experience engineered across smartphones, tablets, laptops, and ultra-wide desktop monitors with zero layout breakage.'
  },
  {
    number: '03',
    title: 'WordPress Expertise',
    description: 'Flexible, manageable websites powered by WordPress and Elementor, allowing you to update text and images anytime without coding.'
  },
  {
    number: '04',
    title: 'Affordable Pricing',
    description: 'Transparent, high-value website solutions starting at NPR 10,000 designed specifically for realistic budgets of Nepali businesses and startups.'
  },
  {
    number: '05',
    title: 'SEO-Friendly Structure',
    description: 'Websites engineered with semantic HTML, clean URLs, schema metadata, and fast loading speeds to build a rock-solid search foundation.'
  },
  {
    number: '06',
    title: 'Personal Support',
    description: 'Direct 1-on-1 communication with Sushant Gaha Magar throughout the development cycle and dependable support after your site launches.'
  }
];

export const realStats = [
  { value: '25+', label: 'Web Projects Delivered', desc: 'Across Nepal & International Clients' },
  { value: '5+', label: 'Website Categories', desc: 'News, Corporate, Business, Portfolio, NGO' },
  { value: '100%', label: 'Responsive Design', desc: 'Engineered for all mobile & desktop screens' },
  { value: '24/7', label: 'Online Support', desc: 'Direct WhatsApp & phone assistance' }
];

export const skillsList = [
  { name: 'WordPress', category: 'CMS & Builders' as const, proficiency: 95, level: 'Expert', iconName: 'Flame', description: 'Core CMS configuration, custom templates, plugin customization, database setup, and multisite capabilities.' },
  { name: 'Elementor / Pro', category: 'CMS & Builders' as const, proficiency: 92, level: 'Advanced', iconName: 'Layers', description: 'Custom responsive layouts, dynamic theme builder templates, popups, and advanced interactive sections.' },
  { name: 'Responsive Design', category: 'Frontend Code' as const, proficiency: 98, level: 'Expert', iconName: 'Smartphone', description: 'Mobile-first design logic, flexbox/grid adaptation, touch optimization, and fluid typography scaling.' },
  { name: 'HTML5 & CSS3', category: 'Frontend Code' as const, proficiency: 90, level: 'Advanced', iconName: 'Code', description: 'Semantic markup, custom styling, CSS animations, variables, and cross-browser normalization.' },
  { name: 'JavaScript & jQuery', category: 'Frontend Code' as const, proficiency: 75, level: 'Intermediate', iconName: 'Terminal', description: 'DOM manipulation, custom event listeners, slider integrations, and AJAX form submissions.' },
  { name: 'Bootstrap 5', category: 'Frontend Code' as const, proficiency: 85, level: 'Proficient', iconName: 'Box', description: 'Grid utilities, responsive component integration, and modular framework styling.' },
  { name: 'UI/UX Design', category: 'Design & UX' as const, proficiency: 88, level: 'Advanced', iconName: 'Palette', description: 'Visual hierarchy, user flow structuring, contrast ratios, and modern minimalist web aesthetics.' },
  { name: 'Basic SEO', category: 'Optimization & SEO' as const, proficiency: 85, level: 'Proficient', iconName: 'Search', description: 'Meta tags, heading hierarchy, image ALT descriptions, XML sitemaps, and Google Search Console.' },
  { name: 'Speed Optimization', category: 'Optimization & SEO' as const, proficiency: 88, level: 'Advanced', iconName: 'Zap', description: 'Browser caching, Gzip compression, lazy loading, script deferral, and WebP conversion.' },
  { name: 'Canva & Graphics', category: 'Design & UX' as const, proficiency: 85, level: 'Proficient', iconName: 'Image', description: 'Social media banners, logo mockups, web asset preparation, and hero illustrations.' }
];

export const processSteps = [
  {
    stepNumber: '01',
    title: 'DISCOVERY',
    tagline: 'Understanding Your Vision',
    description: 'We discuss your business model, target audience in Nepal or internationally, brand goals, competitor references, and feature requirements.',
    duration: 'Day 1',
    deliverables: ['Project Scope Document', 'Content Checklist', 'Timeline & Goal Alignment'],
    iconName: 'Search'
  },
  {
    stepNumber: '02',
    title: 'PLANNING',
    tagline: 'Structuring Architecture',
    description: 'We organize the sitemap, page hierarchy, content flow, and conversion pathways to ensure visitors take meaningful action.',
    duration: 'Day 2',
    deliverables: ['Sitemap Structure', 'Navigation Flow', 'Feature List Verification'],
    iconName: 'Compass'
  },
  {
    stepNumber: '03',
    title: 'DESIGN',
    tagline: 'Crafting the Visual Identity',
    description: 'We develop modern, clean visual layouts with brand colors, typography pairings, and responsive wireframes that represent your identity.',
    duration: 'Day 3 - 4',
    deliverables: ['Homepage & Inner Page Mockups', 'Typography & Color Scheme', 'Client Design Review'],
    iconName: 'Layout'
  },
  {
    stepNumber: '04',
    title: 'DEVELOPMENT',
    tagline: 'Building on WordPress & Elementor',
    description: 'We build the functional website using WordPress, Elementor, clean HTML/CSS, dynamic forms, mobile breakpoints, and security measures.',
    duration: 'Day 5 - 7',
    deliverables: ['Interactive WordPress Setup', 'Custom Elementor Sections', 'Dynamic Forms & Click-to-Call'],
    iconName: 'Cpu'
  },
  {
    stepNumber: '05',
    title: 'TESTING',
    tagline: 'Polishing Performance & Usability',
    description: 'We rigorously test responsiveness across smartphones, tablets, and desktops, verify form delivery, validate SEO tags, and optimize speed.',
    duration: 'Day 8',
    deliverables: ['Cross-Device Audit', 'Speed & Caching Benchmark', 'Form & Security Verification'],
    iconName: 'CheckCircle'
  },
  {
    stepNumber: '06',
    title: 'LAUNCH & SUPPORT',
    tagline: 'Going Live & Long-Term Growth',
    description: 'We connect your domain, configure DNS, perform final server checks, launch the site live, and provide handover training and support.',
    duration: 'Day 9+',
    deliverables: ['Live Site on Domain', 'Admin Video Walkthrough', 'Ongoing Maintenance & Support'],
    iconName: 'Rocket'
  }
];
