import { FaRegTrashCan } from "react-icons/fa6";
import dragIcon from "../assets/drag.png";
import { FaRegEdit } from "react-icons/fa";

const TaskCard = ({ task, index, setActiveCard, deleteTask }) => { 
    return (
        <div draggable onDragStart={()=> setActiveCard(index)} onDragEnd={()=> setActiveCard(null)} className="relative border-2 border-slate-200 active:opacity-70 cursor-grab active:border-slate-400 transition-all bg-slate-200 rounded-md text-slate-800 p-2 sm:p-3 shadow-md">
            <img className="w-6 h-6 absolute left-0 top-1/2 -translate-y-1/2" src={dragIcon} />
            <h3 className="ml-5 text-lg font-medium">{task.title}</h3>
            <p className="ml-5">{task.description}</p>
            <div className="ml-5 flex items-center justify-between mt-2">
                <p className="text-justify">{task.date}</p>
                <p className={`${task?.category === 'To-Do' && 'bg-red-400'} ${task?.category === 'In Progress' && 'bg-blue-400'} ${task?.category === 'Done' && 'bg-green-400'} px-2 rounded-full text-white`}>{task.category}</p>
            </div>
            <div className="flex items-center justify-center gap-5">
                <FaRegEdit className="text-2xl text-blue-400 cursor-pointer" ></FaRegEdit>
                <FaRegTrashCan onClick={() => deleteTask(task._id)} className="text-2xl text-red-400 cursor-pointer" ></FaRegTrashCan>
            </div>
        </div>
    );
};

export default TaskCard;