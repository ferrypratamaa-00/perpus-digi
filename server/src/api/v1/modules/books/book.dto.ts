import { z } from "zod";
import { bookValidation } from "./book.validation";

export type CreateBookDto = z.infer<typeof bookValidation>;
export type UpdateBookDto = z.infer<typeof bookValidation>;

export type getBookDto = {
    search?: string;
    category?: string;
    publisher?: string;
    author?: string;
    year?: number;
    page?: number;
    limit?: number;
};
