import { useState } from 'react'
import BurgerIcon from './BurgerIcon'
import NavMenu from './NavMenu'
import logo from '../assets/icons/LogoIcon.svg'
import text from '../assets/icons/HunterText.svg'
import useScrollViewport from '../hooks/useScrollViewport'

const Navbar = () => {
  const [isActive, setIsActive] = useState(false)
  const logoTop = useScrollViewport()

  const handleClick = () => {
    setIsActive(!isActive)
  }

  return (
    <nav className=' w-full flex justify-between items-center '>
      <a className={` w-[130px] h-[60px] pl-0 flex overflow-hidden justify-start items-center rounded-full bg-secondary relative cursor-pointer transition-all duration-300 ${logoTop ? 'w-[130px]' : 'w-[60px]'} `} href='#introduction'>
        <img className=' w-[30px] ml-[15px] max-w-full border-none' src={logo} alt='Hunter' />
        <img className={` w-[60px] left-[55px] max-w-full border-none absolute transition duration-200 ${logoTop ? 'opacity-100' : 'opacity-0'}`} src={text} alt='Hunter' />
      </a>

      <button onClick={handleClick} className={` w-[140px] h-[60px] bg-secondary text-primary_dark text-sm font-extrabold tracking-widest cursor-pointer ${isActive ? 'rounded-t' : ' rounded'} z-30`}>
        <div className=' flex w-full h-full px-5 justify-between items-center'>
          <p className=' uppercase'>Menu</p>
          <BurgerIcon toggle={isActive} />
        </div>
      </button>
      {
        isActive && <NavMenu active={isActive} />
      }
    </nav>
  )
}

export default Navbar
