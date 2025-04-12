import { Outlet } from "react-router";

const Book = () => {
    return (
        <>
            <div className="card bg-base-100 p-4">
                <Outlet />
            </div>
        </>
    );
};

export default Book;
