import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters").max(5000),
  tier: z.string().optional(),
  project_type: z.string().optional(),
  complexity: z.string().optional(),
  timeline: z.string().optional(),
});

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = contactSchema.parse(body);
    const { name, email, message, tier, project_type, complexity, timeline } = validatedData;

    const selectionsHtml = (tier || project_type || complexity || timeline)
      ? `
        <h4>Estimator Selections</h4>
        ${tier ? `<p><strong>Tier:</strong> ${tier}</p>` : ''}
        ${project_type ? `<p><strong>Project Type:</strong> ${project_type}</p>` : ''}
        ${complexity ? `<p><strong>Complexity:</strong> ${complexity}</p>` : ''}
        ${timeline ? `<p><strong>Timeline:</strong> ${timeline}</p>` : ''}
        <br />
      `
      : '';

    await transporter.sendMail({
      from: `"Spanotic Website" <${process.env.GMAIL_USER}>`,
      to: process.env.CLIENT_EMAIL,
      replyTo: email,
      subject: `New Inquiry from Spanotic Website - ${name}`,
      html: `
        <h3>New Contact Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <br />
        ${selectionsHtml}
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    return NextResponse.json(
      { success: true, message: 'Message sent successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact API Error:', error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation Failed', issues: error.issues },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}