import { Waves, Dumbbell, Wind, PawPrint, Flame, Car } from "lucide-react"

const amenities = [
  {
    icon: Waves,
    name: "Alberca + Rooftop Pool",
    description: "Dos niveles de inmersión con vistas al mar",
  },
  {
    icon: Dumbbell,
    name: "Gimnasio",
    description: "Equipamiento premium con vista panorámica",
  },
  {
    icon: Wind,
    name: "Área de Yoga",
    description: "Espacio de bienestar frente al horizonte",
  },
  {
    icon: PawPrint,
    name: "Pet Park",
    description: "Área segura y diseñada para tus mascotas",
  },
  {
    icon: Flame,
    name: "Área de Asador",
    description: "Convivencia gourmet al aire libre",
  },
  {
    icon: Car,
    name: "Estacionamiento Asignado",
    description: "Lugar exclusivo para cada residente",
  },
]

export function Amenities() {
  return (
    <section className="bg-earth py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="text-gold text-xs tracking-[0.3em] uppercase font-medium">
            Amenidades
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-cream mt-4 text-balance">
            Diseñado para vivir y disfrutar
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
          {amenities.map((amenity) => (
            <div
              key={amenity.name}
              className="flex flex-col items-center gap-4 rounded-lg border border-cream/10 bg-cream/5 p-8 text-center transition-colors hover:bg-cream/10"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/30">
                <amenity.icon
                  className="h-5 w-5 text-gold"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="font-serif text-base lg:text-lg text-cream">
                {amenity.name}
              </h3>
              <p className="text-cream/60 text-sm leading-relaxed">
                {amenity.description}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-12 text-center text-cream/70 text-sm leading-relaxed">
          Todo lo que necesitas para vivir y disfrutar en la Golden Zone
        </p>
      </div>
    </section>
  )
}
