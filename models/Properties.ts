export interface Property {
    id: number,
    price: number,
    ownerID: number,
    purpose: string,
    referenceNumber : string,
    title: string,
    slug: string,
    rooms: number,
    baths: number,
    isVerified: boolean,
    phoneNumber: object,
    contactName: string
}



export interface PropertyResponse {
    hits : Property[]
}