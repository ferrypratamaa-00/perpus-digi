import { Link } from "react-router";
import { BookProps } from "./Table.types";

const BookTable = ({ books, onDelete, isDeleting }: BookProps) => {
    return (
        <div className="overflow-x-auto">
            <table className="table">
                <THead />
                <TBody
                    books={books}
                    onDelete={onDelete}
                    isDeleting={isDeleting}
                />
            </table>
        </div>
    );
};

function THead() {
    return (
        <thead>
            <tr>
                <th>#</th>
                <th>Title</th>
                <th>Category</th>
                <th>Author</th>
                <th>Year</th>
                <th>Action</th>
            </tr>
        </thead>
    );
}

function TBody({ books, onDelete, isDeleting }: BookProps) {
    console.log({ books });
    return (
        <tbody>
            {books.map((book, idx) => (
                <tr key={book.id} className="bg-base-200">
                    <th>{idx + 1}</th>
                    <td>{book.title}</td>
                    <td>{book.category}</td>
                    <td>{book.author}</td>
                    <td>{book.year}</td>
                    <td>
                        <div className="join join-vertical lg:join-horizontal">
                            <Link
                                to={`/admin/books/detail/${book.slug}`}
                                className="btn btn-sm join-item btn-success"
                            >
                                Detail
                            </Link>
                            <Link
                                to={`/admin/books/edit/${book.slug}`}
                                className="btn btn-sm join-item btn-warning"
                            >
                                Edit
                            </Link>
                            <button
                                onClick={() => onDelete(book.id)}
                                className="btn btn-sm btn-error"
                                disabled={isDeleting}
                            >
                                {isDeleting ? "Deleting..." : "Delete"}
                            </button>
                        </div>
                    </td>
                </tr>
            ))}
        </tbody>
    );
}

export default BookTable;
