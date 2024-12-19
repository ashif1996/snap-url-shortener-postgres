import transporter from "../config/emailConfig.js";

// Function to send an email using the contact form
const sendEmail = async (name, email, message) => {
    const mailOptions = {
        from: process.env.SEND_EMAIL,
        to: process.env.SEND_EMAIL,
        subject: "📬 New Message from SnapURL! Contact Form",
        text: `
Hello,

You have received a new message through the SnapURL! Contact Us form:

----------------------------------------------------
👤 Name: ${name}  
📧 Email: ${email}

💬 Message:

${message}
----------------------------------------------------

Best regards,
SnapURL! Notification System
        `,
        replyTo: email,
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        return info;
    } catch (error) {
        console.error("Email sending failed:", error);
        throw new Error("Email sending failed");
    }
};

export default sendEmail;