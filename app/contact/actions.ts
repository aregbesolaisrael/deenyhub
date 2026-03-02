'use server';

import { contactSchema, type ActionResult } from '@/lib/validation';
import { sendContactEmail } from '@/lib/email';

// In-memory rate limiter — lightweight, suitable for single-instance Vercel deployments.
// For multi-region / high-scale, replace with Upstash Redis + @upstash/ratelimit.
const submissionLog = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 60_000; // 1 minute
const RATE_LIMIT_MAX = 3;            // max 3 submissions per IP per window

function isRateLimited(ip: string): boolean {
    const now = Date.now();
    const timestamps = (submissionLog.get(ip) ?? []).filter(
        (t) => now - t < RATE_LIMIT_WINDOW_MS
    );
    if (timestamps.length >= RATE_LIMIT_MAX) return true;
    submissionLog.set(ip, [...timestamps, now]);
    return false;
}

export async function submitContactForm(
    _prevState: ActionResult,
    formData: FormData
): Promise<ActionResult> {
    // ── 1. Honeypot check ─────────────────────────────────────────────────────
    const website = formData.get('website');
    if (typeof website === 'string' && website.length > 0) {
        // Silent accept — don't tip off bots that they were caught
        return { success: true, message: "Thanks! We'll be in touch." };
    }

    // ── 2. Rate limiting ──────────────────────────────────────────────────────
    // headers() is only available in Server Actions/Route Handlers (Next.js 14+)
    const { headers } = await import('next/headers');
    const headersList = await headers();
    const ip =
        headersList.get('x-forwarded-for')?.split(',')[0]?.trim() ??
        headersList.get('x-real-ip') ??
        'anonymous';

    if (isRateLimited(ip)) {
        return {
            success: false,
            message: 'Too many submissions. Please wait a moment and try again.',
        };
    }

    // ── 3. Validate ────────────────────────────────────────────────────────────
    const raw = {
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message'),
        website: formData.get('website'),
    };

    const parsed = contactSchema.safeParse(raw);

    if (!parsed.success) {
        const fieldErrors = parsed.error.flatten().fieldErrors as ActionResult['fieldErrors'];
        return {
            success: false,
            message: 'Please fix the errors below.',
            fieldErrors,
        };
    }

    // ── 4. Send email ──────────────────────────────────────────────────────────
    try {
        await sendContactEmail(parsed.data);
    } catch (err) {
        // err is already logged inside sendContactEmail — never expose to client
        console.error('[action] submitContactForm failed:', err instanceof Error ? err.message : err);
        return {
            success: false,
            message: 'Something went wrong on our end. Please try again later.',
        };
    }

    return {
        success: true,
        message: "Thanks! We've received your message and will be in touch shortly.",
    };
}
