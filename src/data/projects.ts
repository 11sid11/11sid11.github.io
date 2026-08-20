export type ProjectVisibility = 'public' | 'showcase';
export type ProjectStatus = 'shipped' | 'active' | 'showcase';

export interface ProjectLink {
  label: string;
  href: string;
  kind: 'live' | 'source' | 'external';
}

export interface DevProject {
  slug: string;
  title: string;
  eyebrow: string;
  year: string;
  status: ProjectStatus;
  visibility: ProjectVisibility;
  featured: boolean;
  summary: string;
  description: string;
  highlights: string[];
  stack: string[];
  links: ProjectLink[];
  note?: string;
  tone: 'acid' | 'orange' | 'blue' | 'mono';
}

export const projects: DevProject[] = [
  {
    slug: 'aftersum',
    title: 'AfterSum',
    eyebrow: 'Local-first finance utility',
    year: '2026',
    status: 'shipped',
    visibility: 'public',
    featured: true,
    summary: 'Personal money tracking, shared expenses and lending without an account or financial backend.',
    description:
      'AfterSum is an offline-first PWA designed around a simple rule: your day-to-day financial data should remain yours. It separates personal tracking, shared expenses and lending into explicit ledgers, stores operational data locally, and treats backup and recovery as first-class product work.',
    highlights: [
      'Local IndexedDB persistence with explicit domain boundaries',
      'Portable backup, CSV/ZIP export and local recovery checkpoints',
      'Installable PWA with update handling and offline support',
      'Typed React application with unit and browser E2E coverage',
    ],
    stack: ['React', 'TypeScript', 'Vite', 'Dexie', 'TanStack', 'Vitest', 'Playwright'],
    links: [
      { label: 'Open app', href: 'https://11sid11.github.io/AfterSum/', kind: 'live' },
      { label: 'Source', href: 'https://github.com/11sid11/AfterSum', kind: 'source' },
    ],
    tone: 'acid',
  },
  {
    slug: 'batchd',
    title: 'Batchd',
    eyebrow: 'Browser automation, minus the creepy server',
    year: '2026',
    status: 'active',
    visibility: 'public',
    featured: true,
    summary: 'An open-source browser tool for cleaning X likes and replies without handing account access to a third-party service.',
    description:
      'Batchd runs in the browser session you already control. It supports both a userscript and Chrome extension build from shared source, with resumable state, dry runs, pacing controls and failure handling designed for long-running cleanup jobs.',
    highlights: [
      'No OAuth token, credential collection or hosted backend',
      'Shared modular source for Tampermonkey and Chrome MV3 targets',
      'Dry-run mode, resumable progress and category-aware pacing',
      'Failure classification, backoff and DOM selector isolation',
    ],
    stack: ['JavaScript', 'Chrome MV3', 'Tampermonkey', 'Browser APIs'],
    links: [{ label: 'Source', href: 'https://github.com/11sid11/Batchd', kind: 'source' }],
    tone: 'orange',
  },
  {
    slug: 'spoti-sync',
    title: 'Spoti Sync',
    eyebrow: 'Spotify automation inside Google Sheets',
    year: '2026',
    status: 'active',
    visibility: 'public',
    featured: true,
    summary: 'Self-hosted playlist sync powered by Google Apps Script, with scheduled jobs and no always-on backend.',
    description:
      'Spoti Sync mirrors Liked Songs or Spotify playlists through a Google Sheet-bound Apps Script. The system supports exact-mirror and append-only behavior, multiple automation intervals, manual runs, install/update flows and an adaptive background scheduler.',
    highlights: [
      'Runs inside the user’s own Google Apps Script environment',
      'Hourly and day-based scheduling through one adaptive dispatcher',
      'Installer/update flow designed for non-developers',
      'CI and focused regression coverage around scheduling and state',
    ],
    stack: ['Google Apps Script', 'Spotify Web API', 'JavaScript', 'GitHub Actions'],
    links: [
      { label: 'Install', href: 'https://sid.is-a.dev/Spoti-sync/', kind: 'live' },
      { label: 'Source', href: 'https://github.com/11sid11/Spoti-sync', kind: 'source' },
    ],
    tone: 'blue',
  },
  {
    slug: 'rituon',
    title: 'Rituon',
    eyebrow: 'Weather, cities and live radio',
    year: '2026',
    status: 'showcase',
    visibility: 'showcase',
    featured: true,
    summary: 'A city-listening experience that uses current atmosphere as the route into live local radio.',
    description:
      'Rituon starts with the weather where you are, finds a distant city with a similar atmosphere, then lets you tune into live radio from that place. The public experience is intentionally more important here than publishing the implementation details before they are ready.',
    highlights: [
      'Atmospheric city matching instead of a conventional weather dashboard',
      'Live radio discovery as the payoff, not a decorative extra',
      'Fully client-side product with explicit provider and privacy boundaries',
      'Responsive glass-and-sky visual system with reduced-motion support',
    ],
    stack: ['React', 'TypeScript', 'Vite', 'Public APIs'],
    links: [{ label: 'Visit Rituon', href: 'https://rituon.com', kind: 'live' }],
    note: 'Working. Still being argued with.',
    tone: 'mono',
  },
  {
    slug: 'mockaroo',
    title: 'Mockaroo',
    eyebrow: 'Offline exam PWA from a Markdown source of truth',
    year: '2026',
    status: 'active',
    visibility: 'public',
    featured: true,
    summary: 'An offline-capable SSC CGL mock-test PWA generated from a structured Obsidian question bank.',
    description:
      'Mockaroo treats editable Markdown as the source of truth, then compiles it into the data and static pages consumed by the exam app. The result is a no-backend study tool with timed mocks, chapter drills, scoring and source-note traceability.',
    highlights: [
      'Markdown-to-JSON/HTML build pipeline',
      'Offline-capable PWA with multiple test modes',
      'Question-level traceability back to source notes',
      'Content workflow designed around a version-controlled knowledge vault',
    ],
    stack: ['Python', 'JavaScript', 'PWA', 'Markdown', 'GitHub Pages'],
    links: [{ label: 'Source', href: 'https://github.com/11sid11/Mockaroo', kind: 'source' }],
    tone: 'acid',
  },
  {
    slug: 'leanlogiclab',
    title: 'LeanLogicLab',
    eyebrow: 'Private product lab',
    year: '2026',
    status: 'showcase',
    visibility: 'showcase',
    featured: true,
    summary: 'A private build space where I test product, content, fitness and nutrition ideas without pretending every prototype is a launch.',
    description:
      'LeanLogicLab is intentionally presented at the product level for now. It is where I combine software, structured content and visual experimentation, while keeping implementation details private until the system is ready for a cleaner public release.',
    highlights: [
      'Product and content systems developed in parallel',
      'Private implementation; public-facing experiments only',
      'A useful test bed for AI-assisted production workflows',
      'Designed to evolve without turning every experiment into a separate product',
    ],
    stack: ['Product design', 'Web apps', 'Content systems', 'AI-assisted workflow'],
    links: [
      { label: 'Visual side', href: 'https://www.instagram.com/leanlogiclab/', kind: 'external' },
    ],
    note: 'Still mutating on purpose.',
    tone: 'orange',
  },
];

export const smallerProjects = [
  {
    title: 'Odisha Gratuity Calculator',
    summary: 'Transparent browser-based gratuity estimates based on OCS Pension Rules, 1992.',
    href: 'https://github.com/11sid11/gratuity-calculator-odisha',
  },
  {
    title: 'Pay Fixation Calculator',
    summary: 'A focused utility for Odisha state pay-fixation calculations.',
    href: 'https://github.com/11sid11/payfixation-calculator-odisha',
  },
] as const;

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
