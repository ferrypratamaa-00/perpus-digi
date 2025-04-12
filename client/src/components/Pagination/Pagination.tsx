import { MetaProps } from "./Pagination.types";

export const Pagination = ({ meta }: MetaProps) => {
    const { page, totalPages } = meta;

    return (
        <div className="join">
            {Array.from({ length: totalPages }, (_, i) => (
                <input
                    key={i}
                    className="join-item btn btn-square"
                    type="radio"
                    name="page"
                    aria-label={`${i + 1}`}
                    checked={page === i + 1}
                    readOnly
                />
            ))}
        </div>
    );
};
