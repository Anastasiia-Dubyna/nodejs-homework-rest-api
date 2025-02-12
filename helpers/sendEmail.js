import nodemailer from "nodemailer";
import "dotenv/config";

process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

const { UKR_NET_PASSWORD, UKR_NET_EMAIL } = process.env;

const nodemailerConfig = {
  host: "smtp.ukr.net",
  port: 465,
  secure: true,
  auth: {
    user: UKR_NET_EMAIL,
    pass: UKR_NET_PASSWORD,
  },
};

const transport = nodemailer.createTransport(nodemailerConfig);

/*
const deta = {
  to: "legawov898@wanbeiz.com",
  subject: "Test email",
  html: "<strong>Test email</strong>",
};
*/

const sendEmail = (data) => {
  const email = { ...data, from: UKR_NET_EMAIL };
  return transport.sendMail(email);
};

export default sendEmail;
