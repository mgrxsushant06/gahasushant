import { PricingPackage } from '../types';

export const pricingPackages: PricingPackage[] = [
  {
    id: 'starter',
    packageNumber: 'PACKAGE 01',
    name: 'STARTER',
    price: 'NPR 10,000',
    priceNum: 10000,
    period: 'One-time setup',
    badge: 'Affordable Essential',
    isRecommended: false,
    tagline: 'Best for individuals, small businesses and clients looking for an affordable, high-quality website.',
    targetAudience: 'Individuals, local shops, freelancers, and small startups wanting a fast, professional online presence on a budget.',
    includedFeatures: [
      'Modern responsive design',
      'WordPress website development',
      'Basic design customization',
      'Mobile-friendly layout across all devices',
      'SEO-friendly structure & clean URLs',
      'User-friendly WordPress admin panel',
      'Basic post-launch support & guidance',
      'Standard contact & inquiry form',
      'Social media integration'
    ],
    importantCondition: 'Domain and hosting/cPanel remain under the developer\'s managed hosting setup for easy maintenance and affordability.',
    ctaText: 'Choose Starter'
  },
  {
    id: 'professional',
    packageNumber: 'PACKAGE 02',
    name: 'PROFESSIONAL',
    price: 'NPR 20,000',
    priceNum: 20000,
    period: 'One-time setup',
    badge: 'Most Popular & Recommended',
    isRecommended: true,
    tagline: 'Best for clients who want more custom features, higher performance, and full control over their hosting.',
    targetAudience: 'Growing businesses, corporate firms, news publishers, and serious brands requiring bespoke design and independent infrastructure.',
    includedFeatures: [
      'Modern responsive design & custom layout',
      'Custom Elementor theme development',
      'Tailored branding & high-impact UI/UX',
      'Advanced mobile optimization & speed caching',
      'SEO-friendly structure & schema markup',
      'Personal domain setup (.com / .com.np / .org)',
      'Personal hosting account configuration',
      'Personal cPanel with 100% full client ownership',
      'Better server performance & dedicated resources',
      'Comprehensive WordPress admin panel',
      'Priority post-launch support & backup routine'
    ],
    importantCondition: 'Full ownership and independent cPanel credentials provided to the client for ultimate freedom and scaling.',
    ctaText: 'Choose Professional'
  }
];

export const packageComparisonPoints = [
  { feature: 'Responsive Design (Mobile & Desktop)', starter: true, pro: true },
  { feature: 'WordPress CMS & Admin Dashboard', starter: true, pro: true },
  { feature: 'SEO-Friendly URL & Meta Structure', starter: true, pro: true },
  { feature: 'Contact / Lead Generation Form', starter: true, pro: true },
  { feature: 'Custom Layout & Tailored Sections', starter: 'Basic Templates', pro: 'Full Custom UI/UX' },
  { feature: 'Hosting Environment', starter: "Developer's Managed Setup", pro: 'Personal Independent cPanel' },
  { feature: 'Domain & Server Ownership', starter: 'Managed Hosting', pro: '100% Full Client Ownership' },
  { feature: 'Speed & Performance Tuning', starter: 'Standard Caching', pro: 'Advanced Multi-Layer Optimization' },
  { feature: 'Post-Launch Support', starter: 'Basic Support', pro: 'Priority Direct Support' }
];
