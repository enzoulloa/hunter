import Form from '../components/Form'
import image from '../assets/HunterHeroImage.png'

const Contact = () => {
  return (
    <section id='contact' className=' py-20 w-full px-5 max-w-[1360px] mx-auto md:py-[100px] md:px-10 lg:py-[120px] lg:px-[5%]'>
      <div className=' grid grid-cols-1 items-center content-center gap-20 lg:grid-cols-2'>
        <div className=' flex flex-col items-start'>
          <img className=' w-32 mb-5 border-secondary border-2 rounded-full' src={image} alt='Hunter' loading='lazy' />
          <h2 className=' text-4xl mb-5 font-bold md:text-[56px]'>Feel inspired?</h2>
          <p className=' max-w-xl text-white text-opacity-50 text-lg leading-loose'>Lets connect! I'd love hear about your story and how I might be able to help through photography.</p>
          <a className=' mt-10 py-4 px-10 rounded bg-secondary text-primary_dark text-sm font-extrabold tracking-widest uppercase cursor-pointer flex items-center' href='https://www.linkedin.com/in/enzo-ulloa-2639a1194/'>Email me
            <svg stroke='currentColor' fill='currentColor' stroke-width='0' viewBox='0 0 24 24' height='30' width='30' xmlns='http://www.w3.org/2000/svg'>
              <path fill='none' d='M0 0h24v24H0V0z' /><path d='M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z' />
            </svg>
          </a>
        </div>
        <Form />
      </div>
    </section>
  )
}

export default Contact
