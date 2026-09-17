const sendMail = async (to, subject, html) => {
  if (!process.env.RESEND_API_KEY) {
    console.error("Email unavailable: RESEND_API_KEY is not configured");
    return false;
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.MAIL_FROM || "AB Tour Travel <onboarding@resend.dev>",
        to: [to],
        subject,
        html,
      }),
    });

    if (!response.ok) {
      console.error("Email API error:", await response.text());
      return false;
    }

    console.log("Email sent successfully");
    return true;
  } catch (error) {
    console.error("Email API error:", error.message);
    return false;
  }
};

module.exports = sendMail;