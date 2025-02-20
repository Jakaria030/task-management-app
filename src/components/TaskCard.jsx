
const TaskCard = () => {
    return (
        <div className="border-2 border-slate-200 active:border-slate-400 transition-all bg-slate-200 rounded-md text-slate-800 p-2 sm:p-3 shadow-md">
            <h3 className="text-lg font-medium">Item-1</h3>
            <p>Lorem ipsum dolor sit amet.</p>
            <div className="flex items-center justify-between mt-2">
                <p>20/02/2025</p>
                <p className="bg-blue-400 px-4 py-1 rounded-full text-white">In Progress</p>
            </div>
        </div>
    );
};

export default TaskCard;