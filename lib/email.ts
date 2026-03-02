import { Resend } from 'resend';
import type { ContactSchema } from './validation';

// Fail fast at module load so deployment surfaces the misconfiguration immediately
if (!process.env.RESEND_API_KEY) {
  throw new Error('[email] RESEND_API_KEY environment variable is not set.');
}
if (!process.env.CONTACT_RECEIVER_EMAIL) {
  throw new Error('[email] CONTACT_RECEIVER_EMAIL environment variable is not set.');
}
// SENDER_EMAIL is hardcoded to the verified aregbesola.dev domain below.
// No env var needed — Resend validates the From address against verified domains.

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(data: ContactSchema): Promise<void> {
  const timestamp = new Date().toLocaleString('en-US', {
    timeZone: 'UTC',
    dateStyle: 'long',
    timeStyle: 'short',
  });

  const { error } = await resend.emails.send({
    from: 'Deeny Global Hub <contact@aregbesola.dev>',
    to: process.env.CONTACT_RECEIVER_EMAIL as string,
    replyTo: data.email,
    subject: `New Contact Message from ${data.name}`,
    html: `
      <!DOCTYPE html>
      <html lang="en">
        <head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" /></head>
        <body style="margin:0;padding:0;background:#f4f2e9;font-family:Inter,Arial,sans-serif;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f2e9;padding:40px 0;">
            <tr>
              <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border:2px solid #000;border-radius:0;">
                  <!-- Header -->
                  <tr>
                    <td style="background:#044b3c;padding:32px 40px;">
                      <h1 style="color:#ffffff;font-size:24px;margin:0;font-weight:800;letter-spacing:-0.5px;">
                        Deeny Global Hub — New Contact Message
                      </h1>
                    </td>
                  </tr>
                  <!-- Body -->
                  <tr>
                    <td style="padding:40px;">
                      <table width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                          <td style="padding-bottom:24px;border-bottom:1px solid #e3decf;">
                            <p style="margin:0 0 4px;font-size:12px;font-weight:700;text-transform:uppercase;color:#8c8a80;letter-spacing:1px;">From</p>
                            <p style="margin:0;font-size:18px;font-weight:700;color:#044b3c;">${data.name}</p>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding:24px 0;border-bottom:1px solid #e3decf;">
                            <p style="margin:0 0 4px;font-size:12px;font-weight:700;text-transform:uppercase;color:#8c8a80;letter-spacing:1px;">Reply-To Email</p>
                            <a href="mailto:${data.email}" style="font-size:16px;color:#044b3c;text-decoration:underline;">${data.email}</a>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding:24px 0;">
                            <p style="margin:0 0 12px;font-size:12px;font-weight:700;text-transform:uppercase;color:#8c8a80;letter-spacing:1px;">Message</p>
                            <p style="margin:0;font-size:16px;color:#334155;line-height:1.7;white-space:pre-wrap;">${data.message}</p>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  <!-- Footer -->
                  <tr>
                    <td style="background:#f4f2e9;padding:20px 40px;border-top:1px solid #e3decf;">
                      <p style="margin:0;font-size:12px;color:#8c8a80;">
                        Received: ${timestamp} UTC &nbsp;·&nbsp; Sent via Deeny Global Hub contact form
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
      </html>
    `,
  });

  if (error) {
    // Log the full Resend error server-side, but never surface it to the client
    console.error('[email] Resend delivery failure:', JSON.stringify(error, null, 2));
    throw new Error('Email delivery failed.');
  }
}
