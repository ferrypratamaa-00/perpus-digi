import React from "react";
import { BookDetailCardProps } from "./DetailCard.types";
import { Link } from "react-router";

const BookDetailCard: React.FC<BookDetailCardProps> = ({ book }) => {
    return (
        <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
            <h2 className="text-2xl font-semibold mb-4 text-center">
                {book.title}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <p>
                        <span className="font-semibold">ID:</span> {book.id}
                    </p>
                    <p>
                        <span className="font-semibold">Category:</span>{" "}
                        {book.category}
                    </p>
                    <p>
                        <span className="font-semibold">Author:</span>{" "}
                        {book.author}
                    </p>
                    <p>
                        <span className="font-semibold">Publisher:</span>{" "}
                        {book.publisher}
                    </p>
                    <p>
                        <span className="font-semibold">Year:</span> {book.year}
                    </p>
                </div>
                <div>
                    <p>
                        <span className="font-semibold">ISBN:</span> {book.isbn}
                    </p>
                    <p>
                        <span className="font-semibold">ISSN:</span>{" "}
                        {book.issn || "-"}
                    </p>
                    <p>
                        <span className="font-semibold">Price:</span> Rp{" "}
                        {Number(book.price).toLocaleString()}
                    </p>
                </div>
            </div>
            {book.description && (
                <div className="mt-6">
                    <h3 className="text-lg font-semibold mb-2">Description</h3>
                    <p className="text-gray-700">{book.description}</p>
                </div>
            )}
            <div className="mt-6">
                <h3 className="text-lg font-semibold mb-2">Link</h3>

                <Link
                    target="_blank"
                    to={window.location.href}
                    className="text-blue-500"
                >
                    {window.location.href}
                </Link>
            </div>
        </div>
    );
};

export default BookDetailCard;
