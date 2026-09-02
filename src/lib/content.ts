import type { Lang } from './i18n'

export type Review = { name: string; city: string; text: string }
export type Faq = { q: string; a: string }

const reviewsTr: Review[] = [
  { name: 'Ayşe Kaplan', city: 'İstanbul', text: 'Hamamın tarihi dokusu ve personelin ilgisi harikaydı. Kese ve köpük masajından sonra kendimi yenilenmiş hissettim.' },
  { name: 'John Davies', city: 'Londra', text: "Mihrimah Sultan Paketi'ni aldım, özellikle yağ masajı çok iyiydi. Turistik değil, gerçek bir mahalle hamamı." },
  { name: 'Mehmet Öztürk', city: 'Ankara', text: 'Çok temiz ve otantik bir yer, tellaklar işini gerçekten biliyor. Göbek taşı sıcaklığı tam kıvamında.' },
  { name: 'Zeynep Arslan', city: 'İzmir', text: 'Kadınlar bölümü çok rahat ve mahremiyete saygılı. Personel ilgili, çay ikramı da güzeldi.' },
  { name: 'Mustafa Çelik', city: 'Bursa', text: 'Mimar Sinan eseri bir yapıda yıkanmak başka bir duygu. Fiyatlar da yaptıkları işe göre çok makul.' },
  { name: 'Elif Korkmaz', city: 'İstanbul', text: 'Arkadaşlarımla gittik, iki saat boyunca hiç acele ettirilmedik. Kubbeden gelen ışık inanılmazdı.' },
  { name: 'Hasan Demir', city: 'Konya', text: 'Geleneksel paket tam beklediğim gibiydi. Yol tarifi kolay, camiye çok yakın.' },
  { name: 'Selin Yılmaz', city: 'İstanbul', text: 'Şehrin gürültüsünden çıkıp bambaşka bir sessizliğe giriyorsunuz. Kesinlikle tekrar geleceğim.' },
]

const reviewsEn: Review[] = [
  { name: 'Ayşe Kaplan', city: 'Istanbul', text: 'The historic fabric of the bath and the care of the staff were wonderful. After the scrub and foam massage I felt completely renewed.' },
  { name: 'John Davies', city: 'London', text: 'I took the Mihrimah Sultan Package — the oil massage was excellent. Not touristy at all, a real neighbourhood hammam.' },
  { name: 'Mehmet Öztürk', city: 'Ankara', text: 'Very clean and authentic, the attendants truly know their craft. The heat of the navel stone was perfect.' },
  { name: 'Zeynep Arslan', city: 'Izmir', text: "The women's section is comfortable and respects your privacy. Attentive staff and a lovely glass of tea afterwards." },
  { name: 'Mustafa Çelik', city: 'Bursa', text: 'Bathing inside a building by Mimar Sinan is a different feeling altogether. Prices are very fair for the service.' },
  { name: 'Elif Korkmaz', city: 'Istanbul', text: 'We went with friends and were never rushed for two hours. The light falling through the dome was unbelievable.' },
  { name: 'Hasan Demir', city: 'Konya', text: 'The traditional package was exactly what I hoped for. Easy to find, right next to the mosque.' },
  { name: 'Selin Yılmaz', city: 'Istanbul', text: 'You step out of the noise of the city into a completely different silence. I will definitely come back.' },
]

const REVIEWS: Partial<Record<Lang, Review[]>> = { tr: reviewsTr, en: reviewsEn }

export const getReviews = (lang: Lang): Review[] => REVIEWS[lang] ?? reviewsEn

const FAQS: Record<Lang, Faq[]> = {
  tr: [
    { q: 'Randevu almam gerekiyor mu?', a: "Gerekmiyor, doğrudan gelebilirsiniz. Hafta sonu ve akşam saatleri yoğun olduğu için WhatsApp'tan haber vermeniz bekleme süresini kısaltır." },
    { q: 'Kadınlar ve erkekler aynı yerde mi yıkanıyor?', a: 'Hayır. Hamamın kadın ve erkek bölümleri tamamen ayrıdır; kadın bölümünde kadın personel hizmet verir.' },
    { q: 'Yanımda ne getirmeliyim?', a: 'Peştamal, havlu ve terlik bizde. İsterseniz kendi bikini veya mayonuzu, yanınıza da yedek iç çamaşırı getirebilirsiniz.' },
    { q: 'Ne kadar sürüyor?', a: 'Geleneksel paket ortalama 60–75 dakika, Mihrimah Sultan Paketi 100–120 dakika sürer. Sonrasında dinlenme süresi sınırsızdır.' },
    { q: 'Çocuklarla gelebilir miyim?', a: 'Evet. Küçük çocuklar ebeveyniyle birlikte girebilir; sıcaklığa duyarlı olabildikleri için kısa süreli kalmalarını öneriyoruz.' },
    { q: 'Nasıl ulaşırım?', a: "Karagümrük, Fevzipaşa Caddesi No:333. Vezneciler–Edirnekapı otobüsleri ve T4 tramvay hattı yakınında; Ayasofya'dan taksiyle yaklaşık 15 dakika." },
  ],
  en: [
    { q: 'Do I need a reservation?', a: 'No, you can simply walk in. Evenings and weekends are busier, so a quick WhatsApp message shortens your wait.' },
    { q: 'Do men and women bathe together?', a: "No. The men's and women's sections are entirely separate, and female attendants serve the women's section." },
    { q: 'What should I bring?', a: 'Peştamal, towel and slippers are provided. Bring a bikini or swimsuit if you prefer, plus spare underwear.' },
    { q: 'How long does it take?', a: 'The Traditional package takes about 60–75 minutes, the Mihrimah Sultan Package 100–120 minutes. Resting afterwards is unlimited.' },
    { q: 'Can I come with children?', a: 'Yes. Small children may enter with a parent; we recommend short sessions as they are sensitive to the heat.' },
    { q: 'How do I get there?', a: 'Karagümrük, Fevzipaşa Caddesi No:333 — near the T4 tram line and Edirnekapı buses, about 15 minutes by taxi from Hagia Sophia.' },
  ],
  ar: [
    { q: 'هل أحتاج إلى حجز مسبق؟', a: 'لا، يمكنك القدوم مباشرة. المساء ونهاية الأسبوع أكثر ازدحاماً، لذا رسالة واتساب قصيرة تقلّل وقت الانتظار.' },
    { q: 'هل يستحمّ الرجال والنساء معاً؟', a: 'لا. قسمُ الرجال وقسمُ النساء منفصلان تماماً، ويخدم قسمَ النساء عاملات.' },
    { q: 'ماذا أحضر معي؟', a: 'الفوطة والمنشفة والشبشب متوفرة عندنا. يمكنك إحضار مايوه أو بكيني إن رغبت، مع ملابس داخلية احتياطية.' },
    { q: 'كم يستغرق الوقت؟', a: 'الباقة التقليدية نحو ٦٠–٧٥ دقيقة، وباقة مهرماه سلطان ١٠٠–١٢٠ دقيقة. أما الراحة بعدها فغير محدودة.' },
    { q: 'هل يمكنني القدوم مع الأطفال؟', a: 'نعم، يمكن للأطفال الصغار الدخول مع أحد الوالدين، وننصح بجلسات قصيرة لحساسيتهم للحرارة.' },
    { q: 'كيف أصل إليكم؟', a: 'أدرنة كابي، شارع فوزي باشا رقم ٣٣ — قريب من خط الترام T4 وحافلات أدرنة كابي، ونحو ١٥ دقيقة بالتاكسي من آيا صوفيا.' },
  ],
  ru: [
    { q: 'Нужна ли запись?', a: 'Нет, можно прийти без записи. Вечера и выходные загруженнее — короткое сообщение в WhatsApp сократит ожидание.' },
    { q: 'Мужчины и женщины моются вместе?', a: 'Нет. Мужское и женское отделения полностью раздельные, в женском работают женщины-мастера.' },
    { q: 'Что взять с собой?', a: 'Пештемаль, полотенце и тапочки мы выдаём. При желании возьмите купальник и сменное белье.' },
    { q: 'Сколько это занимает?', a: 'Традиционный пакет — около 60–75 минут, пакет «Михримах Султан» — 100–120 минут. Отдых после процедуры не ограничен.' },
    { q: 'Можно ли с детьми?', a: 'Да, маленькие дети могут входить с родителем; рекомендуем короткое посещение из-за жары.' },
    { q: 'Как добраться?', a: 'Эдирнекапы, Fevzi Paşa Caddesi 33 — рядом трамвай T4 и автобусы; от Айя-Софии около 15 минут на такси.' },
  ],
  es: [
    { q: '¿Necesito reserva?', a: 'No, puedes venir directamente. Las tardes y los fines de semana hay más gente: un mensaje por WhatsApp reduce la espera.' },
    { q: '¿Hombres y mujeres se bañan juntos?', a: 'No. Las secciones de hombres y mujeres están completamente separadas; en la de mujeres atiende personal femenino.' },
    { q: '¿Qué debo llevar?', a: 'Peştamal, toalla y chanclas están incluidos. Trae bikini o bañador si lo prefieres, y ropa interior de recambio.' },
    { q: '¿Cuánto dura?', a: 'El paquete Tradicional dura unos 60–75 minutos y el Paquete Mihrimah Sultan 100–120 minutos. El descanso posterior es ilimitado.' },
    { q: '¿Puedo ir con niños?', a: 'Sí. Los niños pequeños pueden entrar con un adulto; recomendamos visitas cortas por el calor.' },
    { q: '¿Cómo llego?', a: 'Edirnekapı, Fevzi Paşa Caddesi n.º 33 — junto a la línea de tranvía T4 y los autobuses; unos 15 minutos en taxi desde Santa Sofía.' },
  ],
}

export const getFaqs = (lang: Lang): Faq[] => FAQS[lang] ?? FAQS.tr

/** Yapısal veride (JSON-LD) kullanılan Türkçe SSS listesi. */
export const faqsTr = FAQS.tr
