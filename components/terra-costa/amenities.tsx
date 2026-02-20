import Image from "next/image"
import { PawPrint, Car } from "lucide-react"

/* ── Featured amenities (with images) ─────────────────────────── */
const featured = [
  {
    image: "/images/amenity-pool.jpg",
    name: "Alberca + Rooftop Pool",
    description: "Dos niveles de inmersión con vistas panorámicas al Mar de Cortés",
  },
  {
    image: "/images/amenity-gym.jpg",
    name: "Gimnasio Premium",
    description: "Equipamiento de última generación con vista al océano",
  },
  {
    image: "/images/amenity-yoga.jpg",
    name: "Área de Yoga",
    description: "Tu espacio de bienestar frente al horizonte infinito",
  },
  {
    image: "/images/amenity-bbq.jpg",
    name: "Área de Asador",
    description: "Convivencia gourmet al aire libre con vista al atardecer",
  },
]

/* ── Additional amenities (icon only) ─────────────────────────── */
const extras = [
  { icon: PawPrint, name: "Pet Park", note: "Área segura para tus mascotas" },
  { icon: Car, name: "Estacionamiento Asignado", note: "Lugar exclusivo por residencia" },
]

export function Amenities() {
  return (
    <section className="bg-earth py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4">
        {/* ── Header ───────────────────────────────────────────── */}
        <div className="mb-14 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
          <div>
            <span className="text-gold text-xs tracking-[0.3em] uppercase font-medium">
              Amenidades
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-cream mt-3 text-balance">
              Diseñado para vivir y disfrutar
            </h2>
          </div>
          <p className="text-cream/60 max-w-sm leading-relaxed text-sm lg:text-base">
            Cada espacio pensado para elevar tu estilo de vida en la costa del
            Mar de Cortés.
          </p>
        </div>

        {/* ── Masonry-style grid ─────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-5 mb-8">
          {featured.map((item, i) => {
            /* Pool: wide top-left | Gym: narrow top-right | Yoga: narrow bottom-left | BBQ: wide bottom-right */
            const span =
              i === 0
                ? "lg:col-span-7 aspect-[4/3] lg:aspect-[16/10]"
                : i === 1
                  ? "lg:col-span-5 aspect-[4/3] lg:aspect-[16/10]"
                  : i === 2
                    ? "lg:col-span-5 aspect-[4/3] lg:aspect-[16/10]"
                    : "lg:col-span-7 aspect-[4/3] lg:aspect-[16/10]"

            return (
              <div
                key={item.name}
                className={`group relative overflow-hidden rounded-2xl ${span}`}
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 60vw"
                  quality={80}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-earth/70 via-earth/10 to-transparent" />

                {/* Label chip */}
                <div className="absolute top-4 left-4 rounded-full bg-cream/15 backdrop-blur-sm px-3 py-1">
                  <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Content overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-7">
                  <h3 className="font-serif text-lg lg:text-2xl text-cream mb-1">
                    {item.name}
                  </h3>
                  <p className="text-cream/60 text-sm leading-relaxed max-w-xs hidden sm:block">
                    {item.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* ── Extra amenities strip ────────────────────────────── */}
        <div className="flex flex-col sm:flex-row gap-4 lg:gap-5">
          {extras.map((item) => (
            <div
              key={item.name}
              className="flex flex-1 items-center gap-4 rounded-2xl border border-cream/10 bg-cream/5 px-6 py-5 transition-colors hover:bg-cream/10"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/30">
                <item.icon className="h-5 w-5 text-gold" strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="font-serif text-base text-cream">{item.name}</h4>
                <p className="text-cream/50 text-xs mt-0.5">{item.note}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
