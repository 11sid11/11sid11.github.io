export interface CreativeWork {
  slug: string;
  title: string;
  category: 'YouTube / Gaming' | 'Brand Content' | 'Visual Experiments';
  year: string;
  featured: boolean;
  summary: string;
  problem: string;
  approach: string;
  result: string;
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
    summary: 'I design the frame to read before the viewer has time to negotiate with it.',
    problem:
      'A gaming thumbnail gets one small, crowded glance in a fast feed. If the subject, emotion and promise compete for attention, the viewer moves on before any of them lands.',
    approach:
      'I build one dominant read first, then use separation, lighting, typography and controlled visual noise to support it. Effects stay only when they help the subject survive at actual thumbnail size.',
    result:
      'Each composition communicates its idea immediately: high stakes, a surprising character moment, or chaotic fun. The energy is loud; the hierarchy underneath it is disciplined.',
    services: ['Thumbnail design', 'Compositing', 'Typography', 'Visual hierarchy'],
    media: [
      { src: '/work/creative/finals-archer.webp', alt: 'Gaming thumbnail with a central archer character and bold The Finals typography' },
      { src: '/work/creative/finals-clutch.webp', alt: 'The Finals gaming thumbnail with a red action composition and Insane Clutch headline' },
      { src: '/work/creative/deadlock-fun.webp', alt: 'Deadlock gaming thumbnail with an action composition and bold yellow title' },
    ],
  },
  {
    slug: 'retention-editing',
    title: 'Retention-focused editing',
    category: 'YouTube / Gaming',
    year: 'Ongoing',
    featured: true,
    summary: 'I cut the drag without sanding away the reason someone wanted to watch the creator in the first place.',
    problem:
      'Long-form gaming footage often hides its best moments behind slow intros, repeated beats and pauses that felt natural while recording but feel expensive during playback.',
    approach:
      'I find where the viewer has already understood the point, then cut or reset the rhythm. Subtitles, sound, zooms and memes are used as pacing tools—not a layer of decoration over every second.',
    result:
      'The finished edit moves with intent while preserving personality. Quieter moments still exist; they simply arrive because the story needs them rather than because the timeline was left untouched.',
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
    summary: 'A launch edit shaped for social energy, not the pace of an event recap.',
    problem:
      'Opening-day footage can easily become a chronological record: useful to the people who attended, but too slow and predictable to make the space feel alive on social media.',
    approach:
      'I organized the edit around momentum, music and rapid visual payoff. Training, trainers and the new space appear as one energetic experience instead of a checklist of event moments.',
    result:
      'The launch feels immediate and physical. The piece introduces the location while retaining the pace and confidence expected from a fitness brand.',
    services: ['Launch video', 'Social edit', 'Pacing', 'Brand content'],
    media: [],
  },
  {
    slug: 'visual-experiments',
    title: 'Visual experiments',
    category: 'Visual Experiments',
    year: 'Ongoing',
    featured: true,
    summary: 'This is where I let an idea earn its structure before pretending it deserves a campaign.',
    problem:
      'Not every useful visual direction begins with a client brief. Some need room to fail, mutate and reveal whether they are a one-off image or the beginning of a repeatable system.',
    approach:
      'I test graphics, content formats and product-adjacent ideas in public-facing labs such as LeanLogicLab and Unblurbrief, then keep only the patterns that remain useful beyond the first post.',
    result:
      'The experiments feed better systems rather than filling an archive. What appears here has either taught me something reusable or become strong enough to stand on its own.',
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
