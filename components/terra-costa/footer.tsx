import Image from "next/image"
import { Facebook } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-earth py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="relative h-24 w-48">
              <Image
                src="/images/logo-light.png"
                alt="Terra Costa Condominios"
                fill
                className="object-contain object-left"
                sizes="144px"
              />
            </div>
            <p className="text-cream/50 text-sm leading-relaxed">
              Desert Development | San Carlos, Sonora, Mexico
            </p>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <span className="text-cream text-xs tracking-wider uppercase font-medium">
              Contacto
            </span>
            <div className="flex flex-col gap-2 text-cream/60 text-sm">
              <a
                href="tel:+526622216211"
                className="hover:text-cream transition-colors"
              >
                +52 662 221 6211
              </a>
              <a
                href="https://wa.me/526622216211"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cream transition-colors"
              >
                WhatsApp
              </a>
              <a href="#contacto" className="hover:text-cream transition-colors">
                Formulario de contacto
              </a>
            </div>
          </div>

          {/* Social */}
          <div className="flex flex-col gap-4">
            <span className="text-cream text-xs tracking-wider uppercase font-medium">
              Síguenos
            </span>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/share/183t5a1Mqv/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 text-cream/60 transition-colors hover:border-gold hover:text-gold"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-cream/10 pt-8">
          <p className="text-cream/40 text-xs text-center">
            &copy; 2026 Terra Costa — Sitio desarrollado por Agency 4 Real Estate. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
