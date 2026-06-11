import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const DemoSchema = z.object({
  name:      z.string().min(2),
  email:     z.string().email(),
  phone:     z.string().optional(),
  company:   z.string().min(1),
  fleetSize: z.enum(["1-5", "6-25", "26-100", "100+"]),
  interest:  z.string().min(1),
  heardFrom: z.string().optional(),
  notes:     z.string().optional(),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = DemoSchema.parse(body);

    if (process.env.RESEND_API_KEY) {
      const { Resend } = await import("resend");
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from:    "RoadAssist Pro <noreply@roadassistpro.com>",
        to:      "lross@paintbrushmarketing.net",
        subject: `Demo Request — ${data.name} · ${data.company} (${data.fleetSize} vehicles)`,
        text: [
          `Name:       ${data.name}`,
          `Company:    ${data.company}`,
          `Email:      ${data.email}`,
          `Phone:      ${data.phone ?? "—"}`,
          `Fleet size: ${data.fleetSize}`,
          `Interest:   ${data.interest}`,
          `Heard via:  ${data.heardFrom ?? "—"}`,
          `Notes:      ${data.notes ?? "—"}`,
        ].join("\n"),
      });
    } else {
      console.log("[demo] request (no RESEND_API_KEY):", data);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json({ error: "Invalid form data." }, { status: 400 });
    }
    console.error("[demo] error:", err);
    return NextResponse.json({ error: "Failed to send. Please try again." }, { status: 500 });
  }
}
