'use client'

import { useState } from 'react'
import { useI18n } from '@/contexts/I18nContext'

export function PackagesSection() {
  const { t } = useI18n()
  const [activeTab, setActiveTab] = useState<'men' | 'women'>('men')

  const menPackages = [
    {
      title: t('traditionalPackage'),
      price: '900',
      features: [
        t('traditionalKese'),
        t('foamMassage'),
        t('hamamUsage'),
      ],
      isFeatured: false,
    },
    {
      title: t('mihrimahPackage'),
      price: '1600',
      features: [
        t('oilMassage'),
        t('traditionalKese'),
        t('foamMassage'),
        t('hamamUsage'),
      ],
      isFeatured: true,
    },
    {
      title: 'Standard Hamam',
      price: '600',
      features: [
        t('hamamUsage'),
      ],
      isFeatured: false,
    },
  ]

  const womenPackages = [
    {
      title: t('traditionalPackage'),
      price: '1000',
      features: [
        t('traditionalKese'),
        t('foamMassage'),
        t('hamamUsage'),
      ],
      isFeatured: false,
    },
    {
      title: t('mihrimahPackage'),
      price: '1600',
      features: [
        t('massageOilCoffee'),
        t('traditionalKese'),
        t('foamMassage'),
        t('clayMask'),
        t('hamamUsage'),
      ],
      isFeatured: true,
    },
    {
      title: 'Standard Hamam',
      price: '600',
      features: [
        t('hamamUsage'),
      ],
      isFeatured: false,
    },
  ]

  const packages = activeTab === 'men' ? menPackages : womenPackages

  return (
    <section id="services" className="py-20 bg-stone-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">{t('specialPackages')}</h2>
        
        {/* Tab Switcher */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white rounded-lg p-1 shadow-md border border-stone-200">
            <button
              onClick={() => setActiveTab('men')}
              className={`px-6 py-3 rounded-md font-semibold transition-all duration-300 ${
                activeTab === 'men'
                  ? 'bg-primary text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              {t('menPackages')}
            </button>
            <button
              onClick={() => setActiveTab('women')}
              className={`px-6 py-3 rounded-md font-semibold transition-all duration-300 ${
                activeTab === 'women'
                  ? 'bg-primary text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              {t('womenPackages')}
            </button>
          </div>
        </div>
        
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
