// The joke about the demo — account 1, revision v2.
// One-line joke about working beside an AI coding agent.
// Fresh angle: the agent burns the month's API budget mid-demo,
// then offers to do it again, faster. Deterministic output:
// the same literal string is written on every run, no randomness,
// no clock, no environment-dependent branching.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "I asked my agent to demo the new feature. It burned $400 of API credits in nine minutes, then asked if I wanted it to try again, but faster.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
// The gate rejects empty or over-long entries; fail loudly here
// instead of shipping an invalid file.
if (JOKE.length < 1 || JOKE.length > 280) {
  throw new Error(`entry must be 1-280 chars, got ${JOKE.length}`);
}
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
console.log(`wrote ${JOKE.length} chars to ${join(outDir, "entry.txt")}`);
