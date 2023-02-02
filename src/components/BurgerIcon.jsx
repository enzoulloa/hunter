import { useRef } from 'react'

const BurgerIcon = () => {
  const line1 = useRef()
  const line2 = useRef()
  const line3 = useRef()

  const handleClick = () => {
    line1.current.classList.toggle('activeLine1')
    line2.current.classList.toggle('activeLine2')
    line3.current.classList.toggle('activeLine3')
  }

  return (
    <div onClick={handleClick} className='group w-6 h-6'>
      <span ref={line1} className=' block w-full h-[2px] bg-primary_dark transition-all duration-300 ' />
      <span ref={line2} className=' block w-full h-[2px] mt-[6px] bg-primary_dark transition duration-150  ease-in ' />
      <span ref={line3} className=' block w-full h-[2px] mt-[6px] bg-primary_dark transition duration-300 ' />
    </div>
  )
}

export default BurgerIcon
