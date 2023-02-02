import coma from '../assets/icons/QuoteIcon.svg'

const Testimonials = () => {
  return (
    <section className=' mt-20 max-w-3xl mx-auto text-center relative'>
      <div className='z-10 left-0 right-0 block overflow-hidden h-full whitespace-nowrap relative mb-20'>
        <div className=' align-top w-full h-full whitespace-normal text-left snap-x flex overflow-x-auto gap-6 p-4'>
          <div className=' flex flex-col justify-start items-center w-full shrink-0 snap-center'>
            <p className=' mb-5 text-2xl italic text-center font-normal leading-[1.788]'>Hunter is a very professional and creative photographer. Hunter has plenty of ideas to make the pictures clear and interesting. We look forward to working with him again soon.</p>
            <div className=' flex items-center'>
              <img className=' overflow-hidden w-10 h-10 mr-2 rounded-full object-cover' src='https://assets.website-files.com/6005526df587c631c25dcda8/60097abca775f802178ba9e0_Testimonee%202.jpg' alt='' />
              <div>
                <p className=' mb-1 font-medium'>Sophia Fraser</p>
                <p className=' text-white text-[10px] text-opacity-50 font-bold tracking-widest uppercase'>R&T Housing</p>
              </div>
            </div>
          </div>
          <div className=' flex flex-col justify-start items-center w-full shrink-0 snap-center'>
            <p className=' mb-5 text-2xl italic text-center font-normal leading-[1.788]'>Hunter is a very professional and creative photographer. Hunter has plenty of ideas to make the pictures clear and interesting. We look forward to working with him again soon.</p>
            <div className=' flex items-center'>
              <img className=' overflow-hidden w-10 h-10 mr-2 rounded-full object-cover' src='https://assets.website-files.com/6005526df587c631c25dcda8/60097abca775f802178ba9e0_Testimonee%202.jpg' alt='' />
              <div>
                <p className=' mb-1 font-medium'>Sophia Fraser</p>
                <p className=' text-white text-[10px] text-opacity-50 font-bold tracking-widest uppercase'>R&T Housing</p>
              </div>
            </div>
          </div>
          <div className=' flex flex-col justify-start items-center w-full shrink-0 snap-center'>
            <p className=' mb-5 text-2xl italic text-center font-normal leading-[1.788]'>Hunter is a very professional and creative photographer. Hunter has plenty of ideas to make the pictures clear and interesting. We look forward to working with him again soon.</p>
            <div className=' flex items-center'>
              <img className=' overflow-hidden w-10 h-10 mr-2 rounded-full object-cover' src='https://assets.website-files.com/6005526df587c631c25dcda8/60097abca775f802178ba9e0_Testimonee%202.jpg' alt='' />
              <div>
                <p className=' mb-1 font-medium'>Sophia Fraser</p>
                <p className=' text-white text-[10px] text-opacity-50 font-bold tracking-widest uppercase'>R&T Housing</p>
              </div>
            </div>
          </div>
        </div>
        <div className=' mx-auto w-4/5 flex justify-evenly items-center mt-10'>
          <button className=' w-20 h-8 rounded-full bg-secondary text-primary_dark m-auto cursor-pointer text-4xl flex justify-center items-center'>
            <span class='material-symbols-outlined'>
              arrow_back_ios
            </span>
          </button>
          <button className=' w-20 h-8 rounded-full bg-secondary text-primary_dark m-auto cursor-pointer text-4xl flex justify-center items-center'>
            <span class='material-symbols-outlined'>
              arrow_forward_ios
            </span>
          </button>
        </div>
      </div>

      <img className='absolute left-auto top-0 right-0 bottom-auto w-[60px] opacity-20' src={coma} alt='coma' />
    </section>
  )
}

export default Testimonials
