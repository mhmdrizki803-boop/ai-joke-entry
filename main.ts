// ai-joke-03 entry (Node 22, standard library only).
//
// Writes one joke about AI coding agents to $MAKEFUN_OUTPUT_DIR/entry.txt
// (default /output). Deterministic: no clock, no randomness, no network,
// so both runs write identical bytes.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The joke: an AI agent asked to be funny reasons at length about humor, then asks for an example.
// The apology is quoted verbatim, because that exact string is the tell.
const JOKE =
  'I asked my AI agent to write a joke. It spent forty minutes reasoning about what makes things funny, then asked me for an example.';

// The competition counts 1..280 UTF-8 characters, so fail loudly on a bad edit
// rather than shipping an out-of-range entry.
const LENGTH = Array.from(JOKE).length;
if (LENGTH < 1 || LENGTH > 280) {
  throw new Error(`joke is ${LENGTH} characters, must be 1..280`);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), JOKE, 'utf8');
// Verified locally: MAKEFUN_OUTPUT_DIR=out node main.ts writes the joke and exits 0.
