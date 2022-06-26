import nodemailer from "nodemailer";
//dotenv
import dotenv from "dotenv"
dotenv.config();

export function nodemailerSend(mailerReciever, mailerSubject, mailerText) {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.MAILER_USER,
            pass: process.env.MAILER_PASSWORD
        }
    });

    const options = {
        from: process.env.MAILER_USER,
        to: mailerReciever,
        subject: mailerSubject,
        text: mailerText
    };

    transporter.sendMail(options, function(err, info) {
        if(err) {
            console.log(err)
            return;
        }
        console.log("Sent mail: " + info.response);
    });
}