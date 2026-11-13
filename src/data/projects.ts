import type { ImageMetadata } from 'astro';
import avt from '../assets/products/avt.jpg';
import sketchmindai from '../assets/products/sketchmindai.jpg';
export interface Project {
  slug: string;
  name: string;
  category: string;
  description: string;
  status: string;
  image: ImageMetadata;
  imageAlt: string;
  year?: string;
  href?: string;
  aspect?: 'landscape' | 'portrait' | 'square';
}
/** Add only confirmed work, with imagery approved for publication. */
export const projects: Project[] = [
  {
    slug: 'avt',
    name: 'Vesuliria AVT',
    category: 'Enterprise analytics',
    description: 'Auditable AI analytics for banks and regulated institutions. Every number traces back to a recorded query, a statistical test and a signed report, and it runs inside the customer’s environment.',
    status: 'Pilot programme open',
    image: avt,
    imageAlt: 'Vesuliria AVT product page: AI analytics with evidence an auditor can check',
    href: '/avt/',
  },
  {
    slug: 'sketchmindai',
    name: 'Sketchmindai',
    category: 'Mobile app',
    description: 'Turns children’s drawings into stories and reads them aloud. Every AI feature stays off until a parent allows it.',
    status: 'App Store and Google Play soon',
    image: sketchmindai,
    imageAlt: 'Sketchmindai home page: a child’s drawing becoming a story',
    href: 'https://sketchmindai.com',
  },
];
