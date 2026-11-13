import type { ImageMetadata } from 'astro';
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
export const projects: Project[] = [];
