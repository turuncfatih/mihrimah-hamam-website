import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { WhatsAppButton } from '@/components/WhatsAppButton'
import { FaqList } from '@/components/FaqList'
import { WhatsAppIcon } from '@/components/icons'
import {
  ADDRESS,
  ENTRANCE_IMAGE,
  HISTORY_HERO_IMAGE,
  HOURS,
  OG_IMAGE,
  SITE_URL,
  photoSrc,
  waLink,
} from '@/lib/site'
import {
  KUNYE,
  MAIN_PORTRAIT,
  TOC,
  USKUDAR_MOSQUE,
  bio,
  customs,
  glossary,
  historyFaqs,
  kulliye,
  nearby,
  portraits,
  rooms,
  timeline,
} from '@/lib/history'

const PATH = '/mihrimah-sultan-tarihi'

const TITLE = 'Mihrimah Sultan ve Hamamının Tarihi | Mimar Sinan, Edirnekapı Külliyesi'
const DESCRIPTION =
  "Mihrimah Sultan kimdir? Kanuni'nin kızının hayatı, Mimar Sinan'la kurduğu ortaklık, Edirnekapı Külliyesi, Osmanlı hamam kültürü ve 1560'lardan bugüne çalışan Tarihi Mihrimah Sultan Hamamı'nın tarihi — görsellerle, zaman çizelgesiyle."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'mihrimah sultan kimdir',
    'mihrimah sultan hamamı tarihi',
    'edirnekapı külliyesi',
    'mimar sinan mihrimah sultan camii',
    'osmanlı hamam kültürü',
    'kanuni sultan süleyman kızı',
    'karagümrük hamam',
    'tarihi türk hamamı istanbul',
  ],
  alternates: { canonical: PATH },
  openGraph: {
    type: 'article',
    title: 'Mihrimah Sultan ve Hamamının Tarihi',
    description:
      "Kanuni'nin kızı Mihrimah Sultan, Mimar Sinan'la kurduğu ortaklık ve dört buçuk asırdır çalışan Edirnekapı hamamının hikâyesi.",
    url: `${SITE_URL}${PATH}`,
    images: [{ url: OG_IMAGE }],
  },
}

const h2Style = {
  fontSize: 'clamp(25px,2.8vw,36px)',
  fontWeight: 300,
  letterSpacing: '-0.012em',
} as const

const bodyStyle = {
  fontSize: 17.5,
  fontWeight: 300,
  lineHeight: 1.78,
  color: 'var(--ink-soft)',
} as const

const capStyle = {
  fontSize: 12,
  fontWeight: 300,
  lineHeight: 1.5,
  color: 'var(--muted-2)',
} as const

const sideLabel = {
  fontSize: 10,
  letterSpacing: '0.24em',
  textTransform: 'uppercase' as const,
  color: 'var(--muted-2)',
}

function Schema() {
  const article = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Mihrimah Sultan ve dört buçuk asırdır çalışan hamamının tarihi',
    description:
      "Mihrimah Sultan'ın hayatı, Mimar Sinan ortaklığı, Edirnekapı Külliyesi, Osmanlı hamam kültürü ve hamamın bugüne uzanan tarihi.",
    inLanguage: 'tr',
    image: `${SITE_URL}${OG_IMAGE}`,
    author: { '@type': 'Organization', name: 'Tarihi Mihrimah Sultan Hamamı' },
    publisher: { '@type': 'Organization', name: 'Tarihi Mihrimah Sultan Hamamı' },
    about: [
      {
        '@type': 'Person',
        name: 'Mihrimah Sultan',
        birthDate: '1522',
        deathDate: '1578',
        parent: [
          { '@type': 'Person', name: 'Kanuni Sultan Süleyman' },
          { '@type': 'Person', name: 'Hürrem Sultan' },
        ],
      },
      { '@type': 'Person', name: 'Mimar Sinan' },
      {
        '@type': ['LandmarksOrHistoricalBuildings', 'TouristAttraction'],
        name: 'Tarihi Mihrimah Sultan Hamamı',
        address: {
          '@type': 'PostalAddress',
          streetAddress: ADDRESS.streetAddress,
          addressLocality: ADDRESS.locality,
          addressRegion: ADDRESS.region,
          postalCode: ADDRESS.postalCode,
          addressCountry: ADDRESS.country,
        },
        geo: { '@type': 'GeoCoordinates', latitude: ADDRESS.lat, longitude: ADDRESS.lng },
      },
    ],
  }

  const faq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: historyFaqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  const crumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Anasayfa', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name: 'Mihrimah Sultan Tarihi', item: `${SITE_URL}${PATH}` },
    ],
  }

  return (
    <>
      {[article, faq, crumbs].map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  )
}

export default function HistoryPage() {
  return (
    <div style={{ width: '100%', overflowX: 'hidden' }}>
      <Schema />
      <Header onHome={false} />

      <section
        style={{
          position: 'relative',
          minHeight: '74vh',
          display: 'flex',
          alignItems: 'flex-end',
          overflow: 'hidden',
          background: 'var(--dark)',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={HISTORY_HERO_IMAGE}
          alt="Tarihi Mihrimah Sultan Hamamı'nın ahşap galerili camekân bölümü"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.9,
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(180deg,rgba(20,17,14,0.58) 0%,rgba(20,17,14,0.46) 42%,rgba(20,17,14,0.9) 100%),linear-gradient(100deg,rgba(20,17,14,0.64) 0%,rgba(20,17,14,0.2) 62%,rgba(20,17,14,0) 100%)',
          }}
        />
        <div
          className="msh-shell msh-shell--narrow msh-rise"
          style={{ position: 'relative', paddingBottom: 62, width: '100%' }}
        >
          <nav
            style={{
              display: 'flex',
              gap: 10,
              fontSize: 12,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'rgba(251,248,243,0.62)',
              marginBottom: 26,
            }}
          >
            <Link href="/" style={{ color: 'inherit' }}>
              Anasayfa
            </Link>
            <span>/</span>
            <span style={{ color: 'var(--sand)' }}>Tarih</span>
          </nav>
          <span
            style={{
              display: 'block',
              width: 64,
              height: 1,
              background: 'linear-gradient(90deg,#DEC9A5,rgba(222,201,165,0))',
              marginBottom: 24,
            }}
          />
          <h1
            style={{
              fontSize: 'clamp(34px,5.6vw,80px)',
              fontWeight: 200,
              lineHeight: 1.03,
              letterSpacing: '-0.02em',
              color: '#FBF8F3',
              maxWidth: '19em',
            }}
          >
            Mihrimah Sultan ve dört buçuk asırdır çalışan hamamının tarihi
          </h1>
          <p
            style={{
              marginTop: 26,
              maxWidth: '40em',
              fontSize: 'clamp(16px,1.5vw,20px)',
              fontWeight: 300,
              lineHeight: 1.62,
              color: 'rgba(251,248,243,0.9)',
            }}
          >
            Kanuni Sultan Süleyman&apos;ın tek kızı, Osmanlı sarayının en güçlü kadınlarından biri ve
            Mimar Sinan&apos;a iki külliye sipariş eden tek hanım sultan. Edirnekapı&apos;daki hamam,
            onun kurduğu düzenin bugüne kalan en canlı parçası.
          </p>
          <div
            style={{
              display: 'flex',
              gap: 26,
              flexWrap: 'wrap',
              marginTop: 34,
              fontSize: 12,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--sand)',
            }}
          >
            <span>1522 – 1578</span>
            <span>Mimar Sinan eseri</span>
            <span>Okuma süresi 12 dk</span>
          </div>
        </div>
      </section>

      <div className="msh-shell msh-shell--narrow" style={{ paddingBlock: 'clamp(52px,6vw,96px)' }}>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 'clamp(38px,5vw,76px)',
            alignItems: 'flex-start',
          }}
        >
          <main
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'clamp(44px,5vw,72px)',
              maxWidth: '40em',
              minWidth: 0,
              flex: '3 1 380px',
              order: 1,
            }}
          >
            <section id="giris">
              <p
                style={{
                  fontSize: 'clamp(19px,2vw,24px)',
                  fontWeight: 300,
                  lineHeight: 1.66,
                  color: 'var(--ink)',
                }}
              >
                İstanbul&apos;da tarih çoğu zaman müze vitrininin arkasındadır. Edirnekapı&apos;daki
                bu hamam ise istisna: 1560&apos;larda ısınmaya başlayan külhanı hâlâ yanıyor, göbek
                taşı hâlâ sıcak, kubbesinden düşen ışık hâlâ aynı yere düşüyor. Aşağıdaki hikâye, hem
                bu yapının hem de onu var eden kadının hikâyesi.
              </p>
            </section>

            <section id="kimdir">
              <h2 style={h2Style}>Mihrimah Sultan kimdir?</h2>

              <div
                style={{
                  marginTop: 26,
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 'clamp(22px,3vw,34px)',
                  alignItems: 'flex-start',
                }}
              >
                <figure style={{ margin: 0, flex: '0 1 262px', minWidth: 200 }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={MAIN_PORTRAIT}
                    alt="Mihrimah Sultan portresi — 16. yüzyıl, Cristofano dell'Altissimo sonrası, İtalyan okulu"
                    loading="lazy"
                    style={{
                      width: '100%',
                      aspectRatio: '3/4',
                      objectFit: 'cover',
                      border: '1px solid var(--line-2)',
                    }}
                  />
                  <figcaption style={{ ...capStyle, marginTop: 11, lineHeight: 1.55 }}>
                    “Cameria, Sultan Süleyman&apos;ın kızı” — 16. yüzyıl İtalyan okulu portresi. Sağ
                    üst köşesindeki yazıt onu 1541&apos;de Rüstem Paşa&apos;nın eşi olarak tanımlar.
                  </figcaption>
                </figure>
                <div
                  style={{
                    flex: '1 1 320px',
                    minWidth: 280,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 16,
                  }}
                >
                  <p style={bodyStyle}>
                    Mihrimah Sultan 1522&apos;de İstanbul&apos;da doğdu. Kanuni Sultan Süleyman ile
                    Hürrem Sultan&apos;ın kızı, II. Selim&apos;in kız kardeşiydi. Farsça kökenli adı
                    &quot;güneş ve ay&quot; anlamına gelir — Osmanlı kaynaklarında hem şiirsel bir
                    imge hem de bir statü işareti olarak sık sık anılır.
                  </p>
                  <p style={bodyStyle}>
                    Avrupa&apos;da 16. yüzyıl boyunca &quot;Cameria&quot; adıyla tanındı ve dönemin
                    ressamları tarafından şaşırtıcı biçimde çok resmedildi. Bugün Titian&apos;a
                    atfedilen kopyalardan Floransalı Cristofano dell&apos;Altissimo çevresine uzanan
                    bir portre grubu, onun Osmanlı sarayı dışında da tanınan bir figür olduğunu
                    gösteriyor.
                  </p>
                </div>
              </div>

              <p style={{ ...bodyStyle, marginTop: 22 }}>
                1539&apos;da, on yedi yaşındayken dönemin Diyarbakır beylerbeyi Rüstem Paşa ile
                evlendirildi. Rüstem Paşa birkaç yıl içinde sadrazamlığa yükseldi; Mihrimah Sultan
                böylece sarayın hem hanedan hem de hükümet kanadına aynı anda temas eden bir konuma
                geldi. Bu evlilikten Ayşe Hümaşah ile Osman adlı iki çocuğu oldu.
              </p>
              <p style={{ ...bodyStyle, marginTop: 16 }}>
                Annesi Hürrem Sultan&apos;ın 1558&apos;deki ölümünden sonra babasının en yakın kadın
                danışmanı oldu. Sefer yıllarında Kanuni&apos;ye yazdığı mektuplar, dönemin siyasetine
                dair görüş bildiren bir kalemi olduğunu gösterir. Kendi vakıf gelirleri o kadar
                genişti ki, kaynaklara göre donanma masraflarına katkı önerebilecek bir servetin
                sahibiydi.
              </p>
              <p style={{ ...bodyStyle, marginTop: 16 }}>
                Bu servetin büyük bölümünü hayır yapılarına ayırdı: cami, medrese, mektep, çeşme,
                kervansaray ve hamamlar. Vakfiyeleri Mekke ve Medine&apos;den Anadolu&apos;ya uzanan
                geniş bir coğrafyayı kapsıyordu. 1578&apos;de vefat ettiğinde Süleymaniye&apos;de
                babasının türbesine defnedildi — Osmanlı hanedanında bu ayrıcalığa erişen az sayıdaki
                hanım sultandan biri.
              </p>

              <div
                style={{
                  marginTop: 30,
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit,minmax(158px,1fr))',
                  gap: 12,
                }}
              >
                {bio.map((item) => (
                  <div
                    key={item.k}
                    style={{
                      background: 'var(--card-soft)',
                      border: '1px solid var(--line)',
                      borderRadius: 12,
                      padding: '18px 20px 20px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 7,
                    }}
                  >
                    <span
                      style={{
                        fontSize: 10,
                        letterSpacing: '0.2em',
                        textTransform: 'uppercase',
                        color: 'var(--muted-3)',
                      }}
                    >
                      {item.k}
                    </span>
                    <span
                      style={{ fontSize: 15.5, fontWeight: 300, lineHeight: 1.5, color: 'var(--ink)' }}
                    >
                      {item.v}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            <section id="portreler">
              <h2 style={h2Style}>Portrelerde Mihrimah Sultan</h2>
              <p style={{ ...bodyStyle, marginTop: 20 }}>
                Osmanlı hanedanının kadın üyeleri nadiren resmedilirdi; Mihrimah Sultan bu kuralın
                istisnasıdır. Venedik ve Floransa atölyelerinde üretilen, birbirinin kopyası ya da
                yorumu olan bir portre grubu Avrupa koleksiyonlarına dağıldı. Hiçbirinin onu doğrudan
                gözlemleyerek resmedilmediği düşünülür — bunlar bir figürün Avrupa&apos;daki itibarını
                gösteren imgelerdir.
              </p>
              <div
                style={{
                  marginTop: 26,
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit,minmax(190px,1fr))',
                  gap: 14,
                }}
              >
                {portraits.map((p) => (
                  <figure key={p.src} style={{ margin: 0 }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={p.src}
                      alt={p.alt}
                      loading="lazy"
                      style={{
                        width: '100%',
                        aspectRatio: '3/4',
                        objectFit: 'cover',
                        border: '1px solid var(--line-2)',
                      }}
                    />
                    <figcaption style={{ ...capStyle, marginTop: 10 }}>{p.caption}</figcaption>
                  </figure>
                ))}
              </div>
            </section>

            <figure style={{ margin: 0 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={ENTRANCE_IMAGE}
                alt="Tarihi Mihrimah Sultan Hamamı'nın Fevzipaşa Caddesi üzerindeki sokak girişi"
                loading="lazy"
                style={{ width: '100%', aspectRatio: '16/10', objectFit: 'cover' }}
              />
              <figcaption
                style={{ marginTop: 12, fontSize: 12.5, letterSpacing: '0.06em', color: 'var(--muted-2)' }}
              >
                Fevzipaşa Caddesi üzerindeki sokak girişi; erkekler ve kadınlar bölümlerinin kapıları
                ayrıdır.
              </figcaption>
            </figure>

            <section id="sinan">
              <h2 style={h2Style}>Mimar Sinan ile kurulan ortaklık</h2>
              <p style={{ ...bodyStyle, marginTop: 20 }}>
                Mihrimah Sultan, Osmanlı tarihinde Mimar Sinan&apos;a iki ayrı külliye yaptırmış tek
                hanım sultandır. İlki 1540&apos;ların ikinci yarısında Üsküdar iskelesinde, ikincisi
                1560&apos;larda Edirnekapı&apos;da yükseldi. İkisi de kapıdır: biri denizden
                gelenleri, diğeri kara yolundan gelenleri karşılar. Şehrin iki ucunda birbirine bakan
                bu iki eser, bir hanedan üyesinin kentin siluetine imza atma biçimiydi.
              </p>
              <p style={{ ...bodyStyle, marginTop: 16 }}>
                Edirnekapı Camii, Sinan&apos;ın ışıkla en cesur oynadığı yapılardan biri kabul edilir.
                Dört büyük kemerin taşıdığı tek kubbe, duvarları neredeyse tamamen pencereye dönüştüren
                bir strüktür üretir; iç mekân gün boyu, mumsuz aydınlıktır. Bu ışık meselesi, aynı
                külliyenin hamamında bambaşka bir biçimde tekrar eder: orada ışık kubbedeki cam
                gözlerden buharın içine düşer.
              </p>
              <blockquote
                style={{
                  margin: '26px 0 0',
                  borderInlineStart: '2px solid var(--gold-line)',
                  paddingInlineStart: 26,
                  fontSize: 'clamp(19px,2vw,25px)',
                  fontWeight: 200,
                  lineHeight: 1.5,
                  color: 'var(--ink)',
                }}
              >
                Bir külliye yalnızca bina değil, kendini finanse eden bir düzendir. Hamam bu düzenin
                motoruydu.
              </blockquote>
              <figure style={{ margin: '26px 0 0' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={USKUDAR_MOSQUE}
                  alt="Üsküdar Mihrimah Sultan Camii — Mimar Sinan'ın Mihrimah Sultan için yaptığı ilk külliye"
                  loading="lazy"
                  style={{
                    width: '100%',
                    aspectRatio: '16/9',
                    objectFit: 'cover',
                    border: '1px solid var(--line-2)',
                  }}
                />
                <figcaption
                  style={{
                    marginTop: 11,
                    fontSize: 12.5,
                    fontWeight: 300,
                    letterSpacing: '0.04em',
                    color: 'var(--muted-2)',
                  }}
                >
                  Üsküdar Mihrimah Sultan Camii — iskele meydanındaki ilk külliye. Fotoğraf: Wikimedia
                  Commons.
                </figcaption>
              </figure>
            </section>

            <section id="kulliye">
              <h2 style={h2Style}>Edirnekapı Külliyesi: bir mahalle kurmak</h2>
              <p style={{ ...bodyStyle, marginTop: 20 }}>
                Külliye, 16. yüzyıl Osmanlı şehirciliğinin temel aracıdır: cami merkezde durur,
                çevresine eğitim, ticaret, temizlik ve hayır işlevleri dizilir. Mihrimah
                Sultan&apos;ın Edirnekapı&apos;da kurduğu düzen de böyleydi.
              </p>
              <div
                style={{
                  marginTop: 28,
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit,minmax(188px,1fr))',
                  gap: 12,
                }}
              >
                {kulliye.map((item) => (
                  <div
                    key={item.t}
                    style={{
                      background: 'var(--card-soft)',
                      border: '1px solid var(--line)',
                      borderRadius: 14,
                      padding: '20px 22px 22px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 9,
                    }}
                  >
                    <h3 style={{ fontSize: 17, fontWeight: 400, color: 'var(--ink)' }}>{item.t}</h3>
                    <p
                      style={{ fontSize: 14.5, fontWeight: 300, lineHeight: 1.62, color: 'var(--body-soft)' }}
                    >
                      {item.d}
                    </p>
                  </div>
                ))}
              </div>
              <p style={{ ...bodyStyle, marginTop: 24 }}>
                Bu birimlerin masrafı vakıf gelirleriyle karşılanırdı ve hamam, bu gelirin en
                istikrarlı kalemlerinden biriydi. Yani bir mahalleli hamama girdiğinde yalnızca
                yıkanmıyor, medresenin hocasının maaşına, mektebin kitabına, sebilin suyuna katkı
                yapıyordu.
              </p>
            </section>

            <section id="mimarlik">
              <h2 style={h2Style}>Hamamın mimarisi: dört oda, tek mantık</h2>
              <p style={{ ...bodyStyle, marginTop: 20 }}>
                Osmanlı hamamı, Roma termalarından devraldığı kademeli ısı fikrini sadeleştirir ve
                mahremiyet üzerine yeniden kurar. Yapı dört bölümden oluşur ve her bölümün sıcaklığı
                bir sonrakine hazırlıktır.
              </p>
              <div style={{ marginTop: 26, display: 'flex', flexDirection: 'column' }}>
                {rooms.map((room) => (
                  <div
                    key={room.t}
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'minmax(110px,132px) 1fr',
                      gap: 22,
                      padding: '20px 0',
                      borderTop: '1px solid var(--line-2)',
                    }}
                  >
                    <span style={{ fontSize: 14.5, color: 'var(--gold)' }}>{room.t}</span>
                    <p
                      style={{ fontSize: 16.5, fontWeight: 300, lineHeight: 1.7, color: 'var(--ink-soft)' }}
                    >
                      {room.d}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <figure style={{ margin: 0 }}>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit,minmax(190px,1fr))',
                  gap: 10,
                }}
              >
                {[2, 1, 4].map((i) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    key={i}
                    src={photoSrc(i)}
                    alt="Tarihi Mihrimah Sultan Hamamı iç mekânından bir görünüm"
                    loading="lazy"
                    style={{ width: '100%', aspectRatio: '3/4', objectFit: 'cover' }}
                  />
                ))}
              </div>
              <figcaption
                style={{ marginTop: 12, fontSize: 12.5, letterSpacing: '0.06em', color: 'var(--muted-2)' }}
              >
                Hamamın iç mekânından görünümler.
              </figcaption>
            </figure>

            <section id="kultur">
              <h2 style={h2Style}>Hamam kültürü: temizlikten fazlası</h2>
              <p style={{ ...bodyStyle, marginTop: 20 }}>
                Osmanlı şehrinde hamam, evlerin çoğunda banyo bulunmadığı yüzyıllarda hem hijyen
                altyapısıydı hem de sosyal hayatın merkezi. Özellikle kadınlar bölümü, günlerin
                planlandığı, haberlerin dolaştığı, ittifakların kurulduğu bir kamusal alandı.
              </p>
              <div
                style={{
                  marginTop: 26,
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))',
                  gap: 18,
                }}
              >
                {customs.map((c) => (
                  <div
                    key={c.t}
                    style={{
                      border: '1px solid var(--line)',
                      background: 'var(--card-soft)',
                      borderRadius: 14,
                      padding: '20px 22px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 8,
                    }}
                  >
                    <h3 style={{ fontSize: 16.5, fontWeight: 400 }}>{c.t}</h3>
                    <p
                      style={{ fontSize: 14.5, fontWeight: 300, lineHeight: 1.64, color: 'var(--body-soft)' }}
                    >
                      {c.d}
                    </p>
                  </div>
                ))}
              </div>
              <p style={{ ...bodyStyle, marginTop: 26 }}>
                Bu geleneklerin bir kısmı bugün yaşamıyor; ama kese, köpük ve sıcak mermer üçlüsü, dört
                yüz elli yıl önce olduğu gibi duruyor. Mihrimah Sultan Hamamı&apos;nda uygulanan sıra da
                bu eski sıradır.
              </p>
            </section>

            <section id="arsiv">
              <h2 style={h2Style}>Hamam sözlüğü</h2>
              <p style={{ ...bodyStyle, marginTop: 20 }}>
                Hamamın kendine ait bir dili var. Aşağıdaki sekiz kelimeyi bilmek, dört yüz elli yıllık
                bir yapının içinde ne olup bittiğini anlamak için yeterli.
              </p>
              <div
                style={{
                  marginTop: 30,
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit,minmax(250px,1fr))',
                  gap: 14,
                }}
              >
                {glossary.map((g) => (
                  <div
                    key={g.n}
                    style={{
                      background: 'var(--card-soft)',
                      border: '1px solid var(--line)',
                      borderRadius: 16,
                      padding: '22px 24px 24px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 10,
                    }}
                  >
                    <span style={{ display: 'flex', alignItems: 'baseline', gap: 12 }}>
                      <span
                        style={{
                          fontSize: 11,
                          letterSpacing: '0.14em',
                          color: 'var(--gold-line)',
                          fontVariantNumeric: 'tabular-nums',
                        }}
                      >
                        {g.n}
                      </span>
                      <span
                        style={{
                          fontSize: 20,
                          fontWeight: 400,
                          letterSpacing: '-0.01em',
                          color: 'var(--ink)',
                        }}
                      >
                        {g.t}
                      </span>
                    </span>
                    <span
                      style={{
                        fontSize: 12,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: 'var(--muted-3)',
                      }}
                    >
                      {g.en}
                    </span>
                    <p style={{ fontSize: 15, fontWeight: 300, lineHeight: 1.66, color: 'var(--body-soft)' }}>
                      {g.d}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section id="zaman">
              <h2 style={h2Style}>Zaman çizelgesi</h2>
              <p
                style={{
                  marginTop: 18,
                  fontSize: 17,
                  fontWeight: 300,
                  lineHeight: 1.72,
                  color: 'var(--body-soft)',
                  maxWidth: '34em',
                }}
              >
                Bir hanım sultanın doğumundan bugünkü göbek taşına uzanan dört buçuk asır.
              </p>
              <div style={{ marginTop: 34, position: 'relative', paddingInlineStart: 34 }}>
                <span
                  style={{
                    position: 'absolute',
                    insetBlock: 8,
                    insetInlineStart: 5,
                    width: 1,
                    background:
                      'linear-gradient(180deg,#C2A87F,#E0D7C8 65%,rgba(224,215,200,0))',
                  }}
                />
                {timeline.map((item) => (
                  <div key={item.year} style={{ position: 'relative', paddingBottom: 32 }}>
                    <span
                      style={{
                        position: 'absolute',
                        insetInlineStart: -34,
                        top: 9,
                        width: 11,
                        height: 11,
                        borderRadius: '50%',
                        background: 'var(--bg)',
                        border: '1px solid var(--gold)',
                        boxShadow: '0 0 0 4px var(--bg)',
                      }}
                    />
                    <span
                      style={{
                        display: 'block',
                        fontSize: 'clamp(20px,2.2vw,27px)',
                        fontWeight: 200,
                        letterSpacing: '0.01em',
                        color: 'var(--gold)',
                        fontVariantNumeric: 'tabular-nums',
                      }}
                    >
                      {item.year}
                    </span>
                    <span
                      style={{
                        display: 'block',
                        marginTop: 5,
                        fontSize: 11,
                        letterSpacing: '0.2em',
                        textTransform: 'uppercase',
                        color: 'var(--gold-soft)',
                      }}
                    >
                      {item.era}
                    </span>
                    <p
                      style={{
                        marginTop: 11,
                        fontSize: 16.5,
                        fontWeight: 300,
                        lineHeight: 1.72,
                        color: 'var(--ink-soft)',
                        maxWidth: '36em',
                      }}
                    >
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section id="bugun">
              <h2 style={h2Style}>Bugün: hâlâ çalışan bir tarih</h2>
              <p style={{ ...bodyStyle, marginTop: 20 }}>
                Dört buçuk asır boyunca depremler, yangınlar ve şehrin dönüşümü yapıyı defalarca onarım
                masasına yatırdı. Buna rağmen hamam işlevini hiç bırakmadı — İstanbul&apos;un kesintisiz
                çalışan en eski yapılarından biri olmasının nedeni bu.
              </p>
              <p style={{ ...bodyStyle, marginTop: 16 }}>
                Karagümrük ve Edirnekapı, turistik akışın biraz dışında kaldığı için hamam mahalleli
                müşterisini korudu. Buraya gelen bir ziyaretçi kurgulanmış bir gösteriye değil, dört yüz
                elli yıldır süren bir günlük hayat pratiğine katılır. Kadın ve erkek bölümleri ayrı ayrı
                çalışır; kese ve köpük masajı aynı geleneksel yöntemle, aynı taşın üzerinde yapılır.
              </p>
            </section>

            <section id="cevre">
              <h2 style={h2Style}>Aynı gün gezilebilecek yakın çevre</h2>
              <p style={{ ...bodyStyle, marginTop: 20 }}>
                Hamam, Fatih&apos;in tarihî surlarına yakın bir noktada. Aşağıdaki duraklar yürüme
                mesafesinde ya da kısa bir taksi yolculuğunda; hamamı günün sonuna bırakmak en iyisi.
              </p>
              <div style={{ marginTop: 26, display: 'flex', flexDirection: 'column' }}>
                {nearby.map((n) => (
                  <div
                    key={n.t}
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr auto',
                      gap: 18,
                      alignItems: 'baseline',
                      padding: '18px 0',
                      borderTop: '1px solid var(--line-2)',
                    }}
                  >
                    <span style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                      <span style={{ fontSize: 17, fontWeight: 400, color: 'var(--ink)' }}>{n.t}</span>
                      <span
                        style={{ fontSize: 14.5, fontWeight: 300, lineHeight: 1.6, color: 'var(--body-soft)' }}
                      >
                        {n.d}
                      </span>
                    </span>
                    <span
                      style={{
                        fontSize: 13,
                        letterSpacing: '0.1em',
                        color: 'var(--gold)',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {n.dist}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            <section id="sss">
              <h2 style={h2Style}>Tarihe dair sık sorulan sorular</h2>
              <div style={{ marginTop: 26, display: 'flex', flexDirection: 'column', gap: 12 }}>
                <FaqList items={historyFaqs} compact />
              </div>
            </section>

            <section
              style={{
                border: '1px solid var(--line-2)',
                background: 'var(--bg-alt)',
                borderRadius: 20,
                padding: 'clamp(30px,4vw,48px)',
              }}
            >
              <h2
                style={{
                  fontSize: 'clamp(24px,2.6vw,34px)',
                  fontWeight: 300,
                  letterSpacing: '-0.012em',
                  maxWidth: '24em',
                }}
              >
                Tarihi okuduysanız, sırada taşın üzerine uzanmak var
              </h2>
              <p
                style={{
                  marginTop: 16,
                  fontSize: 16.5,
                  fontWeight: 300,
                  lineHeight: 1.72,
                  color: 'var(--body)',
                  maxWidth: '34em',
                }}
              >
                Erkekler bölümü her gün {HOURS.men.replace(' — ', '–')}, kadınlar bölümü{' '}
                {HOURS.women.replace(' — ', '–')} arası açık. Randevu şart değil; yoğun saatlerde
                WhatsApp&apos;tan haber vermek bekleme süresini kısaltır.
              </p>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 28 }}>
                <a
                  className="btn btn-wa"
                  href={waLink('tr')}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: 13.5, padding: '14px 26px' }}
                >
                  <WhatsAppIcon size={17} />
                  <span>WhatsApp&apos;tan yer ayır</span>
                </a>
                <Link
                  className="btn btn-outline-dark"
                  href="/#packages"
                  style={{ fontSize: 13.5, padding: '14px 26px' }}
                >
                  Paketler ve fiyatlar
                </Link>
              </div>
            </section>
          </main>

          <aside
            className="msh-sidebar"
            style={{
              position: 'sticky',
              top: 112,
              display: 'flex',
              flexDirection: 'column',
              gap: 30,
              minWidth: 0,
              maxWidth: 300,
              flex: '1 1 240px',
              order: 2,
            }}
          >
            <div
              style={{
                border: '1px solid var(--line-2)',
                background: 'var(--card)',
                borderRadius: 16,
                padding: '24px 22px',
              }}
            >
              <p style={sideLabel}>İçindekiler</p>
              <nav
                style={{
                  marginTop: 16,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 11,
                  fontSize: 14.5,
                  fontWeight: 300,
                }}
              >
                {TOC.map((item) => (
                  <a key={item.id} className="lnk" href={`#${item.id}`} style={{ color: 'var(--ink-soft)' }}>
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>

            <div style={{ borderInlineStart: '1px solid var(--line-2)', paddingInlineStart: 24 }}>
              <p style={sideLabel}>Künye</p>
              <div
                style={{
                  marginTop: 16,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 13,
                  fontSize: 14.5,
                  fontWeight: 300,
                  lineHeight: 1.5,
                  color: 'var(--ink-soft)',
                }}
              >
                {KUNYE.map((item) => (
                  <p key={item.k}>
                    <span style={{ color: 'var(--muted-3)' }}>{item.k}</span>
                    <br />
                    {item.v}
                  </p>
                ))}
              </div>
            </div>

            <div
              style={{
                border: '1px solid var(--line-2)',
                background: 'var(--card)',
                borderRadius: 16,
                padding: 22,
              }}
            >
              <p style={sideLabel}>Ziyaret</p>
              <div
                style={{
                  marginTop: 14,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 10,
                  fontSize: 14.5,
                  fontWeight: 300,
                  color: 'var(--ink-soft)',
                }}
              >
                <span>
                  Erkekler{' '}
                  <span style={{ fontVariantNumeric: 'tabular-nums', color: 'var(--ink)' }}>
                    {HOURS.men}
                  </span>
                </span>
                <span>
                  Kadınlar{' '}
                  <span style={{ fontVariantNumeric: 'tabular-nums', color: 'var(--ink)' }}>
                    {HOURS.women}
                  </span>
                </span>
              </div>
              <a
                className="btn btn-wa"
                href={waLink('tr')}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  marginTop: 18,
                  justifyContent: 'center',
                  gap: 9,
                  fontSize: 13,
                  padding: '12px 18px',
                }}
              >
                <WhatsAppIcon size={16} />
                <span>WhatsApp&apos;tan yaz</span>
              </a>
            </div>
          </aside>
        </div>
      </div>

      <Footer onHome={false} />
      <WhatsAppButton />
    </div>
  )
}
