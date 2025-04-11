import "module-alias/register";
import { serve } from "@hono/node-server";
import { env } from "@/config/env.config";
import { app } from "./app";

serve({ fetch: app.fetch, port: env.PORT });
console.log(`🚀 Server ready on http://localhost:${env.PORT}`);
