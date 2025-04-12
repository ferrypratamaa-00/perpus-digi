import { createBrowserRouter } from "react-router";
import Home from "../features/home/pages/Home";
import RootLayout from "../layouts/RootLayout";
import DashboardHome from "../features/admin/dashboard/pages/Dashboard";
import DashboardLayout from "../layouts/AdminLayout";
import Book from "../features/admin/books/pages/Book";
import BookCreate from "../features/admin/books/pages/Create";
import BookEdit from "../features/admin/books/pages/Edit";
import BookDetail from "../features/admin/books/pages/Detail";
import BookShow from "../features/admin/books/pages/Show";

const routes = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [
            //User Routing
            { index: true, Component: Home },

            // Admin Routing
            {
                path: "admin",
                Component: DashboardLayout,
                children: [
                    {
                        index: true,
                        Component: DashboardHome,
                    },
                    {
                        path: "dashboard",
                        Component: DashboardHome,
                    },
                    {
                        path: "books",
                        Component: Book,
                        children: [
                            {
                                index: true,
                                Component: BookShow,
                            },
                            {
                                path: "create",
                                Component: BookCreate,
                            },
                            {
                                path: "edit/:slug",
                                Component: BookEdit,
                            },
                            {
                                path: "detail/:slug",
                                Component: BookDetail,
                            },
                        ],
                    },
                ],
            },
        ],
    },
]);

export default routes;
