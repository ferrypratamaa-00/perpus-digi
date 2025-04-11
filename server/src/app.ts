import { Hono } from "hono";
import { routes } from "@/api/v1/index.route";
import { notFoundHandler } from "./shared/middlewares/notFound.middleware";
import {
    errorHandler,
    onErrorHandler,
} from "./shared/middlewares/error.middlleware";

export const app = new Hono();

app.route("/api/v1", routes);

app.notFound(notFoundHandler);

app.use("*", errorHandler);
app.onError(onErrorHandler);
