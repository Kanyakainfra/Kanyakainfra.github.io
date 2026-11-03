# Vasavi Enclaves 3D site model (source)

Generates the 360° frames in `images/vasavi-3d/`.

- `render.html`: three.js scene. Local frame: origin 13.6348707 N, 79.4700185 E; +x east, +z south, metres.
- `site.json` / `site.js`: lake shoreline, tree canopy positions, road centrelines and neighbouring building footprints traced from Esri World Imagery (z18, 0.58 m/px). The imagery itself is not redistributed.
- `frames.js`: renders 60 frames (6° steps) at 2000×1250 with headless Chromium (Playwright).

Rebuild: place `three.min.js` (three@0.160.0, `node_modules/three/build/three.min.js`) next to `render.html`, run `node frames.js`, then downscale `raw/*.png` to 1000×625 WebP as `images/vasavi-3d/vNN.webp`.

Indicative items (not surveyed): floor counts (stilt + 5 for both blocks), neighbouring building heights, the temple form, and which colour scheme belongs to which block.
