import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // your email
        pass: process.env.EMAIL_PASS, // your email password or app-specific password
      },
    });

    try {
      await transporter.sendMail({
        from: `"${name}" <${process.env.EMAIL_USER}>`, // Shows user's name but uses your email
        to: process.env.EMAIL_USER,
        replyTo: email, // Allows you to reply directly to the user
        subject: `New message from ${name}`,
        text: message,
      });      
      res.status(200).json({ success: true, message: "Message sent successfully!" });
    } catch (error) {
      res.status(500).json({ success: false, message: "Something went wrong.", error });
    }
  } else {
    res.status(405).json({ message: "Method not allowed." });
  }
}
