export async function sendEmail(data) {
  try {
    const res = await fetch("/api/email", {
      method: "POST",
      body: JSON.stringify(data),
    });

    return res;
  } catch (error) {
    throw new Error(error);
  }
}
