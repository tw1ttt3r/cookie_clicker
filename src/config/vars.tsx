import { version } from "@/package.json"

const local_storage = import.meta.env.VITE_COOKIE_DATA

export {
  version,
  local_storage
}