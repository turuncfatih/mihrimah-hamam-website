'use client'

import { useI18n } from '@/contexts/I18nContext'

export function Footer() {
  const { t } = useI18n()

  return (
    <footer id="contact" className="bg-stone-800 text-stone-300 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold mb-4 text-white">{t('contactInfo')}</h2>
            <p className="mb-4">{t('address')}</p>
            <p className="mb-4">{t('phone')}</p>
            <p className="mb-8">{t('email')}</p>
            <button className="bg-green-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-green-600 transition-colors flex items-center gap-2 mx-auto md:mx-0">
              <svg fill="currentColor" height="20" viewBox="0 0 256 256" width="20">
                <path d="M128,24A104,104,0,0,0,24,128c0,21.07,6.4,40.73,17.81,57.73L30.34,228.66a8,8,0,0,0,9.79,9.79l42.93-11.47C100.27,238.6,113.93,240,128,240a104,104,0,0,0,0-208Zm0,192a87.87,87.87,0,0,1-45.18-12.83l-3.32-2-33.35,8.9L55,178.82l-2.22-3.47A88,88,0,1,1,128,216Zm57.45-66.87c-2.78-1.39-16.44-8.1-19-9.1s-4.42-1.39-6.27,1.39-7.19,9.1-8.82,11-3.24,2.08-6,1.39-12.39-4.57-23.6-14.56-17.5-21.72-18.42-24.1c-.92-2.37.93-3.63,2-4.78a13.63,13.63,0,0,0,2.37-2.78c.31-.41.15-1.11-.16-1.8s-6.27-15.1-8.58-20.66c-2.26-5.4-4.57-4.66-6.27-4.74s-3.41-.08-5.18-.08a10.67,10.67,0,0,0-7.74,3.62c-2.62,3.25-10,9.81-10,23.92s10.23,27.75,11.64,29.83S82.35,179,109,190.15c28.35,11.8,28.35,7.5,33.43,7.06,5.08-.41,16.44-6.73,18.75-13.23s2.31-12,1.62-13.23S188.23,150.52,185.45,149.13Z" />
              </svg>
              {t('whatsappContact')}
            </button>
          </div>
          
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold mb-4 text-white">{t('workingHours')}</h2>
            <div className="space-y-4">
              <div className="bg-stone-700/50 p-4 rounded-lg">
                <h3 className="font-bold text-lg mb-2 text-white">{t('menSection')}</h3>
                <p className="text-stone-300">
                  <span className="font-semibold">{t('openingHours')}:</span> 07:00
                </p>
                <p className="text-stone-300">
                  <span className="font-semibold">{t('closingHours')}:</span> 23:00
                </p>
              </div>
              <div className="bg-stone-700/50 p-4 rounded-lg">
                <h3 className="font-bold text-lg mb-2 text-white">{t('womenSection')}</h3>
                <p className="text-stone-300">
                  <span className="font-semibold">{t('openingHours')}:</span> 09:00
                </p>
                <p className="text-stone-300">
                  <span className="font-semibold">{t('closingHours')}:</span> 20:00
                </p>
              </div>
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-lg h-80">
            <iframe 
              allowFullScreen
              height="100%" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade" 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.301594951111!2d28.95021861538357!3d41.01880997930001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caba21a833509d%3A0xf626b4f74d6f304!2sMihrimah%20Sultan%20Hamam%C4%B1!5e0!3m2!1str!2str!4v1678886453213!5m2!1str!2str" 
              style={{ border: 0 }} 
              width="100%"
            />
          </div>
        </div>
        
        <p className="text-sm text-stone-400 text-center mt-12">{t('copyright')}</p>
      </div>
    </footer>
  )
}
