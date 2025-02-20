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

                {/* three category type here */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-8">
                    {/* To-DO */}
                    <div className="bg-slate-300 shadow-lg p-5 space-y-5">
                        <h2 className="bg-slate-800 text-white py-2 rounded-md text-center text-lg font-bold">To-Do</h2>
                        <div className="space-y-5">
                            <div className="bg-slate-200 rounded-md text-slate-800 p-3 shadow-md">
                                <h3 className="text-lg font-medium">Item-1</h3>
                                <p>Lorem ipsum dolor sit amet.</p>
                                <div className="flex items-center justify-between mt-2">
                                    <p>10AM - 20/02/2025</p>
                                    <p className="bg-red-400 px-4 py-1 rounded-full text-white">To-Do</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* In Progress */}
                    <div className="bg-slate-300 shadow-lg p-5 space-y-5">
                        <h2 className="bg-slate-800 text-white py-2 rounded-md text-center text-lg font-bold">In Progress</h2>
                        <div className="space-y-5">
                            <div className="bg-slate-200 rounded-md text-slate-800 p-3 shadow-md">
                                <h3 className="text-lg font-medium">Item-1</h3>
                                <p>Lorem ipsum dolor sit amet.</p>
                                <div className="flex items-center justify-between mt-2">
                                    <p>10AM - 20/02/2025</p>
                                    <p className="bg-blue-400 px-4 py-1 rounded-full text-white">In Progress</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Done */}
                    <div className="bg-slate-300 shadow-lg p-5 space-y-5">
                        <h2 className="bg-slate-800 text-white py-2 rounded-md text-center text-lg font-bold">Done</h2>
                        <div className="space-y-5">
                            <div className="bg-slate-200 rounded-md text-slate-800 p-3 shadow-md">
                                <h3 className="text-lg font-medium">Item-1</h3>
                                <p>Lorem ipsum dolor sit amet.</p>
                                <div className="flex items-center justify-between mt-2">
                                    <p>10AM - 20/02/2025</p>
                                    <p className="bg-green-400 px-4 py-1 rounded-full text-white">Done</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </main>
        </div>
    );
};

export default Home;