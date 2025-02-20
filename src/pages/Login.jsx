import googleIcon from "../assets/google.png";

const Login = () => {
    return (
        <section className="bg-blue-100 w-full min-h-screen flex items-center justify-center">
            <div className="text-center p-10 bg-white shadow-xl rounded-md space-y-5">
                <div>
                    <h2 className="font-bold text-2xl">Task Management App</h2>
                    <p>Manage your tasks effortlessly.</p>
                </div>
                <button className="flex items-center gap-4 px-6 py-2 border border-slate-500 rounded-sm font-medium"> <img className="size-6" src={googleIcon} alt="Google Icon" />Continue with Google</button>
            </div>
        </section>
    );
};

export default Login;