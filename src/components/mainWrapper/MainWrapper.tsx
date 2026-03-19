import type { ReactNode } from "react"
import Version from "@components/Version/Version";

type MainWrapperType = {
  children?: ReactNode
}

function MainWrapper({ children }: MainWrapperType) {
  return (
    <main className="w-dvw px-3 h-dvh rounded relative flex justify-center">
      <section
        className="mobile:min-w-130 mobile:max-w-140 tablet:min-w-160 tablet:max-w-170 desktop:max-w-270 desktop:min-w-260 xxl:max-w-300 xxl:mix-w-290 border bg-amber-600"
      >
        { children }
        <Version />
      </section>
    </main>
  )
}

export default MainWrapper;