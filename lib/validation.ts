import { z } from 'zod';

export const contactSchema = z.object({
    name: z
        .string()
        .min(2, 'Name must be at least 2 characters.')
        .max(100, 'Name must be at most 100 characters.')
        .trim(),

    email: z
        .string()
        .email('Please enter a valid email address.')
        .max(254, 'Email address is too long.')
        .trim()
        .toLowerCase(),

    message: z
        .string()
        .min(10, 'Message must be at least 10 characters.')
        .max(2000, 'Message must be at most 2000 characters.')
        .trim(),

    // Honeypot — must always be empty; bots fill this in
    website: z.string().max(0, 'Spam detected.').optional(),
});

export type ContactSchema = z.infer<typeof contactSchema>;

export type FieldErrors = Partial<Record<keyof ContactSchema, string[]>>;

export interface ActionResult {
    success: boolean;
    message: string;
    fieldErrors?: FieldErrors;
}
