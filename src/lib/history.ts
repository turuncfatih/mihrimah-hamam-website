import type { Faq } from './content'

export const bio: ReadonlyArray<{ k: string; v: string }> = [
  { k: 'Doğum', v: '1522, İstanbul' },
  { k: 'Vefat', v: '1578, İstanbul' },
  { k: 'Anne – Baba', v: 'Hürrem Sultan ve Kanuni Sultan Süleyman' },
  { k: 'Eş', v: 'Rüstem Paşa (sadrazam)' },
  { k: 'Çocukları', v: 'Ayşe Hümaşah, Osman' },
  { k: "Avrupa'daki adı", v: 'Cameria' },
  { k: 'Kardeşi', v: 'Sultan II. Selim' },
  { k: 'Medfun olduğu yer', v: "Süleymaniye, Kanuni'nin türbesi" },
]

export const kulliye: ReadonlyArray<{ t: string; d: string }> = [
  { t: 'Cami', d: "Sinan'ın ışıkla en cesur oynadığı tek kubbeli yapılardan biri." },
  { t: 'Medrese', d: 'Mahallenin yüksek öğrenim birimi; vakıf gelirleriyle finanse edilirdi.' },
  { t: 'Sıbyan mektebi', d: 'Çocukların ilk eğitim aldığı küçük ölçekli okul.' },
  { t: 'Çarşı', d: 'Külliyeye düzenli gelir sağlayan dükkânlar dizisi.' },
  { t: 'Sebil ve çeşme', d: 'Mahalleye ücretsiz su dağıtan hayır birimi.' },
  { t: 'Hamam', d: 'Hem temizlik altyapısı hem vakfın en istikrarlı gelir kalemi.' },
]

export const rooms: ReadonlyArray<{ t: string; d: string }> = [
  {
    t: 'Camekân / soğukluk',
    d: 'Soyunma ve dinlenme bölümü. Yüksek kubbesi ve ahşap kabinleriyle hamamın sosyal odası; girişte ve çıkışta burada oturulur, çay içilir.',
  },
  {
    t: 'Ilıklık',
    d: 'Ara sıcaklıkta geçiş odası. Vücudun ısıya alışmasını sağlar; tıraş ve kısa dinlenmeler burada yapılırdı.',
  },
  {
    t: 'Sıcaklık',
    d: 'Merkezde ısıtılmış göbek taşı, çevresinde halvet odaları ve mermer kurnalar. Kese ve köpük masajı bu bölümde yapılır.',
  },
  {
    t: 'Külhan',
    d: 'Yapının görünmeyen motoru. Zeminin ve kurna suyunun ısısı buradaki ocaktan, döşeme altındaki cehennemlik kanallarıyla dağıtılır.',
  },
]

export const customs: ReadonlyArray<{ t: string; d: string }> = [
  {
    t: 'Gelin hamamı',
    d: 'Düğünden önce gelinin yakınlarıyla birlikte yıkandığı, günün tamamına yayılan tören.',
  },
  { t: 'Kırk hamamı', d: 'Doğumun kırkıncı gününde anne ve bebeğin hamama götürüldüğü gelenek.' },
  {
    t: 'Tellak ve natır',
    d: 'Erkekler bölümünde tellak, kadınlar bölümünde natır; kese ve köpüğün ustaları.',
  },
  {
    t: 'Hamam takımı',
    d: 'Peştamal, nalın, gümüş tas ve sabun kesesi — hamama gidenin kişisel donanımı.',
  },
]

export const glossary: ReadonlyArray<{ n: string; t: string; en: string; d: string }> = [
  {
    n: '01',
    t: 'Göbek taşı',
    en: 'Navel stone',
    d: 'Sıcaklığın merkezinde duran, alttan ısıtılan büyük mermer platform. Kese ve köpük burada yapılır.',
  },
  {
    n: '02',
    t: 'Camekân',
    en: 'Soyunmalık',
    d: 'Girişteki yüksek kubbeli soyunma ve dinlenme salonu. Hamama giriş ve çıkış buradan olur.',
  },
  {
    n: '03',
    t: 'Halvet',
    en: 'Private chamber',
    d: 'Sıcaklığın çevresine dizilen küçük özel odalar; daha sessiz ve daha sıcak bir köşe isteyenler için.',
  },
  {
    n: '04',
    t: 'Kurna',
    en: 'Marble basin',
    d: 'Duvara gömülü mermer tekne. Su kurnada toplanır, tasla dökülerek kullanılır; küvete girilmez.',
  },
  {
    n: '05',
    t: 'Külhan',
    en: 'Furnace',
    d: 'Yapının görünmeyen motoru. Buradaki ocak hem suyu hem döşemeyi ısıtır.',
  },
  {
    n: '06',
    t: 'Cehennemlik',
    en: 'Underfloor flues',
    d: 'Döşemenin altındaki sıcak hava kanalları. Göbek taşının ısısı bu kanallardan gelir.',
  },
  {
    n: '07',
    t: 'Fil gözü',
    en: 'Dome oculi',
    d: 'Kubbedeki cam gözler. Buharın içinden geçen ışık huzmelerini bunlar oluşturur.',
  },
  {
    n: '08',
    t: 'Peştamal',
    en: 'Bath wrap',
    d: 'Hamamda kullanılan dokuma örtü. Girişte verilir; hamamın kıyafeti odur.',
  },
]

export const timeline: ReadonlyArray<{ year: string; era: string; text: string }> = [
  {
    year: '1522',
    era: 'Doğum',
    text: "Mihrimah Sultan İstanbul'da doğdu; Kanuni Sultan Süleyman ile Hürrem Sultan'ın kızı.",
  },
  {
    year: '1539',
    era: 'Evlilik',
    text: 'Rüstem Paşa ile evlendi; eşi birkaç yıl içinde sadrazamlığa yükseldi.',
  },
  {
    year: "1540'lar",
    era: 'İlk külliye',
    text: 'Üsküdar iskelesindeki ilk Mihrimah Sultan Külliyesi Mimar Sinan tarafından yapıldı.',
  },
  {
    year: '1558',
    era: 'Sarayda etki',
    text: "Annesi Hürrem Sultan'ın ölümünün ardından babasının en yakın kadın danışmanı oldu.",
  },
  {
    year: "1560'lar",
    era: 'Hamamın inşası',
    text: 'Edirnekapı Külliyesi tamamlandı: cami, medrese, sıbyan mektebi, çarşı, sebil ve hamam.',
  },
  {
    year: '1578',
    era: 'Vefat',
    text: "Mihrimah Sultan vefat etti; Süleymaniye'de babasının türbesinin yanına defnedildi.",
  },
  {
    year: '19.–20. yy',
    era: 'Onarımlar',
    text: 'Deprem ve yangınların ardından yapılan onarımlarla hamam ayakta kaldı ve çalışmayı sürdürdü.',
  },
  {
    year: 'Bugün',
    era: 'Faal',
    text: "Kadın ve erkek bölümleriyle her gün hizmet veren, İstanbul'un kesintisiz çalışan en eski hamamlarından biri.",
  },
]

export const nearby: ReadonlyArray<{ t: string; d: string; dist: string }> = [
  {
    t: 'Mihrimah Sultan Camii',
    d: 'Külliyenin merkezindeki cami; hamamla aynı el, aynı dönem.',
    dist: 'Yürüme mesafesi',
  },
  {
    t: 'Edirnekapı ve Teodosius surları',
    d: "Fatih'in 1453'te şehre girdiği kapı ve surların en iyi korunmuş kesimlerinden biri.",
    dist: '≈ 5 dk',
  },
  {
    t: 'Kariye (Chora) Müzesi',
    d: 'Bizans mozaik ve fresklerinin en ünlü topluluklarından biri.',
    dist: '≈ 10 dk',
  },
  {
    t: 'Fethiye Camii (Pammakaristos)',
    d: 'Bizans yapısı üzerine kurulmuş, mozaikleriyle tanınan cami.',
    dist: '≈ 12 dk',
  },
  {
    t: 'Fatih Camii ve çarşısı',
    d: 'Semtin adını veren külliye ve çevresindeki canlı çarşı.',
    dist: '≈ 15 dk',
  },
]

export const historyFaqs: Faq[] = [
  {
    q: 'Mihrimah Sultan Hamamı kaç yılında yapıldı?',
    a: "Hamam, Mihrimah Sultan'ın Edirnekapı'daki külliyesiyle birlikte 1560'larda Mimar Sinan tarafından inşa edildi. Yapı o günden bu yana işlevini sürdürüyor.",
  },
  {
    q: 'Mihrimah Sultan kimin kızıydı?',
    a: "Kanuni Sultan Süleyman ile Hürrem Sultan'ın kızı, II. Selim'in kız kardeşiydi. 1539'da Rüstem Paşa ile evlendi.",
  },
  {
    q: "Mihrimah Sultan'ın kaç külliyesi var?",
    a: "İki külliyesi vardır: 1540'ların ikinci yarısında Üsküdar iskelesinde, 1560'larda ise Edirnekapı'da yapılan külliyeler. İkisi de Mimar Sinan'ın eseridir.",
  },
  {
    q: 'Hamam gerçekten özgün yapı mı?',
    a: 'Evet. Yüzyıllar içinde depremler ve yangınlar nedeniyle çeşitli onarımlar geçirdi, ancak plan şeması, kubbeleri ve göbek taşıyla özgün Osmanlı hamamı olarak kullanılmaya devam ediyor.',
  },
  {
    q: 'Kadınlar da bu tarihi hamamı kullanabiliyor mu?',
    a: 'Evet. Hamamın kadın ve erkek bölümleri tamamen ayrıdır; kadın bölümünde kadın personel hizmet verir. Erkekler bölümü 07:00–23:00, kadınlar bölümü 09:00–20:00 arası açıktır.',
  },
  {
    q: 'Hamam nerede, nasıl gidilir?',
    a: 'Karagümrük, Fevzipaşa Caddesi No:333, Fatih / İstanbul. Mihrimah Sultan Camii ve Edirnekapı surlarına yürüme mesafesinde; Sultanahmet bölgesinden taksiyle yaklaşık 15 dakika.',
  },
]

/** Wikimedia Commons üzerinden gelen kamu malı portreler. */
export const portraits: ReadonlyArray<{ src: string; alt: string; caption: string }> = [
  {
    src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Mihrimah%20Sultan%20(Cameria).jpg?width=600',
    alt: 'Mihrimah Sultan (Cameria) portresi — Titian sonrası',
    caption: 'Titian sonrası, “Cameria” · Kamu malı',
  },
  {
    src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Mihrimah%20Sultan.jpg?width=600',
    alt: "Mihrimah Sultan'ın 16. yüzyıl portresi",
    caption: '16. yüzyıl portresi · Kamu malı',
  },
  {
    src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Portrait%20of%20Mihrimah%20Sultan%20or%20a%20lady%20dressed%20up%20to%20look%20like%20her.jpg?width=600',
    alt: "Mihrimah Sultan'ı ya da onun gibi giyinmiş bir hanımı gösteren 17. yüzyıl portresi",
    caption: '17. yy fantezi portresi · Wikimedia Commons, CC BY-SA 4.0',
  },
]

export const MAIN_PORTRAIT =
  'https://commons.wikimedia.org/wiki/Special:FilePath/%C4%B0mparator%20S%C3%BCleyman%E2%80%99%C4%B1n%20K%C4%B1z%C4%B1%20Cameria%20(Mihrimah%20Sultan).jpg?width=700'

export const USKUDAR_MOSQUE =
  'https://commons.wikimedia.org/wiki/Special:FilePath/%C3%9Csk%C3%BCdar%20Mihrimah%20Sultan%20Camii.jpg?width=1200'

export const TOC: ReadonlyArray<{ id: string; label: string }> = [
  { id: 'kimdir', label: 'Mihrimah Sultan kimdir?' },
  { id: 'portreler', label: 'Portrelerde Mihrimah' },
  { id: 'sinan', label: 'Mimar Sinan ortaklığı' },
  { id: 'kulliye', label: 'Edirnekapı Külliyesi' },
  { id: 'mimarlik', label: 'Hamamın mimarisi' },
  { id: 'kultur', label: 'Hamam kültürü' },
  { id: 'arsiv', label: 'Hamam sözlüğü' },
  { id: 'zaman', label: 'Zaman çizelgesi' },
  { id: 'bugun', label: 'Bugün' },
  { id: 'cevre', label: 'Yakın çevre' },
  { id: 'sss', label: 'Sık sorulan sorular' },
]

export const KUNYE: ReadonlyArray<{ k: string; v: string }> = [
  { k: 'Yapı', v: 'Mihrimah Sultan Hamamı' },
  { k: 'Mimar', v: 'Mimar Sinan' },
  { k: 'Dönem', v: "1560'lar, Kanuni devri" },
  { k: 'Bani', v: 'Mihrimah Sultan (1522–1578)' },
  { k: 'Yer', v: 'Karagümrük, Fatih / İstanbul' },
  { k: 'Durum', v: 'Faal, ziyarete açık' },
]
