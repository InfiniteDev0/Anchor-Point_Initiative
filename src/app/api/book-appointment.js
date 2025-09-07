import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, phone, date, time, type, concern, notes } = req.body;

  // Configure your SMTP transport (use your real credentials)
  const transporter = nodemailer.createTransport({
    service: "gmail", // or your provider
    auth: {
      user: process.env.SMTP_USER, // your email
      pass: process.env.SMTP_PASS, // your app password
    },
  });

  // Email to app owner
  const ownerMailOptions = {
    from: process.env.SMTP_USER,
    to: "owner@email.com", // change to your app owner's email
    subject: `New Appointment Booking from ${name}`,
    html: `
			<h2>New Appointment Booking</h2>
			<p><strong>Name:</strong> ${name}</p>
			<p><strong>Email:</strong> ${email}</p>
			<p><strong>Phone:</strong> ${phone}</p>
			<p><strong>Date:</strong> ${date}</p>
			<p><strong>Time:</strong> ${time}</p>
			<p><strong>Session Type:</strong> ${type}</p>
			<p><strong>Main Concern:</strong> ${concern}</p>
			<p><strong>Notes:</strong> ${notes}</p>
		`,
  };

  // Confirmation email to user
  const userMailOptions = {
    from: process.env.SMTP_USER,
    to: email,
    subject: "Your Appointment is Booked!",
    html: `
			<h2>Appointment Confirmation</h2>
			<p>Hi ${name},</p>
			<p>Your appointment has been booked with Anchor Point Initiative.</p>
			<p><strong>Date:</strong> ${date}</p>
			<p><strong>Time:</strong> ${time}</p>
			<p><strong>Session Type:</strong> ${type}</p>
			<p><strong>Main Concern:</strong> ${concern}</p>
			<p>We look forward to helping you!</p>
		`,
  };

  try {
    await transporter.sendMail(ownerMailOptions);
    await transporter.sendMail(userMailOptions);
    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
