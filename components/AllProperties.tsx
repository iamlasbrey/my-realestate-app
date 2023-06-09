import SingleProperty from './SingleProperty'
import { Property } from '@/models/Properties'

interface MyPropertyProps {
  properties : Property[]
}

const PropertyEntries = ({properties}:MyPropertyProps) => {

  return (
    <div className=' grid grid-cols-1 lg:grid-cols-3 mr-8 md:mr-40 ml-8 md:ml-40 mx-auto gap-8 mb-6 lg:mb-0'>
      {
        properties.map((items)=>(
          <SingleProperty items={items} key={items.id}/>
        ))
      }
    </div>
  )
}


export default PropertyEntries