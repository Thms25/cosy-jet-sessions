import ContactBanner from './contact-banner'
import MessageForm from './message-form'

export default function PartnershipView({ content }) {
  return (
    <>
      <ContactBanner
        content={{
          title: content.sponsor_title,
          subtitle: content.sponsor_subtitle,
          cta: content.sponsor_cta,
          form_intro: content.sponsor_form_intro,
        }}
      />
      <div className="" id="form">
        <MessageForm />
      </div>
    </>
  )
}
