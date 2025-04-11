import { z } from "zod";

export const bookValidation = z.object({
    title: z
        .string({
            required_error: "Title is required",
            invalid_type_error: "Title must be a string",
        })
        .min(2, "Title must be at least 2 characters")
        .max(125, "Title must be at most 125 characters"),

    category: z
        .string({
            required_error: "Category is required",
            invalid_type_error: "Category must be a string",
        })
        .nonempty("Category cannot be empty"),

    publisher: z
        .string({
            required_error: "Publisher is required",
            invalid_type_error: "Publisher must be a string",
        })
        .nonempty("Publisher cannot be empty"),

    isbn: z
        .string({
            required_error: "ISBN is required",
            invalid_type_error: "ISBN must be a string",
        })
        .regex(/^\d{10}(\d{3})?$/, "ISBN must be 10 or 13 digits")
        .nonempty("ISBN cannot be empty"),

    issn: z
        .string({
            invalid_type_error: "ISSN must be a string",
        })
        .regex(/^\d{4}-\d{3}[\dX]$/, "ISSN format must be like 1234-567X")
        .nullable()
        .optional(),

    author: z
        .string({
            required_error: "Author is required",
            invalid_type_error: "Author must be a string",
        })
        .nonempty("Author cannot be empty"),

    year: z
        .string({
            required_error: "Year is required",
            invalid_type_error: "Year must be a string",
        })
        .nonempty("Year cannot be empty")
        .regex(/^\d{4}$/, "Year must be a 4-digit number"),

    price: z
        .number({
            required_error: "Price is required",
            invalid_type_error: "Price must be a number",
        })
        .nonnegative("Price cannot be negative"),

    description: z
        .string({
            invalid_type_error: "Description must be a string",
        })
        .nullable()
        .optional(),
});
