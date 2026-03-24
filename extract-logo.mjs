// extract-logo.mjs  —  final: paint text → circular crop → remove white bg
// Run:  node extract-logo.mjs

import sharp from 'sharp';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const inputPath  = path.join(__dirname, 'public', 'images', 'Ekambond-2.jpeg');
const outputPath = path.join(__dirname, 'public', 'images', 'ekambond-logo.png');

async function extractLogo() {
  const { width, height } = await sharp(inputPath).metadata();
  console.log(`Source: ${width}×${height}`);

  // ── Stage 1: Paint white from y=410 downward (eliminates text) ────────
  const PAINT_FROM_Y = 410;
  const CX   = 509;
  const CY   = 209;
  const HALF = 203;

  const paintHeight = height - PAINT_FROM_Y;
  const whiteRect = await sharp({
    create: { width, height: paintHeight, channels: 3, background: { r: 255, g: 255, b: 255 } }
  }).png().toBuffer();

  const painted = await sharp(inputPath)
    .composite([{ input: whiteRect, top: PAINT_FROM_Y, left: 0 }])
    .png()
    .toBuffer();

  // ── Stage 2: Square crop centred on emblem ────────────────────────────
  const cropLeft = Math.max(0, CX - HALF);
  const cropTop  = Math.max(0, CY - HALF);
  const cropSize = Math.min(HALF * 2, width - cropLeft, height - cropTop);
  console.log(`Crop: left=${cropLeft} top=${cropTop} size=${cropSize}`);

  const squared = await sharp(painted)
    .extract({ left: cropLeft, top: cropTop, width: cropSize, height: cropSize })
    .png()
    .toBuffer();

  // ── Stage 3: Circular transparent mask ────────────────────────────────
  const r = Math.round(cropSize / 2);
  const circleMask = Buffer.from(
    `<svg width="${cropSize}" height="${cropSize}"><circle cx="${r}" cy="${r}" r="${r}" fill="white"/></svg>`
  );

  const circular = await sharp(squared)
    .composite([{ input: circleMask, blend: 'dest-in' }])
    .png()
    .toBuffer();

  // ── Stage 4: Remove near-white/cream background pixels ────────────────
  // The JPEG source has a white/cream background (#FAFAF8 to #FFFFFF range).
  // We convert to raw RGBA, zero the alpha of any pixel that is:
  //   R > 230 AND G > 225 AND B > 215 (catches both white and warm cream)
  // and is NOT part of the emblem artwork (which is red, gold, orange, green).
  const { data, info } = await sharp(circular)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width: W, height: H, channels } = info;  // channels = 4

  for (let i = 0; i < data.length; i += channels) {
    const alpha = data[i + 3];
    if (alpha === 0) continue; // already transparent (outside circle)

    const red   = data[i];
    const green = data[i + 1];
    const blue  = data[i + 2];

    // Near-white / near-cream: make transparent
    // Keeps: reds (couple), golds/oranges (decoration), dark maroon (ring), greens
    const isNearWhite = red > 225 && green > 218 && blue > 205;
    if (isNearWhite) {
      data[i + 3] = 0; // fully transparent
    }
  }

  // ── Stage 5: Write final PNG and trim any outer transparent border ─────
  const bgRemoved = await sharp(Buffer.from(data), {
    raw: { width: W, height: H, channels }
  })
  .png({ quality: 100, compressionLevel: 0 })
  .toBuffer();

  // trim() removes the matching corner pixel (transparent) from all sides
  await sharp(bgRemoved)
    .trim({ threshold: 0 })          // remove fully-transparent edge rows/cols
    .png({ quality: 100, compressionLevel: 0 })
    .toFile(outputPath);

  const finalMeta = await sharp(outputPath).metadata();
  console.log(`\n✅  ekambond-logo.png  →  ${finalMeta.width}×${finalMeta.height} px  (transparent bg, tight crop)\n`);
}

extractLogo().catch(err => { console.error('❌', err); process.exit(1); });
