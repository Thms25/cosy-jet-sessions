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

export default function PartnershipTemplate(data: any) {
  const { name, email, message, company } = data
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
              {name} de {company} nous a contacté !
            </Heading>

            <Section className="text-left my-4">
              <Heading className="text-lg font-bold underline">
                Message :
              </Heading>
              <Text>{message}</Text>
            </Section>

            <Text className="mt-8">
              <strong>Répondre à :</strong> {email}
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}
