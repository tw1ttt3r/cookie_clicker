import { useContext, useEffect, type ReactNode } from "react"
import { CookieContext } from "@_config/context/CookieContext"
import { useBeforeClose} from "@_config/hooks/useBeforeClose"
import Options from "@components/Options/Options"

type MainWrapperType = {
  children?: ReactNode
}

function MainWrapper({ children }: MainWrapperType) {

  const context = useContext(CookieContext)

  if (!context) {
    throw new Error('CookieContext no está disponible')
  }

  const { loadStorage, saveStorage } = context

  useBeforeClose(() => {
    saveStorage()
  });

  useEffect(() => {
    loadStorage()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <main className='mainWrapper'>
      <section
        className='mobile:min-w-20 mobile:max-w-140 tablet:min-w-160 tablet:max-w-170 desktop:max-w-270 desktop:min-w-260 xxl:max-w-300 xxl:mix-w-290'
      >
        <Options />
        { children }
      </section>
    </main>
  )
}

export default MainWrapper;