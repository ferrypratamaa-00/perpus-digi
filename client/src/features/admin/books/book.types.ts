export type Book = {
    id: string;
    title: string;
    category: string;
    author: string;
    publisher: string;
    isbn: string;
    issn?: string;
    year: string;
    price: string;
    description?: string;
    slug: string;
};

export type BookResponse = {
    data: Book[];
    meta: {
        total: string;
        page: number;
        limit: number;
        totalPages: number;
    };
};
