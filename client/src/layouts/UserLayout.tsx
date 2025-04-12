import { Link, Outlet } from "react-router";

const UserLayout = () => {
    return (
        <>
            <div className="navbar bg-base-100 shadow px-4">
                <div className="flex-1">
                    <Link to="/" className="btn btn-ghost text-xl">
                        MyApp
                    </Link>
                </div>
                <div className="flex-none">
                    <Link className="btn btn-sm btn-ghost" to="/admin">
                        Admin
                    </Link>
                </div>
            </div>

            <main className="p-4">
                <Outlet />
            </main>

            <footer className="footer p-4 bg-base-300 text-base-content">
                <div>© 2025 MyApp</div>
            </footer>
        </>
    );
};

export default UserLayout;
