export function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'View Connection',
    alternateName: ['ViewConnection', 'View Connection South Africa', 'ViewConnection SA'],
    url: 'https://viewconnection.tech',
    logo: 'https://viewconnection.tech/icon.svg',
    description: 'View Connection is South Africa\'s premier software development company, building custom software solutions, web applications, and digital products that drive business growth.',
    foundingDate: '2019',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'ZA',
      addressRegion: 'South Africa',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      availableLanguage: ['English'],
    },
    sameAs: [
      'https://twitter.com/viewconnection',
      'https://linkedin.com/company/viewconnection',
      'https://github.com/viewconnection',
    ],
    areaServed: {
      '@type': 'Country',
      name: 'South Africa',
    },
    knowsAbout: [
      'Software Development',
      'Web Development',
      'Mobile App Development',
      'Cloud Solutions',
      'Custom Software',
      'Digital Solutions',
    ],
  }

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'View Connection',
    alternateName: 'ViewConnection',
    image: 'https://viewconnection.tech/og-image.png',
    url: 'https://viewconnection.tech',
    description: 'Professional software development company in South Africa offering custom software solutions, web development, mobile apps, and cloud solutions.',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'ZA',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -26.2041,
      longitude: 28.0473,
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Johannesburg',
      },
      {
        '@type': 'City',
        name: 'Cape Town',
      },
      {
        '@type': 'City',
        name: 'Durban',
      },
      {
        '@type': 'City',
        name: 'Pretoria',
      },
      {
        '@type': 'Country',
        name: 'South Africa',
      },
    ],
    serviceType: [
      'Software Development',
      'Web Development',
      'Mobile App Development',
      'Cloud Solutions',
      'Custom Software Development',
      'Digital Transformation',
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '50',
    },
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'View Connection',
    alternateName: 'ViewConnection',
    url: 'https://viewconnection.tech',
    description: 'View Connection - South Africa\'s premier software development company',
    publisher: {
      '@type': 'Organization',
      name: 'View Connection',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://viewconnection.tech/?search={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  }

  const servicesSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'View Connection Services',
    description: 'Software development services offered by View Connection',
    itemListElement: [
      {
        '@type': 'Service',
        position: 1,
        name: 'Custom Software Development',
        description: 'Tailored software solutions designed specifically for your business needs',
        provider: {
          '@type': 'Organization',
          name: 'View Connection',
        },
      },
      {
        '@type': 'Service',
        position: 2,
        name: 'Web Development',
        description: 'Modern, responsive web applications built with cutting-edge technologies',
        provider: {
          '@type': 'Organization',
          name: 'View Connection',
        },
      },
      {
        '@type': 'Service',
        position: 3,
        name: 'Mobile App Development',
        description: 'Native and cross-platform mobile applications for iOS and Android',
        provider: {
          '@type': 'Organization',
          name: 'View Connection',
        },
      },
      {
        '@type': 'Service',
        position: 4,
        name: 'Cloud Solutions',
        description: 'Scalable cloud infrastructure and deployment solutions',
        provider: {
          '@type': 'Organization',
          name: 'View Connection',
        },
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
    </>
  )
}
