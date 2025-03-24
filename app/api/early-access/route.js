import { connectDB } from "@/lib/db";
import EarlyAccess from "@/lib/models/EarlyAccess";
import nodemailer from "nodemailer";

// Configure Nodemailer
const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: false, // True for 465, false for 587
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});
const emailTemplate = (name) => `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border-radius: 10px; background-color: #f4f4f4; text-align: center;">
        <div style="font-size: 50px; color: #007bff;">🤖</div>
        <h2 style="color: #333;">🎉 Welcome to AI-Powered Mock Interviews, ${name}! 🎉</h2>
        <p style="font-size: 16px; color: #555;">
            You've successfully joined the waitlist for early access! Get ready to enhance your interview skills with AI-driven feedback and insights. 🚀
        </p>
        <div style="font-size: 80px; color: #007bff; margin: 20px 0;">💡</div>
        <p style="font-size: 16px; color: #555;">
            Stay tuned for exclusive updates, feature releases, and personalized interview experiences.
        </p>
        <a href=${process.env.URL} 
           style="display: inline-block; background-color: #007bff; color: #fff; padding: 12px 24px; text-decoration: none; 
                  border-radius: 5px; font-size: 16px; font-weight: bold; margin-top: 20px;">
           Start Preparing Now 🚀
        </a>
        <p style="margin-top: 30px; font-size: 14px; color: #777;">
            Have questions? <a href="mailto:${process.env.EMAIL_USER}" style="color: #007bff; text-decoration: none;">Contact Us</a>
        </p>
        <p style="font-size: 14px; color: #777;">- The InterviewAI Team 🤖</p>
    </div>
`;

export default emailTemplate;


export async function POST(req) {
    try {
        await connectDB();
        const { name, email } = await req.json();

        if (!name || !email) {
            return new Response(JSON.stringify({ message: "Name and Email are required" }), { status: 400 });
        }
        const existingUser = await EarlyAccess.findOne({ email });

        if (existingUser) {
            return new Response(JSON.stringify({ message: "You already joined the waitlist" }), { status: 409 });
        }
        // Save to database
        const newUser = await EarlyAccess.create({ name, email });

        // Email to user
        const userMailOptions = {
            from:`${process.env.APP_NAME} <${process.env.EMAIL_USER}>`,
            to: email,
            subject: "Thanks for Joining the Early Access Waitlist!",
            html: emailTemplate(name),
        };

        // Email to admin (you)
        const adminMailOptions = {
            from:`${process.env.APP_NAME} <${process.env.EMAIL_USER}>`,
            to: process.env.ADMIN_EMAIL,
            subject: "New Early Access Signup",
            html: `
        <h2>New Early Access Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
      `,
        };

        // Send emails
        await Promise.all([
            transporter.sendMail(userMailOptions),
            transporter.sendMail(adminMailOptions),
        ]);

        return new Response(JSON.stringify({ message: "Early access request submitted and emails sent!" }), { status: 201 });
    } catch (error) {
        console.log(error)
        return new Response(JSON.stringify({ message: "Error submitting request", error: error.message }), { status: 500 });
    }
}
