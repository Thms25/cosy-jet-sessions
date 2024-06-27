import MessageForm from './message-form'
import ContactBanner from './contact-banner'

export default function MessageView({ content }) {
  return (
    <>
      <ContactBanner
        content={{
          title: content.msg_title,
          subtitle: content.msg_subtitle,
          cta: content.msg_cta,
          form_intro: content.msg_sponsor_intro,
        }}
      />
      <div className="" id="form">
        <MessageForm />
      </div>
    </>
  )
}
