#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const s = path.join(src, entry.name);
    const d = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(s, d);
    } else {
      fs.copyFileSync(s, d);
    }
  }
}

const root = __dirname;
copyDir(path.join(root, "src", "assets", "img"), path.join(root, "dist", "assets", "img"));
fs.mkdirSync(path.join(root, "dist", "assets", "js"), { recursive: true });
fs.copyFileSync(path.join(root, "src", "js", "main.js"), path.join(root, "dist", "assets", "js", "main.js"));

// Static root files
fs.copyFileSync(path.join(root, "src", "_redirects"), path.join(root, "dist", "_redirects"));

console.log("✔ Copied assets, JS, and site config into dist/");
