'use client'

import { useI18n } from '@/contexts/I18nContext'

export function PackagesSection() {
  const { t } = useI18n()

  const packages = [
    {
      title: t('traditionalPackage'),
      price: '450',
      features: [
        t('traditionalKese'),
        t('foamMassage'),
        t('hamamUsage'),
      ],
      isFeatured: false,
    },
    {
      title: t('mihrimahPackage'),
      price: '750',
      features: [
        t('traditionalKese'),
        `${t('aromatherapyMassage')} (${t('aromatherapyDuration')})`,
        t('hamamUsage'),
        t('refreshments'),
      ],
      isFeatured: true,
    },
    {
      title: t('pashaPackage'),
      price: '600',
      features: [
        t('traditionalKese'),
        `${t('medicalBackMassage')} (${t('medicalDuration')})`,
        t('hamamUsage'),
      ],
      isFeatured: false,
    },
  ]

  return (
    <section id="services" className="py-20 bg-stone-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">{t('specialPackages')}</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div 
              key={index}
              className={`rounded-lg shadow-lg overflow-hidden flex flex-col p-8 transform hover:-translate-y-2 transition-transform duration-300 border ${
                pkg.isFeatured 
                  ? 'bg-primary text-white ring-4 ring-offset-2 ring-primary' 
                  : 'bg-white border-stone-200'
              }`}
            >
              <h3 className="text-xl font-bold mb-2">{pkg.title}</h3>
              <p className="flex items-baseline gap-2 mb-6">
                <span className={`text-5xl font-extrabold ${
                  pkg.isFeatured ? 'text-white' : 'text-primary'
                }`}>
                  {pkg.price}
                </span>
                <span className="text-lg font-bold">
                  {t('currency')}
                </span>
              </p>
              
              <ul className={`space-y-3 mb-8 flex-grow ${
                pkg.isFeatured ? 'text-white' : 'text-gray-600'
              }`}>
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <svg 
                      className={`h-6 w-6 ${
                        pkg.isFeatured ? 'text-white' : 'text-green-500'
                      }`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        d="M5 13l4 4L19 7" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2"
                      />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              

            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
