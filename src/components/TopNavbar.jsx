import { useContext } from "react";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const TopNavbar = () => {
    const { signOutUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSignOut = async () => {
        await signOutUser();
        navigate("/");
    };

    return (
        <div className="flex items-center justify-between p-4 bg-slate-900 text-white w-full sticky top-0">
            <div className="flex items-center gap-3">
                <img src={logo} alt="Logo" className="size-12 rounded-full" />
                <h2 className="text-2xl font-bold">TMA</h2>
            </div>

            <button onClick={handleSignOut} className="px-5 md:px-6 py-2 bg-red-500 hover:bg-red-600 rounded-md font-medium transition-all active:scale-95">Sign Out</button>
        </div>
    );
};

export default TopNavbar;