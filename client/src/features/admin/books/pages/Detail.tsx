import { useParams } from "react-router";
import { useBookBySlug } from "../book.service";
import BookDetailCard from "../components/DetailCard/DetaiLCard";

const BookDetail = () => {
    const { slug } = useParams<{ slug: string }>();
    const { data: book, isLoading, isError } = useBookBySlug(slug!);

    if (isLoading) return <p className="text-center mt-10">Loading...</p>;
    if (isError || !book)
        return (
            <p className="text-center mt-10 text-red-500">Book not found.</p>
        );

    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <BookDetailCard book={book} />
        </div>
    );
};

export default BookDetail;
