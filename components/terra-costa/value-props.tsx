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
    <section className="bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4">
        <p className="text-center text-sm font-medium uppercase tracking-[0.2em] text-gold mb-3">
          Por qué Terra Costa
        </p>
        <h2 className="text-center font-serif text-3xl lg:text-4xl text-earth mb-16 text-balance">
          Una inversión con vista al mar
        </h2>

        <div className="flex flex-col gap-20 lg:gap-28">
          {props.map((prop, i) => (
            <div
              key={prop.title}
              className={`flex flex-col gap-8 lg:gap-16 lg:items-center ${
                i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              }`}
            >
              {/* Image */}
              <div className="relative lg:w-3/5 aspect-[4/3] lg:aspect-[3/2] overflow-hidden rounded-xl">
                <Image
                  src={prop.image}
                  alt={prop.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
                <div className="absolute inset-0 bg-earth/10" />
              </div>

              {/* Content */}
              <div className="lg:w-2/5 flex flex-col gap-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10">
                    <prop.icon
                      className="h-5 w-5 text-accent"
                      strokeWidth={1.5}
                    />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-[0.15em] text-gold">
                    {prop.label}
                  </span>
                </div>
                <h3 className="font-serif text-2xl lg:text-3xl text-earth leading-tight text-balance">
                  {prop.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {prop.description}
                </p>
                <div className="h-px w-16 bg-gold/40 mt-2" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
