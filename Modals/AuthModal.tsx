"use client";

import { useRouter } from "next/navigation";
import { useSessionContext, useSupabaseClient } from "@supabase/auth-helpers-react";
import { Auth } from "@supabase/auth-ui-react";

import Modal from "@/components/ModalContent";
import { ThemeSupa } from "@supabase/auth-ui-shared";

const AuthModal = () => {
    const supabaseClient = useSupabaseClient();
    const router = useRouter();
    const session = useSessionContext();

    return ( 
        <Modal
            title="Welcome back"
            description="Sign in to your account to continue"
            isOpen
            onChange={() => {}}
        >
            <Auth 
                theme="dark"
                supabaseClient={supabaseClient}
                providers={["google", "facebook", "github"]}
                appearance={{
                    theme: ThemeSupa,
                    variables: {
                        default: {
                            colors: {
                                brand: "#404040",
                                brandAccent: "#21c4ba",
                            }
                        }
                    }
                }}
            />
        </Modal>
    );
}
 
export default AuthModal;