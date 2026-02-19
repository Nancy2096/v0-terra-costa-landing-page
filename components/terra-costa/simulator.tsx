"use client"

import { useState } from "react"

const models = [
  { name: "Condominio 2 Rec. — 95 m²", sqm: 95 },
  { name: "Condominio 2 Rec. — 110 m²", sqm: 110 },
  { name: "Condominio 3 Rec. — 130 m²", sqm: 130 },
  { name: "Condominio 3 Rec. — 150 m²", sqm: 150 },
  { name: "Penthouse — 175 m²", sqm: 175 },
  { name: "Penthouse — 191 m²", sqm: 191 },
]

const PRICE_PER_SQM = 48000

function formatMXN(amount: number) {
  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)
}

export function Simulator() {
  const [selectedModel, setSelectedModel] = useState(0)
  const [downPaymentPercent, setDownPaymentPercent] = useState(20)

  const total = models[selectedModel].sqm * PRICE_PER_SQM
  const downPayment = total * (downPaymentPercent / 100)
  const remaining = total - downPayment
  const monthlyEstimate = remaining / 120 // 10 years estimate

  return (
    <section className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="text-accent text-xs tracking-[0.3em] uppercase font-medium">
            Simulador Financiero
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-earth mt-4 text-balance">
            Calcula tu inversión
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Explora las opciones de financiamiento. Los montos son aproximados y
            sujetos a confirmación con nuestro equipo.
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <div className="rounded-lg border border-border bg-card p-8 lg:p-12">
            {/* Model Selector */}
            <div className="mb-8">
              <label
                htmlFor="model-select"
                className="mb-3 block text-xs font-medium tracking-wider uppercase text-muted-foreground"
              >
                Selecciona tu modelo
              </label>
              <select
                id="model-select"
                value={selectedModel}
                onChange={(e) => setSelectedModel(Number(e.target.value))}
                className="w-full rounded-sm border border-input bg-background px-4 py-3 text-foreground focus:ring-2 focus:ring-accent focus:outline-none"
              >
                {models.map((model, i) => (
                  <option key={model.name} value={i}>
                    {model.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Down Payment Slider */}
            <div className="mb-10">
              <label
                htmlFor="down-payment"
                className="mb-3 flex items-center justify-between text-xs font-medium tracking-wider uppercase text-muted-foreground"
              >
                <span>Enganche</span>
                <span className="text-accent text-sm normal-case tracking-normal font-semibold">
                  {downPaymentPercent}%
                </span>
              </label>
              <input
                id="down-payment"
                type="range"
                min={10}
                max={50}
                step={5}
                value={downPaymentPercent}
                onChange={(e) =>
                  setDownPaymentPercent(Number(e.target.value))
                }
                className="w-full accent-accent h-2 rounded-full cursor-pointer"
              />
              <div className="mt-2 flex justify-between text-xs text-muted-foreground">
                <span>10%</span>
                <span>50%</span>
              </div>
            </div>

            {/* Results */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-border pt-8">
              <div className="flex flex-col items-center gap-1 text-center">
                <span className="text-xs tracking-wider uppercase text-muted-foreground">
                  Precio total
                </span>
                <span className="font-serif text-2xl text-earth">
                  {formatMXN(total)}
                </span>
              </div>
              <div className="flex flex-col items-center gap-1 text-center">
                <span className="text-xs tracking-wider uppercase text-muted-foreground">
                  Enganche ({downPaymentPercent}%)
                </span>
                <span className="font-serif text-2xl text-accent">
                  {formatMXN(downPayment)}
                </span>
              </div>
              <div className="flex flex-col items-center gap-1 text-center">
                <span className="text-xs tracking-wider uppercase text-muted-foreground">
                  Mensualidad estimada*
                </span>
                <span className="font-serif text-2xl text-earth">
                  {formatMXN(monthlyEstimate)}
                </span>
              </div>
            </div>

            <p className="mt-6 text-center text-xs text-muted-foreground">
              *Estimación a 10 años sin intereses. Solicita tu plan de
              financiamiento personalizado para opciones con crédito hipotecario.
            </p>

            {/* CTA */}
            <div className="mt-8 flex justify-center">
              <a
                href="#contacto"
                className="inline-flex items-center justify-center rounded-sm bg-accent px-8 py-4 text-sm font-medium tracking-wider uppercase text-accent-foreground transition-colors hover:bg-accent/90"
              >
                Quiero mi simulación personalizada
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
