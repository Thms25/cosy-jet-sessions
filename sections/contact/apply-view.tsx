import ApplyForm from './apply-form'
import FormBanner from './form-banner'

type ApplyViewProps = {
  // artists: Array<{ name: string; image: string }>
  // images: Array<{ src: string; id: string }>
  artists: any
  images: any
  content: any
}

export default function ApplyView({
  artists,
  images,
  content,
}: ApplyViewProps) {
  return (
    <main>
      <div className="mt-16 sm:mt-24">
        <FormBanner images={images} content={content} />
      </div>

      <section className="mt-12 p-12" id="form">
        <ApplyForm content={content} />
      </section>
    </main>
  )
}
