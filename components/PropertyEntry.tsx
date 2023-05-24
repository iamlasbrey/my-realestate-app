import { DataProperty } from '@/models/Mydata'
import {TbDiscountCheckFilled} from 'react-icons/tb'
import {FaBed, FaBath} from 'react-icons/fa'
import {HiSquares2X2} from 'react-icons/hi2'

interface AllPropertyProps {
  property: DataProperty,
}

const PropertyEntry = ({property:{state, price, agency, rooms, baths, area, coverPhoto, slug}}:AllPropertyProps) => {
  
  return (
    <div>
      <img 
        src= {coverPhoto?.url}
        className=' w-full h-50 md:h-40 object-cover'
      />
      <div className=' shadow-lg shadow-gray-300 pt-3 pb-3 p-2 rounded-b dark:shadow-sm dark:shadow-sky-300'>
        <div className=' flex items-center justify-between'>
          <div className=' flex items-center justify-center'>
            {
              state && <TbDiscountCheckFilled className='text-green-300 mr-3'/>
            }
            <span className=' font-bold text-base'> AED {price}/monthly </span>
          </div>
          <img 
            src={agency?.logo?.url}
            className=' h-6 w-6 rounded-full'
          />
        </div>
        <div className=' flex items-center mt-2 mb-2 text-cyan-500'>
          <div className=' flex items-center border-r-cyan-500 border-r-2 mr-1 text-sm pr-3'> {rooms} <FaBed className=' ml-1'/> </div>
          <div className=' flex items-center border-r-cyan-500 border-r-2 mr-1 text-sm pr-3'> {baths} <FaBath className=' ml-1'/> </div>
          <div className=' flex items-center text-sm'> <p>{area}</p> <HiSquares2X2 className=' ml-1'/> </div>
        </div>
        <div>
          <p className=' text-sm'>
            {slug.slice(0, 30)}....
          </p>
        </div>
      </div>
    </div>
  )
}

export default PropertyEntry