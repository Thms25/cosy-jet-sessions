import PartnershipView from '@/sections/contact/partnership-view'

export default async function page() {
  const content = {
    apply_title: 'Apply For A Session',
    apply_subtitle: 'Become a part of the cosy family',
    apply_cta: 'Start Process',
    apply_form_intro:
      'The following questions are very important in the process of selecting the upcoming artists for our sessions, please take the time to fill them out carefully. We will read every answer carefully and get back to you as soon as possible.',
    msg_title: 'Something You’d Like To Share With Us ?',
    msg_subtitle:
      'We read every message carefully and we reply as soon as we can',
    msg_cta: 'Leave Us A Message',
    msg_sponsor_intro:
      "We'd love to hear from you! Please fill out the form below and we'll get back to you as soon as possible.",
    sponsor_title: 'Partnership Inquiry',
    sponsor_subtitle: 'Let’s Work Together & Make Something Beautiful',
    sponsor_cta: 'Let’s Work Together',
    sponsor_form_intro:
      'We are excited to hear from you! Please fill out the form below and we will get back to you as soon as possible.',
  }
  return <PartnershipView content={content} />
}
