import { version } from "@_config/vars"

function Version() {
  return (
    <div className="absolute p-0.5 flex justify-center bottom-2 right-2">
      <span className="text-xs text-gray-300">v{ version }</span>
    </div>
  )
}

export default Version