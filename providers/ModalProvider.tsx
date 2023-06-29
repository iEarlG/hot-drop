"use client";

import { useEffect, useState } from "react";

import AuthModal from "@/Modals/AuthModal";


const ModalProvider = () => {
  const [isMouted, setIsMouted] = useState(false);

  useEffect(() => {
    setIsMouted(true);
      
  }, []);

  if (!isMouted) {
    return null;
  }
    
  return ( 
      <>
        <AuthModal />
      </>
  );
}
 
export default ModalProvider;