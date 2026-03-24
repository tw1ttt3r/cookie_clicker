import IconHandler from "@components/IconHandler/IconHandler"
import { useState } from "react"
import { cn } from "@_config/helpers/cn"
import { useCookieContext } from "@_config/hooks/useCookieContext"
import { useModalContext } from "@_config/hooks/useModalContext"

function Options() {

  const { resetStorage, downloadStorage, uploadStorage } = useCookieContext()
  const { changeVisualization, setModal } = useModalContext()

  const [ visibility, setVisibility ] = useState<boolean>(false)

  const handleClic = () => setVisibility(p => !p)

  const download = () => {
    downloadStorage()
    handleClic()
  }

  const upload = () => {
    uploadStorage()
    handleClic()
  }

  const reset = () => {
    resetStorage()
    handleClic()
  }

  const information = () => {
    setModal('information')
    changeVisualization()
    handleClic()
  }

  return (
    <div className='absolute flex flex-col justify-center mobile:right-4 top-4 tablet:right-4 z-1'>
      <IconHandler icon='settings' className='hover:scale-115 cursor-pointer self-end w-5' handler={handleClic} />
      <div className={cn(
        'w-full p-1  bg-gray-400/40 rounded',
        visibility && 'block',
        !visibility && 'hidden'
      )}>
        <ul className='flex flex-col text-sm cursor-pointer'>
          <li onClick={download} className='options-list-item'>Descargar <IconHandler icon='download' className='options-icons' /></li>
          <li onClick={upload} className='options-list-item'>Cargar <IconHandler icon='upload' className='options-icons' /></li>
          <li onClick={reset} className='options-list-item'>Limpiar datos <IconHandler icon='brushcleaning' className='options-icons' /></li>
          <li onClick={information} className='options-list-item'>Información <IconHandler icon='information' className='options-icons' /></li>
        </ul>
      </div>
    </div>
  )
}

export default Options