const postmark = require('postmark')

export async function POST(request) {
  try {
    const {
      name,
      email,
      tel,
      bio,
      music_genre,
      live,
      motivation,
      news,
      instagram,
      youtube,
      tiktok,
      spotify,
      collab,
      engagement,
      calendar,
      period,
      other,
    } = await request.json()

    const client = new postmark.ServerClient(process.env.EMAIL_KEY)

    const message = `
      Artist name: \n${name}\n\n
      Email: \n${email}\n\n
      Phone: \n${tel}\n\n
      Music genre: \n${music_genre}\n\n
      Bio: \n${bio}\n\n
      Live Performance: \n${live}\n\n
      Motivations and Intentions: \n${motivation}\n\n
      Upcoming news: \n${news}\n\n
      Instagram: \n${instagram}\n\n
      Youtube: \n${youtube}\n\n
      Tiktok: \n${tiktok}\n\n
      Spotify: \n${spotify}\n\n
      Willing to collab on insta: \n${collab}\n\n
      Willing to engage with audience: \n${engagement}\n\n
      Willing to keep calendar week for sessions: \n${calendar}\n\n
      Prefered dates to shre the videos: \n${period}\n\n
      Added comments: \n${other}\n\n
      `

    let content = {
      From: process.env.CJS_EMAIL, // sender email address
      To: process.env.CJS_EMAIL, // your email address
      Subject: `New message from ${name}`,
      TextBody: `${message}\n\nReply to: ${email}`,
    }

    client.sendEmail(content)

    return new Response('Email sent!', {
      headers: { 'Content-Type': 'application.json' },
      status: 200,
    })
  } catch (error) {
    return new Response('Email sending failed!', {
      headers: { 'Content-Type': 'application.json' },
      status: 500,
    })
  }
}
