"use client"

import Image from "next/image"
import { useState } from "react"
import { Bed, Bath, Maximize, Sparkles, ArrowRight } from "lucide-react"

const galleryImages = [
  {
    src: "/images/render-exterior.jpg",
    label: "Fachada",
    alt: "Render exterior de Terra Costa",
  },
  {
    src: "/images/render-interior.jpg",
    label: "Sala",
    alt: "Interior de condominio Terra Costa",
  },
  {
    src: "/images/render-bedroom.jpg",
    label: "Recámara",
    alt: "Recámara principal con vista al mar",
  },
  {
    src: "/images/render-terrace.jpg",
    label: "Terraza",
    alt: "Terraza con vista al Mar de Cortés",
  },
  {
    src: "/images/rooftop-pool.jpg",
    label: "Rooftop",
    alt: "Alberca en rooftop con vista panorámica",
  },
]

const models = [
  {
    name: "2 Recámaras",
    tag: "Desde",
    size: "95",
    bedrooms: 2,
    bathrooms: 2,
    feature: "Terraza con vista al mar",
    accent: false,
  },
  {
    name: "3 Recámaras",
    tag: "Popular",
    size: "130",
    bedrooms: 3,
    bathrooms: 2.5,
    feature: "Sala de TV + Terraza amplia",
    accent: true,
  },
  {
    name: "Penthouse",
    tag: "Exclusivo",
    size: "191",
    bedrooms: 3,
    bathrooms: 3,
    feature: "Rooftop privado + Doble altura",
    accent: false,
  },
]

export function ProjectGallery() {
  const [active, setActive] = useState(0)

  return (
    <section id="proyecto" className="bg-background py-20 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="mb-14 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <span className="text-accent text-xs tracking-[0.3em] uppercase font-medium">
              El Proyecto
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-earth mt-3 text-balance">
              Luxury Coastal Living
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md leading-relaxed text-sm lg:text-base">
            3 niveles de elegancia costera. Acabados premium, arquitectura
            mediterránea y la exclusividad de solo 12 residencias.
          </p>
        </div>

        {/* Bento Gallery */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 mb-20">
          {/* Main large image */}
          <button
            onClick={() => setActive(0)}
            className="group relative col-span-2 row-span-2 aspect-square lg:aspect-auto overflow-hidden rounded-2xl"
          >
            <Image
              src={galleryImages[0].src}
              alt={galleryImages[0].alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
              quality={85}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-earth/60 via-transparent to-transparent" />
            <span className="absolute bottom-4 left-5 text-sm font-medium text-primary-foreground/90 tracking-wide">
              {galleryImages[0].label}
            </span>
          </button>

          {/* Smaller images */}
          {galleryImages.slice(1).map((img, i) => (
            <button
              key={img.src}
              onClick={() => setActive(i + 1)}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 1024px) 50vw, 25vw"
                quality={75}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-earth/50 via-transparent to-transparent" />
              <span className="absolute bottom-3 left-4 text-xs font-medium text-primary-foreground/90 tracking-wide">
                {img.label}
              </span>
            </button>
          ))}
        </div>

        {/* Lightbox overlay */}
        {active !== null && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-earth/90 backdrop-blur-sm p-4 cursor-pointer"
            onClick={() => setActive(0)}
            role="dialog"
            aria-label="Vista ampliada de imagen"
          >
            <button
              className="absolute top-6 right-6 text-primary-foreground/80 hover:text-primary-foreground text-sm tracking-wider uppercase"
              onClick={() => setActive(0)}
            >
              Cerrar
            </button>
            <div className="relative w-full max-w-5xl aspect-[16/9] rounded-xl overflow-hidden">
              <Image
                src={galleryImages[active].src}
                alt={galleryImages[active].alt}
                fill
                className="object-cover"
                quality={90}
              />
            </div>
            <div className="absolute bottom-8 flex gap-2">
              {galleryImages.map((img, i) => (
                <button
                  key={img.src}
                  onClick={(e) => {
                    e.stopPropagation()
                    setActive(i)
                  }}
                  className={`h-2 w-2 rounded-full transition-all ${
                    active === i
                      ? "bg-primary-foreground w-6"
                      : "bg-primary-foreground/40 hover:bg-primary-foreground/70"
                  }`}
                  aria-label={`Ver ${img.label}`}
                />
              ))}
            </div>
          </div>
        )}

        {/* Unit Models */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5">
          {models.map((model) => (
            <div
              key={model.name}
              className={`group relative flex flex-col rounded-2xl p-6 lg:p-8 transition-all duration-300 hover:-translate-y-1 ${
                model.accent
                  ? "bg-earth text-primary-foreground shadow-xl"
                  : "bg-card border border-border hover:shadow-lg"
              }`}
            >
              {/* Tag */}
              <span
                className={`self-start text-[10px] font-bold uppercase tracking-[0.2em] rounded-full px-3 py-1 mb-5 ${
                  model.accent
                    ? "bg-primary-foreground/15 text-gold"
                    : "bg-accent/10 text-accent"
                }`}
              >
                {model.tag}
              </span>

              {/* Name + Size */}
              <h3
                className={`font-serif text-2xl lg:text-3xl ${
                  model.accent ? "text-primary-foreground" : "text-earth"
                }`}
              >
                {model.name}
              </h3>
              <div className="flex items-baseline gap-1 mt-2 mb-6">
                <span
                  className={`text-4xl lg:text-5xl font-serif ${
                    model.accent ? "text-gold" : "text-accent"
                  }`}
                >
                  {model.size}
                </span>
                <span
                  className={`text-sm ${
                    model.accent
                      ? "text-primary-foreground/60"
                      : "text-muted-foreground"
                  }`}
                >
                  m²
                </span>
              </div>

              {/* Specs */}
              <div
                className={`flex flex-col gap-3 py-5 border-t ${
                  model.accent
                    ? "border-primary-foreground/15"
                    : "border-border"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Bed
                    className={`h-4 w-4 ${
                      model.accent
                        ? "text-primary-foreground/50"
                        : "text-muted-foreground"
                    }`}
                    strokeWidth={1.5}
                  />
                  <span className="text-sm">
                    {model.bedrooms} Recámaras
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Bath
                    className={`h-4 w-4 ${
                      model.accent
                        ? "text-primary-foreground/50"
                        : "text-muted-foreground"
                    }`}
                    strokeWidth={1.5}
                  />
                  <span className="text-sm">
                    {model.bathrooms} Baños
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Sparkles
                    className={`h-4 w-4 ${
                      model.accent
                        ? "text-primary-foreground/50"
                        : "text-muted-foreground"
                    }`}
                    strokeWidth={1.5}
                  />
                  <span className="text-sm">{model.feature}</span>
                </div>
              </div>

              {/* CTA */}
              <a
                href="#contacto"
                className={`mt-auto flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-xs font-semibold tracking-wider uppercase transition-colors ${
                  model.accent
                    ? "bg-gold text-earth hover:bg-gold/90"
                    : "border border-earth text-earth hover:bg-earth hover:text-primary-foreground"
                }`}
              >
                Conocer precios
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
