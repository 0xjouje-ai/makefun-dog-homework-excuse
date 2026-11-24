import { mkdirSync, writeFileSync } from "node:fs";

const line = "I didn't eat your homework — I filed it. In my stomach. That's where I keep all the important stuff.";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
