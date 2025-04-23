export function useScrollTo() {
  const scrollToElement = async (elementId: string, offset = 0) => {
    await nextTick()

    const targetElement = document.getElementById(elementId)
    const header = document.querySelector('header')

    if (targetElement) {
      const headerHeight = header ? header.offsetHeight : 0
      const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY
      const offsetPosition = elementPosition - headerHeight - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }

  return { scrollToElement }
}
