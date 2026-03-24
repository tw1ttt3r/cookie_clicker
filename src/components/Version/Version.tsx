import { version } from "@_config/vars"
import { cn } from "@_config/helpers/cn"

type VersionProps = {
  className?: string
}

function Version({ className = '' }: VersionProps) {
  return (
    <div className='version'>
      <span className={cn('cookieWrapper-text', className)}>v{ version }</span>
    </div>
  )
}

export default Version