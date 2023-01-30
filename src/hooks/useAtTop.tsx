import { useEffect, useState } from 'react'

export const useAtTop = ref => {
  const [atTop, setAtTop] = useState(false)

  useEffect(() => {
    function handleScroll() {
      if (!ref.current) {
        return
      }
      const { top } = ref.current.getBoundingClientRect()
      return setAtTop(top <= 2)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [ref, atTop])

  return atTop
}
