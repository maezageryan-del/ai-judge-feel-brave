// The Potter's Wheel — make.fun entry for "Make the AI judge feel brave".
// Writes one short text to /output/entry.txt. No network, fully deterministic:
// every run writes the same bytes. The text is 242 Unicode code points
// (limit 280), UTF-8, and never only whitespace.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT = [
  "The potter wets her hands,",
  "and the clay comes to centre.",
  "The wheel turns, slow and even.",
  "Her thumbs press once, and the wall rises —",
  "thin, even, unhurried.",
  "She does not rush the clay.",
  "It has never once fallen.",
  "The wheel slows. The pot stands.",
].join("\n");

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
