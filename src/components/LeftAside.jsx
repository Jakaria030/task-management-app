import { useContext } from "react";
import logo from "../assets/logo.png";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const LeftAside = () => {
    const { signOutUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSignOut = async () => {
        await signOutUser();
        navigate("/");
    };

    return (
        <aside className="w-80 bg-slate-900 text-gray-200 p-5 fixed h-full flex flex-col justify-between">
            <div className="flex items-center gap-2 border-b-2 border-slate-500 pb-2">
                <img src={logo} alt="Logo" className="size-12 rounded-full" />
                <h2 className="text-2xl font-semibold text-center">TMA</h2>
            </div>

            <button onClick={handleSignOut} className="px-6 py-2 w-full font-medium rounded-md bg-red-500 hover:bg-red-600 transition-all active:scale-95">Sign Out</button>
        </aside>
    );
};

export default LeftAside;