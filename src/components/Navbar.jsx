import logo from '../assets/icons/LogoIcon.svg'
import text from '../assets/icons/HunterText.svg'

const Navbar = () => {
  return (
    <nav className=' w-full flex justify-between items-center '>
      <a className=' w-[130px] h-[60px] pl-0 flex overflow-hidden justify-start items-center rounded-full bg-secondary relative cursor-pointer' href=''>
        <img className=' w-[30px] ml-[15px] max-w-full border-none' src={logo} alt='Hunter' />
        <img className=' w-[60px] left-[55px] max-w-full border-none absolute' src={text} alt='Hunter' />
      </a>

      <button className=' w-[140px] h-[60px] rounded bg-secondary text-primary_dark text-sm font-extrabold tracking-widest cursor-pointer'>
        <div className=' flex w-full h-full px-5 justify-between items-center'>
          <p className=' uppercase'>Menu</p>
          <span>icon</span>
        </div>
      </button>

    </nav>
  )
}

export default Navbar
