import type { Metadata, Viewport } from 'next'
import { DM_Sans, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Terra Costa | Condominios de Lujo en San Carlos, Sonora',
  description:
    'Descubre Terra Costa: 10 condominios exclusivos + 2 penthouses en la Golden Zone de San Carlos. Preventa 25% por debajo del mercado. Luxury Coastal Living frente al Mar de Cortés.',
  keywords: [
    'condominios San Carlos',
    'departamentos playa Sonora',
    'inversión inmobiliaria México',
    'Golden Zone San Carlos',
    'preventa condominios lujo',
    'Terra Costa',
    'Desert Development',
  ],
  openGraph: {
    title: 'Terra Costa — Upscale Coastal Residences',
    description:
      'Tu propio espacio frente al mar en San Carlos. Solo 10 unidades exclusivas en preventa.',
    type: 'website',
    locale: 'es_MX',
  },
}

export const viewport: Viewport = {
  themeColor: '#4A3728',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${dmSans.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
