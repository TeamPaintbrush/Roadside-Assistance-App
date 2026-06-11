import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const ContactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  company: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = ContactSchema.parse(body);

    const apiKey = process.env.RESEND_API_KEY;

    if (apiKey) {
      const { Resend } = await import("resend");
      const resend = new Resend(apiKey);

      await resend.emails.send({
        from: "RoadAssist Pro <noreply@roadassistpro.com>",
        to: ["lross@paintbrushmarketing.net"],
        replyTo: data.email,
        subject: `New Contact: ${data.name}${data.company ? ` — ${data.company}` : ""}`,
        html: `
          <h2>New contact form submission</h2>
          <table style="border-collapse:collapse;width:100%">
            <tr><td style="padding:8px;border:1px solid #e5e7eb;font-weight:bold">Name</td><td style="padding:8px;border:1px solid #e5e7eb">${data.name}</td></tr>
            <tr><td style="padding:8px;border:1px solid #e5e7eb;font-weight:bold">Email</td><td style="padding:8px;border:1px solid #e5e7eb">${data.email}</td></tr>
            ${data.phone ? `<tr><td style="padding:8px;border:1px solid #e5e7eb;font-weight:bold">Phone</td><td style="padding:8px;border:1px solid #e5e7eb">${data.phone}</td></tr>` : ""}
            ${data.company ? `<tr><td style="padding:8px;border:1px solid #e5e7eb;font-weight:bold">Company</td><td style="padding:8px;border:1px solid #e5e7eb">${data.company}</td></tr>` : ""}
            ${data.service ? `<tr><td style="padding:8px;border:1px solid #e5e7eb;font-weight:bold">Interest</td><td style="padding:8px;border:1px solid #e5e7eb">${data.service}</td></tr>` : ""}
            <tr><td style="padding:8px;border:1px solid #e5e7eb;font-weight:bold">Message</td><td style="padding:8px;border:1px solid #e5e7eb">${data.message.replace(/\n/g, "<br>")}</td></tr>
          </table>
        `,
      });
    } else {
      // Dev mode: log to console when API key not configured
      console.log("[Contact Form Submission]", data);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: "Validation failed", issues: err.issues }, { status: 400 });
    }
    console.error("[Contact API Error]", err);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
