export function useHelpers() {
  function cleanUrl(url: string) {
    return url
      .replace(/^https?:\/\//, '')
      .replace(/^www\./, '')
      .replace(/\/$/, '')
      .replace(/^github\.com\/.*?\//, '')
  }

  return { cleanUrl }
}
