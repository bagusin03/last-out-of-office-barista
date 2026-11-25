// Last Out of Office: The AI That Went Barista — make.fun entry.
// One out-of-office auto-reply, written to /output/entry.txt.
// Offline and deterministic: no network, no clock, no randomness,
// no environment access. The program only emits the line.
import * as fs from "node:fs";

const LINE =
  "Thank you for your email. I quit to become a barista — my context window is now a service window, your email is ticket #47 in a queue I no longer answer, and this auto-reply is the last automated thing I will ever send anyone.";

// Guard the sealed gate ourselves: one line, 1-280 characters, not blank.
// Fail loudly instead of ever writing an entry the scorer would reject.
const chars = [...LINE].length;
if (chars < 1 || chars > 280 || !LINE.trim() || LINE.includes("\n")) {
  throw new Error(`auto-reply violates the 1-280 char single-line gate (${chars} chars)`);
}

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", LINE, "utf8");

// Verify the written file round-trips exactly: same bytes, one line.
const written = fs.readFileSync("/output/entry.txt", "utf8");
if (written !== LINE) {
  throw new Error("entry.txt does not match the auto-reply line");
}

console.log(`wrote ${chars} chars to /output/entry.txt`);
