import { useContext } from "react";
import logo from "../assets/logo.png";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

const LeftAside = ({ todo, inProgress, done }) => {
    const { signOutUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSignOut = async () => {
        await signOutUser();
        navigate("/");
    };

    // chart data
    const data = [
        { name: "To-Do", value: todo.length, color: "#FF6B6B" },
        { name: "In Progress", value: inProgress.length, color: "#60A5FA" },
        { name: "Done", value: done.length, color: "#6BCB77" }
    ];

    return (
        <aside className="w-80 bg-slate-900 text-gray-200 p-5 fixed h-full flex flex-col justify-between">
            <div className="flex items-center gap-2 border-b-2 border-slate-500 pb-2">
                <img src={logo} alt="Logo" className="size-12 rounded-full" />
                <h2 className="text-2xl font-semibold text-center">TMA</h2>
            </div>


            {/* state show here */}
            <div className="relative flex flex-col items-center">
                <PieChart width={300} height={150}>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="100%"
                        startAngle={180}
                        endAngle={0}
                        innerRadius={60}
                        outerRadius={90}
                        paddingAngle={5}
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={index} fill={entry.color} />
                        ))}
                    </Pie>
                    <Tooltip />
                </PieChart>
                <div className="flex justify-center gap-4 mt-2">
                    {data.map((entry, index) => (
                        <div key={index} className="flex items-center gap-2">
                            <div className="w-4 h-4 rounded-full" style={{ backgroundColor: entry.color }}></div>
                            <p className="text-sm font-medium">{entry.name}</p>
                        </div>
                    ))}
                </div>
            </div>

            <button onClick={handleSignOut} className="px-6 py-2 w-full font-medium rounded-md bg-red-500 hover:bg-red-600 transition-all active:scale-95">Sign Out</button>
        </aside>
    );
};

export default LeftAside;