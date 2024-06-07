import ApplyForm from './apply-form'
import FormBanner from './form-banner'

export default function ApplyView({ artists, images, content }) {
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
