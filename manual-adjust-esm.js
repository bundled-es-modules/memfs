import { readFileSync, writeFileSync } from 'node:fs';

const fileBefore = readFileSync('./index-esm.js', 'utf-8');
const process = readFileSync('./process.js', 'utf-8');

/**
 * Manually fix some issues with process global being unavailable
 * and Buffer not being set to the shim properly....
 */
const fileAfter = `${process}
var Buffer;
${fileBefore
    .replace('exports.Buffer = Buffer2;', 'exports.Buffer = Buffer2;\n Buffer = Buffer2;')
}`;

writeFileSync('./index-esm.js', fileAfter);