const sendMail = require("./mailSender");

const sendOTP = async (email, otp) => {
  const html = `
    <div style="font-family:Arial;padding:20px">
      <h2>Password Reset OTP</h2>

      <p>Hello Admin,</p>

      <p>Your OTP for password reset is:</p>

      <h1 style="color:#0d6efd;letter-spacing:4px">
        ${otp}
      </h1>

      <p>This OTP will expire in 10 minutes.</p>

      <br>

      <small>
        AB Tour Travel
      </small>
    </div>
  `;

  return await sendMail(
    email,
    "Password Reset OTP",
    html
  );
};

module.exports = sendOTP;