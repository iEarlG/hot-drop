import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { IconType } from "react-icons";

interface SidebarItemsProps {
    label: string;
    href: string;
    active?: boolean;
    icon: IconType;
}

const SidebarItems: React.FC<SidebarItemsProps> = ({
    label,
    href,
    active,
    icon: Icon
}) => {
    return ( 
        <Link
            href={href}
            className={twMerge(`flex flex-row w-full h-auto items-center gap-x-4 py-1 text-base font-medium cursor-pointer hover:text-white text-neutral-400 transition`,
            active && "text-white")}
        >
            <Icon size={24} />
            <p className="w-full truncate">{label}</p>
        </Link>
    );
}
 
export default SidebarItems;