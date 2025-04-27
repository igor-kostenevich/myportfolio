export function useHelpers() {
  function cleanUrl(url: string) {
    return url
      .replace(/^https?:\/\//, '')
      .replace(/^www\./, '')
      .replace(/\/$/, '')
      .replace(/^github\.com\/.*?\//, '')
  }

  function toWebp (imgPath: string) {
    if (!imgPath) return ''
    return imgPath.replace(/\.(png|jpg|jpeg)$/i, '.webp')
  }

  return { cleanUrl, toWebp }
}
