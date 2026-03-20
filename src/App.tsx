import MainWrapper from "@/src/components/MainWrapper/MainWrapper"
import Cookie from "@components/Cookie/Cookie"
import Counter from "@components/Counter/Counter"
import { CookieProvider } from "@_config/context/CookieContext"

function App() {
  return (
    <CookieProvider>
      <MainWrapper>
        <Counter />
        <Cookie />
      </MainWrapper>
    </CookieProvider>
  )
}

export default App
