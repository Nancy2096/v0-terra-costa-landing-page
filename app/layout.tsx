import type { Metadata, Viewport } from 'next'
import { DM_Sans, Alike } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import './globals.css'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const alike = Alike({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-alike',
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
  icons: {
    icon: '/images/logo-light.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#5C3D2E',
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
    <html lang="es" className={`${dmSans.variable} ${alike.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased">
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PZKPNNRR');
          `}
        </Script>
        {/* End Google Tag Manager */}
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PZKPNNRR"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
        <Analytics />

        {/* Yandex.Metrika counter */}
        <Script id="yandex-metrika" strategy="afterInteractive">
          {`
            (function(m,e,t,r,i,k,a){
              m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
            })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=108256867', 'ym');

            ym(108256867, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", referrer: document.referrer, url: location.href, accurateTrackBounce:true, trackLinks:true});
          `}
        </Script>
        <noscript>
          <div>
            <img src="https://mc.yandex.ru/watch/108256867" style={{ position: "absolute", left: "-9999px" }} alt="" />
          </div>
        </noscript>
        {/* Metricool tracking */}
        <Script id="metricool-tracking" strategy="afterInteractive">
          {`
            function loadScript(a){var b=document.getElementsByTagName("head")[0],c=document.createElement("script");c.type="text/javascript",c.src="https://tracker.metricool.com/resources/be.js",c.onreadystatechange=a,c.onload=a,b.appendChild(c)}loadScript(function(){beTracker.t({hash:"2c78bd345dd5009d8ddb9ad5cfc74947"})});
          `}
        </Script>
      </body>
    </html>
  )
}
