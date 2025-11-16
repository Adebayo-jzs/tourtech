import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { name, email,title, message } = await req.json();

    await resend.emails.send({
      from: "Tourtech Contact Form <onboarding@tourtech.name.ng>",
      to: "adedejiadebayo732@gmail.com", 
      subject: `New message from ${name}`,
      reply_to: email,
      html:`
        <h3>${name}</h3>
        <h3>${title}</h3>
        <p>${message}</p>
        <br>
        <p>${email}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
