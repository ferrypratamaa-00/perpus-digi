import { Outlet } from "react-router";

function App() {
    return (
        <>
            <div className="h1">is coming..</div>
            <Outlet />
        </>
    );
}

export default App;

function Home() {
    return (
        <>
            <div className="h1">Home..</div>
        </>
    );
}

function About() {
    return (
        <>
            <div className="h1">About..</div>
        </>
    );
}

export { Home, About };
