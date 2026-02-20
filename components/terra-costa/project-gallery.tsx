"use client"

import Image from "next/image"
import { useState } from "react"
import { X } from "lucide-react"

/* ── Gallery images ──────────────────────────────────────────────── */
const gallery = [
  { src: "/images/render-exterior.jpg", label: "Fachada", alt: "Render exterior Terra Costa" },
  { src: "/images/render-interior.jpg", label: "Sala", alt: "Sala con vista al mar" },
  { src: "/images/render-bedroom.jpg", label: "Recámara", alt: "Recámara principal" },
  { src: "/images/render-terrace.jpg", label: "Terraza", alt: "Terraza al mar" },
  { src: "/images/rooftop-pool.jpg", label: "Rooftop", alt: "Alberca rooftop" },
]



export function ProjectGallery() {
  const [lightbox, setLightbox] = useState<number | null>(null)

  return (
    <section id="proyecto" className="bg-background py-20 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4">
        {/* ── Header ─────────────────────────────────────────────── */}
        <div className="mb-14 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
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

        {/* ── Bento Gallery ──────────────────────────────────────── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 mb-20">
          {/* Hero image — large */}
          <button
            onClick={() => setLightbox(0)}
            className="group relative col-span-2 row-span-2 overflow-hidden rounded-2xl aspect-square lg:aspect-auto"
          >
            <Image
              src={gallery[0].src}
              alt={gallery[0].alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
              quality={85}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-earth/50 via-transparent to-transparent" />
            <span className="absolute bottom-4 left-5 text-sm font-medium text-primary-foreground tracking-wide">
              {gallery[0].label}
            </span>
          </button>

          {/* Smaller cells */}
          {gallery.slice(1).map((img, i) => (
            <button
              key={img.src}
              onClick={() => setLightbox(i + 1)}
              className="group relative overflow-hidden rounded-2xl aspect-[4/3]"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 1024px) 50vw, 25vw"
                quality={75}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-earth/40 via-transparent to-transparent" />
              <span className="absolute bottom-3 left-4 text-xs font-medium text-primary-foreground tracking-wide">
                {img.label}
              </span>
            </button>
          ))}
        </div>

        {/* ── Lightbox ───────────────────────────────────────────── */}
        {lightbox !== null && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-earth/90 backdrop-blur-sm p-4"
            role="dialog"
            aria-label="Galería de imágenes"
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-5 right-5 flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20 transition-colors"
              aria-label="Cerrar"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="relative w-full max-w-5xl aspect-[16/9] rounded-xl overflow-hidden">
              <Image
                src={gallery[lightbox].src}
                alt={gallery[lightbox].alt}
                fill
                className="object-cover"
                quality={90}
              />
            </div>

            {/* Dots */}
            <div className="absolute bottom-8 flex gap-2">
              {gallery.map((img, i) => (
                <button
                  key={img.src}
                  onClick={() => setLightbox(i)}
                  className={`h-2 rounded-full transition-all ${
                    lightbox === i
                      ? "w-6 bg-primary-foreground"
                      : "w-2 bg-primary-foreground/40 hover:bg-primary-foreground/70"
                  }`}
                  aria-label={`Ver ${img.label}`}
                />
              ))}
            </div>
          </div>
        )}


      </div>
    </section>
  )
}
