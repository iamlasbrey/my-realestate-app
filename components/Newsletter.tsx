import React from 'react'

const Newsletter = () => {
  return (
    <div className=' mx-0 py-0 md:mx-40 md:py-20 mb-10 md:mb-0'>
        <h1 className=' font-bold md:text-2xl capitalize mb-2 text-center md:text-left sm:text-base'>join our newsletter for amazing deals and 20% Off</h1>
        <div className=' flex flex-col md:flex-row items-center justify-center md:items-center md:justify-between'>
            <p className=' basis-5/12 text-gray-700 dark:text-sky-400 text-center md:text-left mb-5 md:mb-0 px-3 md:px-0'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex illum vel architecto facilis natus deleniti et nobis? Similique, aperiam quo.</p>
            <div className=' basis-5/12 text-center'>
              <form action="" className=' flex items-center w-11/12 md:w-full mx-auto'>
                <input type="text" className=' rounded-l-md border-4 border-slate-500 py-1 outline-transparent w-60'/>
                <button className=' dark:bg-sky-400 dark:text-sky-700 bg-gray-300 rounded-r-md px-2 py-2 font-bold'>Subscribe</button>
              </form>
            </div>
        </div>
    </div>
  )
}

export default Newsletter