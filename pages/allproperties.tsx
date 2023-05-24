import {AiFillCaretDown} from 'react-icons/ai'
import AllProperties from "@/components/AllProperties";
import { Property, PropertyResponse } from "@/models/Properties"
import { GetServerSideProps } from 'next'


interface AllPropertyProps {
    properties : Property[]
}


export const getServerSideProps: GetServerSideProps<AllPropertyProps>=async()=>{

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '421c9bdb77msha77d3ac0d0c0205p120d72jsn6a0b5509e991',
    'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
  }
};

const response = await fetch('https://bayut.p.rapidapi.com/properties/list?locationExternalIDs=5002%2C6020&purpose=for-rent&hitsPerPage=25&page=0&lang=en&sort=city-level-score&rentFrequency=monthly&categoryExternalID=4', options)

const propertiesResponse:PropertyResponse = await response.json()

return {
  props: {properties: propertiesResponse.hits}
}
}

export default function Properties({properties}:AllPropertyProps) {
    

    return (
        <>
        <div className=" dark:bg-gray-800 bg-gray-200 w-11/12 mx-auto md:min-w-full py-4 mb-5">
        <div className=' flex items-center justify-left md:justify-center mb-4'>
            <h1 className="  text-lg md:text-xl font-bold mr-2 dark:text-sky-500">Search Properties By Filters</h1>
                <AiFillCaretDown className=' dark:text-sky-500'/>
        </div>
      
      <div className=" w-full px-2 lg:px-0 lg:w-11/12 mx-auto">
          <div className=" flex flex-col lg:flex-row items-start lg:items-center lg:justify-between mb-4">
            <select name="" id="" className=' mb-2 lg:mb-0 dark:bg-transparent dark:text-white bg-gray-200 text-gray-900 font-semibold outline-none cursor-pointer'>
                <option value="">Purpose</option>
            </select>
            <select name="" id="" className=' mb-2 lg:mb-0 dark:bg-transparent dark:text-white bg-gray-200 text-gray-900 font-semibold outline-none cursor-pointer'>
                <option value="">Min Price(AED)</option>
            </select>
            <select name="" id="" className=' mb-2 lg:mb-0 dark:bg-transparent dark:text-white bg-gray-200 text-gray-900 font-semibold outline-none cursor-pointer'>
                <option value="" className=' dark:bg-transparent'>Max Price(AED)</option>
            </select>
            <select name="" id="" className=' mb-2 lg:mb-0 dark:bg-transparent dark:text-white bg-gray-200 text-gray-900 font-semibold outline-none cursor-pointer'>
                <option value="">Sort</option>
            </select>
            <select name="" id="" className=' mb-2 lg:mb-0 dark:bg-transparent dark:text-white bg-gray-200 text-gray-900 font-semibold outline-none cursor-pointer'>
                <option value="">Max Area(sqrt)</option>
            </select>
            <select name="" id="" className=' mb-2 lg:mb-0 dark:bg-transparent dark:text-white bg-gray-200 text-gray-900 font-semibold outline-none cursor-pointer'>
                <option value="">Baths</option>
            </select>
            <select name="" id="" className=' mb-2 lg:mb-0 dark:bg-transparent dark:text-white bg-gray-200 text-gray-900 font-semibold outline-none cursor-pointer'>
                <option value="">Rooms</option>
            </select>
            <select name="" id="" className=' mb-2 lg:mb-0 dark:bg-transparent dark:text-white bg-gray-200 text-gray-900 font-semibold outline-none cursor-pointer'>
                <option value="">Property Type</option>
            </select>
            </div>
          <div className='flex justify-start lg:justify-center'>
            <input type="text" placeholder='Search Location' className=' dark:bg-transparent dark:placeholder:text-white dark:placeholder:text-lg dark:border-b-sky-500 bg-gray-200 outline-none dark:border-b-2 p-2'/>
          </div>
      </div>
    </div>
        <div>
            <h1 className=' mr-8 ml-8 lg:mr-40 lg:ml-40 text-xl font-bold mb-2 dark:text-sky-500 text-center'>
                Properties For Sale
            </h1>
            <AllProperties properties={properties}/>
        </div>
    </>
    )
  } 