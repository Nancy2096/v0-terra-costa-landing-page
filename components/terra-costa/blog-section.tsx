"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowRight, Calendar, Clock, X } from "lucide-react"

const blogPosts = [
  {
    id: "invertir-san-carlos-2026",
    category: "Inversiones",
    date: "15 Ene 2026",
    readTime: "5 min",
    title: "Por que invertir en San Carlos en 2026",
    excerpt:
      "Descubre las razones por las que San Carlos se ha convertido en el destino preferido para inversiones inmobiliarias en el noroeste de Mexico.",
    image: "/images/blog-inversion.jpg",
    content: `
      <p>San Carlos, Sonora, se ha consolidado como uno de los destinos de playa mas atractivos para la inversion inmobiliaria en Mexico. Con su clima privilegiado, belleza natural y creciente infraestructura, ofrece oportunidades unicas para inversionistas visionarios.</p>
      
      <h3>Crecimiento sostenido del mercado</h3>
      <p>En los ultimos 5 anos, el valor de las propiedades en la Golden Zone de San Carlos ha experimentado un crecimiento promedio del 15% anual. Este incremento se debe a la creciente demanda de propiedades vacacionales y de retiro por parte de compradores nacionales y extranjeros.</p>
      
      <h3>Infraestructura en desarrollo</h3>
      <p>El gobierno estatal ha invertido significativamente en mejorar la conectividad y servicios de la zona. La ampliacion de la carretera Guaymas-San Carlos y las mejoras en el aeropuerto regional facilitan el acceso para turistas e inversionistas.</p>
      
      <h3>Calidad de vida excepcional</h3>
      <p>San Carlos ofrece un estilo de vida relajado con acceso a playas pristinas, deportes acuaticos, golf de clase mundial y una vibrante comunidad internacional. El clima desertico costero permite disfrutar de mas de 300 dias de sol al ano.</p>
      
      <h3>Oportunidad en preventa</h3>
      <p>Proyectos como Terra Costa ofrecen precios de preventa hasta 25% por debajo del valor de mercado, permitiendo a los inversionistas maximizar su retorno desde el primer dia.</p>
    `,
  },
  {
    id: "tendencias-diseno-costero",
    category: "Diseno",
    date: "28 Dic 2025",
    readTime: "4 min",
    title: "Tendencias en diseno de interiores costeros 2026",
    excerpt:
      "Las ultimas tendencias en diseno de interiores que fusionan el lujo contemporaneo con la calidez del estilo costero mediterraneo.",
    image: "/images/blog-diseno.jpg",
    content: `
      <p>El diseno de interiores costero ha evolucionado significativamente, alejandose de los cliches nauticos para abrazar una estetica mas sofisticada y atemporal que celebra la conexion con el entorno natural.</p>
      
      <h3>Paleta de colores naturales</h3>
      <p>Los tonos tierra, crema, terracota y verde salvia dominan los espacios costeros modernos. Estos colores crean ambientes serenos que reflejan el paisaje desertico-marino de San Carlos.</p>
      
      <h3>Materiales organicos</h3>
      <p>La madera natural, el rattan, la piedra local y los textiles de fibras naturales aportan textura y calidez. En Terra Costa, cada unidad incorpora acabados premium que celebran estos materiales.</p>
      
      <h3>Espacios fluidos interior-exterior</h3>
      <p>Las terrazas amplias con puertas corredizas de piso a techo permiten una transicion perfecta entre el interior y el exterior, maximizando las vistas al Mar de Cortes y las montanas.</p>
      
      <h3>Iluminacion natural</h3>
      <p>Los ventanales generosos y las orientaciones estrategicas aprovechan la luz natural, reduciendo el consumo energetico mientras crean espacios luminosos y acogedores.</p>
    `,
  },
  {
    id: "guia-compra-departamento-playa",
    category: "Guias",
    date: "10 Dic 2025",
    readTime: "7 min",
    title: "Guia completa: Comprar tu departamento de playa",
    excerpt:
      "Todo lo que necesitas saber antes de adquirir una propiedad en la costa mexicana, desde aspectos legales hasta financiamiento.",
    image: "/images/blog-guia.jpg",
    content: `
      <p>Adquirir una propiedad en la costa mexicana es una decision importante que requiere planificacion y conocimiento. Esta guia te ayudara a navegar el proceso con confianza.</p>
      
      <h3>Aspectos legales</h3>
      <p>Los extranjeros pueden adquirir propiedades en la zona costera a traves de un fideicomiso bancario. Este mecanismo legal brinda todos los derechos de propiedad y es completamente seguro.</p>
      
      <h3>Financiamiento</h3>
      <p>Existen opciones de financiamiento tanto para compradores nacionales como extranjeros. Los planes de pago durante construccion, como los que ofrece Terra Costa, facilitan la adquisicion sin necesidad de un credito bancario tradicional.</p>
      
      <h3>Due diligence</h3>
      <p>Es fundamental verificar los permisos de construccion, la reputacion del desarrollador y la situacion legal del terreno. En Terra Costa, toda la documentacion esta en regla y disponible para revision.</p>
      
      <h3>Costos adicionales</h3>
      <p>Considera gastos como escrituracion (4-6% del valor), mantenimiento mensual, impuesto predial y servicios. Te ayudamos a planificar todos estos costos desde el inicio.</p>
    `,
  },
]

export function BlogSection() {
  const [selectedPost, setSelectedPost] = useState<typeof blogPosts[0] | null>(null)

  return (
    <>
      <section id="blog" className="bg-secondary py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <p className="text-center text-sm font-medium uppercase tracking-[0.2em] text-gold mb-3">
            Blog
          </p>
          <h2 className="text-center font-serif text-3xl lg:text-4xl text-earth mb-4 text-balance">
            Noticias y consejos
          </h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
            Mantente informado sobre el mercado inmobiliario en San Carlos, tendencias de diseno y consejos para tu inversion.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="group cursor-pointer"
                onClick={() => setSelectedPost(post)}
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden rounded-xl mb-4">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-earth/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="absolute top-4 left-4 rounded-full bg-card/90 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent backdrop-blur-sm">
                    {post.category}
                  </span>
                </div>

                {/* Meta */}
                <div className="flex items-center gap-4 mb-3">
                  <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Calendar className="h-3.5 w-3.5" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Clock className="h-3.5 w-3.5" />
                    {post.readTime}
                  </span>
                </div>

                {/* Content */}
                <h3 className="font-serif text-xl text-earth leading-snug mb-2 group-hover:text-accent transition-colors text-balance">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                {/* Read more */}
                <span className="inline-flex items-center gap-2 text-sm font-medium text-accent group-hover:gap-3 transition-all">
                  Leer mas
                  <ArrowRight className="h-4 w-4" />
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Detail Modal */}
      {selectedPost && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-earth/80 backdrop-blur-sm p-4 md:p-8"
          onClick={() => setSelectedPost(null)}
        >
          <article
            className="relative w-full max-w-3xl bg-card rounded-2xl overflow-hidden my-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-card/90 text-earth hover:bg-card transition-colors backdrop-blur-sm"
              aria-label="Cerrar"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Hero image */}
            <div className="relative aspect-[16/9] overflow-hidden">
              <Image
                src={selectedPost.image}
                alt={selectedPost.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-earth/60 via-earth/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <span className="inline-block rounded-full bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent-foreground mb-3">
                  {selectedPost.category}
                </span>
                <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl text-cream leading-tight text-balance">
                  {selectedPost.title}
                </h1>
              </div>
            </div>

            {/* Meta */}
            <div className="flex items-center gap-6 px-6 md:px-8 py-4 border-b border-border">
              <span className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                {selectedPost.date}
              </span>
              <span className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                {selectedPost.readTime} de lectura
              </span>
            </div>

            {/* Content */}
            <div
              className="prose prose-earth prose-lg max-w-none px-6 md:px-8 py-8"
              dangerouslySetInnerHTML={{ __html: selectedPost.content }}
            />

            {/* CTA */}
            <div className="px-6 md:px-8 pb-8">
              <div className="rounded-xl bg-secondary p-6 text-center">
                <p className="text-sm text-muted-foreground mb-3">
                  Interesado en invertir en Terra Costa?
                </p>
                <a
                  href="https://wa.me/526622216211?text=Hola%2C%20lei%20el%20articulo%20sobre%20Terra%20Costa%20y%20me%20gustaria%20mas%20informacion"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-sm bg-accent px-6 py-3 text-sm font-medium uppercase tracking-wider text-accent-foreground transition-colors hover:bg-accent/90"
                >
                  Contactar asesor
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </article>
        </div>
      )}

      {/* Prose styles */}
      <style jsx global>{`
        .prose-earth {
          --tw-prose-body: #5C3D2E;
          --tw-prose-headings: #5C3D2E;
          --tw-prose-links: #A36658;
          --tw-prose-bold: #5C3D2E;
        }
        .prose-earth h3 {
          font-family: var(--font-serif);
          font-size: 1.25rem;
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
        }
        .prose-earth p {
          margin-bottom: 1rem;
          line-height: 1.75;
        }
      `}</style>
    </>
  )
}
