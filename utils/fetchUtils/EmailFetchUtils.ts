import { ServerClient } from 'postmark'
function getMessage(data: any, type: string) {
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
  } = data
  switch (type) {
    case 'message':
      return `Name: \n${name}\n\nEmail: \n${email}\n\nPhone: \n${tel}\n\nMessage: \n${bio}\n\n`
      break
    case 'apply':
      return `Artist name: \n${name}\n\nEmail: \n${email}\n\nPhone: \n${tel}\n\nMusic genre: \n${music_genre}\n\nBio: \n${bio}\n\nLive Performance: \n${live}\n\nMotivations and Intentions: \n${motivation}\n\nUpcoming news: \n${news}\n\nInstagram: \n${instagram}\n\nYoutube: \n${youtube}\n\nTiktok:\n${tiktok}\n\nSpotify: \n${spotify}\n\nWilling to collab on insta: \n${collab}\n\nWilling to engage with audience: \n${engagement}\n\nWilling to keep calendar week for sessions: \n${calendar}\n\nPrefered dates to shre the videos: \n${period}\n\nAdded comments: \n${other}\n\n`
      break
    default:
      return ''
  }
}

export async function sendEmail(data: any, type: string) {
  console.log('data', data)

  try {
    const client = new ServerClient(process.env.NEXT_PUBLIC_EMAIL_KEY)

    const content = {
      From: process.env.NEXT_PUBLIC_CJS_EMAIL, // sender email address
      To: process.env.NEXT_PUBLIC_CJS_EMAIL, // your email address
      Subject: `${data.name} applied for a sessions !`,
      TextBody: getMessage(data, type),
      MessageStream: 'outbound',
    }

    client.sendEmail(content)

    return true
  } catch (error) {
    console.error(error)
    return false
  }
}
