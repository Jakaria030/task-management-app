import { useState } from "react";

const DropArea = ({onDrop}) => {
    const [showDrop, setShowDrop] = useState(false);
    
    return (
        <div 
            onDragEnter={() => setShowDrop(true)} 
            onDragLeave={() => setShowDrop(false)} 
            onDrop = {() => {
                onDrop();
                setShowDrop(false);
            }}
            onDragOver={(e) => e.preventDefault()}
            className={` ${showDrop ? 'opacity-100 py-4' : 'opacity-0'} w-full px-2 border border-dashed border-slate-500  rounded-sm`}>
            Drop Here
        </div>
    );
};

export default DropArea;