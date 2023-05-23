import { HeroData } from '@/Data'
import PropertyEntry from './PropertyEntry'
import {useState} from 'react'


const PropertyEntries = () => {

  const [properties, setProperties] = useState(HeroData)

  return (
    <div className=' grid grid-cols-1 md:grid-cols-3 lg:w-9/12 lg:mx-auto gap-8 md:ml-10 md:mr-10 ml-5 mr-5 mb-10 md:mb-0'>
      {
        properties.slice(0, 7).map((items)=>(
          <PropertyEntry items={items} key={items.id}/>
        ))
      }
    </div>
  )
}


export default PropertyEntries