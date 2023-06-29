import * as Dialog from "@radix-ui/react-dialog";

import { IoMdClose } from "react-icons/io";

interface ModalProps {
    isOpen: boolean;
    title: string;
    description: string;
    onChange: (open: boolean) => void;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
    isOpen,
    title,
    description,
    onChange,
    children
}) => {
    return ( 
        <Dialog.Root
            open={isOpen}
            defaultOpen={isOpen}
            onOpenChange={onChange}
        >
            <Dialog.Portal>
                <Dialog.Overlay 
                    className="bg-neutral-900/90 backdrop-blur-sm fixed inset-0"
                />
                <Dialog.Content
                    className="fixed max-h-full h-full w-full md:h-auto md:max-h-[85vh] md:w-[90vw] md:max-w-[450px] top-[50%] left-[50%] drop-shadow-md border 
                    border-neutral-700 translate-x-[-50%] translate-y-[-50%] rounded-md bg-neutral-800 p-[25px] focus:outline-none"
                >
                    <Dialog.Title className="text-xl font-bold mb-2 text-center">{title}</Dialog.Title>
                    <Dialog.Description className="mb-5 text-sm leading-normal text-center">{description}</Dialog.Description>

                    <div>
                        {children}
                    </div>
                    <Dialog.Close asChild>
                        <button className="inline-flex h-[25px] w-[25px] absolute top-[10px] right-[10px] items-center justify-center rounded-full text-neutral-400 hover:text-white appearance-none focus:outline-none">
                            <IoMdClose  />
                        </button>
                    </Dialog.Close>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
}
 
export default Modal;