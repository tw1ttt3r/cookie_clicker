import { createContext, useState, type ReactNode } from "react"

type ModalContextType = {
  modalActive: boolean,
  modalSelected: string,
  changeVisualization: () => void,
  setModal: (modal: string) => void
}

const ModalContext = createContext<ModalContextType | undefined>(undefined)

type ModalContextProvideType = {
  children?: ReactNode
}

const ModalShadowProvider = ({ children }: ModalContextProvideType) => {

  const [ modalActive, setModalActive ] = useState<boolean>(false)
  const [ modalSelected, setModalSelected ] = useState<string>('')

  const changeVisualization = () => setModalActive(p => !p)

  const setModal = (m: string) => setModalSelected(m)

  return (
    <ModalContext.Provider value={{ modalActive, changeVisualization, modalSelected, setModal }}>
      { children }
    </ModalContext.Provider>
  )

}

export { ModalContext, ModalShadowProvider }

