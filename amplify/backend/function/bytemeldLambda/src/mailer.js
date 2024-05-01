import nodemailer from 'nodemailer';

class Mailer {
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: 'smtp.mail.us-east-1.awsapps.com',
      port: 465,
      secure: true, // Use `true` for port 465, `false` for all other ports
      auth: {
        user: 'no-reply@bytemeld.net',
        pass: process.env.MAILBOX_PASSWORD,
      },
    });
  }

  async sendEmail({
    from,
    to,
    subject,
    text
  }) {
    try {
      const info = await this.transporter.sendMail({
        from, // sender address
        to, // list of receivers
        subject, // Subject line
        text, // plain text body
      });
    
      console.log("Message sent: %s", info);
    } catch (err) {
      console.log('[ERR][sendEmail]', err);
      throw err;
    }
  }
};

export default new Mailer();
