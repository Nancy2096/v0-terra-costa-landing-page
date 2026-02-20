import Image from "next/image"
import { TrendingDown, TrendingUp, MapPin } from "lucide-react"

const props = [
  {
    icon: TrendingDown,
    label: "Preventa",
    title: "25% por debajo del mercado",
    description:
      "Precio de preventa estratégica en la zona más exclusiva de San Carlos. Asegura tu unidad hoy al mejor precio.",
    image: "/images/value-preventa.jpg",
  },
  {
    icon: TrendingUp,
    label: "Plusvalía",
    title: "Duplica tu inversión en 3 años",
    description:
      "Proyectos similares en la Golden Zone han demostrado plusvalía excepcional. Tu patrimonio crece mientras disfrutas.",
    image: "/images/value-plusvalia.jpg",
  },
  {
    icon: MapPin,
    label: "Ubicación",
    title: "Golden Zone, San Carlos",
    description:
      "En el corazón de la zona más codiciada de San Carlos, frente al Mar de Cortés y rodeado de montañas.",
    image: "/images/value-golden-zone.jpg",
  },
]

export function ValueProps() {
  return (
    <section className="bg-cream py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <p className="text-center text-sm font-medium uppercase tracking-[0.2em] text-gold mb-3">
          Por qué Terra Costa
        </p>
        <h2 className="text-center font-serif text-3xl lg:text-4xl text-earth mb-12 text-balance">
          Una inversión con vista al mar
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {props.map((prop) => (
            <div
              key={prop.title}
              className="group relative overflow-hidden rounded-xl bg-card"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={prop.image}
                  alt={prop.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-earth/20" />
                <div className="absolute top-4 left-4 flex items-center gap-2 rounded-full bg-card/90 px-3 py-1.5 backdrop-blur-sm">
                  <prop.icon className="h-4 w-4 text-accent" strokeWidth={1.5} />
                  <span className="text-xs font-semibold uppercase tracking-wider text-earth">
                    {prop.label}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-2 p-5">
                <h3 className="font-serif text-xl text-earth leading-snug text-balance">
                  {prop.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {prop.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
