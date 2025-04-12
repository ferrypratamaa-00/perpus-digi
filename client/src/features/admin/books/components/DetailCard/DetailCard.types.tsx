export type BookDetailCardProps = {
    book: {
        id: string;
        slug: string;
        title: string;
        category: string;
        author: string;
        publisher: string;
        isbn: string;
        issn?: string;
        year: string;
        price: string | number;
        description?: string;
    };
};
