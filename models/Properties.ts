export interface Property {
    id: number,
    price: number,
    ownerID: number,
    purpose: string,
    referenceNumber : string,
    title: string,
    externalID:string,
    slug: string,
    rooms: number,
    baths: number,
    isVerified: boolean,
    phoneNumber: object,
    contactName: string,
    coverPhoto: {url?: string},
    agency: {
        logo: {url?: string},
    },
    state: boolean,
    area: number
}



export interface PropertyResponse {
    hits : Property[]
}