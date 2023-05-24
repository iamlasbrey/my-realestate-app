import PropertyEntry from './PropertyEntry'
import { Property } from '@/models/Properties'

interface FeaturedProps {
  propertieslist : Property[]
}

const PropertyEntries = ({propertieslist}:FeaturedProps) => {

  return (
    <div className=' grid grid-cols-1 md:grid-cols-3 lg:w-9/12 lg:mx-auto gap-8 md:ml-10 md:mr-10 ml-5 mr-5 mb-10 md:mb-0'>
      {
        propertieslist.slice(0, 6).map((property)=>(
          <PropertyEntry property={property} key={property.id}/>
        ))
      }
    </div>
  )
}


export default PropertyEntries