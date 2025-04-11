import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";
import { routes } from "@/api/v1/index.route";
import { notFoundHandler } from "./shared/middlewares/notFound.middleware";
import {
    errorHandler,
    onErrorHandler,
} from "./shared/middlewares/error.middlleware";

export const app = new Hono();

app.use("/api/*", cors());
app.use("*", logger());
app.use("*", async (c, next) => {
    c.res.headers.set("X-Content-Type-Options", "nosniff");
    c.res.headers.set("X-Frame-Options", "DENY");
    await next();
});
app.route("/api/v1", routes);

app.notFound(notFoundHandler);

app.use("*", errorHandler);
app.onError(onErrorHandler);
