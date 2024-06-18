import Container from '@/components/layouts/Container'

export default function layout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>
  // return <Container>{children}</Container>
}
