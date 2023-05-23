export interface DataProperty {
    id: number,
    price: number,
    agency: {
        logo: {url?: string},
    },
    state: boolean,
    rooms: number,
    baths: number,
    area: number,
    slug: string,
    coverPhoto: {url?: string},
}



export interface Datalist {
    properties : DataProperty[]
}