import { useEffect, useState } from 'react'

const useScrollViewport = () => {
  const [viewportTop, setViewportTop] = useState(true)
  useEffect(() => {
    const handleScroll = () => {
      if (window.visualViewport.pageTop > 0) {
        setViewportTop(false)
      } else {
        setViewportTop(true)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return viewportTop
}

export default useScrollViewport
