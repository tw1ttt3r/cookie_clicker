import { useModalContext } from "@_config/hooks/useModalContext"
import { cn } from "@_config/helpers/cn"
import ModalInformation from "@Modals/ModalInformation"


function ModalShadow() {

  const { modalActive, modalSelected } = useModalContext()

  return (
    <section className={
      cn(
        'absolute top-0 left-0 h-screen w-screen bg-gray-400/70 z-3 justify-center',
        modalActive && 'flex',
        !modalActive && 'hidden'
      )
    }>
      { modalSelected === 'information' && <ModalInformation /> }
    </section>
  )
}

export default ModalShadow