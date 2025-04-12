import { Link } from "react-router";

export default function Home() {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-green-400 to-teal-500">
            <div className="text-center  p-8 text-gray-800 rounded-xl shadow-lg bg-base-100">
                <h1 className="text-4xl font-extrabold mb-6">
                    Welcome to the Book Management System
                </h1>
                <p className="text-lg mb-8">
                    Manage your books efficiently with easy CRUD operations.
                </p>

                <div className="space-x-4">
                    <Link to="/admin/books" className="btn btn-success">
                        View All Books
                    </Link>
                    <Link to="/admin/books/create" className="btn btn-primary">
                        Add New Book
                    </Link>
                    <Link to="/admin/books" className="btn btn-warning">
                        Edit Existing Book
                    </Link>
                </div>
            </div>
        </div>
    );
}
