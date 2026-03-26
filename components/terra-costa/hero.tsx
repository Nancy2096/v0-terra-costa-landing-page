"use client"

import Image from "next/image"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/hero-coastal.jpg"
        alt="Vista aérea del Mar de Cortés en San Carlos, Sonora"
        fill
        className="object-cover"
        priority
        quality={90}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-earth/50" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-8 px-4 py-32 text-center max-w-4xl mx-auto">
        {/* Logo */}
        <div className="flex flex-col items-center gap-2">
          <span className="font-serif text-cream text-lg tracking-[0.3em] uppercase">
            Terra Costa
          </span>
          <span className="text-gold text-xs tracking-[0.5em] uppercase">
            Upscale Coastal Residences
          </span>
        </div>

        {/* Urgency Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-earth/40 px-5 py-2 backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
          </span>
          <span className="text-cream text-sm tracking-wider">
            Solo 10 unidades disponibles
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-cream leading-tight text-balance">
          Tu propio espacio frente al mar en San Carlos
        </h1>

        {/* Subheadline */}
        <p className="text-cream/80 text-base md:text-lg max-w-2xl leading-relaxed text-balance">
          10 condominios exclusivos &middot; 25% por debajo del valor del mercado &middot; Plusvalía garantizada desde el primer día
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
          <a
            href="#contacto"
            className="inline-flex items-center justify-center rounded-sm bg-accent px-8 py-4 text-sm font-medium tracking-wider uppercase text-accent-foreground transition-colors hover:bg-accent/90"
          >
            Agenda tu cita ahora
          </a>
          <a
            href="https://wa.me/526622216211?text=Hola%2C%20me%20interesa%20conocer%20la%20disponibilidad%20de%20Terra%20Costa"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-sm border border-cream/30 px-8 py-4 text-sm font-medium tracking-wider uppercase text-cream backdrop-blur-sm transition-colors hover:bg-cream/10"
          >
            Ver disponibilidad
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-cream/50 text-xs tracking-widest uppercase">Descubre</span>
        <div className="h-10 w-px bg-cream/30 animate-pulse" />
      </div>
    </section>
  )
}
