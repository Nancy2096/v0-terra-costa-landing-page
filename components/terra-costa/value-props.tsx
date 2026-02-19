import { TrendingDown, TrendingUp, MapPin } from "lucide-react"

const props = [
  {
    icon: TrendingDown,
    title: "Invierte 25% por debajo del mercado",
    description: "Precio de preventa estratégica en la zona más exclusiva de San Carlos",
  },
  {
    icon: TrendingUp,
    title: "Plusvalía superior proyectada",
    description: "Proyectos similares han duplicado su valor en menos de 3 años",
  },
  {
    icon: MapPin,
    title: "Ubicación Golden Zone",
    description: "En el corazón de la zona de mayor plusvalía de San Carlos, Sonora",
  },
]

export function ValueProps() {
  return (
    <section className="bg-cream py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {props.map((prop) => (
            <div
              key={prop.title}
              className="flex flex-col items-center gap-4 text-center"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary">
                <prop.icon className="h-6 w-6 text-accent" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-lg lg:text-xl text-earth">
                {prop.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                {prop.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
