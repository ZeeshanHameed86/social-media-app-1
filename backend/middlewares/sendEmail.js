const nodeMailer = require("nodemailer");

exports.sendEmail = async (options) => {
  var transporter = nodeMailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "730a304ddf7a1f",
      pass: "99df4913ff473f",
    },
  });

  const mailOptions = {
    from: "730a304ddf7a1f",
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  await transporter.sendMail(mailOptions);
};
