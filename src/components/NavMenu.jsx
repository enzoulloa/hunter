const NavMenu = ({ active }) => {
  return (
    <div className={`  absolute top-full left-0 right-0 w-full  overflow-hidden transition ${active ? 'animate-heightAnimation' : 'animate-heightAnimationEnd'} `}>
      <div className=' top-0 right-5 min-w-[140px] left-auto bottom-auto py-[10px] rounded-bl rounded-br-[20px] bg-secondary text-primary_dark font-semibold absolute text-left h-auto flex flex-col items-start justify-start'>
        <a className=' py-[10px] relative no-underline align-top px-5 text-left block' href='#portfolio'>Portfolio</a>
        <a className=' py-[10px] relative no-underline align-to  px-5 text-left block' href='#about'>About me</a>
        <a className=' py-[10px] relative no-underline align-top px-5 text-left block' href='#clients'>Clients</a>
        <a className=' py-[10px] relative no-underline align-top px-5 text-left block' href='#contact'>Get in touch</a>
      </div>
    </div>
  )
}

export default NavMenu
