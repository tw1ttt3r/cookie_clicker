import { createContext, useState } from "react"
import type { ReactNode } from "react"

type CookieContextType = {
  accumulated: number,
  lastAccumulated: number,
  registerAccumulated: () => void,
  registerLastAccumulated?: () => void
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

  return (
    <CookieContext.Provider
      value={{ accumulated, registerAccumulated, lastAccumulated }}
    >
      {children}
    </CookieContext.Provider>
  )
}



export { CookieContext, CookieProvider }