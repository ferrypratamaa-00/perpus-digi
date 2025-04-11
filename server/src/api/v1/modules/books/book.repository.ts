import { db } from "@/db/drizzle";
import { books, InsertBook } from "@/db/schema";

export class BookRepository {
    async create(data: InsertBook) {
        const [book] = await db.insert(books).values(data).returning();
        return book;
    }
}
