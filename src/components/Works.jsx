import Work from './Work'
import { image1, image2, image3 } from '../data/data'

const Works = () => {
  return (
    <section className=' bg-primary_dark py-20 w-full px-5 max-w-7xl mx-auto'>
      <div className=' mb-[60px] '>
        <h2 className=' text-[36px] leading-[42px] mb-5 font-bold'>My Work</h2>
        <p className=' text-lg font-medium leading-8 text-white opacity-50 max-w-[600px]'>Helping businesses through photography is what makes my job meaningful. Explore some of my recent work down below.</p>
      </div>
      <div className=' grid grid-cols-1 gap-20'>
        <Work image={image2} number='01/' title='Interior photography' category={['Real estate', 'Interior design']} />
        <Work image={image1} number='02/' title='Corporate photography' category={['Business', 'Office']} />
        <Work image={image3} number='03/' title='Real Estate' category={['Housing', 'Architecture']} />
      </div>
    </section>
  )
}

export default Works
