import { version } from "@/package.json"

const local_storage = import.meta.env.VITE_COOKIE_DATA
const filename = import.meta.env.VITE_FILENAME
const filetype = import.meta.env.VITE_FILETYPE
const filetagtype = import.meta.env.VITE_FILE_TAG_TYPE
const filesupporttype = import.meta.env.VITE_FILE_SUPPORT_TYPE
const filetag = import.meta.env.VITE_FILE_TAG
const sitedev = import.meta.env.VITE_SITE_DEV
const repo = import.meta.env.VITE_REPO

export {
  version,
  local_storage,
  filename,
  filetype,
  filetagtype,
  filesupporttype,
  filetag,
  sitedev,
  repo
}