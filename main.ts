import { mkdirSync, writeFileSync } from "node:fs";

// One line to my younger self: the phone can wait, Khanza's lap years cannot.
const LINE =
  "Put the phone down — Khanza still climbs into your lap unasked, and one day she simply won't.";

if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${LINE.length}`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be blank");
}
if (LINE.includes("\n")) {
  throw new Error("entry must be a single line");
}
if (LINE !== LINE.trim()) {
  throw new Error("entry must not start or end with whitespace");
}

// The gate reads the absolute path /output/entry.txt. Write only there:
// the grader runs with the repository mounted read-only, so nothing may
// be written beside the program.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf-8");

console.log(LINE);
console.log(`chars: ${LINE.length}`);
