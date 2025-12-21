import nodemailer from 'nodemailer'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed.' })
  }

  // Validate environment variables
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.error('Missing email credentials in environment variables')
    return res.status(500).json({
      success: false,
      message:
        'Email service not configured. Please contact me directly at bhavyasuri.bs23@gmail.com',
    })
  }

  const { name, email, message } = req.body

  // Validate input
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: 'All fields are required.',
    })
  }

  // Create transporter with improved Gmail configuration
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS, // Must be an App Password, not regular password
    },
    tls: {
      rejectUnauthorized: false, // For development, remove in production if you have proper SSL
    },
  })

  // Verify transporter connection
  try {
    await transporter.verify()
  } catch (verifyError) {
    console.error('Email transporter verification failed:', verifyError)
    return res.status(500).json({
      success: false,
      message:
        'Email service authentication failed. Please contact me directly at bhavyasuri.bs23@gmail.com',
      error: {
        code: 'EAUTH',
        message:
          'Authentication failed. Please check EMAIL_USER and EMAIL_PASS environment variables.',
      },
    })
  }

  try {
    await transporter.sendMail({
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `Portfolio Contact: New message from ${name}`,
      text: `You have received a new message from your portfolio:\n\nFrom: ${name} (${email})\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f4f4f4;">
          <div style="background-color: white; padding: 20px; border-radius: 5px;">
            <h2 style="color: #333;">New Contact Form Message</h2>
            <p><strong>From:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <hr style="border: 1px solid #eee; margin: 20px 0;">
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap; color: #666;">${message}</p>
          </div>
        </div>
      `,
    })

    return res.status(200).json({
      success: true,
      message: 'Message sent successfully!',
    })
  } catch (error) {
    console.error('Email send error:', error)

    // Provide more specific error messages
    let errorMessage =
      'Failed to send message. Please try again or contact me directly at bhavyasuri.bs23@gmail.com'

    if (error.code === 'EAUTH') {
      errorMessage =
        'Email authentication failed. Please contact me directly at bhavyasuri.bs23@gmail.com'
    } else if (error.code === 'ECONNECTION' || error.code === 'ETIMEDOUT') {
      errorMessage = 'Connection timeout. Please try again later.'
    }

    return res.status(500).json({
      success: false,
      message: errorMessage,
      error: {
        code: error.code || 'UNKNOWN',
        message: error.message,
      },
    })
  }
}
