import Image from 'next/image'
import Home from '@/assets/home.jpg'

const Hero = () => {
  return (
    <section className=' w-full max-w-screen-md lg:flex lg:items-center lg:justify-between lg:mx-auto md:mr-0 md:ml-0'>
    <div className=' hidden md:block md:w-3/5 '>
        <Image 
            src={Home}
            alt='hero-image'
            height={500}
            className=' w-full'
        />
      </div>
        <div className=' md:w-1/3 sm:w-11/12 px-10 md:px-0 text-center md:text-left'>
          <div>
            <p className=' text-gray-600 text-base mb-1 dark:text-slate-100'>RENT A HOME</p>
            <h2 className=' text-3xl mb-1 font-bold dark:text-sky-400'> Rental Home For Everyone</h2>
            <p className=' text-gray-600 text-base mb-2 dark:text-slate-100'>Explore Rents, Sales And Everything You Need</p>
            <button className=' dark:bg-sky-400 bg-gray-300 rounded-md px-2 py-2 font-bold dark:text-sky-700'>Explore Renting</button>
            </div>
        </div>
    </section>
  )
}

export default Hero 