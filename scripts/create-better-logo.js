const fs = require('fs')
const path = require('path')

// Daha güzel logo SVG oluştur
function createBetterLogo() {
  return `<svg width="200" height="60" viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#8B4513;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#A0522D;stop-opacity:1" />
      </linearGradient>
    </defs>
    
    <!-- Arka plan -->
    <rect width="200" height="60" rx="8" fill="url(#bg)"/>
    
    <!-- M harfi -->
    <text x="30" y="40" font-family="serif" font-size="28" font-weight="bold" fill="white">M</text>
    
    <!-- Mihrimah yazısı -->
    <text x="60" y="25" font-family="serif" font-size="12" font-weight="bold" fill="white">MİHRİMAH</text>
    <text x="60" y="40" font-family="serif" font-size="12" font-weight="bold" fill="white">SULTAN</text>
    <text x="60" y="55" font-family="serif" font-size="10" fill="#F5F5DC">HAMAMI</text>
    
    <!-- Dekoratif çizgi -->
    <line x1="140" y1="20" x2="180" y2="20" stroke="#F5F5DC" stroke-width="2"/>
    <line x1="140" y1="25" x2="175" y2="25" stroke="#F5F5DC" stroke-width="1"/>
  </svg>`
}

// Logo oluştur
const logoContent = createBetterLogo()
fs.writeFileSync(path.join(__dirname, '../public/images/logo/mihrimah-sultan-hamam-logo.svg'), logoContent)
console.log('✓ Daha güzel logo oluşturuldu (SVG)')

// PNG versiyonu için basit versiyon
const simpleLogo = `<svg width="200" height="60" viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg">
  <rect width="200" height="60" rx="8" fill="#8B4513"/>
  <text x="30" y="40" font-family="serif" font-size="28" font-weight="bold" fill="white">M</text>
  <text x="60" y="25" font-family="serif" font-size="12" font-weight="bold" fill="white">MİHRİMAH</text>
  <text x="60" y="40" font-family="serif" font-size="12" font-weight="bold" fill="white">SULTAN</text>
  <text x="60" y="55" font-family="serif" font-size="10" fill="#F5F5DC">HAMAMI</text>
</svg>`

fs.writeFileSync(path.join(__dirname, '../public/images/logo/mihrimah-sultan-hamam-logo.png'), simpleLogo)
console.log('✓ Logo PNG oluşturuldu')

console.log('\n📝 Not: Gerçek logo görselini public/images/logo/logo-source.png olarak ekleyip "npm run generate-favicons" komutunu çalıştırın.')
