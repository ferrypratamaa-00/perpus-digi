import { InsertBook } from "@/db/schema";
import { CreateBookDto, UpdateBookDto } from "./book.dto";
import { BookRepository } from "./book.repository";
import { randomUUID } from "crypto";
import { generateSlug } from "@/shared/utils/slug.util";
import { AppError } from "@/core/errors/appError.error";

export class BookService {
    constructor(private readonly bookRepo: BookRepository) {}

    private async idChecking(id: string) {
        const existing = await this.bookRepo.findById(id);
        if (!existing) throw new AppError(404, `Book with id ${id}`);
    }

    async createBook(data: CreateBookDto) {
        const bookData: InsertBook = {
            id: randomUUID(),
            slug: generateSlug(data.title),
            ...data,
        };

        return this.bookRepo.create(bookData);
    }

    async getAllBooks(params: {
        search?: string;
        page?: number;
        limit?: number;
    }) {
        return this.bookRepo.findAll(params);
    }

    async getBookBySlug(slug: string) {
        console.log(slug);
        const book = await this.bookRepo.findBySlug(slug);
        if (book.length < 1) throw new AppError(404, `Book not found`);
        return book;
    }

    async updateBook(id: string, data: Partial<UpdateBookDto>) {
        this.idChecking(id);
        return this.bookRepo.update(id, data);
    }

    async deleteBook(id: string) {
        this.idChecking(id);
        return this.bookRepo.delete(id);
    }
}
