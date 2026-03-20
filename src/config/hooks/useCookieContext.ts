import { useContext } from "react";
import { CookieContext } from "@_config/context/CookieContext";

const useCookieContext = () => {
  const context = useContext(CookieContext);

  if (!context) {
    throw new Error("useCookieContext must be used within a CookieProvider");
  }

  return context;
};

export { useCookieContext }