import { useContext } from "react";
import LeftAside from "../components/LeftAside";
import Spinner from "../components/Spinner";
import TopNavbar from "../components/TopNavbar";
import { AuthContext } from "../provider/AuthProvider";

const Home = () => {
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <Spinner></Spinner>;
    }

    return (
        <div className="flex flex-col lg:flex-row min-h-screen bg-slate-300">
            {/* left sidebar */}
            <div className="hidden lg:flex">
                <LeftAside></LeftAside>
            </div>

            {/* top navbar */}
            <div className="lg:hidden">
                <TopNavbar></TopNavbar>
            </div>

            {/* maain content */}
            <main className="lg:ml-80 flex-1 p-5 overflow-auto">
                <div className="flex flex-col sm:flex-row items-center justify-between pb-4 border-b-2 border-slate-500 space-y-3 sm:space-y-0">
                    <h1 className="text-2xl text-slate-800 font-bold">Welcome, {user?.displayName}</h1>
                    <button className="px-4 md:px-6 py-2 rounded-md bg-blue-500 font-medium text-white active:scale-95 transition-all">Add Task</button>
                </div>
            </main>
        </div>


    );
};

export default Home;