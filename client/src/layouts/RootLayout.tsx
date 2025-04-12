import { Outlet } from "react-router";

export default function RootLayout() {
    return (
        <div className="min-h-screen bg-base-200">
            <Outlet />
        </div>
    );
}
