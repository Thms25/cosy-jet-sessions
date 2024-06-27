// const postmark = require('postmark')
import { NextRequest } from 'next/server'
import postmark from 'postmark'

export async function POST(request: NextRequest) {
  try {
    const { name, company, email, tel, text } = await request.json()

    const client = new postmark.ServerClient(process.env.EMAIL_KEY)

    const message = `Name: ${name}\nCompany: ${company}\nEmail: ${email}\nTel: ${tel}\n\nMessage: ${text}\n`

    let content = {
      From: process.env.CJS_EMAIL, // sender email address
      To: process.env.CJS_EMAIL, // your email address
      Subject: `${name} applied for a sessions !`,
      TextBody: message,
      MessageStream: 'outbound',
    }

    client.sendEmail(content)

    return new Response('Email sent!', {
      headers: { 'Content-Type': 'application.json' },
      status: 200,
    })
  } catch (error) {
    console.error(error)
    return new Response('Email sending failed!', {
      headers: { 'Content-Type': 'application.json' },
      status: 500,
    })
  }
}
