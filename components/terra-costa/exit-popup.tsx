"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"

export function ExitPopup() {
  const [show, setShow] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    if (dismissed) return

    function handleMouseLeave(e: MouseEvent) {
      if (e.clientY <= 0 && !dismissed) {
        setShow(true)
      }
    }

    // Also trigger after 30s on mobile (no mouse leave)
    const timer = setTimeout(() => {
      if (!dismissed) setShow(true)
    }, 30000)

    document.addEventListener("mouseleave", handleMouseLeave)
    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave)
      clearTimeout(timer)
    }
  }, [dismissed])

  function handleDismiss() {
    setShow(false)
    setDismissed(true)
  }

  if (!show) return null

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-earth/60 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-md rounded-lg bg-card p-8 shadow-2xl">
        <button
          onClick={handleDismiss}
          className="absolute right-4 top-4 text-muted-foreground hover:text-foreground"
          aria-label="Cerrar"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="flex flex-col items-center gap-4 text-center">
          <span className="text-accent text-xs tracking-[0.3em] uppercase font-medium">
            Antes de irte
          </span>
          <h3 className="font-serif text-2xl text-earth">
            ¿Ya viste los precios de preventa?
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Solo quedan 7 de 10 unidades. Recibe información exclusiva de
            precios y disponibilidad directamente en tu WhatsApp.
          </p>
          <a
            href="https://wa.me/529629800511?text=Hola%2C%20quiero%20conocer%20los%20precios%20de%20preventa%20de%20Terra%20Costa"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleDismiss}
            className="w-full rounded-sm bg-accent px-8 py-4 text-sm font-medium tracking-wider uppercase text-accent-foreground transition-colors hover:bg-accent/90"
          >
            Ver precios por WhatsApp
          </a>
          <button
            onClick={handleDismiss}
            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            No gracias, tal vez después
          </button>
        </div>
      </div>
    </div>
  )
}
