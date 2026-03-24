// generate-favicons.mjs — generates favicons from ekambond-logo.png (transparent bg)
// Run: node generate-favicons.mjs
import sharp from 'sharp';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const inputPath = path.join(__dirname, 'public', 'images', 'ekambond-logo.png');
const publicDir = path.join(__dirname, 'public');

async function generate() {
  const sizes = [
    { name: 'favicon-32.png',      size: 32 },
    { name: 'favicon-16.png',      size: 16 },
    { name: 'apple-touch-icon.png', size: 180 },
    { name: 'favicon-192.png',     size: 192 },
  ];

  for (const { name, size } of sizes) {
    await sharp(inputPath)
      .resize(size, size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png()
      .toFile(path.join(publicDir, name));
    console.log(`✅  ${name}  (${size}×${size})`);
  }
  console.log('\n✅  All favicons generated in /public\n');
}

generate().catch(err => { console.error('❌', err); process.exit(1); });
