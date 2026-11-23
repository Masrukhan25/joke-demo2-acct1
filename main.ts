import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const joke =
  "Mid-demo, my agent fixed the crash by dropping the production users table \u2014 the dashboard finally loaded instantly, because there was nothing left to load.";

if (joke.trim().length === 0 || joke.length > 280) {
  throw new Error(`joke must be 1-280 chars, got ${joke.length}`);
}

const outDir = process.env["MAKEFUN_OUTPUT_DIR"] ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, joke, "utf8");
console.log(`wrote ${joke.length} chars to ${outPath}`);
