import { BrushCleaning, Download, Rocket, Settings, Upload } from "lucide-react"

type IconHandlerProps = {
  icon: 'download' | 'upload' | 'settings' | 'download' | 'rocket' | 'brushcleaning',
  className?: string,
  handler?: () => void
}

const IconHandler = ({ icon, className = '', handler }: IconHandlerProps) => {

  return (
    <>
      { icon === 'settings' && <Settings className={className} onClick={handler} /> }
      { icon === 'download' && <Download className={className} /> }
      { icon === 'upload' && <Upload className={className} /> }
      { icon === 'brushcleaning' && <BrushCleaning className={className} /> }
      { icon === 'rocket' && <Rocket className={className} /> }
    </>
  )
}

export default IconHandler