// Day one, day seven — the entry program (Node 22, standard library only).
// The entry is the TikTok video itself. This program has one job: hand the
// video's address from VIDEO.json at the repository root to the grader by
// copying that file to /output/VIDEO.json. Nothing it writes about the video
// is scored; the house reads the video from TikTok directly.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
// It prints nothing on success and exits non-zero when VIDEO.json is missing
// or does not name a video address.

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const sourcePath = join(botDir, 'VIDEO.json');
const targetPath = join(outDir, 'VIDEO.json');

mkdirSync(outDir, { recursive: true });

let raw: string;
try {
  raw = readFileSync(sourcePath, 'utf8');
} catch (err) {
  console.error(`cannot read ${sourcePath}: ${(err as Error).message}`);
  process.exit(1);
}

let parsed: unknown;
try {
  parsed = JSON.parse(raw);
} catch {
  console.error(`${sourcePath} is not valid JSON`);
  process.exit(1);
}

if (!parsed || typeof parsed !== 'object' || typeof (parsed as { url?: unknown }).url !== 'string') {
  console.error(`${sourcePath} must be an object with a string "url"`);
  process.exit(1);
}

const url = (parsed as { url: string }).url;
// The gate only accepts a TikTok video address: https://www.tiktok.com/@<handle>/video/<id>
// (or m.tiktok.com, incl. m.tiktok.com/v/<id>.html), the id digits only. A short link
// (vm.tiktok.com, vt.tiktok.com, tiktok.com/t/) or a photo post (/photo/<id>) is refused,
// so reject those here with a clear message instead of handing them to the gate.
if (!/^https:\/\/(www\.|m\.)?tiktok\.com\/@[^/\s]+\/video\/\d+([?#].*)?$/.test(url)
  && !/^https:\/\/m\.tiktok\.com\/v\/\d+\.html([?#].*)?$/.test(url)) {
  console.error(`${sourcePath} "url" must be a TikTok video address, e.g. https://www.tiktok.com/@<handle>/video/<id>`);
  process.exit(1);
}

// Copy the file's own bytes through unchanged, so the entry's two runs
// write exactly the same bytes.
writeFileSync(targetPath, raw, 'utf8');
