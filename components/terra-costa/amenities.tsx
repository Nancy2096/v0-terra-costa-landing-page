"use client"

import Image from "next/image"
import { useState } from "react"
import { Waves, Dumbbell, Wind, Flame, PawPrint, Car } from "lucide-react"

const amenities = [
  {
    icon: Waves,
    image: "/images/amenity-pool.jpg",
    name: "Alberca + Rooftop Pool",
    description:
      "Dos niveles de inmersión con vistas panorámicas al Mar de Cortés. Disfruta el atardecer desde el agua.",
  },
  {
    icon: Dumbbell,
    image: "/images/amenity-gym.jpg",
    name: "Gimnasio Premium",
    description:
      "Equipamiento de última generación con vista al océano. Tu rutina con la mejor panorámica.",
  },
  {
    icon: Wind,
    image: "/images/amenity-yoga.jpg",
    name: "Área de Yoga",
    description:
      "Tu espacio de bienestar frente al horizonte infinito. Meditación, estiramiento y calma absoluta.",
  },
  {
    icon: Flame,
    image: "/images/amenity-bbq.jpg",
    name: "Área de Asador",
    description:
      "Convivencia gourmet al aire libre con vista al atardecer. El lugar ideal para reuniones.",
  },
  {
    icon: PawPrint,
    image: "/images/amenity-petpark.jpg",
    name: "Pet Park",
    description:
      "Área segura y diseñada para tus mascotas. Porque ellos también merecen vivir frente al mar.",
  },
  {
    icon: Car,
    image: "/images/amenity-parking.jpg",
    name: "Estacionamiento Asignado",
    description:
      "Lugar exclusivo para cada residente. Acceso directo, seguro y cómodo a tu hogar.",
  },
]

export function Amenities() {
  const [active, setActive] = useState(0)

  return (
    <section className="bg-earth py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4">
        {/* ── Header ───────────────────────────────────────────── */}
        <div className="mb-14 text-center">
          <span className="text-gold text-xs tracking-[0.3em] uppercase font-medium">
            Amenidades
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-cream mt-3 text-balance">
            Diseñado para vivir y disfrutar
          </h2>
          <p className="text-cream/50 max-w-lg mx-auto mt-4 leading-relaxed text-sm lg:text-base">
            Cada espacio pensado para elevar tu estilo de vida en la costa del
            Mar de Cortés.
          </p>
        </div>

        {/* ── Split layout: image + list ────────────────────────── */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-0 items-stretch">
          {/* Left: Active image */}
          <div className="relative lg:w-3/5 aspect-[4/3] lg:aspect-auto overflow-hidden rounded-2xl lg:rounded-r-none">
            {amenities.map((item, i) => (
              <Image
                key={item.name}
                src={item.image}
                alt={item.name}
                fill
                className={`object-cover transition-opacity duration-700 ${
                  active === i ? "opacity-100" : "opacity-0"
                }`}
                sizes="(max-width: 1024px) 100vw, 60vw"
                quality={80}
                priority={i === 0}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-r from-earth/30 via-transparent to-earth/60 lg:to-earth/80" />

            {/* Floating active name on mobile */}
            <div className="absolute bottom-5 left-5 lg:hidden">
              <h3 className="font-serif text-2xl text-cream">
                {amenities[active].name}
              </h3>
              <p className="text-cream/60 text-sm mt-1 max-w-xs">
                {amenities[active].description}
              </p>
            </div>
          </div>

          {/* Right: Amenity list */}
          <div className="lg:w-2/5 flex flex-col lg:rounded-r-2xl lg:bg-cream/5 lg:border lg:border-l-0 lg:border-cream/10">
            {amenities.map((item, i) => {
              const isActive = active === i
              return (
                <button
                  key={item.name}
                  onClick={() => setActive(i)}
                  className={`flex items-center gap-4 px-6 py-5 text-left transition-all duration-300 border-b border-cream/5 last:border-b-0 ${
                    isActive
                      ? "bg-cream/10 lg:border-l-2 lg:border-l-gold"
                      : "hover:bg-cream/5"
                  }`}
                >
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${
                      isActive ? "bg-gold/20 border border-gold/40" : "bg-cream/5 border border-cream/10"
                    }`}
                  >
                    <item.icon
                      className={`h-4 w-4 transition-colors duration-300 ${
                        isActive ? "text-gold" : "text-cream/40"
                      }`}
                      strokeWidth={1.5}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4
                      className={`font-serif text-base transition-colors duration-300 ${
                        isActive ? "text-cream" : "text-cream/60"
                      }`}
                    >
                      {item.name}
                    </h4>
                    <p
                      className={`text-xs mt-0.5 leading-relaxed transition-all duration-300 overflow-hidden ${
                        isActive
                          ? "text-cream/50 max-h-20 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      {item.description}
                    </p>
                  </div>
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
