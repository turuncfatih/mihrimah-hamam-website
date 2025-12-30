export interface LocaleConfig {
  code: string
  name: string
  flag: string
}

export const locales: LocaleConfig[] = [
  { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦' },
]

export interface TranslationKeys {
  // Header
  siteTitle: string
  home: string
  about: string
  services: string
  gallery: string
  contact: string
  language: string
  
  // Hero Section
  heroTitle: string
  heroSubtitle: string
  exploreServices: string
  
  // Hero Slider
  slide2Title: string
  slide2Subtitle: string
  slide3Title: string
  slide3Subtitle: string
  
  // Features Section
  whyMihrimah: string
  whyMihrimahSubtitle: string
  historicalStructure: string
  historicalStructureDesc: string
  uniqueAtmosphere: string
  uniqueAtmosphereDesc: string
  specialServices: string
  specialServicesDesc: string
  
  // About Section
  aboutTitle: string
  aboutDescription: string
  customExperiences: string
  traditionalRituals: string
  traditionalRitualsDesc: string
  specialMassage: string
  specialMassageDesc: string
  
  // Packages Section
  specialPackages: string
  menPackages: string
  womenPackages: string
  traditionalPackage: string
  mihrimahPackage: string
  pashaPackage: string
  price: string
  currency: string
  traditionalKese: string
  foamMassage: string
  hamamUsage: string
  aromatherapyMassage: string
  aromatherapyDuration: string
  medicalBackMassage: string
  medicalDuration: string
  refreshments: string
  massageOilCoffee: string
  oilMassage: string
  clayMask: string
  bookReservation: string
  
  // Gallery Section
  ourGallery: string
  gallerySubtitle: string
  
  // Video Section
  videoTitle: string
  videoSubtitle: string
  
  // Reviews Section
  customerReviews: string
  review1: string
  review1Author: string
  review2: string
  review2Author: string
  review3: string
  review3Author: string
  
  // Footer
  contactInfo: string
  address: string
  phone: string
  email: string
  whatsappContact: string
  whatsappMessage: string
  workingHours: string
  menSection: string
  womenSection: string
  openingHours: string
  closingHours: string
  copyright: string
}
