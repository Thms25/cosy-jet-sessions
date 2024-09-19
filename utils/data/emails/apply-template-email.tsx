import {
  Body,
  Container,
  Heading,
  Html,
  Img,
  Link,
  Section,
  Text,
  Tailwind,
} from '@react-email/components'

export default function ApplyTemplate(data: any) {
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

  const booleanToSymbol = (value: boolean) => (value ? '✔️' : '❌')

  return (
    <Html>
      {/* <Head /> */}
      <Tailwind
        config={{
          theme: {
            extend: {
              spacing: {
                0: '0px',
                20: '20px',
                45: '45px',
              },
            },
          },
        }}
      >
        <Body className="bg-white  text-md font-sans text-left">
          <Container className="bg-white p-45 my-20">
            <Heading className=" my-8 leading-8 text-2xl font-bold">
              {name} a postulé pour une session !
            </Heading>

            <ul className="text-left text-md">
              <li>
                <strong>Artist :</strong> {name}
              </li>
              <li>
                <strong>Email :</strong> {email}
              </li>
              <li>
                <strong>Tel :</strong> {tel}
              </li>
              <li>
                <strong>Genre Musical :</strong> {music_genre}
              </li>
              <li>
                <strong>Bio :</strong> {bio}
              </li>
              <br />
              <li>
                <strong>Performance live : </strong>
                {live.match(/https?:\/\//) ? (
                  <Link href={live} className="text-brand">
                    Voir la performance
                  </Link>
                ) : (
                  live
                )}
              </li>
              <li>
                <strong>Motivations :</strong> {motivation}
              </li>
              <li>
                <strong>News :</strong> {news}
              </li>
              <li>
                <strong>Dates :</strong> {period}
              </li>

              <br />
              <Heading className="font-bold text-lg underline">
                Conditions:
              </Heading>
              <li>
                Accept de collab sur Instagram : {booleanToSymbol(collab)}
              </li>
              <li>
                Accepter d'engager l'audience : {booleanToSymbol(engagement)}
              </li>
              <li>
                Acceptes de garder une semaine pour release nos sessions :
                {booleanToSymbol(calendar)}
              </li>
              <br />
            </ul>

            <Section className="text-left ">
              <Heading className="text-lg font-bold underline">
                Socials:
              </Heading>
              {instagram.match(
                /^https:\/\/(www\.)?instagram\.com\/[a-zA-Z0-9._]+\/?$/,
              ) ? (
                <Link href={instagram} className="mr-4">
                  Instagram
                </Link>
              ) : (
                instagram
              )}
              {spotify.match(/^https:\/\/open\.spotify\.com\/.+$/) ? (
                <Link href={spotify} className="mr-4">
                  Spotify
                </Link>
              ) : (
                spotify
              )}

              {youtube.match(/^https:\/\/(www\.)?youtube\.com\/.+$/) ? (
                <Link href={youtube} className="mr-4">
                  YouTube
                </Link>
              ) : (
                youtube
              )}
              {tiktok.match(/^https:\/\/(www\.)?tiktok\.com\/.+$/) ? (
                <Link href={tiktok} className="mr-4">
                  TikTok
                </Link>
              ) : (
                tiktok
              )}
            </Section>

            <Section className="text-left my-4">
              <Heading className="text-lg font-bold underline">
                Commentaires supplémentaires :
              </Heading>
              <Text>{other}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}
