import { Resend } from "resend"
import { NextResponse } from "next/server"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email, phone, interest, timeline, budget, type } = body

    let subject = ""
    let html = ""

    if (type === "brochure") {
      subject = `Nuevo Interés en Brochure: ${name}`
      html = `
        <h1>Solicitud de Brochure - Terra Costa</h1>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${phone}</p>
        <p><strong>Presupuesto:</strong> ${budget}</p>
      `
    } else {
      subject = `Nuevo Lead de Contacto: ${name}`
      html = `
        <h1>Nuevo Contacto - Terra Costa</h1>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${phone}</p>
        <p><strong>Interés:</strong> ${interest}</p>
        <p><strong>Timeline:</strong> ${timeline}</p>
      `
    }

    // 1. Send lead notification to admin
    const adminEmail = await resend.emails.send({
      from: "Terra Costa <onboarding@resend.dev>",
      to: ["nicolas.basconcello@agency4realestate.com"],
      subject: subject,
      html: html,
    })

    // 2. Send brochure to user if requested
    if (type === "brochure") {
      await resend.emails.send({
        from: "Terra Costa <onboarding@resend.dev>",
        to: [email],
        subject: "Tu brochure de Terra Costa Condominios",
        html: `
          <h1>¡Gracias por tu interés en Terra Costa!</h1>
          <p>Hola ${name},</p>
          <p>Adjunto a este correo encontrarás la información completa de nuestro proyecto en San Carlos, Sonora.</p>
          <p><a href="https://terracostacondos.com/brochure.pdf" style="background-color: #5C3D2E; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; display: inline-block;">Descargar Brochure PDF</a></p>
          <p>Si tienes alguna duda, puedes contactarnos directamente por este medio o vía WhatsApp.</p>
          <p>Saludos,<br/>El equipo de Terra Costa</p>
        `,
      })
    }

    if (adminEmail.error) {
      return NextResponse.json({ error: adminEmail.error }, { status: 400 })
    }

    return NextResponse.json({ data: adminEmail.data })
  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}
