import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/terra-costa/navbar"
import { Footer } from "@/components/terra-costa/footer"
import { FileDown } from "lucide-react"

export default async function GraciasPage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string }>
}) {
  const resolvedSearchParams = await searchParams
  const isBrochure = resolvedSearchParams.type === "brochure"

  return (
    <>
      <Navbar />
      <main className="relative min-h-screen flex items-center justify-center p-4 pt-20">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/Thank you page-TerraCosta.webp"
            alt="Terra Costa"
            fill
            className="object-cover"
            priority
          />
          {/* Subtle overlay */}
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Content Card */}
        <div className="relative z-10 w-full max-w-2xl bg-cream/95 backdrop-blur-sm p-10 md:p-10 text-center shadow-2xl rounded-tl-[80px] rounded-br-[80px]">
          {/* Logo */}
          <div className="mx-auto w-40 md:w-56 mb-8 relative h-20">
            <Image
              src="/images/logo-light.png"
              alt="Terra Costa Condominios"
              fill
              className="object-contain brightness-0 opacity-80"
              sizes="(max-width: 768px) 160px, 224px"
            />
          </div>

          <h1 className="font-serif text-4xl md:text-5xl text-earth mb-6 leading-tight">
            ¡Gracias por registrarte en Terra Costa!
          </h1>
          
          <p className="text-earth/80 text-lg md:text-xl leading-relaxed max-w-lg mx-auto mb-10">
            Qué bueno que <strong>des este primer paso</strong>. Ya recibimos tus datos y, ahora que estamos conectados, <strong>te contactaremos</strong> para darte el seguimiento que mereces.
          </p>

          {isBrochure ? (
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/brochure.pdf"
                download
                className="inline-flex items-center gap-2 bg-[#A67B5B] hover:bg-[#8A6345] text-white px-8 py-4 rounded-xl text-lg font-medium tracking-wide transition-colors shadow-lg"
              >
                <FileDown className="h-5 w-5" />
                Descargar Brochure
              </a>
              <Link
                href="/"
                className="inline-block border-2 border-[#A67B5B] text-[#A67B5B] hover:bg-[#A67B5B]/10 px-8 py-4 rounded-xl text-lg font-medium tracking-wide transition-colors"
              >
                Volver al inicio
              </Link>
            </div>
          ) : (
            <Link
              href="/"
              className="inline-block bg-[#A67B5B] hover:bg-[#8A6345] text-white px-10 py-4 rounded-xl text-lg font-medium tracking-wide transition-colors shadow-lg"
            >
              ¡Hablamos pronto!
            </Link>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
