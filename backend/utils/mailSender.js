const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  requireTLS: true,
  family: 4,
  connectionTimeout: 10000,
  greetingTimeout: 10000,
  socketTimeout: 10000,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

transporter.verify().then(() => {
  console.log("Email transporter ready");
}).catch((error) => {
  console.error("Email transporter unavailable:", error.message);
});

const sendMail = async (to, subject, html) => {
  try {
    await transporter.sendMail({
      from: `"AB Tour Travel" <${process.env.EMAIL}>`,
      to,
      subject,
      html,
    });

    console.log("Email sent successfully");
    return true;
  } catch (error) {
    console.log("Email Error:", error.message);
    return false;
  }
};

module.exports = sendMail;