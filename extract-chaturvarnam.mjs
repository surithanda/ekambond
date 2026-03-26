// extract-chaturvarnam.mjs
// Processes all 3 Chaturvarnam images:
//   → *-logo.png  : circular emblem only, transparent background, no text
//   → *-text.png  : "CHATURVARAM / A Non-profit Matrimony" text only, transparent
// Run: node extract-chaturvarnam.mjs

import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const imgDir = path.join(__dirname, 'public', 'images');

// ─── Helper: make near-white / near-cream pixels transparent ─────────────────
async function removeBackground(buf, threshold = { r: 220, g: 215, b: 205 }) {
  const { data, info } = await sharp(buf).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  for (let i = 0; i < data.length; i += 4) {
    if (data[i + 3] === 0) continue;
    if (data[i] > threshold.r && data[i + 1] > threshold.g && data[i + 2] > threshold.b)
      data[i + 3] = 0;
  }
  return sharp(Buffer.from(data), { raw: { width: info.width, height: info.height, channels: 4 } }).png().toBuffer();
}

// ─── Helper: apply circular mask ─────────────────────────────────────────────
async function applyCircularMask(buf) {
  const { width, height } = await sharp(buf).metadata();
  const r = Math.round(Math.min(width, height) / 2);
  const mask = Buffer.from(
    `<svg width="${width}" height="${height}"><circle cx="${r}" cy="${r}" r="${r}" fill="white"/></svg>`
  );
  return sharp(buf).composite([{ input: mask, blend: 'dest-in' }]).png().toBuffer();
}

// ─── Helper: square crop + circle mask from a source buffer ──────────────────
async function extractCircle(buf, cx, cy, half) {
  const { width, height } = await sharp(buf).metadata();
  const cropLeft = Math.max(0, cx - half);
  const cropTop  = Math.max(0, cy - half);
  const cropSize = Math.min(half * 2, width - cropLeft, height - cropTop);
  console.log(`  Crop: left=${cropLeft} top=${cropTop} size=${cropSize}`);
  const squared = await sharp(buf).extract({ left: cropLeft, top: cropTop, width: cropSize, height: cropSize }).png().toBuffer();
  return applyCircularMask(squared);
}

// ─── Helper: crop text strip ─────────────────────────────────────────────────
async function extractText(buf, textStartY, isJpeg = true) {
  const { width, height } = await sharp(buf).metadata();
  const textHeight = height - textStartY;
  if (textHeight <= 0) { console.log('  No text strip to extract.'); return null; }
  let textBuf = await sharp(buf)
    .extract({ left: 0, top: textStartY, width, height: textHeight })
    .png().toBuffer();
  if (isJpeg) textBuf = await removeBackground(textBuf);
  return sharp(textBuf).trim({ threshold: 10 }).png({ compressionLevel: 0 }).toBuffer();
}

// =====================================================================
//  IMAGE 1 — Chaturvarnam-1.jpeg  (1024 × ~560, cream background)
//  Circle: cx≈512  cy≈205  half≈215
//  Text starts ≈ y=415
// =====================================================================
async function processImage1() {
  console.log('\n── Chaturvarnam-1.jpeg ──');
  const src = path.join(imgDir, 'Chaturvarnam-1.jpeg');
  const { width, height } = await sharp(src).metadata();
  console.log(`  Source: ${width}×${height}`);

  // Paint text area white so it can't bleed into circle mask
  const PAINT_Y = 408;
  const paintH  = height - PAINT_Y;
  const white = await sharp({ create: { width, height: paintH, channels: 3, background: { r: 255, g: 255, b: 255 } } }).png().toBuffer();
  const painted = await sharp(src).composite([{ input: white, top: PAINT_Y, left: 0 }]).png().toBuffer();

  // Circular emblem
  let logoBuf = await extractCircle(painted, 512, 206, 215);
  logoBuf = await removeBackground(logoBuf);
  logoBuf = await sharp(logoBuf).trim({ threshold: 5 }).png({ compressionLevel: 0 }).toBuffer();
  await sharp(logoBuf).toFile(path.join(imgDir, 'chaturvarnam-1-logo.png'));
  console.log('  ✅ chaturvarnam-1-logo.png');

  // Text strip
  const rawSrc = await sharp(src).png().toBuffer();
  const textBuf = await extractText(rawSrc, 412);
  if (textBuf) {
    await sharp(textBuf).toFile(path.join(imgDir, 'chaturvarnam-1-text.png'));
    console.log('  ✅ chaturvarnam-1-text.png');
  }
}

// =====================================================================
//  IMAGE 2 — Chaturvarnam-2.jpeg  (same layout, blue/muted palette)
// =====================================================================
async function processImage2() {
  console.log('\n── Chaturvarnam-2.jpeg ──');
  const src = path.join(imgDir, 'Chaturvarnam-2.jpeg');
  const { width, height } = await sharp(src).metadata();
  console.log(`  Source: ${width}×${height}`);

  const PAINT_Y = 408;
  const paintH  = height - PAINT_Y;
  const white = await sharp({ create: { width, height: paintH, channels: 3, background: { r: 255, g: 255, b: 255 } } }).png().toBuffer();
  const painted = await sharp(src).composite([{ input: white, top: PAINT_Y, left: 0 }]).png().toBuffer();

  let logoBuf = await extractCircle(painted, 512, 206, 215);
  logoBuf = await removeBackground(logoBuf);
  logoBuf = await sharp(logoBuf).trim({ threshold: 5 }).png({ compressionLevel: 0 }).toBuffer();
  await sharp(logoBuf).toFile(path.join(imgDir, 'chaturvarnam-2-logo.png'));
  console.log('  ✅ chaturvarnam-2-logo.png');

  const rawSrc = await sharp(src).png().toBuffer();
  const textBuf = await extractText(rawSrc, 412);
  if (textBuf) {
    await sharp(textBuf).toFile(path.join(imgDir, 'chaturvarnam-2-text.png'));
    console.log('  ✅ chaturvarnam-2-text.png');
  }
}

// =====================================================================
//  IMAGE 3 — Chaturvarnam-003.png  (1519 × 869, already transparent)
//  Circle: dark purple, gold ring — cx≈757  cy≈315  half≈310
//  Text starts ≈ y=635
// =====================================================================
async function processImage3() {
  console.log('\n── Chaturvarnam-003.png ──');
  const src = path.join(imgDir, 'Chaturvarnam-003.png');
  const { width, height } = await sharp(src).metadata();
  console.log(`  Source: ${width}×${height}`);

  // Actual size is 2814×1536. Scale from the 1519×869 view (factor ≈ 1.852):
  //   Viewer coords: cx≈758 cy≈315 half≈310 textY≈635
  //   Real coords:   cx≈1405 cy≈583 half≈574 textY≈1175
  const CX   = 1405;
  const CY   = 583;
  const HALF = 574;
  const TEXT_Y = 1175;

  const srcBuf = await sharp(src).ensureAlpha().png().toBuffer();
  let logoBuf = await extractCircle(srcBuf, CX, CY, HALF);
  logoBuf = await sharp(logoBuf).trim({ threshold: 5 }).png({ compressionLevel: 0 }).toBuffer();
  await sharp(logoBuf).toFile(path.join(imgDir, 'chaturvarnam-003-logo.png'));
  console.log('  ✅ chaturvarnam-003-logo.png');

  // Text strip — already transparent
  const textBuf = await extractText(srcBuf, TEXT_Y, false);
  if (textBuf) {
    await sharp(textBuf).toFile(path.join(imgDir, 'chaturvarnam-003-text.png'));
    console.log('  ✅ chaturvarnam-003-text.png');
  }
}

// ─── Run all ─────────────────────────────────────────────────────────────────
(async () => {
  try {
    await processImage1();
    await processImage2();
    await processImage3();
    console.log('\n✅  All Chaturvarnam assets extracted successfully.\n');
  } catch (e) {
    console.error('❌', e);
    process.exit(1);
  }
})();
