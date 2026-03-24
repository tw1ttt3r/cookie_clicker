import MainWrapper from "@/src/components/MainWrapper/MainWrapper"
import Cookie from "@components/Cookie/Cookie"
import Counter from "@components/Counter/Counter"
import { CookieProvider } from "@_config/context/CookieContext"
import ModalShadow from "@components/ModalShadow/ModalShadow"
import { ModalShadowProvider } from "@_config/context/ModalContext"

function App() {
  return (
    <CookieProvider>
      <ModalShadowProvider>
        <ModalShadow />
        <MainWrapper>
          <Counter />
          <Cookie />
        </MainWrapper>
      </ModalShadowProvider>
    </CookieProvider>
  )
}

export default App
