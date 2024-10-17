require("dotenv").config();
const path = require("path");

const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.user,
    pass: process.env.pass,
  },
});

let options = {
  from: "seu email",
  to: `aqui vai o email de destino, outro destino`,
  subject: `Assunto`,
  text: `texto`,
  attachments: [
    {
      filename: path.basename("arquivo-em-anexo.pdf"),
      path: "arquivo-em-anexo.pdf",
    },
  ],
};

const sendEmail = async () => {
  try {
    console.log("Enviando E-mail");
    await transporter.sendMail(options);
    console.log("E-mail enviado!");
    process.exit();
  } catch (error) {
    console.log("Erro");
    console.log(error);
  }
};

sendEmail();
