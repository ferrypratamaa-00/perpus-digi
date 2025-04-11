import { InferInsertModel, sql } from "drizzle-orm";
import {
    pgTable,
    text,
    timestamp,
    doublePrecision,
    index,
} from "drizzle-orm/pg-core";

export type InsertBook = InferInsertModel<typeof books>;

export const books = pgTable(
    "books",
    {
        id: text("id").primaryKey().default(crypto.randomUUID()).notNull(),
        title: text("title").notNull(),
        slug: text("slug").notNull(),
        category: text("category").notNull(),
        publisher: text("publisher").notNull(),
        isbn: text("isbn").notNull(),
        issn: text("issn"),
        author: text("author").notNull(),
        year: text("year").notNull(),
        price: doublePrecision("price").notNull(),
        description: text("description"),
        createdAt: timestamp("created_at").defaultNow(),
        updatedAt: timestamp("updated_at").defaultNow(),
    },
    (table) => [
        index("title_search_index").using(
            "gin",
            sql`to_tsvector('indonesian', ${table.title})`
        ),
    ]
);
