import { randomBytes } from "crypto";

export const generateSlug = (text: string) => {
    const baseSlug = text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)+/g, "");

    const suffix = generateSecureRandomString();
    return `${baseSlug}-${suffix}`;
};

function generateSecureRandomString(length = 5): string {
    const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
    const bytes = randomBytes(length);
    return Array.from(bytes)
        .map((b) => chars[b % chars.length])
        .join("");
}
