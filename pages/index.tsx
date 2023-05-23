import FeaturedDiv from "@/components/FeaturedDiv";
import Hero from "@/components/Hero";
import PropertyEntries from "@/components/PropertyEntries";
import { Property, PropertyResponse } from "@/models/Properties"
import { GetServerSideProps } from 'next'
import { Roboto } from 'next/font/google'
import { useState } from "react";

const roboto = Roboto({
  weight: ['400','500', '700'],
  subsets: ['latin'],
})

interface AllPropertyProps {
      MyProperyList : Property[]
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
    props: {MyProperyList: propertiesResponse.hits}
  }
}

export default function Homepage({MyProperyList}:AllPropertyProps) {

  return (
    <main className= {roboto.className}>
      <div className=" min-h-screen w-full">
        <Hero />
        <FeaturedDiv />
        <PropertyEntries />
      </div>
    </main>
  )
}
