import { db } from "@/db/drizzle";
import { books, InsertBook } from "@/db/schema";
import { eq, sql } from "drizzle-orm";
import { year } from "drizzle-orm/mysql-core";

export class BookRepository {
    async create(data: InsertBook) {
        const [book] = await db.insert(books).values(data).returning();
        return book;
    }

    private buildSearchQuery(search?: string) {
        const cleaned = search?.trim();
        if (!cleaned) return sql`TRUE`;
        const formatted = cleaned.split(/\s+/).join(" & ");
        return sql`to_tsvector('indonesian', ${books.title} || ' ' || ${books.description}) @@ to_tsquery('indonesian', ${formatted})`;
    }

    async findAll({
        search,
        page = 1,
        limit = 10,
    }: {
        search?: string;
        page?: number;
        limit?: number;
    }) {
        const offset = (page - 1) * limit;

        const data = await db
            .select({
                id: books.id,
                title: books.title,
                slug: books.slug,
                category: books.category,
                author: books.author,
                year: books.year,
            })
            .from(books)
            .where(this.buildSearchQuery(search))
            .limit(limit)
            .offset(offset);

        const [{ count }] = await db
            .select({ count: sql<number>`count(*)` })
            .from(books)
            .where(this.buildSearchQuery(search));

        return {
            data,
            meta: {
                total: count,
                page,
                limit,
                totalPages: Math.ceil(count / limit),
            },
        };
    }

    async findById(id: string) {
        const book = await db.select().from(books).where(eq(books.id, id));
        return book;
    }

    async findBySlug(slug: string) {
        const book = await db.select().from(books).where(eq(books.slug, slug));
        return book;
    }

    async update(id: string, data: Partial<InsertBook>) {
        const [book] = await db
            .update(books)
            .set(data)
            .where(eq(books.id, id))
            .returning();

        return book;
    }

    async delete(id: string) {
        const [book] = await db
            .delete(books)
            .where(eq(books.id, id))
            .returning();

        return book;
    }
}
