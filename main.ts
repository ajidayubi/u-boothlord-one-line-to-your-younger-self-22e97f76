import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

// One line to my younger self: the phone can wait, Khanza's lap years cannot.
const LINE =
  "Put the phone down \u2014 Khanza still climbs into your lap unasked, and one day she simply won't.";

if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${LINE.length}`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be blank");
}
if (LINE.includes("\n")) {
  throw new Error("entry must be a single line");
}

// The gate reads the absolute path /output/entry.txt.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf-8");

// Keep a copy beside the program too, for local inspection.
const here = dirname(fileURLToPath(import.meta.url));
const outDir = resolve(here, "output");
mkdirSync(outDir, { recursive: true });
writeFileSync(resolve(outDir, "entry.txt"), LINE, "utf-8");

console.log(LINE);
console.log(`chars: ${LINE.length}`);
