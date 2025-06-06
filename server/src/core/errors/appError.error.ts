import { StatusCode } from "hono/utils/http-status";

export class AppError extends Error {
    constructor(
        public statusCode: StatusCode,
        message: string,
        public errors?: any
    ) {
        super(message);
    }
}
