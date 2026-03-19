import { version } from "@_config/vars"

function Version() {
  return (
    <div className="version">
      <span className="cookieWrapper-text">v{ version }</span>
    </div>
  )
}

export default Version