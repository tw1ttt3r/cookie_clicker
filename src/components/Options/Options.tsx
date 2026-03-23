import IconHandler from "@components/IconHandler/IconHandler";
import { useState } from "react"
import { cn } from "@_config/helpers/cn"
import Version from "@components/Version/Version"
import { useCookieContext } from "@_config/hooks/useCookieContext";

function Options() {

  const { resetStorage, downloadStorage, uploadStorage } = useCookieContext()

  const [ visibility, setVisibility ] = useState<boolean>(false);

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

  return (
    <div className="absolute flex flex-col justify-center right-3 top-2 z-1">
      <IconHandler icon="settings" className="hover:scale-115 cursor-pointer self-end w-3" handler={handleClic} />
      <div className={cn(
        "w-full p-1  bg-gray-400/40 rounded",
        visibility && "block",
        !visibility && "hidden"
      )}>
        <ul className="flex flex-col text-xs cursor-pointer">
          <li onClick={download} className="flex gap-1 justify-between items-center">Descargar <IconHandler icon="download" className="options-icons" /></li>
          <li onClick={upload} className="flex gap-1 justify-between items-center">Cargar <IconHandler icon="upload" className="options-icons" /></li>
          <li onClick={reset} className="flex gap-1 justify-between items-center">Limpiar datos <IconHandler icon="brushcleaning" className="options-icons" /></li>
          <li className="flex gap-1 justify-between items-center"><Version /><IconHandler icon="rocket" className="options-icons" /></li>
        </ul>
      </div>
    </div>
  )
}

export default Options