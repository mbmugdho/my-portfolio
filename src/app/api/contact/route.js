import nodemailer from 'nodemailer'

export async function POST(req) {
  try {
    const { name = '', email = '', message = '' } = await req.json()

    const cleanName = String(name).trim()
    const cleanEmail = String(email).trim()
    const cleanMessage = String(message).trim()

    if (!cleanName || !cleanEmail || !cleanMessage) {
      return Response.json(
        { ok: false, error: 'Missing fields.' },
        { status: 400 }
      )
    }

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)
    if (!emailOk) {
      return Response.json(
        { ok: false, error: 'Invalid email.' },
        { status: 400 }
      )
    }

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SERVER_HOST,
      port: Number(process.env.EMAIL_SERVER_PORT || 587),
      secure: false, // IMPORTANT for 587
      requireTLS: true,
      auth: {
        user: process.env.EMAIL_SERVER_USER,
        pass: process.env.EMAIL_SERVER_PASSWORD,
      },
    })

    const toEmail =
      process.env.CONTACT_TO_EMAIL || process.env.EMAIL_SERVER_USER
    const from = process.env.EMAIL_FROM || process.env.EMAIL_SERVER_USER

    await transporter.sendMail({
      from,
      to: toEmail,
      replyTo: cleanEmail,
      subject: `New message from ${cleanName} (Portfolio)`,
      text: `Name: ${cleanName}\nEmail: ${cleanEmail}\n\nMessage:\n${cleanMessage}\n`,
      html: `
        <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;line-height:1.6">
          <h2 style="margin:0 0 12px">New Portfolio Message</h2>
          <p style="margin:0 0 6px"><strong>Name:</strong> ${escapeHtml(
            cleanName
          )}</p>
          <p style="margin:0 0 6px"><strong>Email:</strong> ${escapeHtml(
            cleanEmail
          )}</p>
          <p style="margin:12px 0 6px"><strong>Message:</strong></p>
          <pre style="white-space:pre-wrap;background:#f6f7fb;padding:12px;border-radius:10px;border:1px solid rgba(0,0,0,0.08)">${escapeHtml(
            cleanMessage
          )}</pre>
        </div>
      `,
    })

    return Response.json({ ok: true }, { status: 200 })
  } catch (err) {
    return Response.json(
      { ok: false, error: 'Server error. Please try again.' },
      { status: 500 }
    )
  }
}

function escapeHtml(str) {
  return String(str)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;')
}
