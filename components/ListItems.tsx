"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

import { FaPlay } from "react-icons/fa";

interface ListItemsProps {
    image: string;
    name: string;
    href: string;
}

const ListItems: React.FC<ListItemsProps> = ({
    image,
    name,
    href
}) => {
    const router = useRouter();

    const onClick = () => {
        router.push(href);
    };

    return ( 
        <button 
            onClick={onClick}
            className="flex items-center relative group rounded-md overflow-hidden gap-x-4 pr-4 bg-neutral-100/10 hover:bg-neutral-100/20 transition"
        >
            <div className="relative min-h-[64px] min-w-[64px]">
                <Image 
                    alt="liked"
                    src={image}
                    className="object-cover"
                    fill
                />
            </div>
            <p className="font-medium py-5 truncate">{name}</p>
            <div className="absolute flex items-center justify-center rounded-full bg-teal-500 p-4 right-4 opacity-0 drop-shadow-md hover:scale-110 group-hover:opacity-100 transition">
                <FaPlay className="text-black" />
            </div>
        </button>
    );
}
 
export default ListItems;