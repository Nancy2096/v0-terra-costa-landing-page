import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, Clock } from "lucide-react"
import { blogPosts } from "@/lib/blog-data"

export function BlogSection() {
  return (
    <section id="blog" className="bg-secondary py-20 lg:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center mb-16 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-gold mb-4">
            Blog & Noticias
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl text-earth mb-6 text-balance">
            Actualidad Inmobiliaria
          </h2>
          <div className="h-1 w-20 bg-accent mb-8"></div>
          <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed">
            Mantente informado sobre el mercado en San Carlos, las últimas tendencias de diseño y consejos clave para tu inversión en Terra Costa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {blogPosts.map((post) => (
            <Link 
              key={post.id} 
              href={`/blog/${post.id}`}
              className="group flex flex-col bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-border/50"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-earth/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="absolute top-4 right-4 rounded-full bg-card/90 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-accent backdrop-blur-md border border-accent/20">
                  {post.category}
                </span>
              </div>

              {/* Content Body */}
              <div className="p-6 lg:p-8 flex-1 flex flex-col">
                {/* Meta Tags */}
                <div className="flex items-center gap-4 mb-4">
                  <span className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground/80">
                    <Calendar className="h-3.5 w-3.5 text-gold" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground/80">
                    <Clock className="h-3.5 w-3.5 text-gold" />
                    {post.readTime}
                  </span>
                </div>

                {/* Title & Excerpt */}
                <h3 className="font-serif text-2xl text-earth leading-tight mb-4 group-hover:text-accent transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Footer Action */}
                <div className="mt-auto pt-6 border-t border-border/30">
                  <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-accent group-hover:gap-4 transition-all duration-300">
                    Leer artículo completo
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
