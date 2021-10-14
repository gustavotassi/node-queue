import nodemailer from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';
import mail from '../../config/mail';

export default nodemailer.createTransport({
    host: mail.host,
    port: mail.port,
    auth: mail.auth,
} as SMTPTransport.Options);
