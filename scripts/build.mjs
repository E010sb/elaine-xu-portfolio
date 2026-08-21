import { cp, mkdir, rm } from "node:fs/promises";

const outputDirectory = new URL("../dist/", import.meta.url);
const projectDirectory = new URL("../", import.meta.url);
const pathsToPublish = [
  "index.html",
  "about",
  "case-studies",
  "public",
  "src",
];

await rm(outputDirectory, { recursive: true, force: true });
await mkdir(outputDirectory, { recursive: true });

for (const path of pathsToPublish) {
  await cp(
    new URL(path, projectDirectory),
    new URL(path, outputDirectory),
    { recursive: true },
  );
}

const threeBuildDirectory = new URL("../node_modules/three/build/", import.meta.url);
const publishedThreeDirectory = new URL("node_modules/three/build/", outputDirectory);
await mkdir(publishedThreeDirectory, { recursive: true });
await cp(
  new URL("three.module.min.js", threeBuildDirectory),
  new URL("three.module.min.js", publishedThreeDirectory),
);

console.log("Static portfolio prepared in dist/.");
