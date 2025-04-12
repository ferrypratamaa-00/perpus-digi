import { Link } from "react-router";
import { BookProps } from "./Table.types";

const BookTable = ({ books }: BookProps) => {
    return (
        <div className="overflow-x-auto">
            <table className="table">
                <THead />
                <TBody books={books} />
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
                <th>ISBN</th>
                <th>Author</th>
                <th>Year</th>
                <th>Price</th>
                <th>Action</th>
            </tr>
        </thead>
    );
}

function TBody({ books }: BookProps) {
    return (
        <tbody>
            {books.map((book, idx) => (
                <tr key={book.id} className="bg-base-200">
                    <th>{idx + 1}</th>
                    <td>{book.title}</td>
                    <td>{book.category}</td>
                    <td>{book.isbn ?? "-"}</td>
                    <td>{book.author}</td>
                    <td>{book.year}</td>
                    <td>{book.price ?? "-"}</td>
                    <td>
                        <div className="join join-vertical lg:join-horizontal">
                            <Link
                                to={`/admin/books/detail/${book.id}`}
                                className="btn join-item btn-success"
                            >
                                Detail
                            </Link>
                            <Link
                                to={`/admin/books/edit/${book.id}`}
                                className="btn join-item btn-warning"
                            >
                                Edit
                            </Link>
                            <button className="btn join-item btn-error">
                                Delete
                            </button>
                        </div>
                    </td>
                </tr>
            ))}
        </tbody>
    );
}

export default BookTable;
