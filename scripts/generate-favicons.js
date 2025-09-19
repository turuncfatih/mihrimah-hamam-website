const sharp = require('sharp')
const fs = require('fs')
const path = require('path')

// Logo boyutları
const sizes = [
  { name: 'favicon-16x16.png', size: 16 },
  { name: 'favicon-32x32.png', size: 32 },
  { name: 'favicon-96x96.png', size: 96 },
  { name: 'apple-touch-icon.png', size: 180 },
  { name: 'android-chrome-192x192.png', size: 192 },
  { name: 'android-chrome-512x512.png', size: 512 },
  { name: 'mihrimah-sultan-hamam-logo.png', size: 300 }
]

async function generateFavicons() {
  const inputPath = path.join(__dirname, '../public/images/logo/portrait-logo.png')
  const outputDir = path.join(__dirname, '../public')
  
  // Eğer kaynak dosya yoksa, placeholder oluştur
  if (!fs.existsSync(inputPath)) {
    console.log('Logo kaynak dosyası bulunamadı. Lütfen logo-source.png dosyasını public/images/logo/ klasörüne ekleyin.')
    return
  }

  for (const { name, size } of sizes) {
    try {
      await sharp(inputPath)
        .resize(size, size, {
          fit: 'contain',
          background: { r: 255, g: 255, b: 255, alpha: 0 }
        })
        .png()
        .toFile(path.join(outputDir, name))
      
      console.log(`✓ ${name} oluşturuldu (${size}x${size})`)
    } catch (error) {
      console.error(`✗ ${name} oluşturulamadı:`, error.message)
    }
  }

  // Safari pinned tab SVG oluştur
  const svgContent = `
    <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <rect width="32" height="32" rx="4" fill="#8B4513"/>
      <text x="16" y="20" font-family="Arial, sans-serif" font-size="16" font-weight="bold" text-anchor="middle" fill="white">M</text>
    </svg>
  `
  
  fs.writeFileSync(path.join(outputDir, 'safari-pinned-tab.svg'), svgContent)
  console.log('✓ safari-pinned-tab.svg oluşturuldu')
}

generateFavicons().catch(console.error)
