export type ProjectVisibility = 'public' | 'showcase';
export type ProjectStatus = 'shipped' | 'active' | 'showcase';

export interface ProjectLink {
  label: string;
  href: string;
  kind: 'live' | 'source' | 'external';
}

export interface ProjectPreview {
  src?: string;
  alt: string;
  address: string;
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
  problem: string;
  solution: string;
  outcome: string;
  highlights: string[];
  stack: string[];
  links: ProjectLink[];
  preview: ProjectPreview;
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
    summary: 'I wanted everyday money tracking without an account, a bank connection, or a backend quietly holding the data.',
    problem:
      'Most money apps begin by asking for trust: create an account, connect a bank, and send private financial history somewhere else. That is too much ceremony—and too much exposure—for tracking a purchase, splitting a trip, or remembering a loan.',
    solution:
      'I built AfterSum as an offline-first PWA with three explicit ledgers: Track, Split and Lend. Operational data stays in the browser, while backup, export, recovery and updates are treated as product features rather than afterthoughts.',
    outcome:
      'The result is a useful finance tool that works before sign-in because there is no sign-in. People can understand where their data lives, move it when they want, and use the core product without a network connection.',
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
    preview: {
      src: '/work/dev/aftersum.webp',
      alt: 'AfterSum overview showing personal spending, split balances and lending balances',
      address: 'sid.is-a.dev/AfterSum',
    },
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
    summary: 'I needed to clean years of X activity without giving an unknown service my account, token, or trust.',
    problem:
      'Bulk-cleaning likes and replies is repetitive enough to automate, but the usual shortcuts move account access to a third-party server. Long-running browser jobs also fail in messy ways when the page changes, rate limits appear, or a tab is interrupted.',
    solution:
      'I made Batchd run inside the browser session the user already controls. A userscript and Chrome extension share the same modular core, with dry runs, typed confirmation, pacing, resumable progress and failure classification built into the workflow.',
    outcome:
      'Cleanup stays local, observable and interruptible. The user can preview the operation, stop it, resume it and understand what succeeded without handing credentials to another service.',
    highlights: [
      'No OAuth token, credential collection or hosted backend',
      'Shared modular source for Tampermonkey and Chrome MV3 targets',
      'Dry-run mode, resumable progress and category-aware pacing',
      'Failure classification, backoff and DOM selector isolation',
    ],
    stack: ['JavaScript', 'Chrome MV3', 'Tampermonkey', 'Browser APIs'],
    links: [{ label: 'Source', href: 'https://github.com/11sid11/Batchd', kind: 'source' }],
    preview: {
      src: '/work/dev/batchd.webp',
      alt: 'Batchd browser tool showing cleanup controls, progress totals and a running activity log',
      address: 'github.com/11sid11/Batchd',
    },
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
    summary: 'I wanted a Spotify playlist to keep itself current without paying for—or maintaining—an always-on backend.',
    problem:
      'A playlist mirror is a small job with awkward infrastructure. It needs scheduled access, state and update handling, but running a server for it adds cost and maintenance that are larger than the problem itself.',
    solution:
      'I moved the automation into a Google Sheet-bound Apps Script. The user chooses a source, target, sync behavior and interval; an adaptive dispatcher handles manual runs and scheduled jobs inside infrastructure they already own.',
    outcome:
      'The playlist keeps itself synchronized without a subscription or permanent server. Installation and updates remain approachable for people who do not want to manage a deployment stack.',
    highlights: [
      'Runs inside the user’s own Google Apps Script environment',
      'Hourly and day-based scheduling through one adaptive dispatcher',
      'Installer and update flow designed for non-developers',
      'Focused regression coverage around scheduling and state',
    ],
    stack: ['Google Apps Script', 'Spotify Web API', 'JavaScript', 'GitHub Actions'],
    links: [
      { label: 'Install', href: 'https://sid.is-a.dev/Spoti-sync/', kind: 'live' },
      { label: 'Source', href: 'https://github.com/11sid11/Spoti-sync', kind: 'source' },
    ],
    preview: {
      src: '/work/dev/spoti-sync.webp',
      alt: 'Spoti Sync website showing a Liked Songs source flowing to a Shareable Likes target',
      address: 'sid.is-a.dev/Spoti-sync',
    },
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
    summary: 'I wanted weather to feel less like a dashboard and more like a doorway into somewhere else.',
    problem:
      'Conventional weather products are good at reporting conditions and bad at creating curiosity. A temperature and an icon can be useful, but they do not capture what a place feels like or give the visitor anywhere meaningful to go next.',
    solution:
      'Rituon starts with the atmosphere around you, finds a distant city with a similar sky, and turns that match into a live local-radio journey. Weather becomes the route into place, sound and serendipity.',
    outcome:
      'The experience answers a practical question, then gives it emotional payoff. Visitors do not just read the weather; they briefly inhabit another city that feels strangely close to their own.',
    highlights: [
      'Atmospheric city matching instead of a conventional weather dashboard',
      'Live radio discovery as the payoff, not a decorative extra',
      'Client-side product with explicit provider and privacy boundaries',
      'Responsive sky system with reduced-motion support',
    ],
    stack: ['React', 'TypeScript', 'Vite', 'Public APIs'],
    links: [{ label: 'Visit Rituon', href: 'https://rituon.com', kind: 'live' }],
    preview: {
      src: '/work/dev/rituon.webp',
      alt: 'Rituon interface under a night sky inviting visitors to find a city that feels like theirs',
      address: 'rituon.com',
    },
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
    summary: 'I had a useful question bank in Obsidian and no reason to copy it into a second, harder-to-maintain system.',
    problem:
      'Study content is easy to edit in Markdown and awkward to turn into a reliable exam interface. Duplicating questions into a database or CMS would create two sources of truth and make corrections harder to trace.',
    solution:
      'I built a compiler that turns the structured Obsidian bank into the JSON and static pages used by an offline-capable mock-test PWA. The app supports timed tests, chapter drills, scoring and links back to the source notes.',
    outcome:
      'The writing workflow stays simple while the learner gets a focused exam product. One version-controlled content source now powers practice modes without requiring a backend.',
    highlights: [
      'Markdown-to-JSON and static-page build pipeline',
      'Offline-capable PWA with multiple test modes',
      'Question-level traceability back to source notes',
      'Content workflow built around a version-controlled knowledge vault',
    ],
    stack: ['Python', 'JavaScript', 'PWA', 'Markdown', 'GitHub Pages'],
    links: [
      { label: 'Open app', href: 'https://11sid11.github.io/Mockaroo/', kind: 'live' },
      { label: 'Source', href: 'https://github.com/11sid11/Mockaroo', kind: 'source' },
    ],
    preview: {
      src: '/work/dev/mockaroo.webp',
      alt: 'Mockaroo command center showing SSC CGL mock-test actions and question-bank statistics',
      address: 'sid.is-a.dev/Mockaroo',
    },
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
    summary: 'A private lab for making diet, training and everyday fitness decisions less noisy. Still cooking—deliberately.',
    problem:
      'Fitness advice is abundant, contradictory and often detached from the decisions people actually make during a normal week. Turning more information into another feed would only add to the noise.',
    solution:
      'I am testing a private product system around diet, workouts and practical decision support. The public view stays high-level while the useful interaction model, content structure and boundaries are still being proven.',
    outcome:
      'For now, the honest result is a focused lab rather than a premature launch. The direction is clear, the implementation remains private, and only the parts that survive testing will become public.',
    highlights: [
      'Diet and training guidance organized around everyday decisions',
      'Product and content systems developed together',
      'Private implementation with selected public-facing experiments',
      'Designed to evolve without launching every prototype',
    ],
    stack: ['Product design', 'Web apps', 'Content systems', 'AI-assisted workflow'],
    links: [{ label: 'Visual side', href: 'https://www.instagram.com/leanlogiclab/', kind: 'external' }],
    preview: {
      alt: 'LeanLogicLab private product coming-soon preview',
      address: 'private-lab.local',
    },
    note: 'Coming soon. The useful parts are still being tested.',
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
