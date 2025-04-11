import { Hono } from "hono";
import { routes } from "@/api/v1/index.route";

export const app = new Hono();

app.route("/api/v1", routes);
