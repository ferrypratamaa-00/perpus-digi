import { Link, Outlet } from "react-router";

export default function DashboardLayout() {
    return (
        <div className="drawer lg:drawer-open">
            <input
                id="dashboard-drawer"
                type="checkbox"
                className="drawer-toggle"
            />
            <div className="drawer-content flex flex-col">
                <div className="w-full navbar bg-base-100 shadow px-6 md:px-6 fixed z-50">
                    <label
                        htmlFor="dashboard-drawer"
                        className="btn btn-ghost lg:hidden"
                    >
                        ☰
                    </label>
                    <div className="text-xl font-bold">Admin Panel</div>
                </div>
                <div className="p-4 md:p-6 mt-16 mb-4">
                    <Outlet />
                </div>

                <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
                    <aside>
                        <p>
                            Copyright © {new Date().getFullYear()} - Created for
                            testing purposes
                        </p>
                    </aside>
                </footer>
            </div>

            <div className="drawer-side bg-base-100">
                <label
                    htmlFor="dashboard-drawer"
                    className="drawer-overlay"
                ></label>
                <div className="flex flex-col w-full">
                    <div className="card rounded-none grid min-h-16 place-items-center">
                        <Link to={"/"} className="text-2xl font-bold">
                            Perpus Digi
                        </Link>
                    </div>
                </div>
                <div className="divider"></div>
                <ul className="menu p-4 w-64 text-base-content">
                    <li>
                        <Link to="/admin/dashboard">Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/admin/books">Books</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
