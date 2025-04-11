import { AppError } from "@/core/errors/appError.error";
import { Context, Next } from "hono";
import { ZodSchema } from "zod";

export const validator = (schema: ZodSchema) => {
    return async (c: Context, next: Next) => {
        const body = await c.req.json();

        const parsed = schema.safeParse(body);

        if (!parsed.success) {
            const errors = Object.fromEntries(
                parsed.error.issues.map((issue) => [
                    issue.path[0] as string,
                    [issue.message],
                ])
            );

            throw new AppError(400, "Invalid Input", errors);
        }

        c.set("validateBody", parsed.data);
        await next();
    };
};
