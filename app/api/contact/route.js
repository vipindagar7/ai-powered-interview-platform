import nodemailer from "nodemailer";

const contactEmailTemplate = (name, message) => `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border-radius: 10px; background-color: #f4f4f4; text-align: center;">
        <div style="font-size: 50px; color: #007bff;">📩</div>
        <h2 style="color: #333;">Hello ${name},</h2>
        <p style="font-size: 16px; color: #555;">
            Thank you for reaching out to us! We’ve received your message and will get back to you as soon as possible.
        </p>
        <div style="background-color: #fff; padding: 15px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); margin: 20px 0;">
            <p style="font-size: 16px; color: #333;"><strong>Your Message:</strong></p>
            <p style="font-size: 14px; color: #555;">"${message}"</p>
        </div>
        <p style="font-size: 16px; color: #555;">
            Our team will review your request and respond shortly. If it's urgent, feel free to reach out at  
            <a href="mailto:${process.env.EMAIL_USER}" style="color: #007bff; text-decoration: none;">${process.env.EMAIL_USER}</a>.
        </p>
        <p style="margin-top: 30px; font-size: 14px; color: #777;">- The InterviewAI Team 🤖</p>
    </div>
`;

const adminEmailTemplate = (name, email, message) => `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border-radius: 10px; background-color: #f4f4f4; text-align: center;">
        <div style="font-size: 50px; color: #ff5733;">📧</div>
        <h2 style="color: #333;">New Contact Request</h2>
        <p style="font-size: 16px; color: #555;">
            A new contact request has been received.
        </p>
        <div style="background-color: #fff; padding: 15px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); margin: 20px 0;">
            <p style="font-size: 16px; color: #333;"><strong>Name:</strong> ${name}</p>
            <p style="font-size: 16px; color: #333;"><strong>Email:</strong> ${email}</p>
            <p style="font-size: 14px; color: #555;"><strong>Message:</strong></p>
            <p style="font-size: 14px; color: #555;">"${message}"</p>
        </div>
        <p style="margin-top: 30px; font-size: 14px; color: #777;">- Automated System</p>
    </div>
`;

export async function POST(req) {
    try {
        const body = await req.json();
        const { name, email, message } = body;

        if (!name || !email || !message) {
            return Response.json({ message: "All fields are required." }, { status: 400 });
        }

        // Configure Nodemailer
        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port: process.env.EMAIL_PORT,
            secure: false, // Use `true` for port 465, `false` for 587
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // Send email to ADMIN
        transporter.sendMail({
            from:`${process.env.APP_NAME} <${process.env.EMAIL_USER}>`,
            to: process.env.ADMIN_EMAIL,
            subject: "New Contact Message",
            html: adminEmailTemplate(name, email, message),
        });

        // Send confirmation email to USER
        transporter.sendMail({
            from:`${process.env.APP_NAME} <${process.env.EMAIL_USER}>`,
            to: email,
            subject: "We've Received Your Message!",
            html: contactEmailTemplate(name, message),
        });

        return Response.json({ message: "Message sent successfully!" }, { status: 200 });
    } catch (error) {
        return Response.json({ message: "Error sending email", error: error.message }, { status: 500 });
    }
}