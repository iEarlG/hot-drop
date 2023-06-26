"use client";

import { PiPlaylistBold } from "react-icons/pi";
import { MdAdd } from "react-icons/md";

interface LibrariesProps {
    children: React.ReactNode;
}

const Libraries: React.FC<LibrariesProps> = ({
    children
}) => {
    const onClick = () => {
        
    };
    return ( 
        <div className="flex flex-col">
            <div className="flex items-center justify-between pt-4 px-5">
                <div className="inline-flex items-center gap-x-2">
                    <PiPlaylistBold size={24} className="text-neutral-400" />
                    <p className="text-neutral-400 font-medium text-base">Your Library</p>
                </div>
                <MdAdd
                    size={20}
                    onClick={onClick}
                    className="text-neutral-400 cursor-pointer hover:text-white transition"
                />
            </div>
            <div className="flex flex-col gap-y-2 mt-4 px-3">
                List of Songs!!
            </div>
        </div>
    );
}
 
export default Libraries;