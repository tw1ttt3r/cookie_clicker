import { useContext, useEffect, type ReactNode } from "react"
import Version from "@components/Version/Version"
import { CookieContext } from "@_config/context/CookieContext"
import {  useBeforeClose} from "@_config/hooks/useBeforeClose"

type MainWrapperType = {
  children?: ReactNode
}

function MainWrapper({ children }: MainWrapperType) {

  const context = useContext(CookieContext)

  if (!context) {
    throw new Error("CookieContext no está disponible");
  }

  const { loadStorage, saveStorage } = context;

  useBeforeClose(() => {
    saveStorage()
  });

  useEffect(() => {
    loadStorage()
  }, [])

  return (
    <main className="mainWrapper">
      <section
        className="mobile:min-w-20 mobile:max-w-140 tablet:min-w-160 tablet:max-w-170 desktop:max-w-270 desktop:min-w-260 xxl:max-w-300 xxl:mix-w-290 mainWrapper-2nd-level"
      >
        { children }
      </section>
      <Version />
    </main>
  )
}

export default MainWrapper;