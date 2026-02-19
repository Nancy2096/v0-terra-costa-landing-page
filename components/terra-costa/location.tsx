import { MapPin, Plane, Ship } from "lucide-react"

const distances = [
  {
    icon: MapPin,
    label: "Guaymas, Sonora",
    value: "20 min",
  },
  {
    icon: Plane,
    label: "Aeropuerto Guaymas",
    value: "35 min",
  },
  {
    icon: Ship,
    label: "Marina San Carlos",
    value: "5 min",
  },
]

export function Location() {
  return (
    <section id="ubicacion" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Map */}
          <div className="relative aspect-square lg:aspect-auto overflow-hidden rounded-lg">
            <iframe
              title="Ubicación Terra Costa en San Carlos, Sonora"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28076.42053767611!2d-111.07!3d27.97!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86b98a7a51e5c9d5%3A0x9aecf16a3b8f4b76!2sSan%20Carlos%2C%20Sonora%2C%20Mexico!5e0!3m2!1ses!2smx!4v1700000000000!5m2!1ses!2smx"
              className="absolute inset-0 h-full w-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Info */}
          <div className="flex flex-col justify-center">
            <span className="text-accent text-xs tracking-[0.3em] uppercase font-medium">
              Ubicación
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-earth mt-4 leading-tight text-balance">
              En el corazón de la Golden Zone
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              La zona de mayor plusvalía de San Carlos, Sonora. Rodeado del Mar
              de Cortés, sierras desérticas y la exclusiva marina. Un destino
              turístico consolidado con crecimiento sostenido.
            </p>

            {/* Distances */}
            <div className="mt-10 flex flex-col gap-6">
              {distances.map((d) => (
                <div key={d.label} className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary">
                    <d.icon
                      className="h-4 w-4 text-accent"
                      strokeWidth={1.5}
                    />
                  </div>
                  <div className="flex flex-1 items-center justify-between">
                    <span className="text-sm text-foreground">{d.label}</span>
                    <span className="text-sm font-medium text-earth">
                      {d.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
