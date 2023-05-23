import { SingleListing } from '@/Data'
import { useState } from 'react'
import {TbDiscountCheckFilled} from 'react-icons/tb'
import { FaBed, FaBath } from 'react-icons/fa'
import {HiSquares2X2} from 'react-icons/hi2'
import {RxDotFilled} from 'react-icons/rx'
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs'


export default function singleProperty() {
  const [aProperty, setAproperty] = useState(SingleListing)
  const [currentIndex, setCurrentIndex] = useState(0)

  const facilities = ["Parking", "Spacing", "Centrally", "Air Condition", "Balcony or Terrace", "Gym or Health Club"]


  const prevState=()=>{
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? aProperty.photos.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const nextState=()=>{
    const isLastSlide = currentIndex === aProperty.photos.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  const goToSlide = (slideIndex: number): void => {
    setCurrentIndex(slideIndex);
  };


    return (
    <div className=" w-full h-full px-4 md:px-0">
      <section className=' relative md:h-[450px] h-[300px] w-full md:w-7/12 m-auto '>
        <div style={{backgroundImage:(`url(${aProperty.photos[currentIndex].url})`) }} className='w-full h-full bg-center bg-cover duration-500 m-auto'>
      </div>
        <div onClick={prevState} className=' absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rouded-full p-2 bg-black/50 text-white cursor-pointer rounded-full'> <BsChevronCompactLeft size={30}/> </div>
        <div onClick={nextState} className=' absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rouded-full p-2 bg-black/50 text-white cursor-pointer rounded-full'> <BsChevronCompactRight size={30}/> </div>
        <div className=' flex top-4 justify-center py-2 cursor-pointer'>
            {
              aProperty.photos.map((slide, slideIndex)=>(
                 <div key={slideIndex} onClick={()=> goToSlide(slideIndex)}> <RxDotFilled className=' dark:text-white text-gray-800'/> </div>
              ))
            }
        </div>
    </section>
        
      <section className=' w-full md:w-7/12 mx-auto mt-8 px-4 md:px-0'>
          <div className=' flex justify-between mb-5'>
            <div>
              <div className=' flex items-center'> {aProperty.isverified && <TbDiscountCheckFilled className='text-green-300 mr-3 text-2xl'/>} <span className=' font-bold text-lg'> AED {aProperty.price} </span> </div>
              <div className=' flex items-center mt-2 mb-2 text-cyan-500'>
                <div className=' flex items-center border-r-cyan-500 border-r-2 mr-1 text-sm pr-3'> {aProperty.rooms} <FaBed className=' ml-1'/> </div>
                <div className=' flex items-center border-r-cyan-500 border-r-2 mr-1 text-sm pr-3'> {aProperty.baths} <FaBath className=' ml-1'/> </div>
                <div className=' flex items-center text-sm'> <p>{aProperty.area}</p> <HiSquares2X2 className=' ml-1'/> </div>
            </div>
            </div>
            <div>
              <img src={aProperty.agency?.logo?.url} className=' h-8 w-8 rounded-full'/>
            </div>
          </div>

          <div className=' w-full'>
            <h1 className=' font-bold text-lg mb-5'>Exclusive || Affordable Options Available</h1>
            <p className=' dark:text-white text-slate-700 mb-5'> {aProperty.description}</p>
              <div className=' flex flex-col md:flex-row items-center justify-between w-full mb-8'>
                <div className=' flex items-center  w-full md:w-1/2'> <h1 className=' mr-16 text-slate-700 text-sm dark:text-sky-500'>TYPE :</h1> <h1 className=' text-slate-700 font-bold uppercase dark:text-sky-500'>{aProperty.type}</h1></div>
                <div className=' flex items-center w-full md:w-1/2'> <h1 className=' dark:text-sky-500 mr-16 text-slate-700 text-sm'>PURPOSE :</h1> <h1 className=' dark:text-sky-500 text-slate-700 font-bold uppercase'>{aProperty.purpose}</h1></div>
              </div>

              <div className=' w-full'>
              <h1 className=' mb-3 font-bold text-slate-600 text-lg dark:text-white'>FACILITIES:</h1>
                {
                  facilities.map((facility)=>(
                    <p key={facility} className=' dark:bg-sky-200 dark:text-sky-700 font-bold text-cyan-600 uppercase text-base mb-2 p-2 bg-slate-300 inline-block mr-2'>{facility}</p>
                  ))
                }
              </div>
          </div>

      </section>


    </div>
    )
  } 