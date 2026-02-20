"use client"

import { useState } from "react"
import Image from "next/image"
import { Phone, MessageCircle, CheckCircle } from "lucide-react"

const interests = [
  "Vivir ahí",
  "Segunda residencia",
  "Inversión",
  "Renta vacacional",
]

const timelines = [
  "Inmediato",
  "En 3 meses",
  "En 6 meses",
  "Solo explorando",
]

export function LeadForm() {
  const [submitted, setSubmitted] = useState(false)
  const [interest, setInterest] = useState("")

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // In production, connect to CRM / webhook
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section id="contacto" className="bg-cream py-20 lg:py-28">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <div className="flex flex-col items-center gap-6">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
              <CheckCircle className="h-8 w-8 text-accent" />
            </div>
            <h2 className="font-serif text-3xl text-earth">
              Gracias por tu interés
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Nuestro equipo te contactará en menos de 24 horas para agendar tu
              cita y compartirte precios y disponibilidad actualizados.
            </p>
            <div className="flex items-center gap-6 mt-4">
              <a
                href="https://wa.me/529629800511"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-accent hover:underline"
              >
                <MessageCircle className="h-5 w-5" />
                <span className="text-sm font-medium">WhatsApp directo</span>
              </a>
              <a
                href="tel:+529629800511"
                className="inline-flex items-center gap-2 text-accent hover:underline"
              >
                <Phone className="h-5 w-5" />
                <span className="text-sm font-medium">+52 962 980 0511</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="contacto" className="bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Left: Info */}
          <div className="flex flex-col justify-center">
            <span className="text-accent text-xs tracking-[0.3em] uppercase font-medium">
              Contacto
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-earth mt-4 leading-tight text-balance">
              San Carlos te espera — Asegura tu lugar
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Agenda tu cita con nuestro equipo y recibe información exclusiva
              de precios, planos y opciones de financiamiento personalizadas.
            </p>

            {/* Advisor */}
            <div className="mt-10 flex items-center gap-4">
              <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border-2 border-gold/40">
                <Image
                  src="/images/asesor.jpg"
                  alt="Carlos Mendoza, asesor inmobiliario"
                  fill
                  className="object-cover"
                  sizes="56px"
                />
              </div>
              <div>
                <p className="text-sm font-medium text-earth">Carlos Mendoza</p>
                <p className="text-xs text-muted-foreground">
                  Asesor Inmobiliario — Terra Costa
                </p>
              </div>
            </div>

            {/* Contact Options */}
            <div className="mt-5 flex flex-col gap-4">
              <a
                href="https://wa.me/529629800511"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 rounded-lg border border-border bg-card p-5 transition-colors hover:border-accent/30"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10">
                  <MessageCircle className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <span className="block text-sm font-medium text-earth">
                    WhatsApp
                  </span>
                  <span className="text-xs text-muted-foreground">
                    +52 962 980 0511
                  </span>
                </div>
              </a>
              <a
                href="tel:+529629800511"
                className="inline-flex items-center gap-4 rounded-lg border border-border bg-card p-5 transition-colors hover:border-accent/30"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10">
                  <Phone className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <span className="block text-sm font-medium text-earth">
                    Llamar ahora
                  </span>
                  <span className="text-xs text-muted-foreground">
                    +52 962 980 0511
                  </span>
                </div>
              </a>
            </div>

            <p className="mt-8 text-xs text-muted-foreground">
              Nuestro equipo te contactará en menos de 24 horas
            </p>
          </div>

          {/* Right: Form */}
          <div className="rounded-lg border border-border bg-card p-8 lg:p-10">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-xs font-medium tracking-wider uppercase text-muted-foreground"
                >
                  Nombre completo
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full rounded-sm border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:ring-2 focus:ring-accent focus:outline-none"
                  placeholder="Tu nombre"
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-xs font-medium tracking-wider uppercase text-muted-foreground"
                >
                  Teléfono (WhatsApp)
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  className="w-full rounded-sm border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:ring-2 focus:ring-accent focus:outline-none"
                  placeholder="+52 000 000 0000"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-xs font-medium tracking-wider uppercase text-muted-foreground"
                >
                  Correo electrónico
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-sm border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:ring-2 focus:ring-accent focus:outline-none"
                  placeholder="tu@email.com"
                />
              </div>

              {/* Interest */}
              <fieldset>
                <legend className="mb-3 text-xs font-medium tracking-wider uppercase text-muted-foreground">
                  ¿Qué te interesa?
                </legend>
                <div className="grid grid-cols-2 gap-3">
                  {interests.map((opt) => (
                    <label
                      key={opt}
                      className={`flex cursor-pointer items-center justify-center rounded-sm border px-4 py-3 text-sm transition-colors ${
                        interest === opt
                          ? "border-accent bg-accent/10 text-accent font-medium"
                          : "border-input text-muted-foreground hover:border-accent/30"
                      }`}
                    >
                      <input
                        type="radio"
                        name="interest"
                        value={opt}
                        checked={interest === opt}
                        onChange={(e) => setInterest(e.target.value)}
                        className="sr-only"
                      />
                      {opt}
                    </label>
                  ))}
                </div>
              </fieldset>

              {/* Timeline */}
              <div>
                <label
                  htmlFor="timeline"
                  className="mb-2 block text-xs font-medium tracking-wider uppercase text-muted-foreground"
                >
                  ¿Cuándo planeas comprar?
                </label>
                <select
                  id="timeline"
                  name="timeline"
                  className="w-full rounded-sm border border-input bg-background px-4 py-3 text-foreground focus:ring-2 focus:ring-accent focus:outline-none"
                >
                  <option value="">Selecciona una opción</option>
                  {timelines.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full rounded-sm bg-accent px-8 py-4 text-sm font-medium tracking-wider uppercase text-accent-foreground transition-colors hover:bg-accent/90"
              >
                Quiero que me contacten
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
