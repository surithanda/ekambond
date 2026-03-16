// generate-favicon.mjs
// Generates favicon-32.png, favicon-16.png, and apple-touch-icon.png from the EkamBond logo.
// Run: node generate-favicon.mjs
//
// Requires: sharp (already installed as a Next.js dependency)

import sharp from 'sharp';
import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const inputPath = path.join(__dirname, 'public', 'Ekambond-3.jpeg');
const outputDir = path.join(__dirname, 'public');

// Crop to the logo emblem area (roughly the top 75% of the image, centered)
// The logo has a lot of white margin — we crop tight around the circle mark.
// Image is 1024x512 (landscape), the emblem is centered, roughly x=200..820, y=10..490
const CROP_LEFT   = 220;
const CROP_TOP    = 10;
const CROP_WIDTH  = 600;
const CROP_HEIGHT = 490;

async function generate() {
  console.log('Reading source logo:', inputPath);

  const pipeline = sharp(inputPath).extract({
    left: CROP_LEFT,
    top: CROP_TOP,
    width: CROP_WIDTH,
    height: CROP_HEIGHT,
  });

  // 180×180 Apple Touch Icon
  await pipeline
    .clone()
    .resize(180, 180, { fit: 'cover', position: 'centre' })
    .png()
    .toFile(path.join(outputDir, 'apple-touch-icon.png'));
  console.log('✅  apple-touch-icon.png (180×180) created');

  // 32×32 favicon
  await pipeline
    .clone()
    .resize(32, 32, { fit: 'cover', position: 'centre' })
    .png()
    .toFile(path.join(outputDir, 'favicon-32.png'));
  console.log('✅  favicon-32.png (32×32) created');

  // 16×16 favicon
  await pipeline
    .clone()
    .resize(16, 16, { fit: 'cover', position: 'centre' })
    .png()
    .toFile(path.join(outputDir, 'favicon-16.png'));
  console.log('✅  favicon-16.png (16×16) created');

  console.log('\nDone! All favicons written to /public.');
  console.log('The layout.tsx already references these files via metadata.icons.');
}

generate().catch((err) => {
  console.error('❌  Error generating favicons:', err);
  process.exit(1);
});
