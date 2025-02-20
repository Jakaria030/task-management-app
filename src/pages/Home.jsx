import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Spinner from "../components/Spinner";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const {user, signOutUser, loading} = useContext(AuthContext);
    const navigate = useNavigate();

    if(loading){
        return <Spinner></Spinner>;
    }

    const handleSignOut = async () => {
        await signOutUser();
        navigate("/");        
    };

    return (
        <section>
            Home

            <button onClick={handleSignOut} className="px-6 py-2 rounded-full bg-red-500">Sign Out</button>
        </section>
    );
};

export default Home;