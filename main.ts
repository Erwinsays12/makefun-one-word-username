import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// One Word, One Username, One Reward
// The entry is the entrant's own make.fun username, one word and nothing
// else: "erwin-x". The gate requires /output/entry.txt to be UTF-8 text of
// 1 to 30 characters, not only white space, so the file holds exactly the
// seven username characters with no trailing newline and no padding.
const USERNAME = "erwin-x";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", USERNAME, "utf8");

// Self-check against the gate before exiting: the written file must read
// back as exactly the username, 1 to 30 characters and not only white space.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== USERNAME) {
  throw new Error(`entry.txt mismatch: expected ${JSON.stringify(USERNAME)}`);
}
if (written.length < 1 || written.length > 30 || /^\s*$/.test(written)) {
  throw new Error(`entry.txt fails the gate: ${JSON.stringify(written)}`);
}
