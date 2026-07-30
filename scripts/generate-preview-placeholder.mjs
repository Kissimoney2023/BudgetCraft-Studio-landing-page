/**
 * Generates public/tracker-preview.png — a NEUTRAL PLACEHOLDER at the exact
 * 8.27:11 (A4/Letter) portrait ratio. It stands in for the real one-page
 * tracker artwork and MUST be replaced before launch.
 *
 * Dependency-free: encodes a PNG by hand using Node's built-in zlib. Run with
 *   npm run gen:preview
 */
import { deflateSync } from "node:zlib";
import { writeFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const WIDTH = 827;
const HEIGHT = 1100;

// Brand palette (kept in sync with app/globals.css).
const CREAM = [250, 246, 240];
const SAND = [237, 224, 206];
const OLIVE = [107, 111, 78];
const TERRACOTTA = [168, 74, 47];

// RGB buffer, one byte per channel.
const px = Buffer.alloc(WIDTH * HEIGHT * 3);

function set(x, y, [r, g, b]) {
  if (x < 0 || x >= WIDTH || y < 0 || y >= HEIGHT) return;
  const i = (y * WIDTH + x) * 3;
  px[i] = r;
  px[i + 1] = g;
  px[i + 2] = b;
}

function fillRect(x0, y0, x1, y1, color) {
  for (let y = y0; y < y1; y++) for (let x = x0; x < x1; x++) set(x, y, color);
}

function hLine(x0, x1, y, color, thickness = 2) {
  for (let t = 0; t < thickness; t++) for (let x = x0; x < x1; x++) set(x, y + t, color);
}

function vLine(x, y0, y1, color, thickness = 2) {
  for (let t = 0; t < thickness; t++) for (let y = y0; y < y1; y++) set(x + t, y, color);
}

// Background.
fillRect(0, 0, WIDTH, HEIGHT, CREAM);

// Inner "page" panel.
const M = 64;
const panel = { x0: M, y0: M, x1: WIDTH - M, y1: HEIGHT - M };
fillRect(panel.x0, panel.y0, panel.x1, panel.y1, SAND);

// Panel border (olive).
hLine(panel.x0, panel.x1, panel.y0, OLIVE, 3);
hLine(panel.x0, panel.x1, panel.y1 - 3, OLIVE, 3);
vLine(panel.x0, panel.y0, panel.y1, OLIVE, 3);
vLine(panel.x1 - 3, panel.y0, panel.y1, OLIVE, 3);

// Header rule (terracotta) beneath a title area.
hLine(panel.x0 + 24, panel.x1 - 24, panel.y0 + 96, TERRACOTTA, 4);

// Suggested table rows (olive horizontal lines).
const rowTop = panel.y0 + 150;
const rowGap = 70;
for (let y = rowTop; y < panel.y1 - 24; y += rowGap) {
  hLine(panel.x0 + 24, panel.x1 - 24, y, OLIVE, 1);
}

// Suggested columns (olive vertical lines).
const colCount = 5;
const colWidth = (panel.x1 - panel.x0 - 48) / colCount;
for (let c = 1; c < colCount; c++) {
  const x = Math.round(panel.x0 + 24 + c * colWidth);
  vLine(x, rowTop - 30, panel.y1 - 24, OLIVE, 1);
}

// --- PNG encoding ---------------------------------------------------------
const CRC_TABLE = (() => {
  const table = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    table[n] = c >>> 0;
  }
  return table;
})();

function crc32(buf) {
  let c = 0xffffffff;
  for (let i = 0; i < buf.length; i++) c = CRC_TABLE[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}

function chunk(type, data) {
  const typeBuf = Buffer.from(type, "ascii");
  const length = Buffer.alloc(4);
  length.writeUInt32BE(data.length, 0);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(Buffer.concat([typeBuf, data])), 0);
  return Buffer.concat([length, typeBuf, data, crc]);
}

// Raw scanlines: filter byte (0 = none) + RGB row.
const raw = Buffer.alloc(HEIGHT * (1 + WIDTH * 3));
for (let y = 0; y < HEIGHT; y++) {
  const rowStart = y * (1 + WIDTH * 3);
  raw[rowStart] = 0;
  px.copy(raw, rowStart + 1, y * WIDTH * 3, (y + 1) * WIDTH * 3);
}

const ihdr = Buffer.alloc(13);
ihdr.writeUInt32BE(WIDTH, 0);
ihdr.writeUInt32BE(HEIGHT, 4);
ihdr[8] = 8; // bit depth
ihdr[9] = 2; // color type: truecolor RGB
ihdr[10] = 0; // compression
ihdr[11] = 0; // filter
ihdr[12] = 0; // interlace

const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
const png = Buffer.concat([
  signature,
  chunk("IHDR", ihdr),
  chunk("IDAT", deflateSync(raw, { level: 9 })),
  chunk("IEND", Buffer.alloc(0)),
]);

const outDir = join(dirname(fileURLToPath(import.meta.url)), "..", "public");
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "tracker-preview.png");
writeFileSync(outPath, png);
console.log(`Wrote ${outPath} (${WIDTH}x${HEIGHT}, ${png.length} bytes)`);
