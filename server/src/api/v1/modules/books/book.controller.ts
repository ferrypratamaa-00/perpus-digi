import { Context } from "hono";
import { BookService } from "./book.service";
import { BookRepository } from "./book.repository";
import { handleResponse } from "@/shared/utils/response.util";

const bookService = new BookService(new BookRepository());
export class BookController {
    create = async (c: Context) => {
        const validateData = c.get("validateBody");

        const newBook = await bookService.createBook(validateData);
        return handleResponse(c, newBook, "Book created", 201);
    };

    findAll = async (c: Context) => {
        const search = c.req.query("search") ?? undefined;
        const page = parseInt(c.req.query("page") || "1");
        const limit = parseInt(c.req.query("limit") || "10");

        const result = await bookService.getAllBooks({ search, page, limit });
        return handleResponse(c, result, "Books retrieved", 200);
    };

    findBySlug = async (c: Context) => {
        const slug = c.req.param("slug");
        const book = await bookService.getBookBySlug(slug);

        return handleResponse(c, book, "Book detail", 200);
    };

    update = async (c: Context) => {
        const id = c.req.param("id");
        const updateData = c.get("validateBody");

        const updatedBook = await bookService.updateBook(id, updateData);

        return handleResponse(c, updatedBook, "Book updated", 200);
    };

    delete = async (c: Context) => {
        const id = c.req.param("id");

        const deletedBook = await bookService.deleteBook(id);

        return handleResponse(c, deletedBook, "Book deleted", 200);
    };
}
