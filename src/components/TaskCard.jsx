
const TaskCard = ({ task }) => { 
    return (
        <div draggable className="border-2 border-slate-200 active:border-slate-400 transition-all bg-slate-200 rounded-md text-slate-800 p-2 sm:p-3 shadow-md">
            <h3 className="text-lg font-medium">{task.title}</h3>
            <p>{task.description}</p>
            <div className="flex items-center justify-between mt-2">
                <p className="text-justify">{task.date}</p>
                <p className={`${task?.category === 'To-Do' && 'bg-red-400'} ${task?.category === 'In Progress' && 'bg-blue-400'} ${task?.category === 'Done' && 'bg-green-400'} px-4 py-1 rounded-full text-white`}>{task.category}</p>
            </div>
        </div>
    );
};

export default TaskCard;