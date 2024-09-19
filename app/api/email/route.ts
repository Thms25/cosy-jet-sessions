import { NextResponse } from 'next/server'
import ApplyTemplate from '@/utils/data/emails/apply-template-email'
import MessageTemplate from '@/utils/data/emails/message-template-email'
import PartnershipTemplate from '@/utils/data/emails/partnership-template-email'
import { Resend } from 'resend'

let emailCount = 0
let lastReset = Date.now()

export async function POST(request: Request) {
  try {
    const now = Date.now()
    if (now - lastReset > 24 * 60 * 60 * 1000) {
      emailCount = 0
      lastReset = now
    }

    if (emailCount >= 100) {
      return NextResponse.json(
        { error: 'Email limit reached' },
        { status: 429 },
      )
    }

    const url = new URL(request.url)
    const email_type = url.searchParams.get('type')

    const resend = new Resend(process.env.RESEND_API_KEY)

    const data = await request.json()

    const { data: res_data, error } = await resend.emails.send({
      from: `${data.company || data.name} <noreply@cosyroom.be>`,
      to: ['thomas@cosyroom.be'],
      subject:
        email_type === 'apply'
          ? `Candidature de ${data.name}`
          : email_type === 'message'
            ? `Message de ${data.name}`
            : `Partenariat avec ${data.company}`,
      react:
        email_type === 'apply'
          ? ApplyTemplate(data)
          : email_type === 'message'
            ? MessageTemplate(data)
            : PartnershipTemplate(data),
    })

    if (error) {
      return NextResponse.json(
        { error: 'Email sending failed', success: false },
        { status: 500 },
      )
    }

    emailCount++

    return NextResponse.json({ success: true, ...res_data }, { status: 200 })
  } catch (error) {
    return NextResponse.json(
      { error: 'Email sending failed', success: false },
      { status: 500 },
    )
  }
}
