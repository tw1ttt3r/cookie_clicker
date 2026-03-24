import { useContext } from "react";
import { ModalContext } from "@_config/context/ModalContext"

const useModalContext = () => {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error("useModalContext must be used within a ModalShadowProvider")
  }

  return context;
};

export { useModalContext }