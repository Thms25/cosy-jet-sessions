export async function sendEmail(data: {}, type: string) {
  const apis = {
    message: '/api/email/message',
    apply: '/api/email/apply',
  }
  try {
    const res = await fetch(apis[type], {
      method: 'POST',
      body: JSON.stringify(data),
    })

    return res
  } catch (error) {
    throw new Error(error)
  }
}
