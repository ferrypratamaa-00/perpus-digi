import { AppError } from "@/core/errors/appError.errpr";
import { Context } from "hono";
import { handleError } from "../utils/response.util";

export const errorHandler = async (c: Context, next: () => Promise<void>) => {
    try {
        await next();
    } catch (err: any) {
        const status = err instanceof AppError ? err.statusCode : 500;
        const message = err.message || "Internal Server Error";
        const errors = err.errors || null;

        handleError(c, message, status, errors);
    }
};
