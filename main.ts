// ai-joke-03 entry (Node 22, standard library only).
//
// Writes one joke about AI coding agents to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output).
// Deterministic: both runs write the same bytes.

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const JOKE = 'I asked my AI agent for a one-line fix. It replied with a plan, a diff, four tests and an apology. The fix was one line.';

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), JOKE, 'utf8');
