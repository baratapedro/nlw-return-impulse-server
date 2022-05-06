import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "1e835b2e3f9c96",
      pass: "0f046069bfb683"
    }
  });


export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body}: SendMailData) {
        await transport.sendMail({
        from: 'Equipe Feedget <oi@feedget.com>',
        to: 'Pedro Barata <pbarata97@gmail.com>',
        subject,
        html: body
    })
    }
}