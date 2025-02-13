import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        // Parse the request body
        const body = await request.json();
        const { name, email, subject = 'New Client Message', message } = body;

        // Send the email using Resend
        const { data, error } = await resend.emails.send({
            from: 'ClientRequest@resend.dev', // Replace with your verified domain
            to: 'infoxenotech@gmail.com', // Replace with your email
            subject: subject,
            html: `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>New Contact Form Submission</title>
            </head>
            <body style="margin: 0; padding: 0; background-color: #f4f4f4; font-family: Arial, sans-serif;">
                <table role="presentation" style="width: 100%; border-collapse: collapse;">
                    <tr>
                        <td style="padding: 20px 0; text-align: center; background-color: #000000;">
                            <h1 style="color: #ffffff; margin: 0; font-size: 24px;">XenoTech</h1>
                        </td>
                    </tr>
                </table>
                
                <table role="presentation" style="max-width: 600px; margin: 20px auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
                    <tr>
                        <td style="padding: 40px;">
                            <h2 style="color: #333333; margin: 0 0 20px 0; font-size: 20px; border-bottom: 2px solid #f0f0f0; padding-bottom: 10px;">
                                New Contact Form Submission
                            </h2>
                            
                            <table role="presentation" style="width: 100%; margin-bottom: 20px;">
                                <tr>
                                    <td style="padding: 10px; background-color: #f8f8f8; border-radius: 4px;">
                                        <p style="margin: 0; color: #666666; font-size: 14px;">From</p>
                                        <p style="margin: 5px 0 0 0; color: #333333; font-size: 16px;"><strong>${name}</strong></p>
                                    </td>
                                </tr>
                            </table>
                            
                            <table role="presentation" style="width: 100%; margin-bottom: 20px;">
                                <tr>
                                    <td style="padding: 10px; background-color: #f8f8f8; border-radius: 4px;">
                                        <p style="margin: 0; color: #666666; font-size: 14px;">Email</p>
                                        <p style="margin: 5px 0 0 0; color: #333333; font-size: 16px;"><strong>${email}</strong></p>
                                    </td>
                                </tr>
                            </table>
                            
                            <table role="presentation" style="width: 100%; margin-bottom: 20px;">
                                <tr>
                                    <td style="padding: 10px; background-color: #f8f8f8; border-radius: 4px;">
                                        <p style="margin: 0; color: #666666; font-size: 14px;">Subject</p>
                                        <p style="margin: 5px 0 0 0; color: #333333; font-size: 16px;"><strong>${subject}</strong></p>
                                    </td>
                                </tr>
                            </table>
                            
                            <table role="presentation" style="width: 100%; margin-bottom: 20px;">
                                <tr>
                                    <td style="padding: 20px; background-color: #f8f8f8; border-radius: 4px;">
                                        <p style="margin: 0 0 10px 0; color: #666666; font-size: 14px;">Message</p>
                                        <p style="margin: 0; color: #333333; font-size: 16px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
                                    </td>
                                </tr>
                            </table>
                            
                            <table role="presentation" style="width: 100%; margin-top: 30px; border-top: 2px solid #f0f0f0;">
                                <tr>
                                    <td style="padding-top: 20px;">
                                        <p style="margin: 0; color: #666666; font-size: 14px; text-align: center;">
                                            This email was sent from the contact form on XenoTech's website.
                                        </p>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
                
                <table role="presentation" style="width: 100%; max-width: 600px; margin: 0 auto;">
                    <tr>
                        <td style="padding: 20px; text-align: center;">
                            <p style="margin: 0; color: #666666; font-size: 12px;">
                                © ${new Date().getFullYear()} XenoTech. All rights reserved.
                            </p>
                        </td>
                    </tr>
                </table>
            </body>
            </html>
            `,
        });

        // Handle errors
        if (error) {
            console.error(error);
            return NextResponse.json({ error }, { status: 400 });
        }

        // Return success response
        return NextResponse.json({ data }, { status: 200 });
    } catch (error) {
        // Handle unexpected errors
        return NextResponse.json({ error: 'Internal Server Error', details: error }, { status: 500 });
    }
}