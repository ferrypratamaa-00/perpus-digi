import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App, { About, Home } from "./App.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router";

const queryClient = new QueryClient();

const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            { index: true, Component: Home },
            { path: "about", Component: About },
        ],
    },
]);
createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <RouterProvider router={router} />
        <QueryClientProvider client={queryClient}></QueryClientProvider>
    </StrictMode>
);
