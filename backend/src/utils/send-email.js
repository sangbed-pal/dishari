import nodemailer from "nodemailer";
import { GMAIL_ID, GMAIL_PASSWORD } from "../constants.js";

const email = {
    "registration": {
        subject: "Dishari - Registration Successful",
        body: "Dear user,\n\nYour account has been created successfully. Please remember your credentials.\n\nComplete your profile to proceed further.\n\nThanks and regards,\nTeam Dishari"
    }
}

const sendEmail = async (emailId, category) => {
    const transporter = nodemailer.createTransport({
        service: "gmail", 
        secure: true,
        port: 465, 
        auth: {
            user: GMAIL_ID,
            pass: GMAIL_PASSWORD
        }
    });

    const mailOptions = {
        from: GMAIL_ID,
        to: emailId,
        subject: email[category].subject,
        text: email[category].body
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log("Email sent: " + info.response);
    } catch (error) {
        console.error("Error sending email: ", error);
    }
}

export default sendEmail;