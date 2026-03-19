import type { ReactNode } from "react"
import Version from "@components/Version/Version";

type MainWrapperType = {
  children?: ReactNode
}

function MainWrapper({ children }: MainWrapperType) {
  return (
    <main className="w-screen p-3 h-dvh rounded relative">
      { children }
      <Version />
    </main>
  )
}

export default MainWrapper;