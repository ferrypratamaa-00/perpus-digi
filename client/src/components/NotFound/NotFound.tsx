import { Link } from "react-router";

const NotFound = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="text-center p-6 bg-white shadow-lg rounded-md">
                <h1 className="text-4xl font-bold text-red-600">404</h1>
                <p className="text-lg text-gray-700 mt-2">
                    Oops! Page not found.
                </p>
                <p className="text-sm text-gray-500 mt-4">
                    The page you are looking for might have been removed or is
                    temporarily unavailable.
                </p>
                <Link
                    to="/"
                    className="mt-6 inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                    Go to Home
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
