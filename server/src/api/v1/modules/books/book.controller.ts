import { Context } from "hono";
import { BookService } from "./book.service";
import { BookRepository } from "./book.repository";
import { handleResponse } from "@/shared/utils/response.util";

const bookService = new BookService(new BookRepository());

export const createBookController = async (c: Context) => {
    const validateData = c.get("validateBody");

    const newBook = await bookService.createBook(validateData);
    return handleResponse(c, newBook, "Book created", 201);
};
