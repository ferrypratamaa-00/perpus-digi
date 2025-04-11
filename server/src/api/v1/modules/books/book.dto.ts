import { z } from "zod";
import { bookValidation } from "./book.validation";

export type CreateBookDto = z.infer<typeof bookValidation>;

export interface UpdateBookDto {
    id: string;
    title?: string;
    slug?: string;
    category?: string;
    publisher?: string;
    isbn?: string;
    issn?: string;
    author?: string;
    year?: number;
    price?: number;
    description?: string;
}

export interface DeleteBookDto {
    id: string;
}

export interface SearchBookDto {
    query?: string;
    category?: string;
    publisher?: string;
    author?: string;
    year?: number;
    page?: number;
    limit?: number;
}
