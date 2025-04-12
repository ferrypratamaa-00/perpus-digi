import { Link, useSearchParams } from "react-router";
import { useState } from "react";
import { Pagination } from "../../../../components/Pagination/Pagination";
import { Search } from "../../../../components/Search/Search";
import BookTable from "./../components/Table/Table";
import { useBooks, useDeleteBook } from "../book.service";
import { toast } from "react-toastify";

const BookShow = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const search = searchParams.get("search") ?? "";
    const [query, setQuery] = useState(search);

    const { data, isLoading } = useBooks(search);
    const {
        data: books = [],
        meta = { total: "0", page: 1, limit: 10, totalPages: 1 },
    } = data ?? {};

    const { mutate: deleteBook, status } = useDeleteBook();

    if (isLoading) return <p className="text-center mt-10">Loading...</p>;

    const handleDelete = (id: string) => {
        if (window.confirm("Are you sure you want to delete this book?")) {
            deleteBook(id, {
                onSuccess: () => {
                    toast.success("Book deleted successfully!");
                },
            });
        }
    };

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        setSearchParams({ search: query });
    };

    return (
        <>
            <div className="mb-4">
                <h1 className="text-xl font-semibold">Books</h1>
            </div>
            <div className="flex flex-row justify-between mb-4">
                <div id="action-add">
                    <Link
                        to={"/admin/books/create"}
                        className="btn btn-primary"
                    >
                        New Book
                    </Link>
                </div>
                <div id="search">
                    <Search
                        value={query}
                        onChange={setQuery}
                        onSubmit={handleSearch}
                    />
                </div>
            </div>
            <div className="mb-4">
                <BookTable
                    books={books}
                    onDelete={handleDelete}
                    isDeleting={status === "pending"}
                />
            </div>
            <div className="flex justify-end">
                <Pagination meta={meta} />
            </div>
        </>
    );
};

export default BookShow;
