"use client"

import Image from "next/image"
import { useState } from "react"

const images = [
  {
    src: "/images/render-exterior.jpg",
    alt: "Render exterior de Terra Costa - fachada con acabados de piedra y terracota",
  },
  {
    src: "/images/render-interior.jpg",
    alt: "Interior de condominio Terra Costa - sala con vista al mar",
  },
  {
    src: "/images/rooftop-pool.jpg",
    alt: "Alberca en rooftop de Terra Costa con vista al Mar de Cortés",
  },
]

const models = [
  {
    name: "Condominio 2 Recámaras",
    size: "95 m²",
    bedrooms: "2 Recámaras",
    bathrooms: "2 Baños",
    features: "Terraza con vista al mar",
  },
  {
    name: "Condominio 3 Recámaras",
    size: "130 m²",
    bedrooms: "3 Recámaras",
    bathrooms: "2.5 Baños",
    features: "Sala de TV + Terraza amplia",
  },
  {
    name: "Penthouse Exclusivo",
    size: "191 m²",
    bedrooms: "3 Recámaras",
    bathrooms: "3 Baños",
    features: "Rooftop privado + Doble altura",
  },
]

export function ProjectGallery() {
  const [activeImage, setActiveImage] = useState(0)

  return (
    <section id="proyecto" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="text-accent text-xs tracking-[0.3em] uppercase font-medium">
            El Proyecto
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-earth mt-4 text-balance">
            Luxury Coastal Living
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            3 niveles de elegancia costera con vistas panorámicas al Mar de
            Cortés. Acabados premium, arquitectura mediterránea y la
            exclusividad de solo 12 residencias.
          </p>
        </div>

        {/* Gallery */}
        <div className="mb-20">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg">
            <Image
              src={images[activeImage].src}
              alt={images[activeImage].alt}
              fill
              className="object-cover transition-all duration-700"
              quality={85}
            />
          </div>
          <div className="mt-4 flex gap-3">
            {images.map((img, i) => (
              <button
                key={img.src}
                onClick={() => setActiveImage(i)}
                className={`relative aspect-[16/9] w-1/3 overflow-hidden rounded-sm transition-all ${
                  activeImage === i
                    ? "ring-2 ring-accent ring-offset-2 ring-offset-background"
                    : "opacity-60 hover:opacity-100"
                }`}
                aria-label={`Ver imagen ${i + 1}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  quality={60}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Models */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {models.map((model) => (
            <div
              key={model.name}
              className="flex flex-col rounded-lg border border-border bg-card p-8 transition-shadow hover:shadow-lg"
            >
              <h3 className="font-serif text-xl text-earth">{model.name}</h3>
              <span className="mt-2 text-2xl font-medium text-accent">
                {model.size}
              </span>
              <div className="mt-6 flex flex-col gap-3 border-t border-border pt-6 text-sm text-muted-foreground">
                <div className="flex items-center justify-between">
                  <span>Recámaras</span>
                  <span className="text-foreground font-medium">
                    {model.bedrooms}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Baños</span>
                  <span className="text-foreground font-medium">
                    {model.bathrooms}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Destacado</span>
                  <span className="text-foreground font-medium">
                    {model.features}
                  </span>
                </div>
              </div>
              <a
                href="#contacto"
                className="mt-8 inline-flex items-center justify-center rounded-sm border border-earth px-6 py-3 text-xs font-medium tracking-wider uppercase text-earth transition-colors hover:bg-earth hover:text-primary-foreground"
              >
                Conocer precios
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
