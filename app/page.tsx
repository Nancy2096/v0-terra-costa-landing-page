import { Navbar } from "@/components/terra-costa/navbar"
import { Hero } from "@/components/terra-costa/hero"
import { ValueProps } from "@/components/terra-costa/value-props"
import { ProjectGallery } from "@/components/terra-costa/project-gallery"
import { UnitPrototypes } from "@/components/terra-costa/unit-prototypes"
import { BrochureDownload } from "@/components/terra-costa/brochure-download"
import { Amenities } from "@/components/terra-costa/amenities"
import { Urgency } from "@/components/terra-costa/urgency"
import { LeadForm } from "@/components/terra-costa/lead-form"
import { Location } from "@/components/terra-costa/location"
import { Footer } from "@/components/terra-costa/footer"
import { WhatsAppButton } from "@/components/terra-costa/whatsapp-button"
import { ExitPopup } from "@/components/terra-costa/exit-popup"

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ValueProps />
      <ProjectGallery />
      <UnitPrototypes />
      <BrochureDownload />
      <Amenities />
      <Urgency />
      <LeadForm />
      <Location />
      <Footer />
      <WhatsAppButton />
      <ExitPopup />
    </main>
  )
}
