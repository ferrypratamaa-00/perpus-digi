import { validator } from "@/shared/middlewares/validator.middleware";
import { Hono } from "hono";
import { bookValidation } from "./book.validation";
import { createBookController } from "./book.controller";

const bookRoutes = new Hono();

bookRoutes.post("/", validator(bookValidation), createBookController);

bookRoutes.get("/", (c) => {
    return c.json("get books");
});

bookRoutes.put("/", (c) => {
    return c.json("put books");
});

bookRoutes.delete("/", (c) => {
    return c.json("delete books");
});

export default bookRoutes;
