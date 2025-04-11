import { Context } from "hono";
import type { StatusCode } from "hono/utils/http-status";

export const handleResponse = <T>(
    c: Context,
    data: T,
    message = "Success",
    statusCode: StatusCode = 200
) => {
    c.status(statusCode);
    return c.json({
        status: "success",
        message,
        data,
    });
};

export const handleError = (
    c: Context,
    message = "Something went wrong",
    statusCode: StatusCode = 500,
    errors: Record<string, string[]> | null = null
) => {
    c.status(statusCode);
    return c.json({
        status: "error",
        message,
        errors: errors,
    });
};
