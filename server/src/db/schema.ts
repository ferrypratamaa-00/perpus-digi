import {
    pgTable,
    serial,
    text,
    integer,
    timestamp,
    uuid,
} from "drizzle-orm/pg-core";

export const books = pgTable("books", {
    id: uuid("id").primaryKey(),
    title: text("title").notNull(),
    slug: text("slug").notNull(),
    category: text("category").notNull(),
    publisher: text("publisher").notNull(),
    isbn: text("isbn").notNull(),
    issn: text("issn").notNull(),
    author: text("author").notNull(),
    year: integer("year").notNull(),
    price: integer("price").notNull(),
    description: text("description").notNull(),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull(),
});
