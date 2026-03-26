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

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus("sending")

    const data = {
      ...form,
      type: "brochure",
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setStatus("sent")
      } else {
        setStatus("idle")
        alert("Hubo un error al enviar la solicitud. Por favor intenta de nuevo.")
      }
    } catch (error) {
      setStatus("idle")
      alert("Hubo un error de conexión. Por favor intenta de nuevo.")
    }
  }

  const inputCls =
    "rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors"

  return (
    <section className="bg-secondary/60 py-12 lg:py-14">
      <div className="mx-auto max-w-6xl px-4">
        {status === "sent" ? (
          <div className="flex flex-col items-center justify-center gap-4 py-6 text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
              <CheckCircle2 className="h-6 w-6 text-accent" strokeWidth={1.5} />
            </div>
            <h3 className="font-serif text-xl text-earth">
              ¡Gracias! Tu solicitud ha sido enviada
            </h3>
            <p className="text-muted-foreground text-sm max-w-xs mb-2">
              Haz clic abajo para descargar el brochure de Terra Costa. Un asesor se pondrá en contacto contigo pronto.
            </p>
            <a
              href="/brochure.pdf"
              download
              className="flex items-center gap-2 rounded-lg bg-earth px-8 py-3 text-xs font-semibold uppercase tracking-wider text-primary-foreground transition-colors hover:bg-earth/90"
            >
              <FileDown className="h-4 w-4" />
              Descargar Brochure PDF
            </a>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-14">
            {/* ── Left: Copy ────────────────────────────────────── */}
            <div className="lg:w-2/5 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10">
                  <FileDown className="h-5 w-5 text-accent" strokeWidth={1.5} />
                </div>
                <span className="text-accent text-xs tracking-[0.2em] uppercase font-medium">
                  Brochure Digital
                </span>
              </div>
              <h2 className="font-serif text-2xl lg:text-3xl text-earth text-balance leading-snug">
                Descarga el brochure completo
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Plantas arquitectonicas, renders, amenidades, precios y opciones
                de financiamiento en un solo documento.
              </p>
            </div>

            {/* ── Right: Inline form ────────────────────────────── */}
            <form
              onSubmit={handleSubmit}
              className="lg:w-3/5 flex flex-col gap-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Nombre completo"
                  aria-label="Nombre completo"
                  className={inputCls}
                />
                <input
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="tu@correo.com"
                  aria-label="Correo electronico"
                  className={inputCls}
                />
                <input
                  name="phone"
                  type="tel"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+52 622 000 0000"
                  aria-label="Telefono"
                  className={inputCls}
                />
                <select
                  name="budget"
                  required
                  value={form.budget}
                  onChange={handleChange}
                  aria-label="Presupuesto aproximado"
                  className={`${inputCls} appearance-none`}
                >
                  <option value="" disabled>
                    Presupuesto
                  </option>
                  {budgetOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="flex items-center justify-center gap-2 rounded-lg bg-earth px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-primary-foreground transition-colors hover:bg-earth/90 disabled:opacity-70 shrink-0"
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
                <p className="text-[11px] text-muted-foreground/60 leading-relaxed">
                  Al enviar aceptas recibir informacion sobre Terra Costa.
                </p>
              </div>
            </form>
          </div>
        )}
      </div>
    </section>
  )
}
