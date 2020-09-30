import defaultSettings from '@/settings'

const title = defaultSettings.title || '选型工具'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
