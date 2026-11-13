import type { ImageMetadata } from 'astro';
import avtSite from '../assets/products/avt-site.jpg';
import avtReport from '../assets/products/avt-report.jpg';
import avtFindings from '../assets/products/avt-findings.jpg';
import avtOverview from '../assets/products/avt-overview.jpg';
import smSite from '../assets/products/sketchmindai-site.jpg';
import smCompanions from '../assets/products/sketchmindai-companions.png';
import smStart from '../assets/products/sketchmindai-start.png';

export interface Figure {
  image: ImageMetadata;
  alt: string;
  caption: string;
  aspect?: 'landscape' | 'portrait' | 'square';
}

/** `embed` is a YouTube/Vimeo embed URL; `file` is a video under `public/`. */
export interface Video {
  title: string;
  embed?: string;
  file?: string;
}

export interface Project {
  slug: string;
  name: string;
  category: string;
  description: string;
  status: string;
  image: ImageMetadata;
  imageAlt: string;
  year?: string;
  aspect?: 'landscape' | 'portrait' | 'square';
  tagline: string;
  intro: string[];
  highlights: { title: string; text: string }[];
  facts?: { value: string; label: string }[];
  factsNote?: string;
  gallery: Figure[];
  videos: Video[];
  site: { href: string; label: string };
}

/** Add only confirmed work, with imagery approved for publication. */
export const projects: Project[] = [
  {
    slug: 'avt',
    name: 'Vesuliria AVT',
    category: 'Enterprise analytics',
    description: 'Auditable AI analytics for banks and regulated institutions. Every number traces back to a recorded query, a statistical test and a signed report.',
    status: 'Pilot programme open',
    image: avtSite,
    imageAlt: 'Vesuliria AVT product page: AI analytics with evidence an auditor can check',
    tagline: 'AI analytics with evidence an auditor can check.',
    intro: [
      'Ask a question about your institution’s data in plain language. AVT answers with the query behind every number, the statistical test each claim passed and a signed record of the whole analysis.',
      'Months later, the same result can be recomputed from the record. The system runs inside the institution’s own environment, with its own model; data does not leave.',
    ],
    highlights: [
      { title: 'No unsourced numbers', text: 'The model cannot write figures into the text. Every number is placed by the system from a recorded query.' },
      { title: 'Claims must pass a test', text: 'Each finding goes through a statistical test. When the evidence is not enough, the answer says so.' },
      { title: 'Signed and recomputable', text: 'Reports are sealed with an Ed25519 signature. An auditor can verify the seal and rerun the analysis.' },
      { title: 'Runs on-premise', text: 'Deploys on the institution’s servers with a local model, roles, SSO/SCIM and an audit log.' },
    ],
    facts: [
      { value: '0', label: 'unsourced numbers; blocked by design' },
      { value: '1.00 / 0.40', label: 'root-cause detection (F1), AVT vs. naive method' },
      { value: '2 / 100', label: 'false alarms when there is no signal' },
      { value: '4,071', label: 'automated tests' },
    ],
    factsNote: 'Measured on synthetic and public datasets.',
    gallery: [
      { image: avtReport, alt: 'AVT analysis report with the headline change, confidence and data quality', caption: 'Analysis report: the change, how confident the system is, and data quality' },
      { image: avtFindings, alt: 'Verified findings with confidence levels, limitations and recommendations awaiting approval', caption: 'Verified findings, stated limitations and recommendations awaiting human approval' },
      { image: avtOverview, alt: 'AVT workspace overview with recent reports', caption: 'Workspace overview' },
    ],
    videos: [],
    site: { href: '/avt/', label: 'Visit the AVT site' },
  },
  {
    slug: 'sketchmindai',
    name: 'Sketchmindai',
    category: 'Mobile app',
    description: 'Turns children’s drawings into stories and reads them aloud. Every AI feature stays off until a parent allows it.',
    status: 'App Store and Google Play soon',
    image: smSite,
    imageAlt: 'Sketchmindai home page: a child’s drawing becoming a story',
    tagline: 'A child’s drawing, turned into a story.',
    intro: [
      'A child draws on paper or on screen and tells what is happening. Sketchmindai turns the drawing and the telling into a story suited to the child’s age band, then reads it aloud.',
      'Parents decide first: chat, story and drawing features stay off until a parent explicitly allows them.',
    ],
    highlights: [
      { title: 'AI starts switched off', text: 'Nothing runs until a parent gives permission, and permission can be withdrawn at any time.' },
      { title: 'Minimal personal data', text: 'No email or phone number. Accounts run on a random identifier; a nickname is enough.' },
      { title: 'No ads, no tracking', text: 'No advertising, behavioural tracking or third-party analytics.' },
      { title: 'Deletion in the parent’s hands', text: 'One option in family settings deletes stories, drawings, recordings and the account from the server.' },
    ],
    gallery: [
      { image: smCompanions, alt: 'Four story companions: Lopa the otter, Duru the owl, Pamu the panda and Renka the chameleon', caption: 'Story companions', aspect: 'square' },
      { image: smStart, alt: 'App start screen where Lopa invites the child to begin an adventure', caption: 'Starting a story with a companion', aspect: 'portrait' },
    ],
    videos: [],
    site: { href: 'https://sketchmindai.com', label: 'Visit sketchmindai.com' },
  },
];
