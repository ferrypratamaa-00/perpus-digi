import { Book } from "../../book.types";

export type BookProps = {
    books: Book[];
    onDelete: (id: string) => void;
    isDeleting: boolean;
};
