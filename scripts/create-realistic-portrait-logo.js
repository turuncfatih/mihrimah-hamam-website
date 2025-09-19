const fs = require('fs')
const path = require('path')

// Gerçekçi kadın portresi logo oluştur
function createRealisticPortraitLogo() {
  return `<svg width="200" height="60" viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#8B4513;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#A0522D;stop-opacity:1" />
      </linearGradient>
      <linearGradient id="face" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#F5F5DC;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#F0E68C;stop-opacity:1" />
      </linearGradient>
      <linearGradient id="headwear" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#C0C0C0;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#D3D3D3;stop-opacity:1" />
      </linearGradient>
    </defs>
    
    <!-- Arka plan -->
    <rect width="200" height="60" rx="8" fill="url(#bg)"/>
    
    <!-- Kadın portresi detayları -->
    <!-- Yüz -->
    <ellipse cx="30" cy="25" rx="12" ry="15" fill="url(#face)"/>
    
    <!-- Gözler -->
    <circle cx="26" cy="22" r="2" fill="#2F4F4F"/>
    <circle cx="34" cy="22" r="2" fill="#2F4F4F"/>
    
    <!-- Burun -->
    <ellipse cx="30" cy="26" rx="1" ry="2" fill="#D2B48C"/>
    
    <!-- Ağız -->
    <path d="M27 29 Q30 31 33 29" stroke="#8B4513" stroke-width="1" fill="none"/>
    
    <!-- Saç/Başlık -->
    <path d="M18 15 Q30 10 42 15 Q42 20 30 25 Q18 20 18 15" fill="url(#headwear)"/>
    
    <!-- Başlık detayları -->
    <circle cx="30" cy="12" r="3" fill="#FFD700"/>
    <path d="M15 18 Q30 15 45 18" stroke="#FFD700" stroke-width="1" fill="none"/>
    
    <!-- Vücut -->
    <path d="M18 35 Q30 30 42 35 Q42 50 30 55 Q18 50 18 35" fill="url(#face)"/>
    
    <!-- Giysi detayları -->
    <path d="M20 40 Q30 38 40 40" stroke="#8B4513" stroke-width="1" fill="none"/>
    <path d="M22 45 Q30 43 38 45" stroke="#8B4513" stroke-width="1" fill="none"/>
    
    <!-- MİHRİMAH yazısı -->
    <text x="60" y="20" font-family="serif" font-size="11" font-weight="bold" fill="white">MİHRİMAH</text>
    <text x="60" y="35" font-family="serif" font-size="11" font-weight="bold" fill="white">SULTAN</text>
    <text x="60" y="50" font-family="serif" font-size="9" fill="#F5F5DC">HAMAMI</text>
    
    <!-- Dekoratif çizgiler -->
    <line x1="140" y1="15" x2="180" y2="15" stroke="#F5F5DC" stroke-width="2"/>
    <line x1="140" y1="20" x2="175" y2="20" stroke="#F5F5DC" stroke-width="1"/>
    <line x1="140" y1="25" x2="170" y2="25" stroke="#F5F5DC" stroke-width="1"/>
  </svg>`
}

// Logo oluştur
const logoContent = createRealisticPortraitLogo()
fs.writeFileSync(path.join(__dirname, '../public/images/logo/portrait-logo.svg'), logoContent)
console.log('✓ Gerçekçi kadın portresi logo oluşturuldu (SVG)')

// PNG versiyonu için basit versiyon
const simplePortrait = `<svg width="200" height="60" viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg">
  <rect width="200" height="60" rx="8" fill="#8B4513"/>
  <ellipse cx="30" cy="25" rx="12" ry="15" fill="#F5F5DC"/>
  <circle cx="26" cy="22" r="2" fill="#2F4F4F"/>
  <circle cx="34" cy="22" r="2" fill="#2F4F4F"/>
  <path d="M18 15 Q30 10 42 15 Q42 20 30 25 Q18 20 18 15" fill="#C0C0C0"/>
  <circle cx="30" cy="12" r="3" fill="#FFD700"/>
  <path d="M18 35 Q30 30 42 35 Q42 50 30 55 Q18 50 18 35" fill="#F5F5DC"/>
  <text x="60" y="20" font-family="serif" font-size="11" font-weight="bold" fill="white">MİHRİMAH</text>
  <text x="60" y="35" font-family="serif" font-size="11" font-weight="bold" fill="white">SULTAN</text>
  <text x="60" y="50" font-family="serif" font-size="9" fill="#F5F5DC">HAMAMI</text>
</svg>`

fs.writeFileSync(path.join(__dirname, '../public/images/logo/portrait-logo.png'), simplePortrait)
console.log('✓ Gerçekçi kadın portresi logo PNG oluşturuldu')

console.log('\n📝 Not: Attığınız gerçek kadın portresi görselini public/images/logo/portrait-logo.png olarak kaydedin.')
console.log('📝 Bu görsel otomatik olarak logo olarak kullanılacak.')
