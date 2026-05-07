import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Calendar, Clock, ArrowRight } from "lucide-react"
import { blogPosts } from "@/lib/blog-data"
import { Navbar } from "@/components/terra-costa/navbar"
import { Footer } from "@/components/terra-costa/footer"

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id,
  }))
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const post = blogPosts.find((p) => p.id === id)

  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <article className="pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="mx-auto max-w-4xl px-4">
          {/* Back Button */}
          <Link
            href="/#blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/80 mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver al blog
          </Link>

          {/* Hero Section */}
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl mb-8 shadow-xl">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 896px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-earth/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
              <span className="inline-block rounded-full bg-accent px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white mb-4">
                {post.category}
              </span>
              <h1 className="font-serif text-3xl md:text-5xl text-cream leading-tight text-balance shadow-sm">
                {post.title}
              </h1>
            </div>
          </div>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 pb-8 border-b border-border mb-10">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4 text-gold" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4 text-gold" />
              <span>{post.readTime} de lectura</span>
            </div>
          </div>

          {/* Article Content */}
          <div className="prose prose-earth prose-lg max-w-none mb-16">
            <div
              className="blog-content"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>

          {/* CTA Section */}
          <div className="rounded-3xl bg-secondary p-8 md:p-12 text-center border border-border/50 shadow-sm">
            <h2 className="font-serif text-2xl md:text-3xl text-earth mb-4">
              ¿Interesado en invertir en Terra Costa?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Descubre por qué somos la mejor opción de preventa en la Golden Zone de San Carlos. Contáctanos hoy mismo para recibir atención personalizada.
            </p>
            <a
              href="https://wa.me/526624265008?text=Hola%2C%20lei%20el%20articulo%20sobre%20Terra%20Costa%20y%20me%20gustaria%20mas%20informacion"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition-all hover:bg-accent/90 hover:scale-105 active:scale-95 shadow-lg shadow-accent/20"
            >
              Contactar asesor
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </article>

      <Footer />

    </main>
  )
}
