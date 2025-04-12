import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router";
import routes from "./routes/routes.tsx";

const queryClient = new QueryClient();

const router = routes;

function App() {
    return (
        <>
            <QueryClientProvider client={queryClient}>
                <RouterProvider router={router} />
            </QueryClientProvider>
        </>
    );
}

export default App;
