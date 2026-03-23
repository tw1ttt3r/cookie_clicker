import { createContext, useState } from "react"
import type { ReactNode } from "react"
import {
  local_storage,
  filename,
  filetype,
  filetagtype,
  filesupporttype,
  filetag
} from "@_config/vars"
import { saveAs } from "file-saver"

type CookieContextType = {
  accumulated: number,
  lastAccumulated: number,
  registerAccumulated: () => void,
  registerLastAccumulated?: () => void,
  loadStorage: () => void,
  saveStorage: () => void,
  resetStorage: () => void,
  downloadStorage: () => void,
  uploadStorage: () => void
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
    registerLastAccumulated()
  }

  const registerLastAccumulated = () => {
    setLastAccumulated(Date.now())
  }

  const loadStorage = () => {
    if(!localStorage.getItem(local_storage)) {
      return
    }
    
    const { accumulated, lastAccumulated } = 
      JSON.parse(localStorage.getItem(local_storage)!);

    setAccumulated(accumulated);
    setLastAccumulated(lastAccumulated)
  }

  const resetStorage = () => {
    setAccumulated(0)
    setLastAccumulated(0)
    dropStorage()
  }

  const dropStorage = async () => {
    localStorage.removeItem(local_storage)
  }

  const downloadStorage = async() => {
    if(!localStorage.getItem(local_storage)) {
      return
    }

    saveStorage()
    
    const blob = new Blob([JSON.stringify(JSON.parse(localStorage.getItem(local_storage)!), null, 2)], {
      type: (filetype as string),
    });
  
    saveAs(blob, (filename as string))
  }

  const uploadStorage = () => {
    const f = document.createElement(filetag)
    f.type = filetagtype
    f.accept = filesupporttype
    f.onchange = async (event: Event) => {
      const target = event.target as HTMLInputElement;
      const file = target.files?.[0];
  
      if (!file) {
        return;
      }
 
      const text = await file.text();
      const { accumulated, lastAccumulated } = JSON.parse(text);
  
      setAccumulated(accumulated)
      setLastAccumulated(lastAccumulated)

      saveStorage()
    }
    f.click()
  }

  const saveStorage = () => {
    localStorage.setItem(local_storage, JSON.stringify({ accumulated, lastAccumulated }))
  }

  return (
    <CookieContext.Provider
      value={
        {
          accumulated,
          registerAccumulated,
          lastAccumulated,
          loadStorage,
          saveStorage,
          resetStorage,
          downloadStorage,
          uploadStorage
        }
      }
    >
      {children}
    </CookieContext.Provider>
  )
}



export { CookieContext, CookieProvider }