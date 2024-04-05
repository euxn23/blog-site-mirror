import { config } from '@/entry-repo/config'
import type { Config } from '../types'

const { SITE_NAME, SITE_URL, OGP_WORKER, OG_IMAGE_URL, DESCRIPTION, KEYWORDS, THEME } =
  config as Config

export { SITE_NAME, SITE_URL, OGP_WORKER, OG_IMAGE_URL, DESCRIPTION, KEYWORDS, THEME }
