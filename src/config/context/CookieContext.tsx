import { createContext, useState } from "react"
import type { ReactNode } from "react"
import { local_storage } from "@_config/vars"

type CookieContextType = {
  accumulated: number,
  lastAccumulated: number,
  registerAccumulated: () => void,
  registerLastAccumulated?: () => void,
  loadStorage: () => void,
  saveStorage: () => void
}

const CookieContext = createContext<CookieContextType | undefined>(undefined)

type CookieProviderType = {
  children?: ReactNode
}

const CookieProvider = ({ children }: CookieProviderType) => {

  const [ accumulated, setAccumulated ] = useState<number>(0)
  const [ lastAccumulated, setLastAccumulated ] = useState<number>(0)

  const registerAccumulated = () => {
    setAccumulated(prev => prev + 1)
    registerLastAccumulated();
  }

  const registerLastAccumulated = () => {
    setLastAccumulated(Date.now());
  }

  const loadStorage = () => {
    if(!localStorage.getItem(local_storage)) {
      return
    }
    
    const { accumulated, lastAccumulated } = 
      JSON.parse(localStorage.getItem(local_storage)!);

    setAccumulated(accumulated);
    setLastAccumulated(lastAccumulated);
  }

  const saveStorage = () => {
    localStorage.setItem(local_storage, JSON.stringify({ accumulated, lastAccumulated }))
  }
  return (
    <CookieContext.Provider
      value={{ accumulated, registerAccumulated, lastAccumulated, loadStorage, saveStorage }}
    >
      {children}
    </CookieContext.Provider>
  )
}



export { CookieContext, CookieProvider }