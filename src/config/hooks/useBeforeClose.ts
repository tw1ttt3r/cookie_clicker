import { useEffect } from "react"

export function useBeforeClose(callback: () => void) {
  useEffect(() => {
    const handleBeforeUnload = () => {
      callback();
    };

    window.addEventListener('beforeunload', handleBeforeUnload)

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload)
    };
  }, [callback])
}