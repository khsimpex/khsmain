import fs from 'fs';
import nodemailer from 'nodemailer';

// Manually parse .env.local for the test script
const envContent = fs.readFileSync('.env.local', 'utf-8');
const config = {};
envContent.split('\n').forEach(line => {
  if (line.includes('=')) {
    const [key, ...val] = line.split('=');
    config[key.trim()] = val.join('=').trim();
  }
});

console.log("Attempting to connect to:", config.SMTP_HOST, "on port", config.SMTP_PORT);
console.log("Using email:", config.SMTP_USER);

const transporter = nodemailer.createTransport({
  host: config.SMTP_HOST || "smtpout.secureserver.net",
  port: Number(config.SMTP_PORT) || 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: config.SMTP_USER,
    pass: config.SMTP_PASS,
  },
});

async function runTest() {
  try {
    const info = await transporter.sendMail({
      from: `"KHS Test" <${config.SMTP_USER}>`, 
      to: config.SMTP_USER, // sending to yourself
      subject: "Test Email from Next.js Setup",
      text: "If you are reading this, your GoDaddy SMTP configuration in .env.local is working perfectly!",
    });
    
    console.log("\n✅ SUCCESS! Email sent successfully.");
    console.log("Message ID:", info.messageId);
  } catch (error) {
    console.error("\n❌ ERROR: Failed to send email.");
    console.error(error.message);
    if (error.code === 'EAUTH') {
        console.error("\nTip: This looks like an authentication issue. Make sure your email and password are correct in .env.local. If you have 2FA enabled, you might need an App Password.");
    }
  }
}

runTest();
