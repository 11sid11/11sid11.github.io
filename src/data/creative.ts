export interface CreativeWork {
  slug: string;
  title: string;
  category: 'YouTube / Gaming' | 'Brand Content' | 'Visual Experiments';
  year: string;
  featured: boolean;
  summary: string;
  description: string;
  services: string[];
  media: Array<{ src: string; alt: string }>;
  links?: Array<{ label: string; href: string }>;
  note?: string;
}

export const creativeWork: CreativeWork[] = [
  {
    slug: 'gaming-thumbnails',
    title: 'Gaming thumbnail studies',
    category: 'YouTube / Gaming',
    year: 'Selected work',
    featured: true,
    summary: 'High-energy compositions built to make the subject readable before the viewer has time to think about it.',
    description:
      'These thumbnail studies use aggressive focal hierarchy, subject separation, lighting, typography and controlled visual noise. The goal is not “more effects”; it is making the promise of the video understandable at feed speed.',
    services: ['Thumbnail design', 'Compositing', 'Typography', 'Visual hierarchy'],
    media: [
      { src: '/work/creative/finals-archer.webp', alt: 'Gaming thumbnail design with a central archer character and bold The Finals typography' },
      { src: '/work/creative/finals-clutch.webp', alt: 'Gaming thumbnail design for The Finals with red action composition and Insane Clutch headline' },
      { src: '/work/creative/deadlock-fun.webp', alt: 'Gaming thumbnail design for Deadlock with action gameplay composition and bold yellow title' },
    ],
  },
  {
    slug: 'retention-editing',
    title: 'Retention-focused editing',
    category: 'YouTube / Gaming',
    year: 'Ongoing',
    featured: true,
    summary: 'Editing around attention: remove the drag, preserve the personality, and reset the viewer before the video goes flat.',
    description:
      'My editing process is built around pacing rather than decoration. I look for slow intros, repetitive sequences, dead air, weak transitions and moments where the viewer has already understood the point. Then I use cuts, subtitles, sound, zooms, memes and visual resets only where they earn their place.',
    services: ['Long-form YouTube', 'Gaming edits', 'Shorts', 'Pacing', 'Subtitles', 'Sound design'],
    media: [],
    note: 'First-draft turnaround can be as fast as 24 hours when the brief is clear.',
  },
  {
    slug: 'cult-fit-bhubaneswar',
    title: 'Cult Fit Bhubaneswar launch',
    category: 'Brand Content',
    year: 'Client work',
    featured: true,
    summary: 'Launch-film editing for the Bhubaneswar opening, built for social energy rather than corporate-event pacing.',
    description:
      'A branded launch edit shaped around momentum, music and rapid visual payoff. The work sits within a broader run of fitness-industry editing where the job was to make training, trainers and spaces feel immediate on social platforms.',
    services: ['Launch video', 'Social edit', 'Pacing', 'Brand content'],
    media: [],
  },
  {
    slug: 'visual-experiments',
    title: 'Visual experiments',
    category: 'Visual Experiments',
    year: 'Ongoing',
    featured: true,
    summary: 'Graphics, content systems and ideas that do not need a client brief to justify existing.',
    description:
      'Some work starts as a product experiment, some as a visual system, and some because I wanted to see if an idea would survive contact with an actual feed. LeanLogicLab and Unblurbrief are two places where that work shows up in public while I curate the portfolio archive more selectively here.',
    services: ['Social design', 'Creative direction', 'Content systems', 'Experiments'],
    media: [],
    links: [
      { label: '@leanlogiclab', href: 'https://www.instagram.com/leanlogiclab/' },
      { label: '@unblurbrief', href: 'https://www.instagram.com/unblurbrief/' },
    ],
  },
];

export function getCreativeWork(slug: string) {
  return creativeWork.find((work) => work.slug === slug);
}
