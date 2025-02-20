import { useContext } from "react";
import googleIcon from "../assets/google.png";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";

const Login = () => {
    const {signInWithGoogle, setUser, user, loading} = useContext(AuthContext);
    const navigate = useNavigate();

    if(loading){
        return <Spinner></Spinner>;
    }

    const handleGoogleSignIn = async() => {
        const res = await signInWithGoogle();
        setUser(res.user);
        
        // user info add to database 
        navigate("/home");
    };

    return (
        <section className="bg-slate-300 w-full min-h-screen flex items-center justify-center">
            <div className="text-center p-10 bg-slate-100 shadow-xl rounded-md space-y-5">
                <div className="text-slate-800">
                    <h2 className="font-bold text-2xl">Task Management App</h2>
                    <p>Manage your tasks effortlessly.</p>
                </div>
                
                <button onClick={handleGoogleSignIn} className="flex items-center text-white gap-4 px-6 py-2 bg-slate-800 rounded-md font-medium active:scale-95 transition-all"> <img className="size-6" src={googleIcon} alt="Google Icon" />Continue with Google</button>
            </div>
        </section>
    );
};

export default Login;