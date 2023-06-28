"use client";

import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";

import { BiChevronRight, BiChevronLeft, BiSearch } from "react-icons/bi";
import { AiFillHome } from "react-icons/ai";
import Button from "./Button";

interface HeaderProps {
    className?: string;
    children: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({
    className,
    children
}) => {
    const router = useRouter();
    const handleLogout = () => {

    }
    return ( 
        <div className={twMerge(`h-fit bg-gradient-to-b from-teal-800 p-6`, className)}>
            <div className="flex w-full items-center justify-between mb-4">
                <div className="hidden md:flex items-center gap-x-2">
                    <button 
                        onClick={() => router.back()}
                        className="flex items-center justify-between rounded-full bg-[#000000b3] hover:opacity-75 transition"
                    >
                        <BiChevronLeft size={30} className="text-white" />
                    </button>
                    <button 
                        onClick={() => router.forward()}
                        className="flex items-center justify-between rounded-full bg-[#000000b3] hover:opacity-75 transition"
                    >
                        <BiChevronRight size={30} className="text-white" />
                    </button>
                </div>
                <div className="flex md:hidden items-center gap-x-2">
                    <button 
                        className="flex items-center justify-between rounded-full p-2 bg-white hover:opacity-75 transition"
                    >
                        <AiFillHome className="text-black" size={20} />
                    </button>
                    <button 
                        className="flex items-center justify-between rounded-full p-2 bg-white hover:opacity-75 transition"
                    >
                        <BiSearch className="text-black" size={20} />
                    </button>
                </div>
                <div className="flex items-center justify-between gap-x-4">
                    <>
                        <div>
                            <Button
                                onClick={() => {}}
                                className="bg-transparent font-medium text-neutral-300"
                            >
                                Sign up
                            </Button>
                        </div>
                        <div>
                            <Button
                                onClick={() => {}}
                                className="bg-white py-2 px-6"
                            >
                                Log in
                            </Button>
                        </div>
                    </>
                </div>
            </div>
            {children}
        </div>
    );
}
 
export default Header;