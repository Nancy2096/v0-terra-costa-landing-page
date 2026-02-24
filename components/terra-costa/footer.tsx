import Image from "next/image"
import { Instagram, Facebook, Youtube } from "lucide-react"

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
                href="tel:+529629800511"
                className="hover:text-cream transition-colors"
              >
                +52 962 980 0511
              </a>
              <a
                href="https://wa.me/529629800511"
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
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 text-cream/60 transition-colors hover:border-gold hover:text-gold"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 text-cream/60 transition-colors hover:border-gold hover:text-gold"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 text-cream/60 transition-colors hover:border-gold hover:text-gold"
              >
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-cream/10 pt-8">
          <p className="text-cream/40 text-xs">
            &copy; {new Date().getFullYear()} Terra Costa — Desert Development.
            Todos los derechos reservados.
          </p>
          <a
            href="#"
            className="text-cream/40 text-xs hover:text-cream/60 transition-colors"
          >
            Aviso de privacidad
          </a>
        </div>
      </div>
    </footer>
  )
}
