import { useParams, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useBookBySlug, useUpdateBook } from "../book.service";
import { Book, BookSchema } from "../book.schema";
import FormInput from "../components/FormInput/FormInput";
import FormTextArea from "../components/FormTextArea/FormTextArea";
import { useEffect } from "react";
import { toast } from "react-toastify";

const BookEdit = () => {
    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();

    const { data: book, isLoading, isError } = useBookBySlug(slug!);

    const { mutate, isPending } = useUpdateBook(book?.id || "");
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<Book>({
        resolver: zodResolver(BookSchema),
    });

    useEffect(() => {
        if (book) {
            reset(book);
        }
    }, [book, reset]);

    const onSubmit = (data: Book) => {
        mutate(data, {
            onSuccess: () => {
                toast.success("Book updated successfully!");
                navigate("/admin/books");
            },
        });
    };

    if (isLoading) return <p className="text-center">Loading book...</p>;

    if (isError) return <p className="text-center">Error loading book</p>;

    return (
        <div className="w-full mx-auto p-6">
            <h1 className="text-2xl font-semibold mb-6">Edit Book</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <FormInput
                        label="Title"
                        name="title"
                        type="text"
                        register={register}
                        errors={errors}
                    />
                    <FormInput
                        label="Category"
                        name="category"
                        type="text"
                        register={register}
                        errors={errors}
                    />
                    <FormInput
                        label="Author"
                        name="author"
                        type="text"
                        register={register}
                        errors={errors}
                    />
                    <FormInput
                        label="Publisher"
                        name="publisher"
                        type="text"
                        register={register}
                        errors={errors}
                    />
                    <FormInput
                        label="ISBN"
                        name="isbn"
                        type="text"
                        register={register}
                        errors={errors}
                    />
                    <FormInput
                        label="ISSN (Optional)"
                        name="issn"
                        type="text"
                        register={register}
                        errors={errors}
                    />
                    <FormInput
                        label="Year"
                        name="year"
                        type="text"
                        register={register}
                        errors={errors}
                    />
                    <FormInput
                        label="Price"
                        name="price"
                        type="text"
                        register={register}
                        errors={errors}
                    />
                </div>
                <FormTextArea
                    label="Description (Optional)"
                    name="description"
                    register={register}
                    errors={errors}
                />
                <button
                    type="submit"
                    className="btn btn-primary w-full"
                    disabled={isPending}
                >
                    {isPending ? "Updating..." : "Update Book"}
                </button>
            </form>
        </div>
    );
};

export default BookEdit;
