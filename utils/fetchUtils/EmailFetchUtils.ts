export async function sendEmail(data: any, type: string) {
  try {
    await fetch('/api/email?type=' + type, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    return true
  } catch (error) {
    console.error(error)
    return false
  }
}
