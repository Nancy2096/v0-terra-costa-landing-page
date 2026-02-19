"use client"

import { ArrowRight } from "lucide-react"

const comparisons = [
  {
    project: "Proyectos similares en zona",
    price: "$465,000 – $709,500 USD",
    status: "Precio actual",
  },
  {
    project: "Terra Costa en preventa",
    price: "Desde $48,000 MXN/m²",
    status: "Oportunidad activa",
    highlight: true,
  },
  {
    project: "Vista Zafiros (referencia)",
    price: "$245,000 → $375,000 USD",
    status: "Vendido 100% en preventa",
  },
]

export function Urgency() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="text-accent text-xs tracking-[0.3em] uppercase font-medium">
            Oportunidad limitada
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-earth mt-4 text-balance">
            San Carlos crece — y esta es tu ventana de oportunidad
          </h2>
        </div>

        {/* Comparison Table */}
        <div className="mx-auto max-w-3xl">
          <div className="flex flex-col gap-4">
            {comparisons.map((comp) => (
              <div
                key={comp.project}
                className={`flex flex-col md:flex-row md:items-center justify-between rounded-lg p-6 ${
                  comp.highlight
                    ? "bg-accent text-accent-foreground ring-2 ring-accent"
                    : "bg-card border border-border"
                }`}
              >
                <div className="flex flex-col gap-1">
                  <span
                    className={`text-sm font-medium ${
                      comp.highlight ? "text-accent-foreground/80" : "text-muted-foreground"
                    }`}
                  >
                    {comp.project}
                  </span>
                  <span
                    className={`font-serif text-xl ${
                      comp.highlight ? "text-accent-foreground" : "text-earth"
                    }`}
                  >
                    {comp.price}
                  </span>
                </div>
                <span
                  className={`mt-2 md:mt-0 inline-flex items-center rounded-full px-4 py-1.5 text-xs font-medium tracking-wider uppercase ${
                    comp.highlight
                      ? "bg-accent-foreground/20 text-accent-foreground"
                      : "bg-secondary text-muted-foreground"
                  }`}
                >
                  {comp.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Highlight Quote */}
        <div className="mx-auto mt-12 max-w-3xl rounded-lg border border-gold/30 bg-cream p-8 text-center">
          <p className="font-serif text-lg md:text-xl text-earth leading-relaxed italic">
            {'"'}Vista Zafiros inició en $245,000 USD y terminó en $375,000 USD — sin iniciar obras. Terra Costa es esa misma oportunidad hoy.{'"'}
          </p>
        </div>

        {/* Units Counter */}
        <div className="mt-12 flex justify-center">
          <div className="inline-flex items-center gap-4 rounded-full bg-earth px-8 py-4">
            <div className="flex gap-1">
              {Array.from({ length: 10 }).map((_, i) => (
                <div
                  key={i}
                  className={`h-3 w-3 rounded-full ${
                    i < 7 ? "bg-gold" : "bg-cream/20"
                  }`}
                />
              ))}
            </div>
            <span className="text-cream text-sm font-medium">
              7 de 10 unidades disponibles
            </span>
            <ArrowRight className="h-4 w-4 text-gold" />
          </div>
        </div>
      </div>
    </section>
  )
}
