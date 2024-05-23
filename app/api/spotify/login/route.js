import SpotifyWebApi from 'spotify-web-api-node'

const spotifyApi = new SpotifyWebApi({
  redirectUri: process.env.SPOTIFY_REDIRECT_URI,
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
})

export async function POST(req) {
  const { code } = await req.json()

  try {
    const data = spotifyApi.authorizationCodeGrant(code)
    console.log('data: ', data)
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    })

    //   .then(data => {
    //     resizeBy.json({
    //       access_token: data.body.access_token,
    //       refresh_token: data.body.refresh_token,
    //       expires_in: data.body.expires_in,
    //     })
    //   })
  } catch (error) {
    return new Response(JSON.stringify(error), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }
}
