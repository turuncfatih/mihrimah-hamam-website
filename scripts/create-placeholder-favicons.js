const fs = require('fs')
const path = require('path')

// Basit SVG favicon oluştur
function createSVGFavicon(size) {
  return `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
    <rect width="${size}" height="${size}" rx="${size/8}" fill="#8B4513"/>
    <text x="${size/2}" y="${size/2 + size/8}" font-family="Arial, sans-serif" font-size="${size/2}" font-weight="bold" text-anchor="middle" fill="white">M</text>
  </svg>`
}

// Favicon boyutları
const sizes = [
  { name: 'favicon-16x16.png', size: 16 },
  { name: 'favicon-32x32.png', size: 32 },
  { name: 'favicon-96x96.png', size: 96 },
  { name: 'apple-touch-icon.png', size: 180 },
  { name: 'android-chrome-192x192.png', size: 192 },
  { name: 'android-chrome-512x512.png', size: 512 }
]

// SVG favicon oluştur
const svgContent = createSVGFavicon(32)
fs.writeFileSync(path.join(__dirname, '../public/safari-pinned-tab.svg'), svgContent)
console.log('✓ safari-pinned-tab.svg oluşturuldu')

// Logo placeholder oluştur
const logoContent = createSVGFavicon(300)
fs.writeFileSync(path.join(__dirname, '../public/images/logo/mihrimah-sultan-hamam-logo.png'), logoContent)
console.log('✓ Logo placeholder oluşturuldu')

console.log('\n📝 Not: Gerçek logo görselini public/images/logo/logo-source.png olarak ekleyip "npm run generate-favicons" komutunu çalıştırın.')
