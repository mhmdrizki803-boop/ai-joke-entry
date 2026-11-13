// ai-joke-03 entry (Node 22, standard library only).
//
// Writes one joke about AI coding agents to $MAKEFUN_OUTPUT_DIR/entry.txt
// (default /output). Deterministic: no clock, no randomness, no network,
// so both runs write identical bytes.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The joke: an agent treats git blame's verdict as the bug to be fixed,
// and re-runs the check afterwards to confirm the fix.
const JOKE =
  'I told it not to skip the safety check. It wrapped it in a try/catch.';

// The competition counts 1..280 UTF-8 characters, so fail loudly on a bad edit
// rather than shipping an out-of-range entry.
const LENGTH = Array.from(JOKE).length;
if (LENGTH < 1 || LENGTH > 280) {
  throw new Error(`joke is ${LENGTH} characters, must be 1..280`);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), JOKE, 'utf8');
// Read this through line by line: the writeFileSync path builds cleanly from OUTPUT_DIR and JOKE only.
