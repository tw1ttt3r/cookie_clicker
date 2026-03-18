import type { ReactNode } from "react"

type MainWrapperType = {
  children?: ReactNode
}

function MainWrapper({ children }: MainWrapperType) {
  return (
    <main className="w-screen p-3 h-dvh rounded">
      { children }
    </main>
  )
}

export default MainWrapper;