import { InsertBook } from "@/db/schema";
import { CreateBookDto } from "./book.dto";
import { BookRepository } from "./book.repository";
import { randomUUID } from "crypto";
import { generateSlug } from "@/shared/utils/slug.util";

export class BookService {
    constructor(private readonly bookRepo: BookRepository) {}

    createBook(data: CreateBookDto) {
        const bookData: InsertBook = {
            id: randomUUID(),
            slug: generateSlug(data.title),
            ...data,
        };

        return this.bookRepo.create(bookData);
    }
}
