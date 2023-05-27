export interface SingleProperty {
    purpose: string,
    price: number,
    title: string,
    description: string,
    slug: string,
    externalID:string,
    type: string,
    rooms: number,
    baths: number,
    area: number,
    isverified: boolean,
    agency: {
        logo:{
         url?: string,
     },
    },
    photos:
         {
             id:number,
             externalID:number,
             title:string,
             url:string,
             orderIndex:number,
             nimaScore:number,
         }[],
}