import Work from '../components/Work'
import { image1, image2, image3 } from '../data/data'

const Works = () => {
  return (
    <section id='works' className=' bg-primary_dark py-20 w-full px-5 mx-auto  md:py-[100px] md:px-10 lg:py-[120px] lg:px-[5%]'>
      <div className=' mb-[60px] max-w-[1360px] mx-auto'>
        <h2 className=' text-[36px] leading-[42px] mb-5 font-bold md:text-[56px] md:leading-[60px]'>My Work</h2>
        <p className=' text-lg font-medium leading-8 text-white opacity-60 max-w-[600px] '>Helping businesses through photography is what makes my job meaningful. Explore some of my recent work down below.</p>
      </div>
      <div className=' grid grid-cols-1 gap-20 lg:gap-[100px] max-w-[1360px] mx-auto'>
        <Work images={image2} number='01/' title='Interior photography' category={['Real estate', 'Interior design']} />
        <Work images={image1} number='02/' title='Corporate photography' category={['Business', 'Office']} />
        <Work images={image3} number='03/' title='Real Estate' category={['Housing', 'Architecture']} />
      </div>
    </section>
  )
}

export default Works
