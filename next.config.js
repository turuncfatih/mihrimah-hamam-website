/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['lh3.googleusercontent.com'],
  },
  // Eski statik siteden kalan sayfaları anasayfaya 301 (kalıcı) yönlendir.
  async redirects() {
    return [
      {
        source: '/hamamsauna.html',
        destination: '/',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
