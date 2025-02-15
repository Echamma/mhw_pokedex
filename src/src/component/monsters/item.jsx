import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const Monster = ({ name, type, desc }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div 
            className="ability m-2 bg-[#5B355E] cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
        >
            {/* Header section */}
            <div className="flex justify-between items-center">
                <div>{name}</div>
                <div className="flex items-center">
                    <div>{type}</div>
                    {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                </div>
            </div>

            {/* Description section */}
            <div 
                className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? 'max-h-96 p-4 pt-0' : 'max-h-0'
                }`}
            >
                <div className="border-t border-white/20 pt-4">
                    {desc}
                </div>
            </div>
        </div>
    );
};

export default Monster;