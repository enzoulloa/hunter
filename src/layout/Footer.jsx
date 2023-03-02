const Footer = () => {
  return (
    <footer className=' w-full py-10 bg-secondary'>
      <div className=' px-5 flex flex-col justify-center w-full max-w-[1360px] mx-auto items-center lg:px-[5%] lg:flex-row lg:justify-between'>
        <div className=' grid gap-3 grid-flow-col mb-5 justify-center items-center lg:mb-0'>
          <a className='flex w-10 h-10 justify-center items-center rounded-full bg-primary_dark max-w-full' target='_blank' href='https://www.twitter.com/' rel='noreferrer'><img className=' w-4' src='https://assets.website-files.com/6005526df587c631c25dcda8/602e20a93243a7620c5d11a6_Pinterest.svg' alt='Pinterest' loading='lazy' /></a>
          <a className='flex w-10 h-10 justify-center items-center rounded-full bg-primary_dark max-w-full' target='_blank' href='https://www.linkedin.com/in/enzo-ulloa-2639a1194/' rel='noreferrer'><img className=' w-4' src='https://assets.website-files.com/6005526df587c631c25dcda8/602e20a80234bd4efb382ba9_LinkedIn.svg' alt='LinkedIn' loading='lazy' /></a>
          <a className='flex w-10 h-10 justify-center items-center rounded-full bg-primary_dark max-w-full' target='_blank' href='https://www.instagram.com/' rel='noreferrer'><img className=' w-4' src='https://assets.website-files.com/6005526df587c631c25dcda8/602e20a9c46355b8607d7d11_Instagram.svg' alt='Instagram' loading='lazy' /></a>
        </div>
        <div className=' flex flex-col justify-center items-center lg:flex-row'>
          <p className=' my-1 text-primary_dark text-sm font-medium leading-8'>Designed with 🧙‍♂️ |<br className=' lg:hidden' /><a className=' my-1 no-underline text-sm font-medium' href='https://webflow.com/'>Powered by Webflow</a></p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
