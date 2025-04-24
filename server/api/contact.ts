export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  try {
    await $fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: {
        personalizations: [
          {
            to: [{ email: process.env.EMAIL_TO }],
            subject: body.subject || 'No Subject',
          },
        ],
        from: {
          email: 'noreply@em6741.family-love-haven.com',
          name: 'My Portfolio Site',
        },
        content: [
          {
            type: 'text/plain',
            value: body.text || 'No message provided',
          },
          { 
            type: 'text/html', 
            value: body.html || '<p>No HTML message provided</p>',
          },
        ],
      },
    })

    return { success: true }
  } catch (error: any) {
    console.error('SendGrid error:', error)
    throw createError({ statusCode: 500, statusMessage: error.message })
  }
})
