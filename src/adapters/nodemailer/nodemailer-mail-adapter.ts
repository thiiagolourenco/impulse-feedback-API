import nodemailer from "nodemailer";
import { MailAdapter, MailAdapterData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "6d6d1c58bea599",
    pass: "7581d1678f71bb",
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: MailAdapterData) {
    await transport.sendMail({
      from: "Equipe Feedget <oi@feedget.com>",
      to: "Thiago Lourenço <thiagosport1@hotmail.com>",
      subject,
      html: body,
    });
  }
}
