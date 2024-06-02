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

    const message = `Artist name: \n${name}\n\nEmail: \n${email}\n\nPhone: \n${tel}\n\nMusic genre: \n${music_genre}\n\nBio: \n${bio}\n\nLive Performance: \n${live}\n\nMotivations and Intentions: \n${motivation}\n\nUpcoming news: \n${news}\n\nInstagram: \n${instagram}\n\nYoutube: \n${youtube}\n\nTiktok:\n${tiktok}\n\nSpotify: \n${spotify}\n\nWilling to collab on insta: \n${collab}\n\nWilling to engage with audience: \n${engagement}\n\nWilling to keep calendar week for sessions: \n${calendar}\n\nPrefered dates to shre the videos: \n${period}\n\nAdded comments: \n${other}\n\n`

    let content = {
      From: process.env.CJS_EMAIL, // sender email address
      To: process.env.CJS_EMAIL, // your email address
      Subject: `${name} applied for a sessions !`,
      TextBody: message,
      MessageStream: 'outbound',
    }

    client.sendEmail(content)

    // console.log('Email sent!')

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
