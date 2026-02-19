"use client"

import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/529629800511?text=Hola%2C%20me%20interesa%20Terra%20Costa%20en%20San%20Carlos"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 active:scale-95"
    >
      <MessageCircle className="h-6 w-6" fill="currentColor" />
    </a>
  )
}
