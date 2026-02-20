"use client"

import { useState } from "react"
import Image from "next/image"
import { FileDown, Loader2, CheckCircle2 } from "lucide-react"

const budgetOptions = [
  "Menos de $3M MXN",
  "$3M - $5M MXN",
  "$5M - $8M MXN",
  "Más de $8M MXN",
]

export function BrochureDownload() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    budget: "",
  })
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle")

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus("sending")
    // Simulate send — replace with real webhook / API
    setTimeout(() => setStatus("sent"), 1500)
  }

  return (
    <section className="relative bg-cream py-20 lg:py-24 overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/40 hidden lg:block rounded-l-[4rem]" />

      <div className="relative mx-auto max-w-6xl px-4">
        <div className="flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-20">
          {/* ── Left: Copy + mockup ─────────────────────────────── */}
          <div className="lg:w-1/2 flex flex-col gap-6">
            <span className="text-accent text-xs tracking-[0.3em] uppercase font-medium">
              Brochure Digital
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-earth text-balance leading-tight">
              Descarga el brochure completo de Terra Costa
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Plantas arquitectonicas, renders exclusivos, amenidades detalladas,
              tabla de precios y opciones de financiamiento. Todo en un solo
              documento.
            </p>

            {/* Brochure preview card */}
            <div className="relative mt-2 flex items-center gap-5 rounded-2xl border border-border bg-card p-5 shadow-sm max-w-sm">
              <div className="relative h-24 w-20 shrink-0 overflow-hidden rounded-lg bg-secondary">
                <Image
                  src="/images/render-exterior.jpg"
                  alt="Portada del brochure Terra Costa"
                  fill
                  className="object-cover"
                  sizes="80px"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-earth/40">
                  <FileDown className="h-6 w-6 text-cream" strokeWidth={1.5} />
                </div>
              </div>
              <div>
                <p className="font-serif text-base text-earth">
                  Terra Costa Brochure
                </p>
                <p className="text-muted-foreground text-xs mt-0.5">
                  PDF — Renders, plantas, precios
                </p>
                <div className="mt-2 h-px w-10 bg-gold/40" />
              </div>
            </div>
          </div>

          {/* ── Right: Form ─────────────────────────────────────── */}
          <div className="lg:w-1/2">
            {status === "sent" ? (
              <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-border bg-card p-12 text-center shadow-sm">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/10">
                  <CheckCircle2 className="h-7 w-7 text-accent" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-xl text-earth">
                  Brochure enviado a tu correo
                </h3>
                <p className="text-muted-foreground text-sm max-w-xs">
                  Revisa tu bandeja de entrada. Un asesor se pondra en contacto
                  contigo pronto.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-5 rounded-2xl border border-border bg-card p-8 lg:p-10 shadow-sm"
              >
                <p className="font-serif text-lg text-earth mb-1">
                  Completa tus datos para recibir el brochure
                </p>

                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="brochure-name"
                    className="text-xs font-medium uppercase tracking-wider text-muted-foreground"
                  >
                    Nombre completo
                  </label>
                  <input
                    id="brochure-name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    className="rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="brochure-email"
                    className="text-xs font-medium uppercase tracking-wider text-muted-foreground"
                  >
                    Correo electronico
                  </label>
                  <input
                    id="brochure-email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="tu@correo.com"
                    className="rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors"
                  />
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="brochure-phone"
                    className="text-xs font-medium uppercase tracking-wider text-muted-foreground"
                  >
                    Telefono / WhatsApp
                  </label>
                  <input
                    id="brochure-phone"
                    name="phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+52 622 000 0000"
                    className="rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors"
                  />
                </div>

                {/* Budget */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="brochure-budget"
                    className="text-xs font-medium uppercase tracking-wider text-muted-foreground"
                  >
                    Presupuesto aproximado
                  </label>
                  <select
                    id="brochure-budget"
                    name="budget"
                    required
                    value={form.budget}
                    onChange={handleChange}
                    className="rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors appearance-none"
                  >
                    <option value="" disabled>
                      Selecciona un rango
                    </option>
                    {budgetOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-earth px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-primary-foreground transition-colors hover:bg-earth/90 disabled:opacity-70"
                >
                  {status === "sending" ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <FileDown className="h-4 w-4" />
                      Descargar Brochure
                    </>
                  )}
                </button>

                <p className="text-center text-[11px] text-muted-foreground/60 leading-relaxed">
                  Al enviar aceptas recibir informacion sobre Terra Costa.
                  Puedes cancelar en cualquier momento.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
