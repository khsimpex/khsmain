"use server";

import nodemailer from "nodemailer";

export async function sendRFQEmail(formData: FormData) {
  const companyName = formData.get("companyName");
  const email = formData.get("email");
  const destination = formData.get("destination");
  const category = formData.get("category");
  const requirements = formData.get("requirements");

  // Validate fields
  if (!companyName || !email || !destination || !category || !requirements) {
    return { success: false, error: "Missing required fields" };
  }

  // Configure the SMTP transporter using provided GoDaddy settings
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtpout.secureserver.net",
    port: Number(process.env.SMTP_PORT) || 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    // Send the email
    await transporter.sendMail({
      from: `"KHS Website RFQ" <${process.env.SMTP_USER}>`, // Sender address
      to: process.env.SMTP_USER, // Send to yourself (or another designated sales email)
      replyTo: email as string,
      subject: `New RFQ from ${companyName}`,
      html: `
        <h2>New RFQ Received</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Company:</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${companyName}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Email:</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${email}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Destination:</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${destination}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Category:</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${category}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Requirements:</td>
            <td style="padding: 8px; border: 1px solid #ddd; white-space: pre-wrap;">${requirements}</td>
          </tr>
        </table>
      `,
    });
    
    return { success: true };
  } catch (error) {
    console.error("Email Error:", error);
    return { success: false, error: "Failed to send email" };
  }
}
