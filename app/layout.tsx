import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { StructuredData } from '@/components/structured-data'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: 'View Connection | Software Development & Digital Solutions | South Africa',
    template: '%s | View Connection'
  },
  description: 'View Connection (ViewConnection) is South Africa\'s premier software development company. We build custom software solutions, web applications, mobile apps, and digital products that drive business growth. Professional software development services in Johannesburg, Cape Town, Durban, and across South Africa.',
  keywords: [
    'View Connection',
    'ViewConnection',
    'software development South Africa',
    'custom software development',
    'web development South Africa',
    'mobile app development',
    'digital solutions South Africa',
    'software company South Africa',
    'IT company South Africa',
    'web applications',
    'cloud solutions',
    'software development Johannesburg',
    'software development Cape Town',
    'software development Durban',
    'South African software company',
    'custom software solutions',
    'business software development',
    'enterprise software South Africa'
  ],
  authors: [{ name: 'View Connection', url: 'https://viewconnection.tech' }],
  creator: 'View Connection',
  publisher: 'View Connection',
  generator: 'Next.js',
  applicationName: 'View Connection',
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://viewconnection.tech'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_ZA',
    url: 'https://viewconnection.tech',
    siteName: 'View Connection',
    title: 'View Connection | Software Development & Digital Solutions | South Africa',
    description: 'View Connection (ViewConnection) is South Africa\'s premier software development company. We build custom software solutions, web applications, and digital products that drive business growth.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'View Connection - Software Development Company South Africa',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'View Connection | Software Development South Africa',
    description: 'South Africa\'s premier software development company. Custom software, web apps, mobile apps, and digital solutions.',
    images: ['/og-image.jpg'],
    creator: '@viewconnection',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  verification: {
    google: 'q5-FStoTl-XT7Fx0qloh_H1mRQxq1pi8lqEmG9O3YBs',
  },
  category: 'technology',
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
