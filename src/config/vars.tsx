import { version } from "@/package.json"

const {
  VITE_COOKIE_DATA: local_storage,
  VITE_FILENAME: filename,
  VITE_FILETYPE: filetype,
  VITE_FILE_TAG_TYPE: filetagtype,
  VITE_FILE_SUPPORT_TYPE: filesupporttype,
  VITE_FILE_TAG: filetag,
  VITE_SITE_DEV: sitedev,
  VITE_REPO: repo
} = import.meta.env

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