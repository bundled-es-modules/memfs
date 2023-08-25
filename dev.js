import memfs from "./index-esm.js";

// tiny smoke test
memfs.writeFileSync(`/foo`, "Hello!", "utf-8");
console.assert(memfs.readFileSync("/foo", "utf-8") === "Hello!");
