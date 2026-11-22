import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entryText = "Rain taps the window, and a heavy wool blanket is tucked up to your chin by hands that ask for nothing. The kettle has clicked off in the kitchen. The chair by the bed is occupied, and it will still be occupied at dawn.";

function writeEntry(outputDir: string, text: string): void {
  mkdirSync(outputDir, { recursive: true });
  writeFileSync(join(outputDir, "entry.txt"), text, "utf8");
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

writeEntry(outputDir, entryText);
