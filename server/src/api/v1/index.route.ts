import { Hono } from "hono";
import { env } from "@/config/env.config";
import bookRoutes from "./modules/books/book.route";

export const routes = new Hono();

routes.get("/", (c) =>
    c.json({
        message: `Welcome to ${env.APP_NAME} API ${env.API_VERSION}`,
    })
);

routes.route("/books", bookRoutes);
