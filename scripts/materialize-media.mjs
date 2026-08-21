import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const sourceRoot = join(root, 'scripts', 'media-source');
const outputRoot = join(root, 'public', 'work', 'creative');

const assets = [
  { source: 'finals-archer', output: 'finals-archer.avif' },
  { source: 'finals-clutch', output: 'finals-clutch.avif' },
  { source: 'deadlock-fun', output: 'deadlock-fun.avif' },
];

await mkdir(outputRoot, { recursive: true });

for (const asset of assets) {
  const manifestPath = join(sourceRoot, `${asset.source}.manifest`);
  const manifest = (await readFile(manifestPath, 'utf8'))
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean);

  if (manifest.length === 0) {
    throw new Error(`No media chunks listed in ${manifestPath}`);
  }

  const chunks = await Promise.all(
    manifest.map((part) => readFile(join(sourceRoot, part), 'utf8')),
  );
  const encoded = chunks.join('').replace(/\s+/g, '');
  const decoded = Buffer.from(encoded, 'base64');

  if (decoded.length < 40_000) {
    throw new Error(`Decoded ${asset.output} is unexpectedly small (${decoded.length} bytes)`);
  }

  await writeFile(join(outputRoot, asset.output), decoded);
}
