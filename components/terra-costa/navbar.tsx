"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"

const links = [
  { label: "Proyecto", href: "#proyecto" },
  { label: "Modelos", href: "#prototipos" },
  { label: "Ubicación", href: "#ubicacion" },
  { label: "Contacto", href: "#contacto" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-earth/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        {/* Logo */}
        <a href="#" className="relative h-10 w-28">
          <Image
            src="/images/logo-light.png"
            alt="Terra Costa Condominios"
            fill
            className="object-contain"
            sizes="112px"
            priority
          />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-cream/80 text-xs tracking-wider uppercase hover:text-cream transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="rounded-sm bg-accent px-5 py-2.5 text-xs font-medium tracking-wider uppercase text-accent-foreground transition-colors hover:bg-accent/90"
          >
            Agenda tu cita
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-cream"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-earth/95 backdrop-blur-md border-t border-cream/10 px-4 pb-6">
          <div className="flex flex-col gap-4 pt-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-cream/80 text-sm tracking-wider uppercase hover:text-cream transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setMenuOpen(false)}
              className="mt-2 rounded-sm bg-accent px-5 py-3 text-center text-xs font-medium tracking-wider uppercase text-accent-foreground transition-colors hover:bg-accent/90"
            >
              Agenda tu cita
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
