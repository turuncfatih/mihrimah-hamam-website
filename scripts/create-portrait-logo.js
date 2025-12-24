const fs = require('fs')
const path = require('path')

// Kadın portresi için placeholder logo oluştur
function createPortraitLogo() {
  return `<svg width="200" height="60" viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#8B4513;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#A0522D;stop-opacity:1" />
      </linearGradient>
    </defs>
    
    <!-- Arka plan -->
    <rect width="200" height="60" rx="8" fill="url(#bg)"/>
    
    <!-- Kadın silüeti (basit) -->
    <circle cx="30" cy="25" r="12" fill="#F5F5DC"/>
    <path d="M18 35 Q30 30 42 35 Q42 45 30 50 Q18 45 18 35" fill="#F5F5DC"/>
    
    <!-- Başlık -->
    <path d="M15 20 Q30 15 45 20 Q45 25 30 30 Q15 25 15 20" fill="#C0C0C0"/>
    
    <!-- MİHRİMAH yazısı -->
    <text x="60" y="25" font-family="serif" font-size="12" font-weight="bold" fill="white">MİHRİMAH</text>
    <text x="60" y="40" font-family="serif" font-size="12" font-weight="bold" fill="white">SULTAN</text>
    <text x="60" y="55" font-family="serif" font-size="10" fill="#F5F5DC">HAMAMI</text>
    
    <!-- Dekoratif çizgi -->
    <line x1="140" y1="20" x2="180" y2="20" stroke="#F5F5DC" stroke-width="2"/>
    <line x1="140" y1="25" x2="175" y2="25" stroke="#F5F5DC" stroke-width="1"/>
  </svg>`
}

// Logo oluştur
const logoContent = createPortraitLogo()
fs.writeFileSync(path.join(__dirname, '../public/images/logo/portrait-logo.svg'), logoContent)
console.log('✓ Kadın portresi logo oluşturuldu (SVG)')

// PNG versiyonu için basit versiyon
const simplePortrait = `<svg width="200" height="60" viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg">
  <rect width="200" height="60" rx="8" fill="#8B4513"/>
  <circle cx="30" cy="25" r="12" fill="#F5F5DC"/>
  <path d="M18 35 Q30 30 42 35 Q42 45 30 50 Q18 45 18 35" fill="#F5F5DC"/>
  <path d="M15 20 Q30 15 45 20 Q45 25 30 30 Q15 25 15 20" fill="#C0C0C0"/>
  <text x="60" y="25" font-family="serif" font-size="12" font-weight="bold" fill="white">MİHRİMAH</text>
  <text x="60" y="40" font-family="serif" font-size="12" font-weight="bold" fill="white">SULTAN</text>
  <text x="60" y="55" font-family="serif" font-size="10" fill="#F5F5DC">HAMAMI</text>
</svg>`

fs.writeFileSync(path.join(__dirname, '../public/images/logo/portrait-logo.png'), simplePortrait)
console.log('✓ Kadın portresi logo PNG oluşturuldu')

console.log('\n📝 Not: Gerçek kadın portresi görselini public/images/logo/portrait-logo.png olarak ekleyin.')
