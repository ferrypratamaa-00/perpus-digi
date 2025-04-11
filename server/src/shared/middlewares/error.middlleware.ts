import { Context } from "hono";
import { AppError } from "@/core/errors/appError.error";
import { handleError } from "../utils/response.util";

export const errorHandler = async (c: Context, next: () => Promise<void>) => {
    try {
        await next();
    } catch (err: any) {
        const status = err instanceof AppError ? err.statusCode : 500;
        const message = err.message || "Internal Server Error";
        const errors = err.errors || null;

        return handleError(c, message, status, errors);
    }
};

export const onErrorHandler = (err: Error, c: Context) => {
    const status = err instanceof AppError ? err.statusCode : 500;
    const message = err.message || "Internal Server Error";
    const errors = (err as any).errors || null;

    return handleError(c, message, status, errors);
};
