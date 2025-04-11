import { pgTable, serial, text, integer } from "drizzle-orm/pg-core";

export const books = pgTable("books", {
    id: serial("id").primaryKey(),
    title: text("title").notNull(),
    category: text("category").notNull(),
    publisher: text("publisher").notNull(),
    isbn: text("isbn").notNull(),
    issn: text("issn").notNull(),
    author: text("author").notNull(),
    year: integer("year").notNull(),
    price: integer("price").notNull(),
    description: text("description").notNull(),
});
