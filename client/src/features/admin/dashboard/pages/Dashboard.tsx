import { Card } from "../components/Card/Card";

export default function Dashboard() {
    return (
        <div className="space-y-4">
            <h1 className="text-3xl font-bold">Dashboard Overview</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card text="Books" total={123} key={"book"} />
            </div>
        </div>
    );
}
