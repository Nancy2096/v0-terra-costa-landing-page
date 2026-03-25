"use client"

import Image from "next/image"
import { useState } from "react"
import {
  Bed,
  Bath,
  Sparkles,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Maximize,
  X,
} from "lucide-react"

/* ── Data ────────────────────────────────────────────────────────── */
const prototypes = [
  {
    id: "2rec",
    name: "2 Recámaras",
    tag: "Desde",
    size: "95",
    beds: 2,
    baths: 2,
    highlight: "Terraza con vista al mar",
    floorPlan: "/images/planta-2rec.jpg",
    gallery: [
      "/images/render-interior.jpg",
      "/images/unit-2r-kitchen.jpg",
      "/images/render-bedroom.jpg",
      "/images/render-terrace.jpg",
    ],
  },
  {
    id: "3rec",
    name: "3 Recámaras",
    tag: "Popular",
    size: "130",
    beds: 3,
    baths: 2.5,
    highlight: "Sala de TV + Terraza amplia",
    floorPlan: "/images/planta-3rec.jpg",
    gallery: [
      "/images/unit-3r-recamara1.jpg",
      "/images/unit-3r-recamara2.jpg",
      "/images/unit-3r-recamara3.jpg",
      "/images/unit-3r-terraza.jpg",
    ],
  },
  {
    id: "penthouse",
    name: "Penthouse",
    tag: "Exclusivo",
    size: "191",
    beds: 3,
    baths: 3,
    highlight: "Rooftop privado + Doble altura",
    floorPlan: "/images/planta-penthouse.jpg",
    gallery: [
      "/images/unit-ph-rooftop.jpg",
      "/images/rooftop-pool.jpg",
      "/images/render-interior.jpg",
      "/images/render-bedroom.jpg",
    ],
  },
]

/* ── Image Carousel ──────────────────────────────────────────────── */
function Carousel({
  images,
  alt,
}: {
  images: string[]
  alt: string
}) {
  const [idx, setIdx] = useState(0)

  const prev = () => setIdx((i) => (i === 0 ? images.length - 1 : i - 1))
  const next = () => setIdx((i) => (i === images.length - 1 ? 0 : i + 1))

  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
      <Image
        src={images[idx]}
        alt={`${alt} - imagen ${idx + 1}`}
        fill
        className="object-cover transition-all duration-500"
        sizes="(max-width: 1024px) 100vw, 50vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-earth/20 via-transparent to-transparent" />

      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-card/80 backdrop-blur-sm text-earth hover:bg-card transition-colors"
        aria-label="Imagen anterior"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-card/80 backdrop-blur-sm text-earth hover:bg-card transition-colors"
        aria-label="Siguiente imagen"
      >
        <ChevronRight className="h-4 w-4" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            className={`h-1.5 rounded-full transition-all ${
              idx === i
                ? "w-5 bg-primary-foreground"
                : "w-1.5 bg-primary-foreground/40"
            }`}
            aria-label={`Ver imagen ${i + 1}`}
          />
        ))}
      </div>

      {/* Counter */}
      <span className="absolute top-3 right-3 text-[10px] font-medium bg-card/80 backdrop-blur-sm text-earth rounded-full px-2.5 py-1">
        {idx + 1} / {images.length}
      </span>
    </div>
  )
}

/* ── Main Section ────────────────────────────────────────────────── */
export function UnitPrototypes() {
  const [active, setActive] = useState(0)
  const [showPlan, setShowPlan] = useState(false)
  const unit = prototypes[active]

  return (
    <section id="prototipos" className="bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="mb-14 text-center">
          <span className="text-accent text-xs tracking-[0.3em] uppercase font-medium">
            Prototipos
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-earth mt-3 text-balance">
            Elige tu espacio ideal
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto leading-relaxed text-sm lg:text-base">
            3 modelos pensados para diferentes estilos de vida. Cada uno con
            acabados de lujo y vistas al Mar de Cortés.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-full border border-border bg-card p-1 gap-1">
            {prototypes.map((p, i) => (
              <button
                key={p.id}
                onClick={() => setActive(i)}
                className={`relative rounded-full px-5 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all ${
                  active === i
                    ? "bg-earth text-primary-foreground shadow-md"
                    : "text-muted-foreground hover:text-earth"
                }`}
              >
                {p.name}
                {p.tag === "Popular" && active !== i && (
                  <span className="absolute -top-1.5 -right-1.5 h-3 w-3 rounded-full bg-accent" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left: Gallery + Floor Plan toggle */}
          <div className="lg:w-3/5 flex flex-col gap-4">
            <Carousel images={unit.gallery} alt={unit.name} />

            {/* Floor plan toggle */}
            <button
              onClick={() => setShowPlan(true)}
              className="group flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-all hover:shadow-md hover:border-accent/30"
            >
              <div className="relative h-16 w-20 shrink-0 overflow-hidden rounded-lg bg-secondary">
                <Image
                  src={unit.floorPlan}
                  alt={`Planta tipo ${unit.name}`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col items-start gap-0.5">
                <span className="text-sm font-medium text-earth">
                  Planta tipo
                </span>
                <span className="text-xs text-muted-foreground">
                  Ver distribución completa
                </span>
              </div>
              <Maximize className="ml-auto h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors" />
            </button>
          </div>

          {/* Right: Specs Card */}
          <div className="lg:w-2/5 flex flex-col">
            <div className="flex flex-col rounded-2xl bg-card border border-border p-6 lg:p-8 h-full">
              {/* Tag */}
              <span className="self-start text-[10px] font-bold uppercase tracking-[0.2em] rounded-full bg-accent/10 text-accent px-3 py-1 mb-4">
                {unit.tag}
              </span>

              {/* Name */}
              <h3 className="font-serif text-2xl lg:text-3xl text-earth">
                {unit.name}
              </h3>

              {/* Size */}
              <div className="flex items-baseline gap-1 mt-2 mb-8">
                <span className="text-5xl font-serif text-accent">
                  {unit.size}
                </span>
                <span className="text-sm text-muted-foreground">
                  {"m\u00B2"}
                </span>
              </div>

              {/* Specs */}
              <div className="flex flex-col gap-4 py-6 border-t border-border">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary">
                    <Bed className="h-4 w-4 text-muted-foreground" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-earth">
                      {unit.beds} Recámaras
                    </p>
                    <p className="text-xs text-muted-foreground">Amplias con closet</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary">
                    <Bath className="h-4 w-4 text-muted-foreground" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-earth">
                      {unit.baths} Baños
                    </p>
                    <p className="text-xs text-muted-foreground">Acabados premium</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary">
                    <Sparkles className="h-4 w-4 text-muted-foreground" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-earth">
                      {unit.highlight}
                    </p>
                    <p className="text-xs text-muted-foreground">Característica estrella</p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <a
                href="#contacto"
                className="mt-auto flex items-center justify-center gap-2 rounded-xl bg-earth px-6 py-4 text-xs font-semibold tracking-wider uppercase text-primary-foreground transition-colors hover:bg-earth/90"
              >
                Solicitar precios y disponibilidad
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Floor Plan Lightbox */}
      {showPlan && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-earth/90 backdrop-blur-sm p-4"
          role="dialog"
          aria-label="Planta tipo"
        >
          <button
            onClick={() => setShowPlan(false)}
            className="absolute top-5 right-5 flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20 transition-colors"
            aria-label="Cerrar"
          >
            <X className="h-5 w-5" />
          </button>
          <div className="relative w-full max-w-3xl aspect-square rounded-xl overflow-hidden bg-card">
            <Image
              src={unit.floorPlan}
              alt={`Planta tipo ${unit.name}`}
              fill
              className="object-contain p-4"
              quality={90}
            />
          </div>
          <p className="absolute bottom-8 text-primary-foreground/70 text-sm">
            {unit.name} &mdash; {unit.size} m&sup2;
          </p>
        </div>
      )}
    </section>
  )
}
