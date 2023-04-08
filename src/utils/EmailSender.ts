import nodemailer from 'nodemailer'
import { envConfig } from '../config/env'

export class EmailService {
  private transporter: ReturnType<typeof nodemailer.createTransport>

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: envConfig.MAILER_ADDRESS,
        pass: envConfig.MAILER_PASSWORD
      }
    })
  }

  public async sendRecoverEmail(user: any, emailToken:string) {
    await this.transporter.sendMail({
      from: envConfig.MAILER_ADDRESS,
      to: user.email,
      subject: 'Confirm email',
      html: `Please click this link: <a href="${envConfig.ORIGIN_URL}${emailToken}">recover</a>`
    })
  }

  public async sendVerifyEmail(user: any, emailToken: string) {
    await this.transporter.sendMail({
      from: envConfig.MAILER_ADDRESS,
      to: user.email,
      subject: 'Confirm email',
      html: `Please click this link: <a href="${envConfig.ORIGIN_URL}/api/auth/verify/${emailToken}">confirm</a>`
    })
  }
}
