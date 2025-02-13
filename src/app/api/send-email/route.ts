import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with your API key
const resend = new Resend("re_N6f75zv4_AVvjvxAB6yqt4MrYv2cLH4hs");

export async function POST(request: Request) {
    try {
        // Parse the request body
        const body = await request.json();
        const { name, email, subject, message } = body;

        // Send the email using Resend
        const { data, error } = await resend.emails.send({
            from: 'onboarding@resend.dev', // Replace with your verified domain
            to: 'contact@xenotech.com', // Replace with your email
            subject: subject,
            html: `
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong> ${message}</p>
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