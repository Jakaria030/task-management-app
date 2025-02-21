import { useContext, useEffect, useState } from "react";
import LeftAside from "../components/LeftAside";
import Spinner from "../components/Spinner";
import TopNavbar from "../components/TopNavbar";
import { AuthContext } from "../provider/AuthProvider";
import TaskCard from "../components/TaskCard";
import axios from "axios";
import Loader from "../components/Loader";

const baseURL = import.meta.env.VITE_baseURL;

const Home = () => {
    const { user, loading } = useContext(AuthContext);
    const [isLoading, setIsLoading] = useState(false);
    const [todo, setTodo] = useState([]);
    const [inProgress, setInProgress] = useState([]);
    const [done, setDone] = useState([]);

    if (loading) {
        return <Spinner></Spinner>;
    }

    const getTasks = async () => {
        try {
            setIsLoading(true);
            const { data } = await axios.get(`${baseURL}/tasks?email=${user?.email}`);
            const categoryToDo = data.filter(task => task.category === "To-Do");
            const categoryInProgress = data.filter(task => task.category === "In Progress");
            const categoryDoone = data.filter(task => task.category === "Done");

            setTodo(categoryToDo);
            setInProgress(categoryInProgress);
            setDone(categoryDoone);
        } finally {
            setIsLoading(false);
        }
    };

    // get all task
    useEffect(() => {
        getTasks();
    }, [user?.email]);

    // add task
    const handleFormSubmit = async (e) => {
        e.preventDefault();

        try {
            setIsLoading(true);

            const email = user?.email;
            const title = e.target.title.value;
            const description = e.target.description.value;
            const dates = new Date();
            const date = `${String(dates.getDate()).padStart(2, '0')}/${String(dates.getMonth() + 1).padStart(2, '0')}/${dates.getFullYear()}`;
            const category = 'To-Do';

            const task = { email, title, description, date, category };

            const res = await axios.post(`${baseURL}/tasks`, task);
            if (res.data.acknowledged) {
                e.target.reset();
                getTasks();
                document.getElementById('close_add_modal').click();
            }
        } finally {
            setIsLoading(false);
        }

    };

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
            <main className="lg:ml-80 flex-1 p-2 sm:p-5 overflow-auto">
                {/* heading */}
                <div className="flex flex-col sm:flex-row items-center justify-between pb-4 border-b-2 border-slate-500 space-y-3 sm:space-y-0">
                    <h1 className="text-2xl text-slate-800 font-bold">Welcome, {user?.displayName}</h1>
                    <button onClick={() => document.getElementById('add_task_id').showModal()} className="px-4 md:px-6 py-2 rounded-md bg-blue-500 font-medium text-white active:scale-95 transition-all">Add Task</button>
                </div>

                {/* three category type here */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 py-5 md:py-8">
                    {/* To-DO */}
                    <div className="bg-slate-300 shadow-lg p-3 sm:p-5 space-y-5">
                        <h2 className="bg-slate-800 text-white py-2 rounded-md text-center text-lg font-bold">To-Do ({todo?.length})</h2>
                        <div className="space-y-5">
                            {/* dragable component */}
                            {
                                todo.map((task) => <TaskCard
                                    key={task._id}
                                    task={task}
                                ></TaskCard>)
                            }
                        </div>
                    </div>

                    {/* In Progress */}
                    <div className="bg-slate-300 shadow-lg p-3 sm:p-5 space-y-5">
                        <h2 className="bg-slate-800 text-white py-2 rounded-md text-center text-lg font-bold">In Progress ({inProgress?.length})</h2>
                        <div className="space-y-5">
                            {/* dragable component */}
                            {
                                inProgress.map((task) => <TaskCard
                                    key={task._id}
                                    task={task}
                                ></TaskCard>)
                            }
                        </div>
                    </div>

                    {/* Done */}
                    <div className="bg-slate-300 shadow-lg p-3 sm:p-5 space-y-5">
                        <h2 className="bg-slate-800 text-white py-2 rounded-md text-center text-lg font-bold">Done ({done?.length})</h2>
                        <div className="space-y-5">
                            {/* dragable component */}
                            {
                                done.map((task) => <TaskCard
                                    key={task._id}
                                    task={task}
                                ></TaskCard>)
                            }
                        </div>
                    </div>
                </div>

                {/* Add Modal */}
                <dialog id="add_task_id" className="modal">
                    <div className="modal-box rounded-md">
                        <form method="dialog">
                            <button id="close_add_modal" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        <div>
                            <h3 className="text-2xl text-center font-medium mb-2">Add Task Form</h3>
                            <form onSubmit={handleFormSubmit} className="space-y-3 text-center">
                                <input type="text" name="title" placeholder="Title" className="input input-bordered w-full rounded-md" required />
                                <textarea name="description" className="textarea textarea-bordered w-full rounded-md" placeholder="Bio" required></textarea>
                                <button type="submit" className="w-20 py-2 bg-blue-500 text-white font-medium rounded-md">{isLoading ? <Loader></Loader> : "ADD"}</button>
                            </form>
                        </div>
                    </div>
                </dialog>
            </main>
        </div>
    );
};

export default Home;