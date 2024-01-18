const postmark = require("postmark");

export async function POST(request) {
  try {
    const { name, message, email } = await request.json();

    const client = new postmark.ServerClient(process.env.EMAIL_KEY);

    let content = {
      From: process.env.CJS_EMAIL, // sender email address
      To: process.env.CJS_EMAIL, // your email address
      Subject: `New message from ${name}`,
      TextBody: `${message}\n\nReply to: ${email}`,
    };

    client.sendEmail(content);

    return new Response("Email sent!", {
      headers: { "Content-Type": "application.json" },
      status: 200,
    });
  } catch (error) {
    return new Response("Email sending failed!", {
      headers: { "Content-Type": "application.json" },
      status: 500,
    });
  }
}
