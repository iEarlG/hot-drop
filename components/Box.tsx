
import { twMerge } from "tailwind-merge";

interface BoxProps {
    className?: string;
    children: React.ReactNode;
}

const Box: React.FC<BoxProps> = ({
    className,
    children
}) => {
    return ( 
        <div className={twMerge(`w-full h-fit rounded-lg bg-neutral-900`, className)}>
            {children}
        </div>
    );
}
 
export default Box;