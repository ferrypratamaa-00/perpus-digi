import { Context } from "hono";

export const notFoundHandler = (c: Context) => {
    return c.json(
        {
            status: "fail",
            message: "Request Not Found!",
        },
        404
    );
};
