import { useSearchParams } from "react-router";
import { MetaProps } from "./Pagination.types";

export const Pagination = ({ meta }: MetaProps) => {
    const { page, totalPages } = meta;
    const [searchParams, setSearchParams] = useSearchParams();

    const handlePageChange = (newPage: number) => {
        setSearchParams({
            ...Object.fromEntries(searchParams.entries()),
            page: newPage.toString(),
        });
    };

    const handlePrevious = () => {
        if (page > 1) handlePageChange(page - 1);
    };

    const handleNext = () => {
        if (page < totalPages) handlePageChange(page + 1);
    };

    return (
        <div className="flex justify-center gap-4 items-center">
            <button
                onClick={handlePrevious}
                disabled={page <= 1}
                className="btn btn-neutral"
            >
                Previous
            </button>

            <span className="page-number">{`Page ${page} of ${totalPages}`}</span>

            <button
                onClick={handleNext}
                disabled={page >= totalPages}
                className="btn btn-neutral"
            >
                Next
            </button>
        </div>
    );
};
