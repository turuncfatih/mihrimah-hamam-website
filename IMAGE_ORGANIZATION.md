# 🖼️ Görsel Organizasyon Rehberi

Bu dosya, Mihrimah Sultan Hamamı websitesi için görsellerin nasıl organize edileceğini açıklar.

## 📁 Dosya Yapısı

```
public/
└── images/
    ├── hero-slider/          # Ana slider görselleri
    │   ├── slide-1.jpg       # Ana banner görseli
    │   ├── slide-2.jpg       # Osmanlı mimarisi
    │   └── slide-3.jpg       # Huzur atmosferi
    │
    ├── features/             # Özellikler bölümü
    │   ├── historical-structure.jpg
    │   ├── unique-atmosphere.jpg
    │   └── special-services.jpg
    │
    ├── about/                # Hakkımızda bölümü
    │   ├── main-image.jpg    # Ana görsel
    │   ├── traditional-rituals.jpg
    │   └── special-massage.jpg
    │
    ├── gallery/              # Galeri bölümü
    │   ├── marble-details.jpg
    │   ├── relaxation-area.jpg
    │   ├── traditional-tas.jpg
    │   ├── gobek-tasi.jpg
    │   ├── dome-light.jpg
    │   ├── accessories.jpg
    │   ├── interior-view.jpg
    │   └── architectural-detail.jpg
    │
    └── packages/             # Paketler bölümü
        ├── traditional-package.jpg
        ├── mihrimah-package.jpg
        └── pasha-package.jpg
```

## 🎯 Görsel Gereksinimleri

### **Hero Slider (Ana Banner)**
- **Boyut**: 1920x1080px (16:9 ratio)
- **Format**: JPG, WebP
- **Kalite**: Yüksek kalite, optimize edilmiş
- **İçerik**: Hamamın en etkileyici görselleri

### **Features Section**
- **Boyut**: 800x600px (4:3 ratio)
- **Format**: JPG, WebP
- **Kalite**: Orta-yüksek kalite
- **İçerik**: Her özelliği temsil eden görseller

### **About Section**
- **Ana Görsel**: 1200x800px (3:2 ratio)
- **Diğer Görseller**: 600x400px (3:2 ratio)
- **Format**: JPG, WebP
- **İçerik**: Hamamın iç mekanları, ritüeller

### **Gallery Section**
- **Boyut**: 600x600px (1:1 ratio - square)
- **Format**: JPG, WebP
- **Kalite**: Yüksek kalite
- **İçerik**: Detaylı hamam görselleri

### **Packages Section**
- **Boyut**: 400x300px (4:3 ratio)
- **Format**: JPG, WebP
- **Kalite**: Orta kalite
- **İçerik**: Paket hizmetlerini temsil eden görseller

## 🔧 Teknik Gereksinimler

### **Format Öncelikleri**
1. **WebP** (modern tarayıcılar için)
2. **JPG** (fallback için)
3. **PNG** (şeffaflık gerektiğinde)

### **Optimizasyon**
- **Compression**: 80-85% kalite
- **File Size**: Maksimum 500KB (hero), 200KB (gallery), 100KB (features)
- **Lazy Loading**: Tüm görseller için aktif

### **Responsive Images**
- **Mobile**: 1x resolution
- **Tablet**: 1.5x resolution
- **Desktop**: 2x resolution

## 📝 Görsel İsimlendirme Kuralları

### **Format**
```
{section}-{description}-{size}.{format}
```

### **Örnekler**
```
hero-slider-main-banner-1920x1080.webp
gallery-marble-details-600x600.jpg
features-historical-structure-800x600.webp
```

## 🚀 Kullanım

### **1. Görselleri Yükle**
- Uygun klasöre görselleri koy
- İsimlendirme kurallarına uy
- Boyut ve format gereksinimlerini karşıla

### **2. Constants Güncelle**
```typescript
// src/constants/images.ts
export const HERO_SLIDER_IMAGES = {
  slide1: '/images/hero-slider/slide-1.webp',
  slide2: '/images/hero-slider/slide-2.webp',
  slide3: '/images/hero-slider/slide-3.webp',
}
```

### **3. Component'lerde Kullan**
```typescript
import { HERO_SLIDER_IMAGES } from '@/constants/images'

// Component içinde
<img src={HERO_SLIDER_IMAGES.slide1} alt="..." />
```

## ⚠️ Önemli Notlar

- **Fallback Images**: Google Drive URL'leri geçici olarak kullanılıyor
- **Error Handling**: Görsel yüklenemezse fallback'e geçiyor
- **Performance**: Tüm görseller optimize edilmeli
- **SEO**: Alt text'ler i18n ile çok dilli

## 🔄 Güncelleme Süreci

1. **Görselleri hazırla** (boyut, format, kalite)
2. **Uygun klasöre yükle**
3. **Constants dosyasını güncelle**
4. **Test et** (farklı cihazlarda)
5. **Performance kontrol et**

---

**Not**: Bu organizasyon, kurallarıma uygun şekilde TypeScript, performance ve maintainability odaklı olarak tasarlandı.
