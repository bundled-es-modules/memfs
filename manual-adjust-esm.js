import { readFileSync, writeFileSync } from "node:fs";

const fileBefore = readFileSync("./index-esm.js", "utf-8");
const process = readFileSync("./process.js", "utf-8");

/**
 * Manually fix some issues with process global being unavailable
 * and Buffer not being set to the shim properly....
 * Remove when https://github.com/streamich/memfs/pull/977 gets released
 */
const fileAfter = `${process}

${fileBefore}`;

writeFileSync("./index-esm.js", fileAfter);
