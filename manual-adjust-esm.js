import { readFile, writeFile, cp } from "node:fs/promises";
import { glob } from "glob";

const fileBefore = await readFile("./index-esm.js", "utf-8");
const process = await readFile("./process.js", "utf-8");

/**
 * Manually fix some issues with process global being unavailable
 * and Buffer not being set to the shim properly....
 * Remove when https://github.com/streamich/memfs/pull/977 gets released
 */
const fileAfter = `${process}

${fileBefore}`;

await writeFile("./index-esm.js", fileAfter);

const memfsLibFolder = "node_modules/memfs/lib";
const dtsFiles = await glob(`./${memfsLibFolder}/**/*.d.ts`);
await Promise.all(
  dtsFiles.map((f) =>
    cp(f, f.replace(`${memfsLibFolder}/`, ""), { recursive: true })
  )
);
