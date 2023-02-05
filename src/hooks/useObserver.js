import { useEffect, useState } from 'react'

const useObserver = (ref) => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new window.IntersectionObserver((entries) => {
      entries.forEach(element => {
        setVisible(element.isIntersecting)
      })
    })
    if (ref.current) {
      observer.observe(ref.current)
    }
    return () => observer.unobserve(ref.current)
  }, [])
  return visible
}

export default useObserver
