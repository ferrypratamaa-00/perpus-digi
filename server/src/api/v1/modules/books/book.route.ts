import { validator } from "@/shared/middlewares/validator.middleware";
import { Hono } from "hono";
import { bookValidation } from "./book.validation";
import { BookController } from "./book.controller";

const bookRoutes = new Hono();
const bookController = new BookController();

bookRoutes.post("/", validator(bookValidation), bookController.create);

bookRoutes.get("/", bookController.findAll);

bookRoutes.get("/:slug", bookController.findBySlug);

bookRoutes.put(
    "/:id",
    validator(bookValidation.partial()),
    bookController.update
);

bookRoutes.delete("/:id", bookController.delete);

export default bookRoutes;
