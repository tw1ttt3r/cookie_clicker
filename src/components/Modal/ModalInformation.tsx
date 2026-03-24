import IconHandler from "@components/IconHandler/IconHandler"
import { useModalContext } from "@_config/hooks/useModalContext"
import { repo, sitedev } from "@_config/vars"
import Version from "@components/Version/Version"

function ModalInformation() {

  const { setModal, changeVisualization } = useModalContext()

  const clickHandler = () => {
    setModal('')
    changeVisualization()
  }

  return (
    <div className='p-4 flex-1 flex justify-center items-start h-auto'>
      <div className='border rounded flex flex-col items-center w-1/2 p-2 bg-gray-800/60'>
        <ul className='flex flex-col items-center text-white'>
          <li className='flex gap-1'><IconHandler icon='user' /><a target='blank' href={sitedev}>tw1ttt3r</a></li>
          <li className='flex gap-1'><IconHandler icon='code' /><a target='blank' href={repo}>Github</a></li>
          <li className='options-list-item'><IconHandler icon='rocket' className='options-icons' /><Version className='text-white' /></li>
        </ul>
        <div className='flex justify-center'>
          <button className='border-0 underline' onClick={clickHandler}>Cerrar</button>
        </div>
      </div>
    </div>
  )
}

export default ModalInformation