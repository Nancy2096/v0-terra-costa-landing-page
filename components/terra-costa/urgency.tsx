"use client"

import { ArrowRight } from "lucide-react"

const stats = [
  { value: "25%", label: "Por debajo del mercado", sub: "Precio de preventa" },
  { value: "53%", label: "Plusvalia proyectada", sub: "En proyectos similares" },
  { value: "7/10", label: "Unidades disponibles", sub: "Solo quedan 7" },
]

export function Urgency() {
  return (
    <section className="relative bg-earth py-20 lg:py-28 overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />

      <div className="relative mx-auto max-w-6xl px-4">
        {/* ── Header ────────────────────────────────────────────── */}
        <div className="text-center mb-14">
          <span className="text-gold text-xs tracking-[0.3em] uppercase font-medium">
            Oportunidad limitada
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-cream mt-3 text-balance">
            San Carlos crece — y esta es tu ventana
          </h2>
          <p className="text-cream/50 max-w-lg mx-auto mt-4 text-sm lg:text-base leading-relaxed">
            Los numeros hablan por si solos. Invertir en preventa significa
            asegurar un precio que no volvera a repetirse.
          </p>
        </div>

        {/* ── Stats row ─────────────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center gap-2 rounded-2xl border border-cream/10 bg-cream/5 py-8 px-6 text-center"
            >
              <span className="font-serif text-4xl lg:text-5xl text-gold">
                {s.value}
              </span>
              <span className="text-cream text-sm font-medium">{s.label}</span>
              <span className="text-cream/40 text-xs">{s.sub}</span>
            </div>
          ))}
        </div>

        {/* ── Units indicator + CTA ─────────────────────────────── */}
        <div className="mt-10 flex flex-col items-center gap-5">
          <div className="flex items-center gap-2">
            {Array.from({ length: 10 }).map((_, i) => (
              <div
                key={i}
                className={`h-3.5 rounded-full transition-all ${
                  i < 7 ? "w-3.5 bg-gold" : "w-3.5 bg-cream/15"
                }`}
              />
            ))}
          </div>
          <p className="text-cream/60 text-sm">
            <span className="text-cream font-medium">7 de 10</span> unidades
            aun disponibles
          </p>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 rounded-xl bg-gold px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-earth transition-colors hover:bg-gold/90"
          >
            Reserva tu unidad
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
