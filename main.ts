import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One word, the way Grandma would text it about AI.
// "robit" is the typo she would actually make when she means
// "robot": one letter slipped, and suddenly the whole message
// sounds warm, a little baffled, and exactly like Grandma.
// It is tied to machines, it is funny all on its own, and it
// is still instantly readable as the word she meant to type.
const WORD = "robit";

// The output directory is provided by the grader.
// Fall back to /output so the program also runs locally.
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

// The sealed gate needs 1 to 30 characters of real text.
// Refuse anything blank or out of range before writing a file.
if (WORD.length < 1 || WORD.length > 30) {
  throw new Error("Chosen word must be 1 to 30 characters long.");
}
if (WORD.trim().length === 0) {
  throw new Error("Chosen word must not be only whitespace.");
}

// Create the output directory if needed, then write the word.
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, WORD + "\n");

// Report the result so a local run shows what was written.
console.log(`Wrote one word (${WORD.length} characters) to ${outPath}.`);
