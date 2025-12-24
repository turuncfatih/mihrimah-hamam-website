'use client'

import { createContext, useContext, useState, useCallback, ReactNode } from 'react'
import { locales, type LocaleConfig, type TranslationKeys } from '@/types/i18n'

// Türkçe (base language)
const tr: TranslationKeys = {
  siteTitle: 'Tarihi Mihrimah Sultan Hamamı',
  home: 'Anasayfa',
  about: 'Hakkımızda',
  services: 'Hizmetler',
  gallery: 'Galeri',
  contact: 'İletişim',
  language: 'Dil',
  
  heroTitle: 'Tarihin Derinliklerinde Bir Arınma Deneyimi',
  heroSubtitle: 'Mihrimah Sultan Hamamı\'nda geleneksel Türk hamamı ritüelleriyle bedeninizi ve ruhunuzu yenileyin.',
  exploreServices: 'Hizmetleri Keşfet',
  
  slide2Title: 'Geleneksel Osmanlı Mimarisinin İncelikleri',
  slide2Subtitle: 'Mimar Sinan\'ın eşsiz eseri olan bu hamam, 16. yüzyılın zarafetini günümüze taşıyor.',
  slide3Title: 'Huzur ve Sükunetin Buluşma Noktası',
  slide3Subtitle: 'Şehrin karmaşasından uzaklaşarak, tarihin derinliklerinde kendinizi yeniden keşfedin.',
  
  whyMihrimah: 'Neden Mihrimah Sultan Hamamı?',
  whyMihrimahSubtitle: 'Bizi diğerlerinden ayıran, asırlık tarihimiz ve misafirlerimize sunduğumuz eşsiz deneyimlerdir.',
  historicalStructure: 'Tarihi Doku',
  historicalStructureDesc: 'Mimar Sinan\'ın 16. yüzyılda inşa ettiği, Osmanlı mimarisinin inceliklerini taşıyan otantik bir mekanda arının.',
  uniqueAtmosphere: 'Eşsiz Atmosfer',
  uniqueAtmosphereDesc: 'Tarihin ve huzurun iç içe geçtiği, sizi şehrin karmaşasından uzaklaştıracak büyülü bir atmosfer.',
  specialServices: 'Özel Hizmetler',
  specialServicesDesc: 'Geleneksel ritüellerden modern masaj terapilerine, uzman ekibimizle kişiye özel deneyimler sunuyoruz.',
  
  aboutTitle: 'Asırları Aşan Bir Gelenek: Tarihi Mihrimah Sultan Hamamı',
  aboutDescription: 'Mimar Sinan\'ın eşsiz eseri olan Tarihi Mihrimah Sultan Hamamı, 16. yüzyıldan günümüze uzanan köklü bir geçmişe sahiptir. Kanuni Sultan Süleyman\'ın kızı Mihrimah Sultan için yaptırılan bu yapı, Osmanlı mimarisinin zarafetini ve hamam kültürünün inceliklerini bir araya getiriyor. Tarihin her köşesine sinmiş bu büyülü atmosferde, kendinizi bir zaman yolculuğunda hissedeceksiniz.',
  customExperiences: 'Size Özel Deneyimler',
  traditionalRituals: 'Geleneksel Hamam Ritüelleri',
  traditionalRitualsDesc: 'Uzman tellaklarımız eşliğinde kese ve köpük masajı ile cildinizi arındırın ve yenilenin.',
  specialMassage: 'Özel Masaj Terapileri',
  specialMassageDesc: 'Aromaterapiden medikal masaja, ruhunuzu ve bedeninizi dinlendirecek çeşitli masaj seçeneklerimizle rahatlayın.',
  
  specialPackages: 'Özel Paketler',
  traditionalPackage: 'Geleneksel Hamam Paketi',
  mihrimahPackage: 'Mihrimah Sultan Paketi',
  pashaPackage: 'Paşa Paketi',
  price: '450',
  currency: 'TL',
  traditionalKese: 'Geleneksel Kese',
  foamMassage: 'Köpük Masajı',
  hamamUsage: 'Hamam Kullanımı',
  aromatherapyMassage: 'Aromaterapi Masajı',
  aromatherapyDuration: '50 dk',
  medicalBackMassage: 'Medikal Sırt Masajı',
  medicalDuration: '30 dk',
  refreshments: 'İkramlar (Şerbet, Meyve)',
  
  ourGallery: 'Galerimiz',
  gallerySubtitle: 'Hamamımızın büyülü atmosferini ve otantik detaylarını keşfedin. Fotoğraflarla tarihin ve huzurun iç içe geçtiği bu eşsiz mekanı daha yakından tanıyın.',
  
  videoTitle: 'Tanıtım Videosu',
  videoSubtitle: 'Tarihi Mihrimah Sultan Hamamı\'nın büyülü atmosferini ve geleneksel hamam deneyimini videomuzda keşfedin.',
  
  customerReviews: 'Müşteri Yorumları',
  review1: 'Kesinlikle inanılmaz bir deneyimdi. Hamamın tarihi dokusu ve personelin ilgisi harikaydı. Kendimi yenilenmiş hissediyorum.',
  review1Author: 'Ayşe K.',
  review2: 'Mihrimah Sultan Paketi\'ni aldım ve çok memnun kaldım. Özellikle aromaterapi masajı harikaydı. Herkese tavsiye ederim.',
  review2Author: 'John D.',
  review3: 'Çok temiz ve otantik bir yer. Tellaklar işini biliyor. Sadece biraz kalabalıktı. Yine de güzel bir tecrübe.',
  review3Author: 'Mehmet Ö.',
  
  contactInfo: 'İletişim',
  address: 'Fatih, Fevzi Paşa Cd. No:33, 34083 Fatih/İstanbul',
  phone: 'Telefon: 0212 521 54 59',
  email: 'E-posta: info@mihrimahsultanhamami.com',
  whatsappContact: 'WhatsApp ile iletişime geç',
  whatsappMessage: 'Fiyat hakkında bilgi alabilir miyim?',
  workingHours: 'Çalışma Saatleri',
  menSection: 'Erkekler Bölümü',
  womenSection: 'Kadınlar Bölümü',
  openingHours: 'Açılış',
  closingHours: 'Kapanış',
  copyright: '© 2024 Tarihi Mihrimah Sultan Hamamı. Tüm hakları saklıdır.',
}

// İngilizce
const en: TranslationKeys = {
  siteTitle: 'Historical Mihrimah Sultan Bath',
  home: 'Home',
  about: 'About',
  services: 'Services',
  gallery: 'Gallery',
  contact: 'Contact',
  language: 'Language',
  
  heroTitle: 'A Purification Experience in the Depths of History',
  heroSubtitle: 'Renew your body and soul with traditional Turkish bath rituals at Mihrimah Sultan Bath.',
  exploreServices: 'Explore Services',
  
  slide2Title: 'The Delicacies of Traditional Ottoman Architecture',
  slide2Subtitle: 'This bath, the unique work of Mimar Sinan, brings the elegance of the 16th century to the present day.',
  slide3Title: 'Meeting Point of Peace and Serenity',
  slide3Subtitle: 'Escape the chaos of the city and rediscover yourself in the depths of history.',
  
  whyMihrimah: 'Why Mihrimah Sultan Bath?',
  whyMihrimahSubtitle: 'What sets us apart is our centuries-old history and the unique experiences we offer to our guests.',
  historicalStructure: 'Historical Structure',
  historicalStructureDesc: 'Purify yourself in an authentic venue built by Mimar Sinan in the 16th century, carrying the delicacies of Ottoman architecture.',
  uniqueAtmosphere: 'Unique Atmosphere',
  uniqueAtmosphereDesc: 'A magical atmosphere where history and tranquility intertwine, taking you away from the chaos of the city.',
  specialServices: 'Special Services',
  specialServicesDesc: 'From traditional rituals to modern massage therapies, we offer personalized experiences with our expert team.',
  
  aboutTitle: 'A Tradition Transcending Centuries: Historical Mihrimah Sultan Bath',
  aboutDescription: 'The Historical Mihrimah Sultan Bath, the unique work of Mimar Sinan, has a deep-rooted history extending from the 16th century to the present day. This structure, built for Mihrimah Sultan, the daughter of Suleiman the Magnificent, brings together the elegance of Ottoman architecture and the delicacies of bath culture. In this magical atmosphere permeated with history, you will feel yourself on a journey through time.',
  customExperiences: 'Custom Experiences for You',
  traditionalRituals: 'Traditional Bath Rituals',
  traditionalRitualsDesc: 'Purify and renew your skin with kese and foam massage accompanied by our expert attendants.',
  specialMassage: 'Special Massage Therapies',
  specialMassageDesc: 'Relax your soul and body with various massage options from aromatherapy to medical massage.',
  
  specialPackages: 'Special Packages',
  traditionalPackage: 'Traditional Bath Package',
  mihrimahPackage: 'Mihrimah Sultan Package',
  pashaPackage: 'Pasha Package',
  price: '450',
  currency: 'TL',
  traditionalKese: 'Traditional Kese',
  foamMassage: 'Foam Massage',
  hamamUsage: 'Bath Usage',
  aromatherapyMassage: 'Aromatherapy Massage',
  aromatherapyDuration: '50 min',
  medicalBackMassage: 'Medical Back Massage',
  medicalDuration: '30 min',
  refreshments: 'Refreshments (Sherbet, Fruit)',
  bookReservation: 'Book Reservation',
  
  ourGallery: 'Our Gallery',
  gallerySubtitle: 'Discover the magical atmosphere and authentic details of our bath. Get to know this unique venue where history and tranquility intertwine more closely through photographs.',
  
  videoTitle: 'Promotional Video',
  videoSubtitle: 'Discover the magical atmosphere and traditional bath experience of the Historical Mihrimah Sultan Bath in our video.',
  
  customerReviews: 'Customer Reviews',
  review1: 'It was absolutely an incredible experience. The historical texture of the bath and the attention of the staff were wonderful. I feel renewed.',
  review1Author: 'Ayse K.',
  review2: 'I bought the Mihrimah Sultan Package and was very satisfied. The aromatherapy massage was especially wonderful. I recommend it to everyone.',
  review2Author: 'John D.',
  review3: 'A very clean and authentic place. The attendants know their job. It was just a bit crowded. Still, a nice experience.',
  review3Author: 'Mehmet O.',
  
  contactInfo: 'Contact',
  address: 'Fatih, Fevzi Pasha St. No:33, 34083 Fatih/Istanbul',
  phone: 'Phone: +90 212 521 54 59',
  email: 'Email: info@mihrimahsultanhamami.com',
  whatsappContact: 'Contact via WhatsApp',
  whatsappMessage: 'Can I get information about prices?',
  workingHours: 'Working Hours',
  menSection: 'Men\'s Section',
  womenSection: 'Women\'s Section',
  openingHours: 'Opening',
  closingHours: 'Closing',
  copyright: '© 2024 Historical Mihrimah Sultan Bath. All rights reserved.',
}

// İspanyolca
const es: TranslationKeys = {
  siteTitle: 'Baño Histórico Mihrimah Sultan',
  home: 'Inicio',
  about: 'Acerca de',
  services: 'Servicios',
  gallery: 'Galería',
  contact: 'Contacto',
  language: 'Idioma',
  
  heroTitle: 'Una Experiencia de Purificación en las Profundidades de la Historia',
  heroSubtitle: 'Renueva tu cuerpo y alma con rituales tradicionales del baño turco en el Baño Mihrimah Sultan.',
  exploreServices: 'Explorar Servicios',
  
  slide2Title: 'Las Delicadezas de la Arquitectura Otomana Tradicional',
  slide2Subtitle: 'Este baño, la obra única de Mimar Sinan, trae la elegancia del siglo XVI al presente.',
  slide3Title: 'Punto de Encuentro de Paz y Serenidad',
  slide3Subtitle: 'Escapa del caos de la ciudad y redescubre en las profundidades de la historia.',
  
  whyMihrimah: '¿Por qué Baño Mihrimah Sultan?',
  whyMihrimahSubtitle: 'Lo que nos distingue es nuestra historia centenaria y las experiencias únicas que ofrecemos a nuestros huéspedes.',
  historicalStructure: 'Estructura Histórica',
  historicalStructureDesc: 'Purifícate en un lugar auténtico construido por Mimar Sinan en el siglo XVI, llevando las delicias de la arquitectura otomana.',
  uniqueAtmosphere: 'Atmósfera Única',
  uniqueAtmosphereDesc: 'Una atmósfera mágica donde la historia y la tranquilidad se entrelazan, alejándote del caos de la ciudad.',
  specialServices: 'Servicios Especiales',
  specialServicesDesc: 'Desde rituales tradicionales hasta terapias de masaje modernas, ofrecemos experiencias personalizadas con nuestro equipo experto.',
  
  aboutTitle: 'Una Tradición que Trasciende Siglos: Baño Histórico Mihrimah Sultan',
  aboutDescription: 'El Baño Histórico Mihrimah Sultan, la obra única de Mimar Sinan, tiene una historia profundamente arraigada que se extiende desde el siglo XVI hasta la actualidad. Esta estructura, construida para Mihrimah Sultan, la hija de Solimán el Magnífico, reúne la elegancia de la arquitectura otomana y las delicias de la cultura del baño. En esta atmósfera mágica impregnada de historia, sentirás que estás en un viaje a través del tiempo.',
  customExperiences: 'Experiencias Personalizadas para Ti',
  traditionalRituals: 'Rituales Tradicionales del Baño',
  traditionalRitualsDesc: 'Purifica y renueva tu piel con kese y masaje de espuma acompañado por nuestros expertos asistentes.',
  specialMassage: 'Terapias de Masaje Especiales',
  specialMassageDesc: 'Relaja tu alma y cuerpo con varias opciones de masaje desde aromaterapia hasta masaje médico.',
  
  specialPackages: 'Paquetes Especiales',
  traditionalPackage: 'Paquete de Baño Tradicional',
  mihrimahPackage: 'Paquete Mihrimah Sultan',
  pashaPackage: 'Paquete Pasha',
  price: '450',
  currency: 'TL',
  traditionalKese: 'Kese Tradicional',
  foamMassage: 'Masaje de Espuma',
  hamamUsage: 'Uso del Baño',
  aromatherapyMassage: 'Masaje de Aromaterapia',
  aromatherapyDuration: '50 min',
  medicalBackMassage: 'Masaje Médico de Espalda',
  medicalDuration: '30 min',
  refreshments: 'Refrigerios (Sorbete, Fruta)',
  bookReservation: 'Reservar',
  
  ourGallery: 'Nuestra Galería',
  gallerySubtitle: 'Descubre la atmósfera mágica y los detalles auténticos de nuestro baño. Conoce más de cerca este lugar único donde la historia y la tranquilidad se entrelazan a través de fotografías.',
  
  videoTitle: 'Video Promocional',
  videoSubtitle: 'Descubre la atmósfera mágica y la experiencia tradicional del baño del Baño Histórico Mihrimah Sultan en nuestro video.',
  
  customerReviews: 'Reseñas de Clientes',
  review1: 'Fue absolutamente una experiencia increíble. La textura histórica del baño y la atención del personal fueron maravillosas. Me siento renovado.',
  review1Author: 'Ayse K.',
  review2: 'Compré el Paquete Mihrimah Sultan y quedé muy satisfecho. El masaje de aromaterapia fue especialmente maravilloso. Se lo recomiendo a todos.',
  review2Author: 'John D.',
  review3: 'Un lugar muy limpio y auténtico. Los asistentes saben su trabajo. Solo estaba un poco lleno. Aún así, una experiencia agradable.',
  review3Author: 'Mehmet O.',
  
  contactInfo: 'Contacto',
  address: 'Fatih, Calle Fevzi Pasha No:33, 34083 Fatih/Estambul',
  phone: 'Teléfono: +90 212 521 54 59',
  email: 'Correo: info@mihrimahsultanhamami.com',
  whatsappContact: 'Contactar vía WhatsApp',
  whatsappMessage: '¿Puedo obtener información sobre precios?',
  workingHours: 'Horario de Atención',
  menSection: 'Sección de Hombres',
  womenSection: 'Sección de Mujeres',
  openingHours: 'Apertura',
  closingHours: 'Cierre',
  copyright: '© 2024 Baño Histórico Mihrimah Sultan. Todos los derechos reservados.',
}

// Arapça
const ar: TranslationKeys = {
  siteTitle: 'حمام مهرماه سلطان التاريخي',
  home: 'الرئيسية',
  about: 'من نحن',
  services: 'الخدمات',
  gallery: 'المعرض',
  contact: 'اتصل بنا',
  language: 'اللغة',
  
  heroTitle: 'تجربة تطهير في أعماق التاريخ',
  heroSubtitle: 'جدد جسدك وروحك بطقوس الحمام التركي التقليدية في حمام مهرماه سلطان.',
  exploreServices: 'استكشف الخدمات',
  
  slide2Title: 'دقة العمارة العثمانية التقليدية',
  slide2Subtitle: 'هذا الحمام، العمل الفريد لمعماري سنان، يجلب أناقة القرن السادس عشر إلى العصر الحالي.',
  slide3Title: 'نقطة لقاء السلام والهدوء',
  slide3Subtitle: 'اهرب من فوضى المدينة واكتشف نفسك من جديد في أعماق التاريخ.',
  
  whyMihrimah: 'لماذا حمام مهرماه سلطان؟',
  whyMihrimahSubtitle: 'ما يميزنا هو تاريخنا الممتد لقرون والتجارب الفريدة التي نقدمها لضيوفنا.',
  historicalStructure: 'البناء التاريخي',
  historicalStructureDesc: 'تطهر في مكان أصيل بناه معماري سنان في القرن السادس عشر، يحمل دقة العمارة العثمانية.',
  uniqueAtmosphere: 'الجو الفريد',
  uniqueAtmosphereDesc: 'جو سحري حيث يتداخل التاريخ والهدوء، يأخذك بعيداً عن فوضى المدينة.',
  specialServices: 'الخدمات الخاصة',
  specialServicesDesc: 'من الطقوس التقليدية إلى علاجات التدليك الحديثة، نقدم تجارب مخصصة مع فريقنا الخبير.',
  
  aboutTitle: 'تقليد يتجاوز القرون: حمام مهرماه سلطان التاريخي',
  aboutDescription: 'حمام مهرماه سلطان التاريخي، العمل الفريد لمعماري سنان، له تاريخ متجذر يمتد من القرن السادس عشر إلى يومنا هذا. هذا البناء، الذي بني لمهرماه سلطان، ابنة سليمان القانوني، يجمع أناقة العمارة العثمانية ودقة ثقافة الحمام. في هذا الجو السحري المشبع بالتاريخ، ستشعر أنك في رحلة عبر الزمن.',
  customExperiences: 'تجارب مخصصة لك',
  traditionalRituals: 'طقوس الحمام التقليدية',
  traditionalRitualsDesc: 'طهر وجدد بشرتك بالكيس والتدليك بالرغوة برفقة مساعدينا الخبراء.',
  specialMassage: 'علاجات التدليك الخاصة',
  specialMassageDesc: 'استرخ روحك وجسدك بخيارات تدليك متنوعة من العلاج بالروائح إلى التدليك الطبي.',
  
  specialPackages: 'الباقات الخاصة',
  traditionalPackage: 'باقة الحمام التقليدية',
  mihrimahPackage: 'باقة مهرماه سلطان',
  pashaPackage: 'باقة الباشا',
  price: '450',
  currency: 'ل.ت',
  traditionalKese: 'الكيس التقليدي',
  foamMassage: 'تدليك الرغوة',
  hamamUsage: 'استخدام الحمام',
  aromatherapyMassage: 'تدليك العلاج بالروائح',
  aromatherapyDuration: '50 دقيقة',
  medicalBackMassage: 'تدليك الظهر الطبي',
  medicalDuration: '30 دقيقة',
  refreshments: 'المشروبات (الشراب، الفواكه)',
  bookReservation: 'احجز الآن',
  
  ourGallery: 'معرضنا',
  gallerySubtitle: 'اكتشف الجو السحري والتفاصيل الأصيلة لحمامنا. تعرف على هذا المكان الفريد حيث يتداخل التاريخ والهدوء بشكل أوثق من خلال الصور.',
  
  videoTitle: 'فيديو تعريفي',
  videoSubtitle: 'اكتشف الجو السحري وتجربة الحمام التقليدية لحمام مهرماه سلطان التاريخي في فيديونا.',
  
  customerReviews: 'آراء العملاء',
  review1: 'كانت بالتأكيد تجربة لا تصدق. النسيج التاريخي للحمام واهتمام الموظفين كان رائعاً. أشعر بالتجديد.',
  review1Author: 'عائشة ك.',
  review2: 'اشتريت باقة مهرماه سلطان وكنت راضياً جداً. تدليك العلاج بالروائح كان رائعاً خاصة. أوصي به للجميع.',
  review2Author: 'جون د.',
  review3: 'مكان نظيف وأصيل جداً. المساعدون يعرفون عملهم. كان مزدحماً قليلاً فقط. مع ذلك، تجربة جميلة.',
  review3Author: 'محمد أ.',
  
  contactInfo: 'معلومات الاتصال',
  address: 'فاتح، شارع فوزي باشا رقم:33، 34083 فاتح/إسطنبول',
  phone: 'الهاتف: +90 212 521 54 59',
  email: 'البريد الإلكتروني: info@mihrimahsultanhamami.com',
  whatsappContact: 'تواصل عبر واتساب',
  whatsappMessage: 'هل يمكنني الحصول على معلومات حول الأسعار؟',
  workingHours: 'ساعات العمل',
  menSection: 'قسم الرجال',
  womenSection: 'قسم النساء',
  openingHours: 'الفتح',
  closingHours: 'الإغلاق',
  copyright: '© 2024 حمام مهرماه سلطان التاريخي. جميع الحقوق محفوظة.',
}

const translations: Record<string, TranslationKeys> = {
  tr,
  en,
  es,
  ar,
}

interface I18nContextType {
  currentLocale: string
  changeLocale: (locale: string) => void
  getCurrentLocale: () => LocaleConfig
  t: (key: keyof TranslationKeys) => string
  locales: LocaleConfig[]
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

export function I18nProvider({ children }: { children: ReactNode }) {
  const [currentLocale, setCurrentLocale] = useState<string>('tr')

  const changeLocale = useCallback((locale: string) => {
    if (translations[locale]) {
      setCurrentLocale(locale)
    }
  }, [])

  const getCurrentLocale = useCallback((): LocaleConfig => {
    return locales.find(locale => locale.code === currentLocale) || locales[0]
  }, [currentLocale])

  const t = useCallback((key: keyof TranslationKeys): string => {
    return translations[currentLocale]?.[key] || tr[key] || key
  }, [currentLocale])

  const value: I18nContextType = {
    currentLocale,
    changeLocale,
    getCurrentLocale,
    t,
    locales,
  }

  return (
    <I18nContext.Provider value={value}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (context === undefined) {
    throw new Error('useI18n must be used within an I18nProvider')
  }
  return context
}
