import dotenv from "dotenv";
dotenv.config();

function requireEnv(name: string): string {
    const val = process.env[name];
    if (!val) throw new Error(`Missing env var: ${name}`);
    return val;
}

export const env = {
    DATABASE_URL: requireEnv("DATABASE_URL"),
    PORT: Number(process.env.PORT || 3000),
    APP_NAME: process.env.APP_NAME || "API",
    API_VERSION: process.env.API_VERSION || "v1",
};
