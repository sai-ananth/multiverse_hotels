import { createCanvas } from 'canvas';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const images = [
  { name: 'hero-bg.png', width: 1920, height: 1080, color1: '#F5F1E8', color2: '#D4C5B0', text: 'Hero Background' },
  { name: 'about-building.png', width: 1200, height: 800, color1: '#E8E4DB', color2: '#D4C5B0', text: 'Luxury Building' },
  { name: 'services-spa.png', width: 1200, height: 800, color1: '#D4C5B0', color2: '#C4B5A0', text: 'Spa Services' },
  { name: 'booking-bg.png', width: 1920, height: 1080, color1: '#F5F1E8', color2: '#E8E4DB', text: 'Booking' },
  { name: 'gallery-1.png', width: 800, height: 600, color1: '#F5F1E8', color2: '#D4C5B0', text: 'Presidential Suite' },
  { name: 'gallery-2.png', width: 800, height: 600, color1: '#E8E4DB', color2: '#C4B5A0', text: 'Ocean View' },
  { name: 'gallery-3.png', width: 800, height: 600, color1: '#D4C5B0', color2: '#F5F1E8', text: 'Infinity Pool' },
  { name: 'gallery-4.png', width: 800, height: 600, color1: '#C4B5A0', color2: '#E8E4DB', text: 'Restaurant' },
  { name: 'gallery-5.png', width: 800, height: 600, color1: '#F5F1E8', color2: '#C4B5A0', text: 'Lobby' },
  { name: 'gallery-6.png', width: 800, height: 600, color1: '#E8E4DB', color2: '#D4C5B0', text: 'Rooftop Bar' },
];

images.forEach(img => {
  const canvas = createCanvas(img.width, img.height);
  const ctx = canvas.getContext('2d');

  const gradient = ctx.createLinearGradient(0, 0, img.width, img.height);
  gradient.addColorStop(0, img.color1);
  gradient.addColorStop(1, img.color2);

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, img.width, img.height);

  const fontSize = img.width > 1000 ? 64 : 36;
  ctx.font = `${fontSize}px Arial`;
  ctx.fillStyle = '#2C1810';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(img.text, img.width / 2, img.height / 2);

  const buffer = canvas.toBuffer('image/png');
  const outputPath = path.join(__dirname, '..', 'public', 'images', img.name);
  fs.writeFileSync(outputPath, buffer);
});
